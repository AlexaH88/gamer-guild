import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { joinHelper, unjoinHelper } from "../utils/utils";

const GroupDataContext = createContext();
const SetGroupDataContext = createContext();

export const useGroupData = () => useContext(GroupDataContext);
export const useSetGroupData = () => useContext(SetGroupDataContext);

export const GroupDataProvider = ({ children }) => {
  const [groupData, setGroupData] = useState({
    pageGroup: { results: [] },
    popularGroups: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleJoin = async (clickedGroup) => {
    try {
      const { data } = await axiosRes.post("/members/", {
        joined: clickedGroup.id,
      });

      setGroupData((prevState) => ({
        ...prevState,
        pageGroup: {
          results: prevState.pageGroup.results.map((group) =>
            joinHelper(group, clickedGroup, data.id)
          ),
        },
        popularGroups: {
          ...prevState.popularGroups,
          results: prevState.popularGroups.results.map((group) =>
            joinHelper(group, clickedGroup, data.id)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnjoin = async (clickedGroup) => {
    try {
      await axiosRes.delete(`/members/${clickedGroup.member_id}/`);

      setGroupData((prevState) => ({
        ...prevState,
        pageGroup: {
          results: prevState.pageGroup.results.map((group) =>
            unjoinHelper(group, clickedGroup)
          ),
        },
        popularGroups: {
          ...prevState.popularGroups,
          results: prevState.popularGroups.results.map((group) =>
            unjoinHelper(group, clickedGroup)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/groups/?ordering=-member_count"
        );
        setGroupData((prevState) => ({
          ...prevState,
          popularGroups: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <GroupDataContext.Provider value={groupData}>
      <SetGroupDataContext.Provider
        value={{ setGroupData, handleJoin, handleUnjoin }}
      >
        {children}
      </SetGroupDataContext.Provider>
    </GroupDataContext.Provider>
  );
};

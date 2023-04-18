import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./api/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PostsPage from "./pages/posts/PostsPage";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostEditForm from "./pages/posts/PostEditForm";
// import GroupsPage from "./pages/groups/GroupsPage";
// import GroupCreateForm from "./pages/groups/GroupCreateForm";
import GroupPage from "./pages/groups/GroupPage";
// import GroupEditForm from "./pages/groups/GroupEditForm";
import EventsPage from "./pages/events/EventsPage";
import EventCreateForm from "./pages/events/EventCreateForm";
import EventPage from "./pages/events/EventPage";
import EventEditForm from "./pages/events/EventEditForm";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          {/* auth */}
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          {/* profiles */}
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          {/* posts */}
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          {/* groups */}
          <Route exact path="/groups" render={() => <h1>Groups Page</h1>} />
          <Route
            exact
            path="/groups/create"
            render={() => <h1>Group Create Form</h1>}
          />
          <Route exact path="/groups/:id" render={() => <GroupPage />} />
          <Route
            exact
            path="/groups/:id/edit"
            render={() => <h1>Group Edit Form</h1>}
          />
          {/* events */}
          <Route
            exact
            path="/events"
            render={() => (
              <EventsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/events/create"
            render={() => <EventCreateForm />}
          />
          <Route exact path="/events/:id" render={() => <EventPage />} />
          <Route
            exact
            path="/events/:id/edit"
            render={() => <EventEditForm />}
          />
          {/* chat */}
          <Route exact path="/chat" render={() => <h1>Chat Page</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

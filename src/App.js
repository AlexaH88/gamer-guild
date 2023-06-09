import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./api/axiosDefaults";
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
import EventsPage from "./pages/events/EventsPage";
import EventCreateForm from "./pages/events/EventCreateForm";
import EventPage from "./pages/events/EventPage";
import EventEditForm from "./pages/events/EventEditForm";
import NotFound from "./components/NotFound";

function App() {
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
              <PostsPage message="GAME OVER! Just kidding, no results found. Adjust the search keyword." />
            )}
          />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          {/* events */}
          <Route
            exact
            path="/events"
            render={() => (
              <EventsPage message="GAME OVER! Just kidding, no results found. Adjust the search keyword." />
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
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

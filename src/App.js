import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";
import { AuthProvider } from "./components/AuthProvider";
import Layout from "./Layout/Layout";
import RequireAuth from "./components/RequiredAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/posts"
              element={
                <RequireAuth>
                  <Post />
                </RequireAuth>
              }
            />
            <Route
              path="/gallery"
              element={
                <RequireAuth>
                  <Gallery />
                </RequireAuth>
              }
            />
            <Route
              path="/todos"
              element={
                <RequireAuth>
                  <Todo />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

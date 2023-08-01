import { Navigate, Route, Routes } from "react-router-dom";
import CommentsPage from "./pages/CommentsPage";
import AboutMePage from "./pages/AboutMePage";
import PostListPage from "./pages/PostListPage";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/comments/:id" element={<CommentsPage />}></Route>
        <Route path="/aboutMe" element={<AboutMePage />}></Route>
        <Route path="/posts" element={<PostListPage />}></Route>
        <Route path="/aboutMe" element={<AboutMePage />}></Route>
        <Route path="/*" element={<Navigate to="/posts" replace />}></Route>
      </Routes>
    </>
  );
};

export default AppRoute;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NoteFoundPage from "./pages/NotFoundPage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import JobPage, { jobLoader } from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NoteFoundPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* adding nested pages with shared components: */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/* making stats page the default by index: */}
          <Route index element={<Stats />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

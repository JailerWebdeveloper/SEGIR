import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./publicRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes/>}/>
        </Routes>
    </Router>
  );
};

export default AppRoutes;

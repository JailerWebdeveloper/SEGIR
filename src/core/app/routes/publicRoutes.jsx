import { Routes, Route } from "react-router-dom";
import LayoutPublic from "../public/layout/LayoutPublic";
import Home from "../public/pages/Home";
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPublic />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>

    );

};
export default PublicRoutes;
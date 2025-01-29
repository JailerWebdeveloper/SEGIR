import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";



const LayoutPublic = () => {
    return (<>
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-auto">
                <Outlet />
            </div>

        </div>
    </>);
}

export default LayoutPublic;
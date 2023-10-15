import { Outlet } from "react-router-dom";
import Navebar from "../components/Navebar/Navebar";


const Layot = () => {
    return (
        <div>
            <div>
                <Navebar/>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layot;
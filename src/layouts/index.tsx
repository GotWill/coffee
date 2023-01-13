import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function Layouts() {
    return (
        <div>
           <Header/>
            <Outlet />
        </div>

    )
}
import React from "react";
import {Link} from "react-router-dom";
import SidebarItem from "./SidebarItem";



const SideBar = () => {
    const menus = [
        { name : "Home", path: "/" },
        { name : "Login", path: "/users/login" },
        { name : "Register", path: "/users/register" },
        { name : "myRecipe", path: "/users/myRecipe"}
    ];
    return(
        <div className="sidebar">
            {menus.map((menu, index)=> {
                return(
                    <Link to = {menu.path} key = {index}>
                        <SidebarItem
                            menu= {menu}
                        />
                    </Link>
                )
            })}
        </div>
    )

}
export default SideBar;
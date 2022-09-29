import React from "react";

const SidebarItem=(props) => {
    return(
        <div className="sidebar-item">
            <p>{props.menu.name}</p>
        </div>
    )
}

export default SidebarItem;



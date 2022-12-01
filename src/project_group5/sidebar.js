import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      class="m-0 p-0"
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
        overflow: "scroll initial"
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="users/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="users/register" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Register</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="users/myRecipe" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">MyRecipe</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/aboutUs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">AboutUs</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px"
            }}
          >
            Group 5
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

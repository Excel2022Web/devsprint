import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { useScrollPosition } from "../../hooks/useScrollPosition"

import "./Navbar.css"

function Navbar() {
  const [drawer, setDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }

  const scrollPosition = useScrollPosition()

  const navStyle = {
    background: scrollPosition > 600 ? "#8066cb" : "transparent",
    boxShadow:
      scrollPosition > 600 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
  }

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar__main container">
        <div className="nav_logo">
          <h2 className="nav_title">DEVSPRINT</h2>
        </div>
        <div className="nav_contents">
          <NavLink
            to="/#about"
            className="nav__link"
            style={({ isActive }) => ({
              color: "white",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/#highlights"
            className="nav__link"
            style={({ isActive }) => ({
              color: "white",
            })}
          >
            Highlights
          </NavLink>
          <NavLink
            to="/#partners"
            className="nav__link"
            style={({ isActive }) => ({
              color: "white",
            })}
          >
            Partner Organizations
          </NavLink>
          <NavLink
            to="/#organizations"
            className="nav__link"
            style={({ isActive }) => ({
              color: "white",
            })}
          >
            Organized by
          </NavLink>
          <NavLink
            to="/#team"
            className="nav__link"
            style={({ isActive }) => ({
              color: "white",
            })}
          >
            Contacts
          </NavLink>
        </div>

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              to="/#about"
              onClick={handleDrawerClose}
              className="navmob__link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#FFFFFF",
                fontWeight: isActive ? "800" : "600",
              })}
            >
              About
            </NavLink>
            <NavLink
              to="/#highlights"
              onClick={handleDrawerClose}
              className="navmob__link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#FFFFFF",
                fontWeight: isActive ? "800" : "600",
              })}
            >
              Highlights
            </NavLink>
            <NavLink
              to="/#partners"
              onClick={handleDrawerClose}
              className="navmob__link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#FFFFFF",
                fontWeight: isActive ? "800" : "600",
              })}
            >
              Partner Organizations
            </NavLink>
            <NavLink
              to="/#organizations"
              onClick={handleDrawerClose}
              className="navmob__link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#FFFFFF",
                fontWeight: isActive ? "800" : "600",
              })}
            >
              Organized by
            </NavLink>
            <NavLink
              to="/#team"
              onClick={handleDrawerClose}
              className="navmob__link"
              style={({ isActive }) => ({
                color: isActive ? "white" : "#FFFFFF",
                fontWeight: isActive ? "800" : "600",
              })}
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar

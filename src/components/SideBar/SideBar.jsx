import { Link } from "react-router-dom";
import "./SideBar.css";
import { sidebarData } from "./SideBarData";

function SideBar({ sidebar, sidebarclose }) {
  return (
    <nav className={sidebar ? "sidebar-menu sidebar-active" : "sidebar-menu"}>
      <i
        className="sidebar-close fas fa-times"
        onClick={() => sidebarclose(false)}
      />
      <ul className="sidebar-menu-list">
        {sidebarData.map((item, index) => {
          return (
            <li key={index} className="sidebar-menu-item">
              <a href={item.path} className="sidebar-menu-link">
                <i className={`sidebar-item-icon ${item.icon}`}></i>
                <span className="sidebar-item-title">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;

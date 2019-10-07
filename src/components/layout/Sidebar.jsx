import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";

const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__list">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>

    <div className="sidebar__projects">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
      <ul className="sidebar__projectsList">
        Projects will be here!
      </ul>
      Add Project Component Here!
    </div>
  </div>
);

export default Sidebar;

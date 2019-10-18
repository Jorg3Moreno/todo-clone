import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";

import ProjectList from "../ProjectList";
import AddProject from "../AddProject";
import { useSelectedProjectValue } from "../../context";

const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__list">
        <li
          className={active === "inbox" ? "active" : undefined}
          data-testid="inbox"
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          data-testid="today"
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          className={active === "next" ? "active" : undefined}
          data-testid="next_7"
          onClick={() => {
            setActive("next");
            setSelectedProject("NEXT");
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <ProjectList />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};

export default Sidebar;

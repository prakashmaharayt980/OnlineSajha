import { useState } from "react";
import { faList, faDatabase, faComment, faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function AdminNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 1, name: "Post", href: "post", icon: faComment },
    { id: 2, name: "List", href: "listdata", icon: faList },
    { id: 3, name: "Ads Box", href: "#ads", icon: faDatabase },
    { id: 4, name: "Logout", href: "/", icon: faPersonWalkingArrowRight },
  ];
  

  return (
    <nav
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-gradient-to-r from-blue-800 to-blue-500 text-white flex flex-col p-6 transition-all duration-300 fixed h-full z-50 shadow-lg rounded-r-xl`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className={`text-2xl font-semibold ${isSidebarOpen ? "block" : "hidden"}`}>
          Admin Panel
        </h1>
        <button
          className="text-white focus:outline-none text-2xl"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Menu Items */}
      <ul className="space-y-6">
        {menuItems.map(({ id, name, href, icon: Icon }) => (
          <li key={id}>
            <Link
              to={href}
              onClick={name === "Logout" ? () => localStorage.clear() : null}
              className="flex items-center gap-4 py-3 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-400 transition-all duration-200"
            >
              <FontAwesomeIcon icon={Icon} className="h-6 w-6 transition-all duration-300" />
              <span
                className={`${
                  isSidebarOpen ? "block" : "hidden"
                } text-lg font-medium transition-all duration-300`}
              >
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

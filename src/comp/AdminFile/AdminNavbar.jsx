import { useState } from "react";
import { faList, faDatabase, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export default function AdminNav() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 1, name: "Post", href: "post", icon: faComment },
    { id: 2, name: "List", href: "listdata", icon: faList },
    { id: 3, name: "Ads Box", href: "#ads", icon: faDatabase },
  ];


  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <nav
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-blue-900 text-white flex flex-col p-4 transition-all duration-300 fixed h-full z-50`}
      >
        <div className="flex items-center justify-between mb-6">
          <h1
            className={`text-xl font-bold ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            Admin
          </h1>
          <button
            className="text-white focus:outline-none"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>
        <ul className="space-y-4">
          {menuItems.map(({ id, name, href, icon: Icon }) => (
            <li key={id} >
              <Link
                to={href}
                className="flex items-center gap-4 py-3 px-4 rounded hover:bg-blue-700 focus:ring focus:ring-blue-400 transition-all duration-200"
              >
                <FontAwesomeIcon icon={Icon} className="h-6 w-6" />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}



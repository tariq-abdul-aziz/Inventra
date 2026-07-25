import React, { useState } from "react";
import { Bell, Search } from "lucide-react";

const Navbar = ({
  title = "Good Morning, Tariq",
  userName = "Tariq Abdul Aziz",
  userRole = "Inventrory Manager",
  avatarUrl,
  onSearch,
  showSearch = true,
  showNotifications = true,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };
  return (
    <div className="flex gap-5">
      {/* Search Bar */}
      <div className="searchBar flex items-center gap-3 sm:gap-1">
        {showSearch && (
          <form onSubmit={handleSearch} className="flex items-center gap-1">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1F2A40] w-50 sm:w-35 rounded outline-none px-3 sm:px-2 py-0.5 text-sm"
            />
            <button
              type="submit"
              className="icons"
            >
              <Search size={18} />
            </button>
        </form>
        )}
        {showNotifications && (
          <button>
            <Bell className="icons" size={18} />
          </button>
        )}
      </div>

      {/* Profile Picture with Profile Name */}
      <div className="profilePicture flex items-center gap-2 sm:gap-1">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={userName}
            className="border-2 rounded-full h-10 w-10 object-cover"
          />
        ) : (
          <div className="border-2 rounded-full h-10 w-10 object-cover flex items-center justify-center">
            {userName.charAt(0)}
          </div>
        )}
        <div className="namePost flex flex-col">
          <span className="text-md sm:text-sm">{userName}</span>
          <span className="text-xs text-gray-400">{userRole}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

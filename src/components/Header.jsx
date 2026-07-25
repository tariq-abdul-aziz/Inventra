import React, { useState } from "react";
import { Bell, Search } from "lucide-react";

const Header = ({
  title = "Dashboard",
  subtitle = "Good Morning, Tariq",
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };
  return (
    <div>
      <header className="flex flex-col flex-wrap">
        {/* Welcoome Message */}
        <h2 className="text-xl sm:text-base md:text-lg">{title}</h2>
        <h1 className="text-3xl sm:text-lg md:text-xl">{subtitle}</h1>
      </header>
    </div>
  );
};

export default Header;

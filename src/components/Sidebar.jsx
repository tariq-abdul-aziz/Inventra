import React, { useState } from "react";
import {
  LayoutDashboard,
  Box,
  Handbag,
  Users,
  FileText,
  Settings,
  ShieldQuestionMark,
  SquareArrowRightExit,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/*Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-3 left-1 z-50 p-2 bg-slate-900 text-white rounded border border-blue-950"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className={`flex flex-col justify-between h-full max-w-fit border-r border-blue-950 px-3 bg-slate-950 transition-transform duration-300 z-40 fixed md:relative top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="upper flex flex-col items-center gap-5 mt-20">
          <span className="uppercase">inventra</span>
          <LayoutDashboard className="icons" />
          <Box className="icons" />
          <Handbag className="icons" />
          <Users className="icons" />
          <FileText className="icons" />
          <Settings className="icons" />
        </div>

        <div className="lower flex flex-col items-center gap-5 mb-5">
          <ShieldQuestionMark className="icons" />
          <SquareArrowRightExit className="icons" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

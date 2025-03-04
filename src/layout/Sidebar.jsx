import { X} from "lucide-react";
import React, { useState } from "react";
import { useThemeContext } from "../context/ThemeContextProvider";

const Sidebar = ({contents,close}) => {
const {theme}=useThemeContext();
  
  const [sidebarContent, setSidebarContent] = useState(contents);
  return (
    <div data-theme={theme} className="fixed left-0 top-0 w-3/4 md:w-1/2 lg:w-1/4 h-screen bg-background-primary text-primary z-50 overflow-y-auto border-r-2 border-primary">
      <div className="flex flex-row justify-between">
        <div>
          <img className="w-12 h-12 rounded-full" src="https://google.com" alt="img" />
        </div>
        <div onClick={()=>{close()}} className="m-2 p-2 bg-red-500 text-white rounded-lg cursor-pointer">
           <X size={32}/>
        </div>
      </div>
      <div className="">
        {sidebarContent?.map((e) => {
          return (
            <div className="hover:bg-background-secondry pl-12 p-1 text-xl cursor-pointer">
              {e.ele}
            </div>
          );
        })}
      </div>

      {/* <ul>
        <li>Home</li>
        <li>Home</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;

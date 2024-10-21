import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-18 bg-[#0F0F0F] text-white">
      <ul className=" flex flex-col justify-between p-4 items-center h-full">
        <div>
          <li className=" mb-2">
            <div className=" flex items-center">
              <FaHome className="mr-2 mb-3" size={18} />
            </div>
          </li>
          <li className=" mb-2">
            <div className=" flex items-center">
              <FaUser className="mr-2 mb-3" size={18} />
            </div>
          </li>
          <li className=" mb-2">
            <div className=" flex items-center">
              <FaSearch className="mr-2 mb-3" size={18} />
            </div>
          </li>
        </div>

        <div>
          <li>
            <IoMdSettings size={18} />
            <FaUser className=" mt-5" size={18} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;

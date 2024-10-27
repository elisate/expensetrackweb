
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosList } from "react-icons/io";


function NavPart() {


  return (
    <div className="flex flex-row gap-1 items-center bg-gray-100 h-20 sm:ml-48 ml-0 fixed border-b border-gray-600 w-full sm:w-[85%] sm:pr-8 pr-4">
      {/* Empty space to push items to the right */}
      <div className="flex-grow"></div>

      {/* Notification Icon */}
      <div className="relative mx-2 text-xl text-gray-700">
        <IoMdNotificationsOutline />
        <span className="absolute top-[-7px] right-[-5px] bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">
          3
        </span>
      </div>

      

      {/* List Icon */}
      <div className="relative mx-2 text-xl text-gray-700">
        <IoIosList />
      </div>

      {/* Profile Picture */}
      <div className="profile">
        <img
          className="w-10 h-10 rounded-full"
          src="profile.png"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default NavPart;

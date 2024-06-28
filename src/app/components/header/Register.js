import { HiOutlineUserAdd } from "react-icons/hi"; // Importing Heroicons icon

export function Register() {
  return (
    <div>
      <button className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <HiOutlineUserAdd className="w-5 h-5 text-white" />
        </div>
        <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Register
        </div>
      </button>
    </div>
  );
}

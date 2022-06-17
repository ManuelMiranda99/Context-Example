import { useUserContext } from "../../../shared/context/UserContext/UserContext";
import ToggleTheme from "../../atoms/ToggleTheme/ToggleTheme";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  return (
    <div className="min-h-full">
      <div className="bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <ToggleTheme />
            </div>
            <div className="flex items-center ml-6 text-white">
              {user && <h3 data-testid="userNameNav">{user}</h3>}
              <button onClick={() => setUser("")}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

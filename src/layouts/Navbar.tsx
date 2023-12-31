import { Link, useNavigate } from "react-router-dom";
import { resetUser } from "../redux/feature/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(resetUser());
    navigate("/auth/#login");
  };
  // linear-gradient(#141e30, #243b55)
  return (
    <div className="flex  items-center p-5  text-black border-b-2 border-purple-600">
      <Link
        to="/"
        className="w-[40%] font-bold cursor-pointer tracking-widest text-2xl">
        Book <span className="text-purple-700">Guru</span>
      </Link>
      <div className="flex flex-grow space-x-2 items-center justify-between">
        <ul className="flex items-end  space-x-5">
          <li className="text-lg font-medium">
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/all-books">All Books</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/add-new-book">Add New</Link>
            </button>
          </li>
        </ul>
        <div
          className="cursor-pointer bg-red-600 px-8 py-3 rounded-md text-white font-bold"
          onClick={handleLogout}>
          {user.email ? "Log Out" : "Log In"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

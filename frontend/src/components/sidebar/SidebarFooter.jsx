import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const SidebarFooter = () => {
  const { loading, logout } = useLogout();
  const navigate = useNavigate();
  return (
    <div className="mt-auto flex justify-between">
      <div className="btn btn-circle bg-sky-500 ">
        {!loading ? (
          <BiLogOut
            className="text-white w-6 h-6 cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
      <button
        className="btn bg-sky-500 text-white px-5 py-2 rounded-xl"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};
export default SidebarFooter;

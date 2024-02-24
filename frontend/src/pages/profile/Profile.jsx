import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../zustand/useStore";
import toast from "react-hot-toast";
import useGetUser from "../../hooks/useGetUser";
import axios from "axios";

const Profile = () => {
  const { authUser } = useStore();
  const navigate = useNavigate();
  const { user } = useGetUser();
  const [edit, setEdit] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    setProfilePic(user.profilePic);
    setFullName(user?.fullName);
    setUsername(user?.username);
    setGender(user?.gender);
  }, [user]);

  const handleUpdate = async () => {
    const temp = {
      fullName,
      username,
      gender,
    };
    axios
      .put(`/api/users/update/${authUser._id}`, temp)
      .then(() => {
        toast.success("Profile updated Successfully");
        setEdit(false);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="flex flex-col gap-16 items-center lg:w-10/12 h-full sm:h-4/6 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="w-full flex justify-between p-3">
        <button className="bg-sky-500 w-fit h-fit p-3 rounded-full">
          <FaArrowLeft
            className="text-2xl bg-sky-500  rounded-full text-white cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </button>
        <div className="flex gap-5 justify-end">
          {!edit ? (
            <button
              className="bg-sky-500 text-white px-4 py-2 rounded-xl"
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="bg-sky-500 text-white px-4 py-2 rounded-xl"
                onClick={() => {
                  setEdit(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-sky-500 text-white px-4 py-2 rounded-xl"
                onClick={() => {
                  handleUpdate();
                }}
              >
                Update
              </button>
            </>
          )}
        </div>
      </div>
      <div className="w-fit flex flex-col justify-between items-center gap-10">
        <img src={`${profilePic}`} className="w-[100px] h-[100px]" />
        <div className="w-full flex gap-4">
          <h1 className="text-white text-lg ">
            Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </h1>
          {!edit ? (
            <h1 className="text-white text-xl">{fullName}</h1>
          ) : (
            <input
              type="text"
              className="bg-white outline-none text-black text-center font-semibold"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          )}
        </div>
        <div className="w-full flex gap-4">
          <h1 className="text-white text-lg">Username&nbsp;:</h1>
          {!edit ? (
            <h1 className="text-white text-xl">{username}</h1>
          ) : (
            <input
              type="text"
              className="bg-white outline-none text-black text-center font-semibold"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          )}
        </div>

        <div className="w-full flex gap-4">
          <h1 className="text-white text-lg">
            Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </h1>
          {!edit ? (
            <h1 className="text-white text-xl">{gender}</h1>
          ) : (
            <input
              type="text"
              className="bg-white outline-none text-black text-center font-semibold"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useEffect, useState } from "react";
import useStore from "../zustand/useStore";
import toast from "react-hot-toast";
import axios from "axios";

const useGetUser = () => {
  const { authUser } = useStore();
  //   console.log(authUser._id);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      axios
        .get(`/api/users/${authUser._id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getUser();
  }, []);
  return { loading, user };
};

export default useGetUser;

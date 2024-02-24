import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { fullName, username, gender, profilePic } = user;
    res.status(200).json({
      fullName,
      username,
      gender,
      profilePic,
    });
  } catch (error) {
    console.error("Error in getUser: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, username, gender } = req.body;
    const updatedUser = {
      fullName,
      username,
      gender,
    };
    const user = await User.findByIdAndUpdate(id, updatedUser);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in updateUser: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

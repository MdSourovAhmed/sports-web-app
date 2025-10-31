// const User = require('../models/User');

// // ✅ GET /api/user/profile  → Fetch logged-in user profile
// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error fetching profile' });
//   }
// };

// // ✅ PUT /api/user/profile  → Update user profile
// exports.updateProfile = async (req, res) => {
//   try {
//     const updates = {
//       name: req.body.name||"",
//       email: req.body.email||"",
//       phone: req.body.phone||"",
//       address: req.body.address||"",
//       profileImage: req.body.profileImage||"", // base64 or Cloudinary URL
//     };

//     const user = await User.findByIdAndUpdate(req.user._id, updates, {
//       new: true,
//     }).select('-password');

//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ message: 'Profile updated successfully', user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error updating profile' });
//   }
// };

const User = require("../models/User");
// const cloudinary = require("cloudinary").v2;

const cloudinary = require("../config/cloudinary");

//  cloudinary.config();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// ✅ GET /api/user/profile → Fetch logged-in user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

// ✅ PUT /api/user/profile → Update user profile
exports.updateProfile = async (req, res) => {
  try {

    let profileImageUrl = req.body.profileImage;

    // If profileImage is a base64 string, upload to Cloudinary
    if (profileImageUrl && profileImageUrl.startsWith("data:image")) {
      const uploadResponse = await cloudinary.uploader.upload(profileImageUrl, {
        folder: "user_profiles", // optional folder
        width: 500,
        height: 500,
        crop: "fill",
      });
      profileImageUrl = uploadResponse.secure_url;
    }

    const updates = {
      name: req.body.name || "",
      email: req.body.email || "",
      phone: req.body.phone || "",
      address: req.body.address || "",
      profileImage: profileImageUrl || "",
    };

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
    }).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Profile updated successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating profile" });
  }
};

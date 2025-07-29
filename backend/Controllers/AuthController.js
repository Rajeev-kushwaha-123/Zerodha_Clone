const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// ---------------- Signup ----------------
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false
      });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // 🔐 Required for Render / HTTPS
      sameSite: "None", // 🔁 Enables cross-site cookies
      maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

// ---------------- Login ----------------
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 3 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

// ---------------- Logout ----------------
module.exports.Logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "None"
    });
    res.status(200).json({
      message: "User logged out successfully",
      success: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};


// const User = require("../model/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");

// module.exports.Signup = async (req, res, next) => {
//   try {
//     const { email, password, username, createdAt } = req.body;
    
//     // Validate input
//     if (!email || !password || !username) {
//       return res.status(400).json({ 
//         message: "All fields are required", 
//         success: false 
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ 
//         message: "User already exists", 
//         success: false 
//       });
//     }

//     const user = await User.create({ email, password, username, createdAt });
//     const token = createSecretToken(user._id);
    
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict"
//     });
    
//     res.status(201).json({ 
//       message: "User signed up successfully", 
//       success: true, 
//       user: {
//         id: user._id,
//         email: user.email,
//         username: user.username
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       message: "Internal server error", 
//       success: false 
//     });
//   }
// };

// module.exports.Login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
    
//     if (!email || !password) {
//       return res.status(400).json({
//         message: 'All fields are required',
//         success: false
//       });
//     }
    
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         message: 'Incorrect email or password',
//         success: false
//       });
//     }
    
//     const auth = await bcrypt.compare(password, user.password);
//     if (!auth) {
//       return res.status(401).json({
//         message: 'Incorrect email or password',
//         success: false
//       });
//     }
    
//     const token = createSecretToken(user._id);
//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict"
//     });
    
//     res.status(200).json({ 
//       message: "User logged in successfully", 
//       success: true,
//       user: {
//         id: user._id,
//         email: user.email,
//         username: user.username
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       message: "Internal server error", 
//       success: false 
//     });
//   }
// };

// module.exports.Logout = async (req, res) => {
//   try {
//     res.cookie("token", "", {
//       httpOnly: true,
//       expires: new Date(0),
//     });
//     res.status(200).json({ 
//       message: "User logged out successfully", 
//       success: true 
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       message: "Internal server error", 
//       success: false 
//     });
//   }
// };

// import jwt from "jsonwebtoken";

// export const generateToken = (payload, expiresIn = "7d") => {
//   if (!process.env.JWT_SECRET) {
//     throw new Error("JWT_SECRET is not defined in environment variables");
//   }
//   return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
// };


import jwt from "jsonwebtoken";
export const generateToken = (payload, expiresIn = "7d") => {
  // Validate environment variable
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  // Validate payload
  if (!payload || typeof payload !== "object") {
    throw new Error("Invalid token payload: must be a non-empty object");
  }

  // Additional security options
  const options = {
    expiresIn,
    algorithm: "HS256", // Explicitly specify algorithm
    issuer: "job-portal-api", // Identify token issuer
  };

  try {
    return jwt.sign(payload, process.env.JWT_SECRET, options);
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Failed to generate authentication token");
  }
};

/**
 * Generates a token specifically for employer users
 * @param {Object} user - Employer user object
 * @returns {string} Generated JWT token
 */
export const generateEmployerToken = (user) => {
  if (!user || !user._id || !user.email) {
    throw new Error("Invalid employer user data");
  }

    const payload = {
    _id: user._id,
    email: user.email,
    role: user.role || "employer", // ✅ Ensure role is added here
  };

  return generateToken(payload, "30d"); // Longer expiration for employers
};

/**
 * Verifies a JWT token with enhanced error handling
 * @param {string} token - JWT token to verify
 * @returns {Object} Decoded token payload
 * @throws {Error} If verification fails
 */
export const verifyToken = (token) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  if (!token) {
    throw new Error("No token provided");
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"], // Only accept HS256 algorithm
      issuer: "job-portal-api", // Verify issuer
    });
  } catch (error) {
    console.error("Token verification error:", error);
    throw new Error("Invalid or expired token");
  }
};


















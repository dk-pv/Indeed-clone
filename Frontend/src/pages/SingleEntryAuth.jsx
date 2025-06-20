// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { GoogleLogin } from "@react-oauth/google";
// // import axios from "axios";

// // const SingleEntryAuth = () => {
// //   const [email, setEmail] = useState("");
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [otp, setOtp] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const navigate = useNavigate();

// //   const isEmail = (input) => /\S+@\S+\.\S+/.test(input);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setIsLoading(true);

// //     try {
// //       if (!isEmail(email)) {
// //         setError("Enter a valid email address");
// //         return;
// //       }

// //       const role = localStorage.getItem("userRole");

// //       const res = await axios.post("http://localhost:9999/api/auth/send-otp", {
// //         email,
// //         role,
// //       });

// //       setOtpSent(true);
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to send OTP");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleVerifyOtp = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError("");

// //     try {
// //       const res = await axios.post("http://localhost:9999/api/auth/verify-otp", {
// //         email,
// //         otp,
// //       });

// //       const { token, user } = res.data;

// //       if (token && user) {
// //         localStorage.setItem("token", token);
// //         localStorage.setItem("user", JSON.stringify(user));
// //         localStorage.removeItem("userRole");

// //         alert("OTP Verified. Logged in!");
// //         navigate("/");
// //       } else {
// //         setError("Invalid response from server");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError("Invalid OTP or server error");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleGoogleSuccess = async (credentialResponse) => {
// //     try {
// //       const role = localStorage.getItem("userRole");
// //       const token = credentialResponse?.credential;

// //       if (!token) {
// //         alert("Google token missing");
// //         return;
// //       }

// //       const res = await axios.post("http://localhost:9999/api/auth/google-login", {
// //         token,
// //         role,
// //       });

// //       const { token: jwtToken, user } = res.data;

// //       if (jwtToken && user) {
// //         localStorage.setItem("token", jwtToken);
// //         localStorage.setItem("user", JSON.stringify(user));
// //         localStorage.removeItem("userRole");

// //         alert("Google Login Success");
// //         navigate("/");
// //       } else {
// //         alert("Invalid response from server");
// //       }
// //     } catch (err) {
// //       console.error(err.response?.data || err.message);
// //       alert("Google Login Failed");
// //     }
// //   };

// //   const handleGoogleError = () => {
// //     alert("Google Login Failed");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
// //       <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
// //         <div className="text-center mb-8">
// //           <Link to="/">
// //             <img
// //               src="https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo-500x281.jpg"
// //               alt="Indeed"
// //               className="h-8 mx-auto"
// //             />
// //           </Link>
// //         </div>

// //         <div className="text-center mb-6">
// //           <h2 className="text-2xl font-normal text-gray-900 mb-2">
// //             Ready to take the next step?
// //           </h2>
// //           <p className="text-gray-600 text-base">Sign in or create an account.</p>
// //         </div>

// //         <div className="text-sm text-gray-600 mb-6 leading-relaxed">
// //           By continuing, you agree to Indeed's{" "}
// //           <Link to="/terms" className="text-blue-600 hover:underline">
// //             Terms
// //           </Link>
// //           ,{" "}
// //           <Link to="/cookie-policy" className="text-blue-600 hover:underline">
// //             Cookie
// //           </Link>
// //           , and{" "}
// //           <Link to="/privacy-policy" className="text-blue-600 hover:underline">
// //             Privacy
// //           </Link>{" "}
// //           policies.
// //         </div>

// //         <div className="mb-6 flex justify-center">
// //           <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
// //         </div>

// //         <div className="relative my-6">
// //           <div className="absolute inset-0 flex items-center">
// //             <div className="w-full border-t border-gray-300"></div>
// //           </div>
// //           <div className="relative flex justify-center text-sm">
// //             <span className="px-2 bg-white text-gray-500">or</span>
// //           </div>
// //         </div>

// //         {!otpSent ? (
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-900 mb-2"
// //               >
// //                 Email <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="you@example.com"
// //                 className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
// //               />
// //               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-600 text-white py-3 rounded-md"
// //               disabled={isLoading}
// //             >
// //               {isLoading ? "Sending OTP..." : "Continue with Email"}
// //             </button>
// //           </form>
// //         ) : (
// //           <form onSubmit={handleVerifyOtp} className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="otp"
// //                 className="block text-sm font-medium text-gray-900 mb-2"
// //               >
// //                 Enter OTP
// //               </label>
// //               <input
// //                 type="text"
// //                 id="otp"
// //                 value={otp}
// //                 onChange={(e) => setOtp(e.target.value)}
// //                 className="w-full px-3 py-3 border border-gray-300 rounded-md"
// //               />
// //               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full bg-green-600 text-white py-3 rounded-md"
// //               disabled={isLoading}
// //             >
// //               {isLoading ? "Verifying..." : "Verify OTP"}
// //             </button>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SingleEntryAuth;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import useAlert from "../hooks/useAlert";
// import AlertMessage from "../components/common/AlertMessage";

// const SingleEntryAuth = () => {
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();
// const { alert, showAlert, hideAlert } = useAlert();

//   const isEmail = (input) => /\S+@\S+\.\S+/.test(input);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     try {
//       if (!isEmail(email)) {
//         setError("Enter a valid email address");
//         return;
//       }

//       const role = localStorage.getItem("userRole");

//       const res = await axios.post("http://localhost:9999/api/auth/send-otp", {
//         email,
//         role,
//       });

//       setOtpSent(true);
//       showAlert("success", "OTP sent to your email");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to send OTP");
//       showAlert("error", err?.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:9999/api/auth/verify-otp", {
//         email,
//         otp,
//       });

//       const { token, user } = res.data;

//       if (token && user) {
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));
//         localStorage.removeItem("userRole");

//         showAlert("success", "OTP Verified. Logged in!");
//         setTimeout(() => navigate("/"), 1000);
//       } else {
//         setError("Invalid response from server");
//         showAlert("error", "Invalid response from server");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Invalid OTP or server error");
//       showAlert("error", err?.response?.data?.message || "OTP verification failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleSuccess = async (credentialResponse) => {
//     try {
//       const role = localStorage.getItem("userRole");
//       const token = credentialResponse?.credential;

//       if (!token) {
//         showAlert("error", "Google token missing");
//         return;
//       }

//       const res = await axios.post("http://localhost:9999/api/auth/google-login", {
//         token,
//         role,
//       });

//       const { token: jwtToken, user } = res.data;

//       if (jwtToken && user) {
//         localStorage.setItem("token", jwtToken);
//         localStorage.setItem("user", JSON.stringify(user));
//         localStorage.removeItem("userRole");

//         showAlert("success", "Google login successful");
//         setTimeout(() => navigate("/"), 1000);
//       } else {
//         showAlert("error", "Invalid response from server");
//       }
//     } catch (err) {
//       console.error(err?.response?.data || err.message);
//       showAlert("error", "Google login failed");
//     }
//   };

//   const handleGoogleError = () => {
//     showAlert("error", "Google login failed");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//         <div className="text-center mb-8">
//           <Link to="/">
//             <img
//               src="https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo-500x281.jpg"
//               alt="Indeed"
//               className="h-8 mx-auto"
//             />
//           </Link>
//         </div>

//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-normal text-gray-900 mb-2">
//             Ready to take the next step?
//           </h2>
//           <p className="text-gray-600 text-base">Sign in or create an account.</p>
//         </div>

//         <div className="text-sm text-gray-600 mb-6 leading-relaxed">
//           By continuing, you agree to Indeed's{" "}
//           <Link to="/terms" className="text-blue-600 hover:underline">Terms</Link>,{" "}
//           <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie</Link>, and{" "}
//           <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy</Link> policies.
//         </div>

//         {/* ✅ Alert Message shown here */}
//         {alert && (
//           <AlertMessage
//             type={alert.type}
//             message={alert.message}
//             onClose={hideAlert}
//           />
//         )}

//         <div className="mb-6 flex justify-center">
//           <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
//         </div>

//         <div className="relative my-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">or</span>
//           </div>
//         </div>

//         {!otpSent ? (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               />
//               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-md"
//               disabled={isLoading}
//             >
//               {isLoading ? "Sending OTP..." : "Continue with Email"}
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleVerifyOtp} className="space-y-4">
//             <div>
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-900 mb-2">
//                 Enter OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 className="w-full px-3 py-3 border border-gray-300 rounded-md"
//               />
//               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-md"
//               disabled={isLoading}
//             >
//               {isLoading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleEntryAuth;





import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import useAlert from "../hooks/useAlert";
import AlertMessage from "../components/common/AlertMessage";

const SingleEntryAuth = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const otpRefs = useRef([]);
  const navigate = useNavigate();
  const { alert, showAlert, hideAlert } = useAlert();

  const isEmail = (input) => /\S+@\S+\.\S+/.test(input);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!isEmail(email)) {
        setError("Enter a valid email address");
        return;
      }

      const role = localStorage.getItem("userRole");

      const res = await axios.post("http://localhost:9999/api/auth/send-otp", {
        email,
        role,
      });

      setOtpSent(true);
      showAlert("success", "OTP sent to your email");
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP");
      showAlert("error", err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:9999/api/auth/verify-otp", {
        email,
        otp: otp.join(""),
      });

      const { token, user } = res.data;

      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.removeItem("userRole");

        showAlert("success", "OTP Verified. Logged in!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setError("Invalid response from server");
        showAlert("error", "Invalid response from server");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid OTP or server error");
      showAlert("error", err?.response?.data?.message || "OTP verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && otpRefs.current[index + 1]) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        newOtp[index - 1] = "";
        otpRefs.current[index - 1].focus();
      }
      setOtp(newOtp);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const role = localStorage.getItem("userRole");
      const token = credentialResponse?.credential;

      if (!token) {
        showAlert("error", "Google token missing");
        return;
      }

      const res = await axios.post("http://localhost:9999/api/auth/google-login", {
        token,
        role,
      });

      const { token: jwtToken, user } = res.data;

      if (jwtToken && user) {
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.removeItem("userRole");

        showAlert("success", "Google login successful");
        setTimeout(() => navigate("/"), 1000);
      } else {
        showAlert("error", "Invalid response from server");
      }
    } catch (err) {
      console.error(err?.response?.data || err.message);
      showAlert("error", "Google login failed");
    }
  };

  const handleGoogleError = () => {
    showAlert("error", "Google login failed");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <Link to="/">
            <img
              src="https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo-500x281.jpg"
              alt="Indeed"
              className="h-8 mx-auto"
            />
          </Link>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-normal text-gray-900 mb-2">
            Ready to take the next step?
          </h2>
          <p className="text-gray-600 text-base">Sign in or create an account.</p>
        </div>

        <div className="text-sm text-gray-600 mb-6 leading-relaxed">
          By continuing, you agree to Indeed's{" "}
          <Link to="/terms" className="text-blue-600 hover:underline">Terms</Link>,{" "}
          <Link to="/cookie-policy" className="text-blue-600 hover:underline">Cookie</Link>, and{" "}
          <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy</Link> policies.
        </div>

        {alert && (
          <AlertMessage
            type={alert.type}
            message={alert.message}
            onClose={hideAlert}
          />
        )}

        <div className="mb-6 flex justify-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? "Sending OTP..." : "Continue with Email"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-900 mb-2">
                Enter OTP
              </label>
              <div
                className="flex justify-between gap-2"
                onPaste={(e) => {
                  e.preventDefault();
                  const pasted = e.clipboardData.getData("text").slice(0, 6);
                  const newOtp = [...otp];
                  [...pasted].forEach((char, i) => {
                    newOtp[i] = char;
                    otpRefs.current[i].value = char;
                  });
                  setOtp(newOtp);
                  otpRefs.current[Math.min(pasted.length, 5)]?.focus();
                }}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    ref={(el) => (otpRefs.current[index] = el)}
                    className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SingleEntryAuth;

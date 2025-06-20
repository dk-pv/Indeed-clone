

// import { useState, useEffect } from "react";
// import { Search, MapPin, ChevronUp, ChevronDown } from "lucide-react";
// import mainImg from '../assets/main.png';
// import { Link } from 'react-router-dom';
// import FirstFooter from "../components/FirstFooter";

// const FirstPage = () => {
//   const [jobQuery, setJobQuery] = useState("");
//   const [locationQuery, setLocationQuery] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [userRole, setUserRole] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       setUserRole(user.role);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleSearch = () => {
//     console.log("Searching for:", { job: jobQuery, location: locationQuery });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const trendingData = {
//     "Trending Searches": [
//       "Account Mumbai, Maharashtra",
//     ],
//     "Trending Jobs": [
//       "Net Remote",
//       "Fresher Tamil Nadu",
//       "Content Writer Remote",
//     ],
//     "Popular Cities": [
//       "Ludhiana, Punjab",
//       "Kolkata, West Bengal"
//     ],
//     "Popular Companies": [
//       "American Express",
//     ]
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       <div className="w-full max-w-6xl mx-auto px-4 py-8">

//         {/* 🔍 Search Bar (Always shown) */}
//         <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-8">
//           <div className="flex flex-col md:flex-row">
//             {/* Job Search Input */}
//             <div className="flex-1 relative">
//               <div className="flex items-center px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
//                 <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="Job title, keywords, or company"
//                   value={jobQuery}
//                   onChange={(e) => setJobQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="w-full text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none text-base"
//                 />
//               </div>
//             </div>

//             {/* Location Input */}
//             <div className="flex-1 relative">
//               <div className="flex items-center px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
//                 <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="City, state, zip code, or remote"
//                   value={locationQuery}
//                   onChange={(e) => setLocationQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="w-full text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none text-base"
//                 />
//               </div>
//             </div>

//             {/* Search Button */}
//             <div className="flex-shrink-0">
//               <button
//                 onClick={handleSearch}
//                 className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Find jobs
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 🧑‍💼 Show below section only for employer or not logged in */}
//         {(userRole === "employer" || !isLoggedIn) && (
//           <>
//             {/* Image Section */}
//             <div className="w-full mb-8">
//               <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
//                 <div className="text-center text-gray-600">
//                   <div className="text-sm">
//                     <img src={mainImg} alt="main visual" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Welcome Section */}
//             <div className="text-center mb-8">
//               <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                 Welcome to Indeed!
//               </h1>
//               <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                 Create an account or sign in to see your personalised job
//                 recommendations.
//               </p>

//               <Link to='/signin'>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 mb-8 inline-flex items-center">
//                   Get Started
//                   <svg
//                     className="w-5 h-5 ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>
//               </Link>

//               <div className="space-y-4 text-gray-600">
//                 <div>
//                   <a
//                     href="#"
//                     className="text-blue-600 hover:text-blue-700 underline font-medium"
//                   >
//                     Post your resume
//                   </a>
//                   <span className="text-gray-500"> - It only takes a few seconds</span>
//                 </div>
//                 <div>
//                   <a
//                     href="/postJob"
//                     className="text-blue-600 hover:text-blue-700 underline font-medium"
//                   >
//                     Post a job on Indeed
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       {/* 📈 Trending Section (Only for employer or not logged in) */}
//       {(userRole === "employer" || !isLoggedIn) && (
//         <div className="bg-gray-50 py-12">
//           <div className="w-full max-w-6xl mx-auto px-4">
//             <div className="text-center mb-8">
//               <button
//                 onClick={toggleDropdown}
//                 className="inline-flex items-center gap-2 text-xl font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
//               >
//                 What's trending on Indeed
//                 {isOpen ? (
//                   <ChevronUp className="w-5 h-5" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5" />
//                 )}
//               </button>
//             </div>

//             {isOpen && (
//               <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 animate-in slide-in-from-top-2 duration-300">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {Object.entries(trendingData).map(([category, items]) => (
//                     <div key={category} className="space-y-4">
//                       <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">
//                         {category}
//                       </h3>
//                       <div className="space-y-3">
//                         {items.map((item, index) => (
//                           <a
//                             key={index}
//                             href="#"
//                             className="block text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
//                             onClick={(e) => e.preventDefault()}
//                           >
//                             {item}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* 👣 Footer always shown */}
//       <FirstFooter />
//     </div>
//   );
// };

// export default FirstPage;
import { useState, useEffect } from "react";
import axios from "axios";
import { Search, MapPin, ChevronUp, ChevronDown } from "lucide-react";
import mainImg from '../assets/main.png';
import { Link } from 'react-router-dom';
import FirstFooter from "../components/FirstFooter";

const FirstPage = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.role || "");
      setIsLoggedIn(true);
    }

    // Fetch jobs
    axios.get("http://localhost:9999/api/job/all")
      .then(res => {
        if (res.data.success && res.data.data) {
          setJobList(res.data.data);
        }
      })
      .catch(err => {
        console.error("Failed to fetch jobs:", err);
      });
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", { job: jobQuery, location: locationQuery });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const trendingData = {
    "Trending Searches": ["Account Mumbai, Maharashtra"],
    "Trending Jobs": ["Net Remote", "Fresher Tamil Nadu", "Content Writer Remote"],
    "Popular Cities": ["Ludhiana, Punjab", "Kolkata, West Bengal"],
    "Popular Companies": ["American Express"],
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* 🔍 Search Bar */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 relative">
              <div className="flex items-center px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={jobQuery}
                  onChange={(e) => setJobQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none text-base"
                />
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="flex items-center px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="City, state, zip code, or remote"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none text-base"
                />
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Find jobs
              </button>
            </div>
          </div>
        </div>

        {/* 👤 If not logged in — show welcome page */}
        {!isLoggedIn && (
          <>
            <div className="w-full mb-8">
              <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-sm">
                    <img src={mainImg} alt="main visual" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Indeed!</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Create an account or sign in to see your personalised job recommendations.
              </p>
              <Link to='/signin'>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 mb-8 inline-flex items-center">
                  Get Started
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>

              <div className="space-y-4 text-gray-600">
                <div>
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline font-medium">Post your resume</a>
                  <span className="text-gray-500"> - It only takes a few seconds</span>
                </div>
                <div>
                  <a href="/postJob" className="text-blue-600 hover:text-blue-700 underline font-medium">Post a job on Indeed</a>
                </div>
              </div>
            </div>
          </>
        )}

        {/* 💼 If logged in — show job list */}
        {isLoggedIn && jobList.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobList.map((job, idx) => (
              <div key={job._id || idx} className="bg-white border border-gray-200 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.job.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{job.company.name} — {job.job.location.city}</p>
                <p className="text-gray-700 mb-3">{job.job.description}</p>
                <p className="text-gray-500 text-sm mb-1">Pay: ₹{job.payRange.min} - ₹{job.payRange.max} {job.payRange.currency}</p>
                <p className="text-gray-500 text-sm">Type: {job.jobTypes.join(', ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 📈 Trending Section (only for not logged in) */}
      {!isLoggedIn && (
        <div className="bg-gray-50 py-12">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <button
                onClick={toggleDropdown}
                className="inline-flex items-center gap-2 text-xl font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                What's trending on Indeed
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {isOpen && (
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 animate-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {Object.entries(trendingData).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">{category}</h3>
                      <div className="space-y-3">
                        {items.map((item, index) => (
                          <a key={index} href="#" className="block text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <FirstFooter />
    </div>
  );
};

export default FirstPage;

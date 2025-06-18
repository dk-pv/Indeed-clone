// import { useState, useEffect } from "react";
// import { ChevronDown, ExternalLink, LogOut } from "lucide-react";
// import jobpostImg3 from "../assets/jobpost3.png";
// import {Link} from 'react-router-dom'


// export default function IndeedEmployerPage() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState("");
//   const [showMoreSchedule, setShowMoreSchedule] = useState(false);

//   const [formData, setFormData] = useState({
//     jobTypes: [],
//     schedules: [],
//     numberOfPeople: "",
//     recruitmentTimeline: "",
//   });

//   useEffect(() => {
//     const storedEmail = localStorage.getItem("userEmail");
//     if (storedEmail) {
//       setUserEmail(storedEmail);
//     }
//   }, []);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleJobTypeToggle = (type) => {
//     setFormData((prev) => ({
//       ...prev,
//       jobTypes: prev.jobTypes.includes(type)
//         ? prev.jobTypes.filter((t) => t !== type)
//         : [...prev.jobTypes, type],
//     }));
//   };

//   const handleScheduleToggle = (schedule) => {
//     setFormData((prev) => ({
//       ...prev,
//       schedules: prev.schedules.includes(schedule)
//         ? prev.schedules.filter((s) => s !== schedule)
//         : [...prev.schedules, schedule],
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   const jobTypes = [
//     "Full-time", "Permanent", "Fresher", "Part-time",
//     "Internship", "Contractual / Temporary", "Freelance", "Volunteer"
//   ];

//   const scheduleOptions = [
//     "Day shift", "Morning shift", "Rotational shift", "Night shift",
//     "Monday to Friday", "Evening shift", "Weekend availability", "Fixed shift"
//   ];

//   const visibleSchedules = showMoreSchedule ? scheduleOptions : scheduleOptions.slice(0, 4);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//           <span className="text-2xl font-bold text-blue-600">indeed</span>
//           <div className="relative">
//             <button onClick={toggleDropdown} className="flex items-center space-x-2 text-gray-700">
//               <span className="text-sm">{userEmail}</span>
//               <ChevronDown className="w-4 h-4" />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
//                 <div className="py-1">
//                   <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b">{userEmail}</div>
//                   <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                     Visit Indeed for jobseekers <ExternalLink className="w-4 h-4 ml-2" />
//                   </a>
//                   <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                     <LogOut className="w-4 h-4 mr-2" /> Sign out
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Image */}
//       <div className="max-w-7xl mx-auto px-4 pt-12">
//         <img src={jobpostImg3} alt="Job post" className="w-[800px] h-[250px] object-contain mx-auto" />
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 py-12 space-y-10">
//         {/* Job Type */}
//         <div>
//           <label className="block text-sm font-semibold mb-4">Job type *</label>
//           <div className="flex flex-wrap gap-3">
//             {jobTypes.map((type) => (
//               <button
//                 key={type}
//                 type="button"
//                 onClick={() => handleJobTypeToggle(type)}
//                 className={`px-4 py-2 text-sm rounded-full border ${
//                   formData.jobTypes.includes(type)
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Schedule */}
//         <div>
//           <label className="block text-sm font-semibold mb-4">Schedule</label>
//           <div className="flex flex-wrap gap-3">
//             {visibleSchedules.map((schedule) => (
//               <button
//                 key={schedule}
//                 type="button"
//                 onClick={() => handleScheduleToggle(schedule)}
//                 className={`px-4 py-2 text-sm rounded-full border ${
//                   formData.schedules.includes(schedule)
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
//                 }`}
//               >
//                 {schedule}
//               </button>
//             ))}
//           </div>
//           {scheduleOptions.length > 4 && (
//             <button
//               type="button"
//               onClick={() => setShowMoreSchedule(!showMoreSchedule)}
//               className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
//             >
//               {showMoreSchedule ? "Show less" : "Show 5 more"}
//               <ChevronDown className={`inline-block ml-1 w-4 h-4 transition-transform ${showMoreSchedule ? "rotate-180" : ""}`} />
//             </button>
//           )}
//         </div>

//         {/* Number of People */}
//         <div>
//           <label className="block text-sm font-semibold mb-2">
//             Number of people you wish to hire for this job *
//           </label>
//           <select
//             name="numberOfPeople"
//             value={formData.numberOfPeople}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             required
//           >
//             <option value="">Select an option</option>
//             <option value="1">1</option>
//             <option value="2-5">2-5</option>
//             <option value="6-10">6-10</option>
//             <option value="11-25">11-25</option>
//             <option value="26-50">26-50</option>
//             <option value="50+">50+</option>
//           </select>
//         </div>

//         {/* Recruitment Timeline */}
//         <div>
//           <label className="block text-sm font-semibold mb-2">
//             Recruitment timeline for this job *
//           </label>
//           <select
//             name="recruitmentTimeline"
//             value={formData.recruitmentTimeline}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//             required
//           >
//             <option value="">Select an option</option>
//             <option value="urgent">Urgent (within 1 week)</option>
//             <option value="1-2weeks">1-2 weeks</option>
//             <option value="3-4weeks">3-4 weeks</option>
//             <option value="1-2months">1-2 months</option>
//             <option value="flexible">Flexible timeline</option>
//           </select>
//         </div>

//         {/* Continue Button */}
//         <div className="flex justify-end">
//           <Link to={'/addJobDetails4'}>
//             <button
//             type="submit"
//             className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
//           >
//             Continue
//           </button>
//           </Link>
//         </div>

//         {/* Feedback */}
//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Have feedback?{" "}
//             <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
//               Tell us more.
//             </a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import jobpostImg3 from "../assets/jobpost3.png";

export default function IndeedEmployerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showMoreSchedule, setShowMoreSchedule] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTypes: [],
    schedules: [],
    numberOfPeople: "",
    recruitmentTimeline: "",
  });

  // Load user email and saved form data from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email) setUserEmail(user.email);

    const savedForm = JSON.parse(localStorage.getItem("jobPostPage3"));
    if (savedForm) setFormData(savedForm);
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("jobPostPage3", JSON.stringify(formData));
  }, [formData]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleJobTypeToggle = (type) => {
    setFormData((prev) => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(type)
        ? prev.jobTypes.filter((t) => t !== type)
        : [...prev.jobTypes, type],
    }));
  };

  const handleScheduleToggle = (schedule) => {
    setFormData((prev) => ({
      ...prev,
      schedules: prev.schedules.includes(schedule)
        ? prev.schedules.filter((s) => s !== schedule)
        : [...prev.schedules, schedule],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.jobTypes.length === 0) newErrors.jobTypes = "Select at least one job type";
    if (!formData.numberOfPeople) newErrors.numberOfPeople = "Please select how many people you want to hire";
    if (!formData.recruitmentTimeline) newErrors.recruitmentTimeline = "Please select a recruitment timeline";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Valid submission:", formData);
      navigate("/addJobDetails4");
    }
  };

  const jobTypes = [
    "Full-time", "Permanent", "Fresher", "Part-time",
    "Internship", "Contractual / Temporary", "Freelance", "Volunteer"
  ];

  const scheduleOptions = [
    "Day shift", "Morning shift", "Rotational shift", "Night shift",
    "Monday to Friday", "Evening shift", "Weekend availability", "Fixed shift"
  ];

  const visibleSchedules = showMoreSchedule ? scheduleOptions : scheduleOptions.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <span className="text-2xl font-bold text-blue-600">indeed</span>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 text-gray-700">
              <span className="text-sm">{userEmail}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b">{userEmail}</div>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Visit Indeed for jobseekers <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <LogOut className="w-4 h-4 mr-2" /> Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Header Image */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <img src={jobpostImg3} alt="Job post" className="w-[800px] h-[250px] object-contain mx-auto" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Job Type */}
        <div>
          <label className="block text-sm font-semibold mb-4">Job type *</label>
          <div className="flex flex-wrap gap-3">
            {jobTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleJobTypeToggle(type)}
                className={`px-4 py-2 text-sm rounded-full border ${
                  formData.jobTypes.includes(type)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          {errors.jobTypes && <p className="text-red-600 text-sm mt-1">{errors.jobTypes}</p>}
        </div>

        {/* Schedule */}
        <div>
          <label className="block text-sm font-semibold mb-4">Schedule</label>
          <div className="flex flex-wrap gap-3">
            {visibleSchedules.map((schedule) => (
              <button
                key={schedule}
                type="button"
                onClick={() => handleScheduleToggle(schedule)}
                className={`px-4 py-2 text-sm rounded-full border ${
                  formData.schedules.includes(schedule)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {schedule}
              </button>
            ))}
          </div>
          {scheduleOptions.length > 4 && (
            <button
              type="button"
              onClick={() => setShowMoreSchedule(!showMoreSchedule)}
              className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              {showMoreSchedule ? "Show less" : "Show 5 more"}
              <ChevronDown className={`inline-block ml-1 w-4 h-4 transition-transform ${showMoreSchedule ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        {/* Number of People */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Number of people you wish to hire for this job *
          </label>
          <select
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2-5">2-5</option>
            <option value="6-10">6-10</option>
            <option value="11-25">11-25</option>
            <option value="26-50">26-50</option>
            <option value="50+">50+</option>
          </select>
          {errors.numberOfPeople && <p className="text-red-600 text-sm mt-1">{errors.numberOfPeople}</p>}
        </div>

        {/* Recruitment Timeline */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Recruitment timeline for this job *
          </label>
          <select
            name="recruitmentTimeline"
            value={formData.recruitmentTimeline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select an option</option>
            <option value="urgent">Urgent (within 1 week)</option>
            <option value="1-2weeks">1-2 weeks</option>
            <option value="3-4weeks">3-4 weeks</option>
            <option value="1-2months">1-2 months</option>
            <option value="flexible">Flexible timeline</option>
          </select>
          {errors.recruitmentTimeline && <p className="text-red-600 text-sm mt-1">{errors.recruitmentTimeline}</p>}
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>

        {/* Feedback */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Have feedback?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Tell us more.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}


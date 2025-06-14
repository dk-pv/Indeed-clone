// import React from "react";

// const EmployerHome = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">


//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto mt-20 px-6 py-12">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side */}
//           <div className="space-y-8">
//             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//               Let's hire your next great candidate.{" "}
//               <span className="italic text-gray-700">Fast.</span>
//             </h1>

//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl">
//               Post a free job*
//             </button>

//             <p className="text-blue-600 text-sm underline cursor-pointer hover:text-blue-800">
//               *Terms, conditions, quality standards and usage limits apply.
//             </p>
//           </div>

//           {/* Right Side: Illustration */}
//           <div className="relative">
//             {/* Background geometric shapes */}
//             <div className="absolute inset-0 -z-10">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-300 to-teal-400 rounded-full rotate-12 opacity-80"></div>
//               <div className="absolute bottom-12 left-8 w-48 h-48 bg-gradient-to-tr from-green-200 to-emerald-300 rounded-full -rotate-6 opacity-70"></div>
//             </div>

//             {/* Computer Monitor */}
//             <div className="relative z-10 flex justify-center">
//               <div className="bg-gray-800 rounded-lg p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
//                 {/* Screen */}
//                 <div className="bg-white rounded w-80 h-56 overflow-hidden relative">
//                   {/* Top Bar */}
//                   <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
//                     <div className="flex space-x-1">
//                       <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                     </div>
//                     <span className="text-xs text-gray-500">Interview</span>
//                   </div>

//                   {/* Candidate */}
//                   <div className="absolute top-12 left-4 right-4 bottom-12 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg flex items-center justify-center">
//                     <div className="relative">
//                       <div className="w-16 h-16 bg-orange-700 rounded-full mb-2"></div>
//                       <div className="w-24 h-12 bg-orange-600 rounded-t-full"></div>
//                       <div className="absolute -top-2 -right-8 w-8 h-8 bg-orange-400 rounded-full transform rotate-12 animate-pulse"></div>
//                     </div>
//                   </div>

//                   {/* Controls */}
//                   <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                     <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                       <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
//                     </div>
//                     <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
//                       <div className="w-3 h-2 bg-gray-600 rounded"></div>
//                     </div>
//                     <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
//                       <div className="w-3 h-3 bg-white rounded-sm"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stand */}
//                 <div className="w-16 h-4 bg-gray-700 mx-auto mt-2 rounded-b-lg"></div>
//               </div>

//               {/* Viewer */}
//               <div className="absolute -bottom-8 -right-12 hidden sm:block">
//                 <div className="relative">
//                   <div className="w-20 h-20 bg-amber-600 rounded-full"></div>
//                   <div className="absolute top-0 left-2 right-2 h-16 bg-gray-900 rounded-t-full"></div>
//                   <div className="w-28 h-20 bg-amber-500 rounded-t-full mt-2"></div>
//                 </div>
//               </div>

//               {/* Plant */}
//               <div className="absolute bottom-0 left-12 hidden sm:block">
//                 <div className="w-8 h-12 bg-amber-600 rounded-t-full"></div>
//                 <div className="absolute top-0 left-1 right-1">
//                   <div className="w-6 h-8 bg-green-500 rounded-full transform -rotate-12"></div>
//                   <div className="w-4 h-6 bg-green-600 rounded-full transform rotate-12 absolute top-1 right-0"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Three Steps Section */}
//         <div className="mt-100 max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Step 1 */}
//             <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <div className="mb-6">
//                 <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
//                   1
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Create your free account
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   All you need is your email address to create an account and start building your job post.
//                 </p>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <div className="mb-6">
//                 <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
//                   2
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Build your job post
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   Then just add a title, description and location to your job post, and you're ready to go.
//                 </p>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <div className="mb-6">
//                 <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
//                   3
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Post your job
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   After you post your job, use our state-of-the-art tools to help you find dream talent.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Save Time Section */}
//         <div className="mt-24 bg-white">
//           <div className="max-w-6xl mx-auto px-6 py-16">
//             <div className="text-center">
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
//                 Save time and effort in your recruitment{" "}
//                 <span className="text-gray-700">journey.</span>
//               </h2>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
//                 Finding the best fit for the job shouldn't be a full-time job. Indeed's simple and 
//                 powerful tools let you source, screen and hire faster.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="mt-16 max-w-6xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Get more visibility */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Get more visibility</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   <span className="text-blue-600 font-semibold">Sponsor your job</span> to ensure it gets seen by the right people.
//                 </p>
//               </div>
//             </div>

//             {/* Find quality applicants */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Find quality applicants</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   List your required skills for the job so relevant candidates apply.
//                 </p>
//               </div>
//             </div>

//             {/* Verify their abilities */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Verify their abilities</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Add screener questions to test applicants' skills.
//                 </p>
//               </div>
//             </div>

//             {/* Organise your candidates */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Organise your candidates</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   View and sort CVs, send messages and schedule interviews – all on Indeed.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="mt-16 flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-lg p-8">
//             <div className="mb-6 sm:mb-0">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl">
//                 Get started
//               </button>
//             </div>
//             <div className="text-gray-600 text-center sm:text-right">
//               <p className="text-lg">
//                 You control your posts 24/7 – edit, add, pause or close them whenever you want.{" "}
//                 <a href="#" className="text-blue-600 hover:text-blue-800 underline font-semibold">
//                   Learn more about posting.
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-24 bg-white">
//           <div className="max-w-6xl mx-auto px-6 py-16">
//             <div className="text-center">
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
//                 Save time and effort in your recruitment{" "}
//                 <span className="text-gray-700">journey.</span>
//               </h2>
              
//               <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
//                 Finding the best fit for the job shouldn't be a full-time job. Indeed's simple and 
//                 powerful tools let you source, screen and hire faster.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="mt-16 max-w-6xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Get more visibility */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Get more visibility</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   <span className="text-blue-600 font-semibold">Sponsor your job</span> to ensure it gets seen by the right people.
//                 </p>
//               </div>
//             </div>

//             {/* Find quality applicants */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Find quality applicants</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   List your required skills for the job so relevant candidates apply.
//                 </p>
//               </div>
//             </div>

//             {/* Verify their abilities */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Verify their abilities</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Add screener questions to test applicants' skills.
//                 </p>
//               </div>
//             </div>

//             {/* Organise your candidates */}
//             <div className="flex items-start space-x-6">
//               <div className="flex-shrink-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Organise your candidates</h3>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   View and sort CVs, send messages and schedule interviews – all on Indeed.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="mt-16 flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-lg p-8">
//             <div className="mb-6 sm:mb-0">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl">
//                 Get started
//               </button>
//             </div>
//             <div className="text-gray-600 text-center sm:text-right">
//               <p className="text-lg">
//                 You control your posts 24/7 – edit, add, pause or close them whenever you want.{" "}
//                 <a href="#" className="text-blue-600 hover:text-blue-800 underline font-semibold">
//                   Learn more about posting.
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Sponsorship Section */}
//         <div className="mt-24 bg-gray-50 py-16">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Want to fill your job faster?<br />
//               Sponsor it.
//             </h2>
//             <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
//               Sponsored jobs are over 4.5X more likely to result in a hire. 
//               Only pay for applications from qualified candidates who 
//               meet your requirements.¹
//             </p>

//             {/* Illustration */}
//             <div className="relative max-w-md mx-auto mb-8">
//               {/* Job listing mockup */}
//               <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
//                 <div className="h-3 bg-blue-500 rounded mb-3"></div>
//                 <div className="h-2 bg-orange-400 rounded w-1/3 mb-4"></div>
//                 <div className="space-y-2">
//                   <div className="h-1 bg-gray-200 rounded"></div>
//                   <div className="h-1 bg-gray-200 rounded w-3/4"></div>
//                   <div className="h-1 bg-gray-200 rounded w-1/2"></div>
//                 </div>
//               </div>

//               {/* Blue circle with people icons */}
//               <div className="absolute -right-8 top-8 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
//                 <div className="flex space-x-1">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                   </svg>
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                   </svg>
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                   </svg>
//                 </div>
//                 {/* Rupee symbol */}
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold">
//                   ₹
//                 </div>
//               </div>

//               {/* Mobile device mockup */}
//               <div className="absolute -left-12 bottom-0 w-16 h-24 bg-gray-800 rounded-lg">
//                 <div className="w-12 h-20 bg-white rounded m-2">
//                   <div className="w-8 h-1 bg-gray-300 rounded mx-auto mt-2"></div>
//                 </div>
//               </div>
//             </div>

//             <p className="text-xs text-gray-500">
//               ¹ The Sponsored Jobs Search for Employers and Job Seekers Study (Aug 2021). See registration link web
//               sponsor for full terms.
//             </p>
//           </div>
//         </div>

//         {/* Companies Section */}
//         <div className="mt-24 py-16">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                 You're in good company.
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Over 3,20,000 companies use Indeed to hire. See why these 
//                 fantastic companies use us as their platform for hiring dream 
//                 talent.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {/* McDonald's */}
//               <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100">
//                 <div className="h-16 flex items-center justify-center mb-6">
//                   <div className="text-4xl font-bold text-yellow-500">M</div>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   Indeed helps the world's largest restaurant company to connect with 
//                   young talent to recruit high-quality candidates 
//                   for a host of HR positions.
//                 </p>
//               </div>

//               {/* University */}
//               <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100">
//                 <div className="h-16 flex items-center justify-center mb-6">
//                   <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
//                     <span className="text-white font-bold text-sm">UNIV</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   The second oldest university in 
//                   India is India's leading institution. 
//                   Targeted job posting boosts 
//                   authentic academic positions 
//                   and corporate support roles.
//                 </p>
//               </div>

//               {/* Nokia */}
//               <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100">
//                 <div className="h-16 flex items-center justify-center mb-6">
//                   <div className="text-2xl font-bold text-blue-700">NOKIA</div>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   The world leader in mobile 
//                   communications. Indeed's 
//                   Sponsored Jobs helps boost the cost 
//                   per applicant and cost per hire.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Section */}
//         <div className="mt-24 bg-blue-900 text-white py-16">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="text-6xl text-blue-300 mb-6">"</div>
//                 <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8">
//                   We have found Indeed very helpful in finding the right 
//                   candidate for our organization... it saves time 
//                   and energy of both the candidates as well as the 
//                   recruiter.
//                 </blockquote>
//                 <footer className="text-blue-200">
//                   <strong>Kapdec</strong>
//                 </footer>
//               </div>
//               <div className="lg:pl-12">
//                 <img 
//                   src="/api/placeholder/400/300" 
//                   alt="Professional woman working on laptop" 
//                   className="rounded-lg shadow-lg w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Final CTA Section */}
//         <div className="mt-24 py-16 text-center">
//           <div className="max-w-4xl mx-auto px-6">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
//               Get started in minutes!
//             </h2>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl mb-4">
//               Start posting
//             </button>
//             <p className="text-gray-500 text-sm">
//               A better way to recruit.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* Logo and Help */}
//             <div>
//               <div className="text-2xl font-bold mb-6">Indeed</div>
//               <div>
//                 <h4 className="font-semibold mb-4">We're here to help</h4>
//                 <p className="text-gray-400 text-sm mb-4">
//                   Get the support and answers for common questions or contact us directly.
//                 </p>
//                 <div className="space-y-2">
//                   <p className="text-sm"><span className="font-semibold">Help Centre</span> Contact support</p>
//                   <p className="text-sm font-semibold">Connect with candidates faster</p>
//                 </div>
//               </div>
//             </div>

//             {/* Indeed Links */}
//             <div>
//               <h4 className="font-semibold mb-4">Indeed</h4>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white">About Indeed</a></li>
//                 <li><a href="#" className="hover:text-white">Press</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Employer App</a></li>
//                 <li><a href="#" className="hover:text-white">Work at Indeed</a></li>
//                 <li><a href="#" className="hover:text-white">Countries</a></li>
//                 <li><a href="#" className="hover:text-white">About</a></li>
//               </ul>
//             </div>

//             {/* Employers Links */}
//             <div>
//               <h4 className="font-semibold mb-4">Employers</h4>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white">Post Jobs</a></li>
//                 <li><a href="#" className="hover:text-white">Products</a></li>
//                 <li><a href="#" className="hover:text-white">Hiring Lab</a></li>
//                 <li><a href="#" className="hover:text-white">Career Advice</a></li>
//                 <li><a href="#" className="hover:text-white">Browse Resumes</a></li>
//                 <li><a href="#" className="hover:text-white">Indeed Events</a></li>
//               </ul>
//             </div>

//             {/* Resources Links */}
//             <div>
//               <h4 className="font-semibold mb-4">Resources</h4>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li><a href="#" className="hover:text-white">ESG at Indeed</a></li>
//                 <li><a href="#" className="hover:text-white">How to Write a CV</a></li>
//                 <li><a href="#" className="hover:text-white">Indeed Events</a></li>
//                 <li><a href="#" className="hover:text-white">Work happiness score</a></li>
//                 <li><a href="#" className="hover:text-white">Career Guide</a></li>
//                 <li><a href="#" className="hover:text-white">Salary Guide</a></li>
//                 <li><a href="#" className="hover:text-white">Resume Help</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="border-t border-gray-800 mt-12 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="flex items-center space-x-4 mb-4 md:mb-0">
//                 <div className="flex space-x-4">
//                   <img src="/api/placeholder/60/30" alt="ISO certification" className="h-8" />
//                   <img src="/api/placeholder/60/30" alt="ISO certification" className="h-8" />
//                   <img src="/api/placeholder/60/30" alt="ISO certification" className="h-8" />
//                 </div>
//               </div>
//               <div className="flex items-center space-x-6">
//                 <p className="text-sm text-gray-400">© 2024, Indeed</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-gray-400 hover:text-white">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                     </svg>
//                   </a>
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition duration-200">
//                     Post a job
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       </div>
//     </div>
//   );
// };

// export default EmployerHome




import React from "react";
import {Link} from 'react-router-dom'

const EmployerHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-20 px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Let's hire your next great candidate.{" "}
              <span className="italic text-gray-700">Fast.</span>
            </h1>
            <Link to='/addJobDetails'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl">
              Post a free job*
            </button>
            </Link>
            

            <p className="text-blue-600 text-sm underline cursor-pointer hover:text-blue-800">
              *Terms, conditions, quality standards and usage limits apply.
            </p>
          </div>

          {/* Right Side: Illustration */}
          <div className="relative">
            {/* Background geometric shapes */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-300 to-teal-400 rounded-full rotate-12 opacity-80"></div>
              <div className="absolute bottom-12 left-8 w-48 h-48 bg-gradient-to-tr from-green-200 to-emerald-300 rounded-full -rotate-6 opacity-70"></div>
            </div>

            {/* Computer Monitor */}
            <div className="relative z-10 flex justify-center">
              <div className="bg-gray-800 rounded-lg p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Screen */}
                <div className="bg-white rounded w-80 h-56 overflow-hidden relative">
                  {/* Top Bar */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">Interview</span>
                  </div>

                  {/* Candidate */}
                  <div className="absolute top-12 left-4 right-4 bottom-12 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-orange-700 rounded-full mb-2"></div>
                      <div className="w-24 h-12 bg-orange-600 rounded-t-full"></div>
                      <div className="absolute -top-2 -right-8 w-8 h-8 bg-orange-400 rounded-full transform rotate-12 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <div className="w-3 h-2 bg-gray-600 rounded"></div>
                    </div>
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Stand */}
                <div className="w-16 h-4 bg-gray-700 mx-auto mt-2 rounded-b-lg"></div>
              </div>

              {/* Viewer */}
              <div className="absolute -bottom-8 -right-12 hidden sm:block">
                <div className="relative">
                  <div className="w-20 h-20 bg-amber-600 rounded-full"></div>
                  <div className="absolute top-0 left-2 right-2 h-16 bg-gray-900 rounded-t-full"></div>
                  <div className="w-28 h-20 bg-amber-500 rounded-t-full mt-2"></div>
                </div>
              </div>

              {/* Plant */}
              <div className="absolute bottom-0 left-12 hidden sm:block">
                <div className="w-8 h-12 bg-amber-600 rounded-t-full"></div>
                <div className="absolute top-0 left-1 right-1">
                  <div className="w-6 h-8 bg-green-500 rounded-full transform -rotate-12"></div>
                  <div className="w-4 h-6 bg-green-600 rounded-full transform rotate-12 absolute top-1 right-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Steps Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Create your free account
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All you need is your email address to create an account and start building your job post.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Build your job post
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Then just add a title, description and location to your job post, and you're ready to go.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-6">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Post your job
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  After you post your job, use our state-of-the-art tools to help you find dream talent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Time Section */}
        <div className="mt-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Save time and effort in your recruitment{" "}
                <span className="text-gray-700">journey.</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Finding the best fit for the job shouldn't be a full-time job. Indeed's simple and 
                powerful tools let you source, screen and hire faster.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get more visibility */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Get more visibility</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="text-blue-600 font-semibold">Sponsor your job</span> to ensure it gets seen by the right people.
                </p>
              </div>
            </div>

            {/* Find quality applicants */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Find quality applicants</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  List your required skills for the job so relevant candidates apply.
                </p>
              </div>
            </div>

            {/* Verify their abilities */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Verify their abilities</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Add screener questions to test applicants' skills.
                </p>
              </div>
            </div>

            {/* Organise your candidates */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Organise your candidates</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  View and sort CVs, send messages and schedule interviews – all on Indeed.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-lg p-8">
            <div className="mb-6 sm:mb-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl">
                Get started
              </button>
            </div>
            <div className="text-gray-600 text-center sm:text-right">
              <p className="text-lg">
                You control your posts 24/7 – edit, add, pause or close them whenever you want.{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  Learn more about posting.
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="mt-24 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Want to fill your job faster?<br />
              Sponsor it.
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Sponsored jobs are over 4.5X more likely to result in a hire. 
              Only pay for applications from qualified candidates who 
              meet your requirements.¹
            </p>

            {/* Illustration */}
            <div className="relative max-w-md mx-auto mb-8">
              {/* Job listing mockup */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="h-3 bg-blue-500 rounded mb-3"></div>
                <div className="h-2 bg-orange-400 rounded w-1/3 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>

              {/* Blue circle with people icons */}
              <div className="absolute -right-8 top-8 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="flex space-x-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Rupee symbol */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold">
                  ₹
                </div>
              </div>

              {/* Mobile device mockup */}
              <div className="absolute -left-12 bottom-0 w-16 h-24 bg-gray-800 rounded-lg">
                <div className="w-12 h-20 bg-white rounded m-2">
                  <div className="w-8 h-1 bg-gray-300 rounded mx-auto mt-2"></div>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              ¹ The Sponsored Jobs Search for Employers and Job Seekers Study (Aug 2021). See registration link web
              sponsor for full terms.
            </p>
          </div>
        </div>

        {/* Companies Section */}
        <div className="mt-24 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                You're in good company.
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Over 3,20,000 companies use Indeed to hire. See why these 
                fantastic companies use us as their platform for hiring dream 
                talent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* McDonald's */}
              <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="h-16 flex items-center justify-center mb-6">
                  <div className="text-4xl font-bold text-yellow-500">M</div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Indeed helps the world's largest restaurant company to connect with 
                  young talent to recruit high-quality candidates 
                  for a host of HR positions.
                </p>
              </div>

              {/* University */}
              <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="h-16 flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UNIV</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The second oldest university in 
                  India is India's leading institution. 
                  Targeted job posting boosts 
                  authentic academic positions 
                  and corporate support roles.
                </p>
              </div>

              {/* Nokia */}
              <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="h-16 flex items-center justify-center mb-6">
                  <div className="text-2xl font-bold text-blue-700">NOKIA</div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The world leader in mobile 
                  communications. Indeed's 
                  Sponsored Jobs helps boost the cost 
                  per applicant and cost per hire.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 bg-blue-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl text-blue-300 mb-6">"</div>
                <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8">
                  We have found Indeed very helpful in finding the right 
                  candidate for our organization... it saves time 
                  and energy of both the candidates as well as the 
                  recruiter.
                </blockquote>
                <footer className="text-blue-200">
                  <strong>Kapdec</strong>
                </footer>
              </div>
              <div className="lg:pl-12">
                <div className="bg-blue-800 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-blue-200">
                    <div className="w-16 h-16 bg-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <p className="text-sm">Professional working on laptop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Get started in minutes!
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl mb-4">
              Start posting
            </button>
            <p className="text-gray-500 text-sm">
              A better way to recruit.
            </p>
          </div>
        </div>
      </div>
    </div>  
  )}

export default EmployerHome
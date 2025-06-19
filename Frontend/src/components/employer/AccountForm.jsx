// AccountForm.jsx
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AccountForm({
  register,
  errors,
  handleSubmit,
  formData,
  setValue,
  onSubmit,
}) {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Create an employer account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("companyName", { 
              required: "Company name is required" 
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter company name"
          />
          {errors.companyName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First and last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("fullName", { 
              required: "Full name is required" 
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Referral Source */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <select
            {...register("referralSource")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            <option value="">Select an option</option>
            <option value="online_video">Online video</option>
            <option value="mail">Mail</option>
            <option value="streaming_audio">
              Streaming audio (ex. Spotify, Pandora)
            </option>
            <option value="tv">TV</option>
            <option value="word_of_mouth">Word of mouth</option>
            <option value="search_engine">
              Search engine (ex. Google, Bing, Yahoo)
            </option>
            <option value="newspaper">Newspaper</option>
            <option value="radio">Radio (AM/FM/XM)</option>
            <option value="billboard">Billboard</option>
            <option value="podcast">Podcast</option>
            <option value="social_media">Social media</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={(value) => setValue("phone", value)}
            inputProps={{
              name: "phone",
              required: true,
            }}
            inputStyle={{
              width: "100%",
              height: "42px",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              paddingLeft: "48px",
              boxSizing: "border-box",
              backgroundColor: "#fff",
            }}
            buttonStyle={{
              border: "none",
              backgroundColor: "#f3f4f6",
            }}
            containerStyle={{
              width: "100%",
            }}
          />
          <p className="text-xs text-gray-500 mt-1">
            For account management communication. Not visible to jobseekers.
          </p>
        </div>

        {/* Continue Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            Continue
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
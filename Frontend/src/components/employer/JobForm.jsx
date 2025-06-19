// JobForm.jsx
export default function JobForm({
  register,
  errors,
  handleSubmit,
  formData,
  setValue,
  onSubmit,
  setActiveForm,
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Job Title */}
        <label className="block font-semibold mb-1">Job title *</label>
        <input
          type="text"
          {...register("jobTitle", { required: "Job title is required" })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
        />
        {errors.jobTitle && (
          <p className="text-red-600 text-sm mt-1">{errors.jobTitle.message}</p>
        )}

        {/* Job Description */}
        <label className="block font-semibold mb-1">Job description *</label>
        <textarea
          {...register("jobDescription", {
            required: "Job description is required",
          })}
          rows={6}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
          placeholder="Describe the responsibilities, required skills, and qualifications for this position..."
        />
        {errors.jobDescription && (
          <p className="text-red-600 text-sm mt-1">
            {errors.jobDescription.message}
          </p>
        )}

        {/* Location Type */}
        <h3 className="text-lg font-bold mt-8 mb-2">Job posting location</h3>
        <label className="block font-medium mb-1">
          Which option best describes this job's location? *
        </label>
        <select
          {...register("locationType")}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        >
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        {/* City */}
        <label className="block font-medium mb-1">City *</label>
        <input
          type="text"
          {...register("city", { required: "City is required" })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        {errors.city && (
          <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
        )}

        {/* Area + Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Area</label>
            <input
              type="text"
              {...register("area")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Pincode</label>
            <input
              type="text"
              {...register("pincode")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* Address */}
        <label className="block font-medium mb-1">Street address</label>
        <input
          type="text"
          {...register("address")}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setActiveForm("account")}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
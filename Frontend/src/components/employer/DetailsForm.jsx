// DetailsForm.jsx
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { jobTypes, scheduleOptions } from './constants';

export default function DetailsForm({
  register,
  errors,
  handleSubmit,
  formData,
  setValue,
  getValues,
  onSubmit,
  setActiveForm,
}) {
  const [showMoreSchedule, setShowMoreSchedule] = useState(false);

  const handleJobTypeToggle = (type) => {
    const currentTypes = getValues("jobTypes");
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter((t) => t !== type)
      : [...currentTypes, type];
    setValue("jobTypes", newTypes);
  };

  const handleScheduleToggle = (schedule) => {
    const currentSchedules = getValues("schedules");
    const newSchedules = currentSchedules.includes(schedule)
      ? currentSchedules.filter((s) => s !== schedule)
      : [...currentSchedules, schedule];
    setValue("schedules", newSchedules);
  };

  const visibleSchedules = showMoreSchedule
    ? scheduleOptions
    : scheduleOptions.slice(0, 4);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10"
    >
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
        {errors.jobTypes && (
          <p className="text-red-600 text-sm mt-1">{errors.jobTypes.message}</p>
        )}
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
            <ChevronDown
              className={`inline-block ml-1 w-4 h-4 transition-transform ${
                showMoreSchedule ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {/* Number of People */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Number of people you wish to hire for this job *
        </label>
        <select
          {...register("numberOfPeople", {
            required: "Please select how many people you want to hire",
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
          <option value="1">1</option>
          <option value="2-5">2-5</option>
          <option value="6-10">6-10</option>
          <option value="11-25">11-25</option>
          <option value="26-50">26-50</option>
          <option value="50+">50+</option>
        </select>
        {errors.numberOfPeople && (
          <p className="text-red-600 text-sm mt-1">
            {errors.numberOfPeople.message}
          </p>
        )}
      </div>

      {/* Recruitment Timeline */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Recruitment timeline for this job *
        </label>
        <select
          {...register("recruitmentTimeline", {
            required: "Please select a recruitment timeline",
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
  <option value="Immediate">Immediate</option>
  <option value="1-2 weeks">1-2 weeks</option>
  <option value="2-4 weeks">2-4 weeks</option>
  <option value="1-2 months">1-2 months</option>
        </select>
        {errors.recruitmentTimeline && (
          <p className="text-red-600 text-sm mt-1">
            {errors.recruitmentTimeline.message}
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setActiveForm("job")}
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
  );
}
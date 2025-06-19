// PreferencesForm.jsx
import { ChevronDown } from "lucide-react";

export default function PreferencesForm({
  register,
  errors,
  handleSubmit,
  formData,
  setValue,
  getValues,
  onSubmit,
  setActiveForm,
}) {
  const addEmail = () => {
    const currentEmails = getValues("additionalEmails");
    setValue("additionalEmails", [...currentEmails, ""]);
  };

  const handleAdditionalEmailChange = (index, value) => {
    const currentEmails = getValues("additionalEmails");
    const newEmails = [...currentEmails];
    newEmails[index] = value;
    setValue("additionalEmails", newEmails);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
      >
        {/* Communication preferences */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Communication preferences
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Get application updates <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {formData.additionalEmails.map((email, index) => (
            <div key={index} className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) =>
                  handleAdditionalEmailChange(index, e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Additional email address"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addEmail}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
          >
            <span className="text-xl mr-2">+</span>
            Add email
          </button>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="individual-emails"
              {...register("individualEmails")}
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="individual-emails"
              className="ml-3 text-sm text-gray-700"
            >
              Send an individual email each time someone applies.
            </label>
          </div>
        </div>

        {/* Application preferences */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Application preferences
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="resume-required"
                {...register("resumeRequired")}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="resume-required"
                className="ml-3 text-sm text-gray-700"
              >
                Resume is required
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="contact-candidates"
                {...register("contactCandidates")}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="contact-candidates"
                className="ml-3 text-sm text-gray-700"
              >
                Let potential candidates contact you about this job by email to
                the address provided.
              </label>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setActiveForm("payBenefits")}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setActiveForm("preview")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Preview
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center"
            >
              Continue
              <svg
                className="w-4 h-4 ml-2"
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
        </div>
      </form>
    </div>
  );
}
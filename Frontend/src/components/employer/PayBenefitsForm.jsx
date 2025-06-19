// PayBenefitsForm.jsx
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const supplementalPayOptions = [
  "Performance bonus",
  "Yearly bonus",
  "Commission pay",
  "Overtime pay",
  "Quarterly bonus",
  "Shift allowance",
  "Joining bonus",
  "Other",
];

const benefitOptions = [
  "Health insurance",
  "Provident Fund",
  "Cell phone reimbursement",
  "Paid sick time",
  "Work from home",
  "Paid time off",
  "Food provided",
  "Life insurance",
  "Dental insurance",
  "Flexible schedule",
  "Employee discount",
  "Retirement plan",
];

export default function PayBenefitsForm({
  register,
  errors,
  handleSubmit,
  formData,
  setValue,
  getValues,
  onSubmit,
  setActiveForm,
}) {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);

  const toggleSupplementalPay = (item) => {
    const currentPay = getValues("supplementalPay");
    const newPay = currentPay.includes(item)
      ? currentPay.filter((i) => i !== item)
      : [...currentPay, item];
    setValue("supplementalPay", newPay);
  };

  const toggleBenefit = (item) => {
    const currentBenefits = getValues("benefits");
    const newBenefits = currentBenefits.includes(item)
      ? currentBenefits.filter((i) => i !== item)
      : [...currentBenefits, item];
    setValue("benefits", newBenefits);
  };

  const visibleBenefits = showMoreBenefits
    ? benefitOptions
    : benefitOptions.slice(0, 8);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
      >
        {/* Pay Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Pay</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <input
                  type="text"
                  value={formData.payRange.min}
                  onChange={(e) => setValue("payRange.min", e.target.value)}
                  className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Minimum amount"
                />
              </div>
              <span className="text-sm text-gray-500 mt-1">per month to</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <input
                  type="text"
                  value={formData.payRange.max}
                  onChange={(e) => setValue("payRange.max", e.target.value)}
                  className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Maximum amount"
                />
              </div>
              <span className="text-sm text-gray-500 mt-1">per month</span>
            </div>
          </div>
        </div>

        {/* Supplemental Pay Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Supplemental Pay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supplementalPayOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleSupplementalPay(option)}
                className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  formData.supplementalPay.includes(option)
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2 text-lg font-light">
                  {formData.supplementalPay.includes(option) ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    "+"
                  )}
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleBenefits.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleBenefit(option)}
                className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  formData.benefits.includes(option)
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2 text-lg font-light">
                  {formData.benefits.includes(option) ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    "+"
                  )}
                </span>
                {option}
              </button>
            ))}
          </div>

          {benefitOptions.length > 8 && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowMoreBenefits(!showMoreBenefits)}
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showMoreBenefits
                  ? "Show less"
                  : `Show ${benefitOptions.length - 8} more`}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    showMoreBenefits ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setActiveForm("details")}
            className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <span className="mr-2">←</span>
            Back
          </button>
          <button
            type="submit"
            className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue
            <span className="ml-2">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
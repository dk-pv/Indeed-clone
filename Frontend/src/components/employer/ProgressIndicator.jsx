// ProgressIndicator.jsx

import React from "react";
export default function ProgressIndicator({ activeForm }) {
  const forms = [
    { id: "account", label: "Account" },
    { id: "job", label: "Job Info" },
    { id: "details", label: "Details" },
    { id: "payBenefits", label: "Pay & Benefits" },
    { id: "preferences", label: "Preferences" },
    { id: "preview", label: "Preview" },
  ];

  const getFormStatus = (formId) => {
    const currentIndex = forms.findIndex((f) => f.id === activeForm);
    const formIndex = forms.findIndex((f) => f.id === formId);
    
    if (formId === activeForm) {
      return { bg: "bg-blue-600", text: "text-blue-600", line: "bg-gray-200" };
    }
    
    if (formIndex < currentIndex) {
      return { bg: "bg-green-500", text: "text-green-600", line: "bg-green-500" };
    }
    
    return { bg: "bg-gray-200", text: "text-gray-600", line: "bg-gray-200" };
  };

  const isCompleted = (formId) => {
    const currentIndex = forms.findIndex((f) => f.id === activeForm);
    const formIndex = forms.findIndex((f) => f.id === formId);
    return formIndex < currentIndex;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-8">
      <div className="flex items-center justify-center">
        {forms.map((form, index) => {
          const status = getFormStatus(form.id);
          const completed = isCompleted(form.id);
          
          return (
            <React.Fragment key={form.id}>
              {index > 0 && (
                <div className={`h-1 w-20 ${status.line}`}></div>
              )}
              
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${status.bg} text-white`}
                >
                  {completed ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`text-xs mt-1 ${status.text} ${form.id === activeForm ? "font-semibold" : ""}`}>
                  {form.label}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const res = await axios.get("http://localhost:9999/api/job/employer/my-jobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(res.data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error?.response?.data?.message || error.message);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Job Posts</h2>

      {jobs.length === 0 ? (
        <p className="text-gray-600">You haven't posted any jobs yet.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            className="border rounded-md p-4 mb-6 shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {job.job?.title || "Untitled Job"}
            </h3>

            <p><strong>Location:</strong> {job.job?.location?.city || "N/A"}, {job.job?.location?.area || "N/A"}</p>
            <p><strong>Job Type:</strong> {job.jobTypes?.join(", ") || "N/A"}</p>
            <p><strong>Schedule:</strong> {job.schedules?.join(", ") || "N/A"}</p>
            <p><strong>Salary:</strong> ₹{job.payRange?.min || 0} - ₹{job.payRange?.max || 0}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p className="text-sm text-gray-500 mt-1">
              Posted on: {format(new Date(job.createdAt), "PPP")}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() => navigate(`/employer/edit-job/${job._id}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-4 py-1 rounded"
                onClick={() => console.log("Delete job:", job._id)} // 🔁 Hook this up to delete logic
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPosts;

/* eslint-disable react/prop-types */
import JobListItem from "./JobListItem";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const JobsListings = ({ isHome = false }) => {
  //   const recentJobs = jobs.slice(0, 3);
  const linkUrl = isHome ? "api/jobs?_limit=3" : "api/jobs";

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await fetch(linkUrl);
      const data = await res.json();

      setJobs(data);
    } catch (error) {
      console.log(`error fetching jobs ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? " Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListItem key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListings;

import React from 'react';

export default function Buttons({ jobs, selectJob, value }) {
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => (
        <button
          className={`job-btn  ${index === value ? 'active-btn' : ''}`}
          onClick={() => selectJob(index)}
          key={index}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}

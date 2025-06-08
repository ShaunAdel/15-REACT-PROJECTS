import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Job from './Job';
import Buttons from './Buttons';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  async function fetchJobs() {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setJobs(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function selectJob(index) {
    setValue(index);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <Buttons jobs={jobs} selectJob={selectJob} value={value} />
        {/* job info */}
        <Job {...jobs[value]} />;
      </div>
    </section>
  );
}

export default App;

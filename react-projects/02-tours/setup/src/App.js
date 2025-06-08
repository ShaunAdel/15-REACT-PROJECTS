import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newList = tours.filter((tour) => tour.id !== id);
    setTours(newList);
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      setTours(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    console.log(tours);
    return (
      <main>
        <h1>Hamaro khordi</h1>
        <button className='btn' onClick={fetchData}>
          reset
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

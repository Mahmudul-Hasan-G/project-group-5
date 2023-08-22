import { useState, useEffect } from 'react';

const Heading = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };
    return (
        <div>
            <h1 className="mt-6 text-center text-9xl font-extrabold font-mono text-lime-600 underline">THE H.A.D.</h1>
            <p className="mt-2 text-center text-4xl text-rose-800">Always With The Truth</p>
            <p className="mt-2 text-center text-3xl">{formatDate(currentDateTime)} 
<span className='ml-5 bg-purple-500'>{formatTime(currentDateTime)}</span></p>

        </div>
    );
};

export default Heading;
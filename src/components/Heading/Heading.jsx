import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

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
          <div className='flex justify-center'>
            <div>
            <h1 className="mt-6 text-center text-9xl font-extrabold font-serif text-lime-600 underline">GLOBAL</h1>
            </div>
          <div>
          <img className ='rounded-full' src="/public/images/1.png" alt="" />
          </div>
            <div>
            <h1 className="mt-6 text-center text-9xl font-extrabold font-serif text-lime-600 underline">TODAY</h1>
            <p className="mt-2 text-center text-4xl text-rose-800">Always With The Truth</p>
            <p className="mt-2 text-center text-3xl">{formatDate(currentDateTime)} 
<span className='ml-5 bg-purple-500'>{formatTime(currentDateTime)}</span></p>

            </div>
          </div>
            <div className='flex my-4'>
  <button className='btn btn-active btn-accent'>Latest</button>
  <Marquee className='text-rose-600 text-2xl' speed={80} pauseOnHover={true}>
  Students of DCI going to be mad doing their Project ....   
</Marquee>
</div>

        </div>
    );
};

export default Heading;
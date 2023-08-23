import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";


const SportsNews = () => {
    const [sportsnews, setSportsNews] = useState([]);

    useEffect(()=>{
        fetch('sports.json')
        .then(res =>res.json())
        .then(data => setSportsNews(data))
    },[])
    return (

        <div>
            <Heading />
            <Navbar />
            {
                sportsnews.map(news => <News 
                key={news.id}
                news={news}
                />)
            }
        </div>
    );
};

export default SportsNews;
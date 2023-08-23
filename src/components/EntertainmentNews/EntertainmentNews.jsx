import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";

const EntertainmentNews = () => {
    const [enews, setEnews] = useState([]);

    useEffect(() => {
        fetch("entertainment.json")
        .then(res => res.json())
        .then(data => setEnews(data))
    }, [])
    return (
        <div>
            <Heading />
            <Navbar />
            {
                enews.map(news =><News 
                key={news.id}
                news={news}
                />) 
            }
        </div>
    );
};

export default EntertainmentNews;
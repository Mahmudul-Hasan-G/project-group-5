import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
import useTitle from "../../Hooks/useTitel";

const EntertainmentNews = () => {
    const [enews, setEnews] = useState([]);

    useEffect(() => {
        fetch("entertainment.json")
        .then(res => res.json())
        .then(data => setEnews(data))
    }, [])

    useTitle("Entertainment");
    return (
        <div>
            <Heading />
            <Navbar />
            
            <div className="grid grid-cols-3 gap-2">
            {
                enews.map(news =><News 
                key={news.id}
                news={news}
                />) 
            }
            </div>
        </div>
    );
};

export default EntertainmentNews;
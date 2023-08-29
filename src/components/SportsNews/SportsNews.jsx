import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
import useTitle from "../../Hooks/useTitle";


const SportsNews = () => {
    const [sportsnews, setSportsNews] = useState([]);

    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSportsNews(data))
    }, [])

    useTitle("Sports");
    return (

        <div>
            <Heading />
            <Navbar />
            <div className="grid grid-cols-3 gap-2">
                {
                    sportsnews.map(news => <News
                        key={news.id}
                        news={news}
                    />)
                }
            </div>
        </div>
    );
};

export default SportsNews;
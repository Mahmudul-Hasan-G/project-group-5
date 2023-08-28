import { useEffect, useState } from "react";
import News from "../News/News";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import useTitle from "../../Hooks/useTitel";


const PoliNews = () => {
    const [polinews, setPolinews] = useState([]);

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setPolinews(data))
    }, [])

    useTitle("Politics");

    return (
        <div>
            <Heading />
            <Navbar />
            <div className="grid grid-cols-3 gap-2">
            {
                polinews.map(news => <News 
                key={news.id}
                news={news}
                />)
            }
            </div>
        </div>
    );
};

export default PoliNews;
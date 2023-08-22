import { useEffect, useState } from "react";
import News from "../News/News";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";


const PoliNews = () => {
    const [polinews, setPolinews] = useState([]);

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setPolinews(data))
    }, [])

    

    return (
        <div>
            <Heading />
            <Navbar />
            {
                polinews.map(news => <News 
                key={news.id}
                news={news}
                />)
            }
        </div>
    );
};

export default PoliNews;
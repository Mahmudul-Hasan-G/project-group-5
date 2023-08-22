import { useEffect } from "react";
import { useState } from "react";
import News from "../News/News";


const AllNews = () => {
    const [newses, setNewses] = useState([]);

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNewses(data))
    }, [])
    return (
        <div>
            {
                newses.map(news => <News 
                key={news.id}
                news={news}
                />)
            }
        </div>
    );
};

export default AllNews;
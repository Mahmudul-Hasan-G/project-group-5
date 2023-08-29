import { useEffect } from "react";
import { useState } from "react";
import Marquee from 'react-fast-marquee';

import Bnews from "../Bnews/Bnews";


const AllNews = () => {
    const [newses, setNewses] = useState([]);

    useEffect(() => {
        fetch('https://newsdata.io/api/1/news?apikey=pub_2841010e99eb1d96e35f7771fee712329cf4f&q=today&category=world')
            .then(res => res.json())
            .then(data => {
                setNewses(data.results)
                console.log(data.results);
            })
    }, [])
    return (
        <div>
            <Marquee speed={80} direction="right" gradient={true} gradientColor={[239, 23, 23]}>
                <h1 className="text-6xl mb-4 p-2">Breaking News</h1>
            </Marquee>
            <div className="grid grid-cols-2 gap-2">
                {
                    newses.map(news => <Bnews
                        key={news.article_id}
                        news={news}
                    />)
                }
            </div>

        </div>
    );
};

export default AllNews;
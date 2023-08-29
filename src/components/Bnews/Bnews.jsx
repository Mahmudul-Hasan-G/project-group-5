import { useNavigate } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";


const Bnews = ({ news }) => {

    const { article_id, category, title, image_url, content, language, pubDate } = news;
    console.log(news);


    let imageUrl = image_url || '/images/bn.jpg';

    const { setSelectedNews } = useNewsContext();
    const navigate = useNavigate();

    const handleClick = () => {
        setSelectedNews(news);
        navigate(`/fullbnews/${article_id}`);
    };



    return (
        <div className="border-2px solid black my-6 flex flex-col">
            <div className="card bg-gray-100 shadow-xl w-full h-full">
                <div className="flex justify-around items-center">

                    <div>
                        <img className="h-52 w-72" src={imageUrl} alt="News" />
                    </div>


                    <div>
                        <p>{category[0]}</p>
                        <p>{language}</p>
                        <p>{pubDate}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-4xl">{title}</h2>

                    <p>
                        {content ? (
                            content.length < 200 ? (
                                <>{content}</>
                            ) : (
                                <>{content.slice(0, 200)}...</>
                            )
                        ) : (
                            "No description available"
                        )}
                    </p>
                    <div className="card-actions justify-end">
                        <button onClick={handleClick} className="btn btn-primary">Full News</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bnews;
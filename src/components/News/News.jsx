import { useNavigate } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";

const News = ({ news }) => {

  const { id, heading, img, description } = news;
  const { setSelectedNews } = useNewsContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedNews(news);
    navigate(`/fullnews/${id}`);
  };

  return (
    <div className="border-2px solid black mb-6 flex flex-col">
      <div className="card bg-gray-100 shadow-xl w-full h-full">
        <img className="w-full h-full" src={img} alt="News" />
        <div className="card-body">
          <h2 className="card-title text-4xl">{heading}</h2>
          <p>{
            description.length < 200
              ? <> {
                description
              }
              </>
              : <> {
                description.slice(0, 200)
              }
                ...</>
          }</p>
          <div className="card-actions justify-end">
            <button onClick={handleClick} className="btn btn-primary">Full News</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
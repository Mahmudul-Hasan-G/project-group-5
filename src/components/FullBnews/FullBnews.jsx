import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import { useNewsContext } from "../NewsContext/NewsContext";

const FullBnews = () => {

    const navigate = useNavigate();

    const { selectedNews } = useNewsContext();
    const handelButton = () => {
        navigate(-1);
    }
    console.log(selectedNews);
    return (
        <div className="mx-4">
            <Heading />
            <Navbar />

            <div className="my-6">

                {selectedNews && (
                    <div>
                        <img className="w-full" src={selectedNews.image_url} alt="" />
                        <h1 className="text-6xl my-6 text-center text-violet-600">{selectedNews.title}</h1>
                        <div className="flex justify-around bg-lime-500 text-4xl p-4">
                            <p>{selectedNews.source_id}</p>
                            <p>{selectedNews.pubDate}</p>
                            <p>{selectedNews.country}</p>
                        </div>
                        <p className="text-4xl my-6">{selectedNews.content}</p>

                    </div>
                )}
            </div>
            <div className="text-center mb-6">
                <button onClick={handelButton} className="text-4xl btn btn-info w-2/3 px-2">Go To Previous Page</button>
            </div>
            <Footer />
        </div>
    );
};

export default FullBnews;
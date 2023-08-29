

import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import { useNewsContext } from "../NewsContext/NewsContext";



const FullNews = () => {

    const navigate = useNavigate();

    const { selectedNews } = useNewsContext();
    const handelButton = () => {
        navigate(-1);
    }
    return (
        <div className="mx-4">
            <Heading />
            <Navbar />

            <div className="my-6">

                {selectedNews && (
                    <div>
                        <img className="w-full" src={selectedNews.img} alt="" />
                        <h1 className="text-6xl my-6 text-center text-violet-600">{selectedNews.heading}</h1>
                        <div className="flex justify-around bg-lime-500 text-4xl p-4">
                            <p>{selectedNews.author}</p>
                            <p>{selectedNews.published_date}</p>
                            <p>{selectedNews.category}</p>
                        </div>
                        <p className="text-4xl my-6">{selectedNews.description}</p>

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

export default FullNews;
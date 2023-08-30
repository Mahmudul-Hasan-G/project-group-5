import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom";

const Diana = () => {
    return (
      <div className="border-2px solid black mb-6 mt-6 flex flex-col">
        <div className="card bg-gradient-to-br from-violet-500 to-purple-300 shadow-xl w-full h-full">
          <img className="mx-auto my-1.5 w-36 rounded-xl pt-1.5" src="https://i.ibb.co/6stPzsK/Background.png"  />
        <div className="card-body">
        <h1 className="card-title text-4l font-mono">Hello Friend! I'm Diana!</h1>
        <p className="font-mono">Based in Germany</p>
        <p className="font-mono">I'm a fiction writer on their journey through the magically complex world of tech and Web Development.</p>
        <span className="fa-layers">
          <Link to="https://github.com/LazuliPhoenix">
          <FaGithub />
          </Link>
          
          
        </span>
        </div>
        </div>
      </div>
        
    );
};

export default Diana;
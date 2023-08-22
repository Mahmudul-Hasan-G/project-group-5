import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="flex text-center justify-between bg-lime-300 p-2 text-2xl mt-4">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/politics'>Politics</Link></li>
                <li><Link to='/sports'>Sports</Link></li>
                <li><Link to='/entertainment'>Entertainment</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
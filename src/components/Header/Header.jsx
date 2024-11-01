import logo from '../../assets/logo.png'
import { RiCoinsFill } from "react-icons/ri";
const Header = ({freeCredit}) => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a><img className='w-14' src={logo} alt="" /></a>
                </div>
                <div className="flex-none font-semi-bold">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-xl'>Home</a></li>
                        <li><a className='text-xl'>Fixture</a></li>
                        <li><a className='text-xl'>Teams</a></li>
                        <li><a className='text-xl'>Schedulles</a></li>
                    </ul>
                    <button className='flex items-center ml-4 text-xl'>{freeCredit} Coin <RiCoinsFill className='text-amber-500 text-3xl ml-1 '></RiCoinsFill></button>
                </div>
            </div>
        </div>
    );
};

export default Header;
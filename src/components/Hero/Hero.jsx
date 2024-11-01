import hero from '../../assets/banner-main.png'

import 'react-toastify/dist/ReactToastify.css';
const Hero = ({ handleFreeCredit }) => {
    return (
        <div className='text-center space-y-8 max-w-7xl mx-auto bg-gray-800 py-16 bg-hero bg-no-repeat rounded-md mt-3'>
            <div className='flex justify-center'>
                <img className='' src={hero} alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='text-4xl text-[#FFFFFF] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit} className='bg-[#E7FE29] font-bold px-6 py-4 rounded-md'>Claim Free Credit</button>
                
            </div>
        </div>
    );
};

export default Hero;
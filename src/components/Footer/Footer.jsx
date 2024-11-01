import logofooter from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer className='bg-[#06091A]'>
            <div className='max-w-7xl mx-auto py-16'>
                <div className='flex justify-center my-8'>
                    <img className='mt-20 mb-6' src={logofooter} alt="" />
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-white mb-4'>About Us</h3>
                        <p className='text-[#FFFFFF60] text-sm mb-1'>We are a passionate team </p>
                        <p className='text-[#FFFFFF60] text-sm mb-1'>dedicated to providing the best </p>
                        <p className='text-[#FFFFFF60] text-sm'>services to our customers.</p>
                    </div>
                    <div>
                        <h3 className='text-white mb-4'>Quick Links</h3>
                        <ul>
                            <li className='text-[#FFFFFF60] text-sm mb-1'>Home</li>
                            <li className='text-[#FFFFFF60] text-sm mb-1'>Services</li>
                            <li className='text-[#FFFFFF60] text-sm mb-1'>About</li>
                            <li className='text-[#FFFFFF60] text-sm'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white mb-4'>Subscribe</h3>
                        <p className='text-[#FFFFFF60] text-sm mb-4'>Subscribe to our newsletter for the latest updates.</p>
                        <input className='p-2 rounded-l-md focus:outline-none' type="email" placeholder='Enter Email' />
                        <input className='p-2 rounded-r-md bg-red-500 text-white' type="submit" value="Subscribe" />
                    </div>
                </div>
            </div>
            <hr />
            <p className='py-5 text-center text-[#FFFFFF60] text-sm'>@2024 Your Company All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
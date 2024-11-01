
const Subscribe = () => {
    return (
        <div className="text-center space-y-8 bg-hero rounded-lg max-w-7xl bg-slate-200 mx-auto py-16 mb-[-130px] relative z-40">
            <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-2xl font-light">Get the latest updates and news right in your inbox!</p>
            <div>
                <input className='p-4 rounded-l-md focus:outline-none' type="email" placeholder='Enter your email' />
                <input className='p-4 rounded-r-md ml-3 bg-red-500 text-white' type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default Subscribe;
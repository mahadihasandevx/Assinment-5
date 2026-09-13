

const Banner = () => {
    return (
        <div className="container mx-auto px-6">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-16">

                <div className="max-w-xl">
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="flex gap-3 mt-6">
                        <button className="px-5 py-2.5 rounded-md text-white font-medium bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition-opacity">
                            Explore Technologies
                        </button>
                        <button className="px-5 py-2.5 rounded-md bg-white border border-gray-300 font-medium hover:bg-gray-50 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                <div>
                    <img src="src\assets\banner-stack.png" alt="Development stack illustration" />
                </div>

            </div>

            <div className="mt-20">
                <h1 className="text-4xl font-bold">
                    Explore the <span className="text-red-500">Technologies</span>
                </h1>
                <p className="mt-2 text-gray-500">
                    Pick one technology category to build your ideal stack
                </p>
            </div>

        </div>
    );
};

export default Banner;

import bannerImg from "../../assets/Image/Summer1.png";
const Header = () => {
    return (
        <header className="bg-[#F9F6E2]">
            <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row md:justify-center lg:justify-between items-center gap-4 py-8">
                <div className="space-y-6 lg:space-y-12 text-center">
                    <h3 className="text-text-main text-xl lg:text-2xl font-medium">
                        ---SALE FEVER---
                    </h3>
                    <h1 className="text-text-main text-3xl lg:text-5xl font-extrabold">
                        Purchase TK 200 or <br />
                        above & get <span className="text-main-color">20% off</span>
                    </h1>
                    <div className="flex gap-4 items-center justify-center md:flex-col lg:flex-row">
                        <h4 className="text-text-main font-medium text-xl">Use Promo Code</h4>
                        <a className="px-6 py-2 bg-[#E527B2] text-white text-lg font-medium rounded-md cursor-pointer">
                            SELL200
                        </a>
                    </div>
                </div>

                <div>
                    <img src={bannerImg} alt="Banner Image" className="md:w-[400px] lg:w-full" />
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import MainImg from "../../assets/images/image 1.png";

const MainSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-screen container mx-auto p-2 md:p-0">
            <div
                data-aos="flip-left"
                className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-start p-0 md:p-10"
            >
                <p className="md:text-[36px] text-[24px] text-[#6B73FF] mb-5">
                    Быстрая, надежная, качественная ❤️️
                </p>
                <p className="md:text-[36px] text-[24px] text-[#ffffff] mb-5">
                    Студия онлайн разработки 🔥
                </p>
                <p className="md:text-[24px] text-[#9C9C9C]">
                    Команда с лучшими веб разработчиками в СНГ 🚀
                </p>
            </div>
            <div
                data-aos="flip-right"
                className="w-full md:w-1/2 h-1/2 md:h-full p-0 md:p-10"
            >
                <img
                    className="w-full h-full object-contain"
                    src={MainImg}
                    alt=""
                />
            </div>
        </div>
    );
};

export default MainSection;

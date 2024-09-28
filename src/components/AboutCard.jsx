import React from "react";

const AboutCard = ({ icon, name, description }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-start"
            className="w-full md:w-[47%] h-1/2 p-[10px] mb-5"
        >
            <div className="bg-[#D9D9D9] w-full h-full rounded-[25px] flex flex-col justify-center  items-center">
                <p className="text-[80px] m-0 p-0">{icon}</p>
                <p className="text-[#000000] text-[20px] md:text-[26px]">
                    {name}
                </p>
                <p className="text-[14px] md:text-[18px] text-[#414141] text-center mb-5">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AboutCard;

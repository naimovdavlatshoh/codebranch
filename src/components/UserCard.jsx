import React from "react";

const UserCard = ({ name, img, position }) => {
    return (
        <div
            className="w-full md:w-[25%] h-[300px] md:h-[300px] bg-[#ffffff] rounded-[25px] flex flex-col justify-center items-center py-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
        >
            <img
                className="h-[150px] w-[150px] md:w-[150px] md:h-[150px] rounded-full object-cover"
                src={img}
                alt=""
            />
            <p className="text-[36px] md:text-[38px]">{name}</p>
            <p className="text-[16px] md:text-[20px] text-[#5B5B5B]">
                {position}
            </p>
        </div>
    );
};

export default UserCard;

import React from "react";
import Navbar from "../components/Navbar";
import MainSection from "./sections/MainSection";
import TeamSection from "./sections/TeamSection";
import AboutSection from "./sections/AboutSection";

const Home = () => {
    return (
        <div className="bg-[rgb(27,26,33)] px-5">
            <Navbar />
            <MainSection />
            <TeamSection />
            <AboutSection />
        </div>
    );
};

export default Home;

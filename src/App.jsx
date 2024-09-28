import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return <Home />;
}

export default App;

import React from 'react';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { Navbar } from '../components/Navbar/Navbar';
import { HeaderSection } from '../components/HeaderSection/HeaderSection';
import { PortfolioSection } from '../components/PortafolioSection/PortfolioSection';
import { Footer } from '../components/Footer/Footer';


const App = () => {
    return (
        <>
            <style jsx global>{`
        body {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url('https://w0.peakpx.com/wallpaper/622/373/HD-wallpaper-black-space-black-star-stars.jpg');

          `}</style>
            <Navbar />
            <HeaderSection />
            <PortfolioSection />
            <AboutSection />
            <Footer />

        </>
    );
};

export default App;
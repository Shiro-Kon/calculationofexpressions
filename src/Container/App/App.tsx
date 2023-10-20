import React, { useState, useEffect } from "react";
import Form1 from "../../Components/Form1/Form1";
import Form2 from "../../Components/Form2/Form2";
import Header from "../Header/Header";
import "./App.scss";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const progressBar = document.getElementById("myBar");
      if (progressBar) {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
        setScrollProgress(scrolled);
        setScrollValue(scrolled); 
      };
    };
  }, []);

  const handleScrollChange = (newValue: number) => {
    const currentScroll =
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) *
      (newValue / 100);
    window.scrollTo({ top: currentScroll, behavior: "smooth" });
    setScrollValue(newValue);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setScrollValue(newValue);
    handleScrollChange(newValue);
  };

  return (
    <div className="app">
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <div className="range-container">
        <input
          type="range"
          className="range-inp"
          min="0"
          max="100"
          value={scrollValue}
          onChange={handleRangeChange}
        />
      </div>

      <Header />
      <div className="center">
        <Form1 />
        <Form2 />
        <input
          type="number"
          className="inp-num"
          value={Math.round(scrollProgress)}
          onChange={(e) => {
            const parsedValue = parseInt(e.target.value, 10);
            if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
              setScrollProgress(parsedValue);
              handleScrollChange(parsedValue);
            }
          }}
        />
      </div>
      <a className="link-top" href="#top">
        <div className="up">↑</div>
      </a>
    </div>
  );
}

export default App;

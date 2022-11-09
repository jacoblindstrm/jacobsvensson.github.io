import React from 'react';
import {
  motion,
} from "framer-motion";
import { useRef } from "react";

// import { AnimatedGradient } from "./components/AnimatedGradient";
// import { Glass } from "./components/Glass";
import './App.css';

import Clock from './components/Clock';
import Logo from './assets/img/logotype.svg';

function App() {
  const constraintsRef = useRef(null);
  const time = useTime();

  return (
    <div className="App" onMouseMove={(e) => Sparks(e.clientX, e.clientY)} ref={constraintsRef}>
      <div class="Layout">
        <motion.section
          initial={{ 
            y: "10%",
            opacity: 0 
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              duration: 1.2,
              bounce: 0.5,
              delay: 0.25,
            },
          }}
          >
          <h1>I am Jacob Lindström, an experienced Design Technologist specializing in design systems and prototyping. I work at <a href="https://osynlig.se" rel="author noopener" title="Osynlig">Osynlig.</a></h1>
          <h2> Husband and dad living in Nyköping, Sweden. I like to drink natural wine and to race bikes.</h2>
        </motion.section>
        <motion.footer>
          <motion.a initial={{ 
              scale: 0.95,
              opacity: 0,
              x: "-2%"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 0.2,
                bounce: 0.25,
                delay: 1.35,
              },
            }} className="email" href="mailto:its@jacoblindstrom.design">its@jacoblindstrom.design</motion.a>
          <ul className="external-links">
              <li className="read-cv">
                <motion.a initial={{ 
                    scale: 0.8,
                    opacity: 0,
                    y: '-5%',
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 0.2,
                      bounce: 0.25,
                      delay: 1.5,
                    },
                  }} href="https://read.cv/jacoblindstrm" rel="author noopener" title="Read Cv"><span className="social-title">Read CV</span></motion.a></li>
              <li className="figma">
                <motion.a initial={{ 
                    scale: 0.8,
                    opacity: 0,
                    y: '-5%',
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 0.2,
                      bounce: 0.25,
                      delay: 1.65,
                    },
                  }} href="https://figma.com/@jacoblindstrm" rel="author noopener" title="Figma"><span className="social-title">Figma</span></motion.a></li>
                   <li className="linkedin">
                <motion.a initial={{ 
                    scale: 0.8,
                    opacity: 0,
                    y: '-5%',
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 0.2,
                      bounce: 0.25,
                      delay: 1.75,
                    },
                  }} href="https://www.linkedin.com/in/jacobsvensson-design/" rel="author noopener" title="LinkedIn"><span className="social-title">LinkedIn</span></motion.a></li>
              <li className="twitter">
                <motion.a initial={{ 
                    scale: 0.8,
                    opacity: 0,
                    y: '-5%',
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      duration: 0.2,
                      bounce: 0.25,
                      delay: 1.82,
                    },
                  }} href="https://twitter.com/jacoblindstr_m" rel="author noopener" title="Twitter"><span className="social-title">Twitter</span></motion.a></li>
            </ul>
        </motion.footer>
        <img src={Logo} alt="A signature spelling Jacob" className="logotype"/>
        <Clock time={time} />
      </div>
      <div id="Sparks"></div>
    </div>
  );
}

function Sparks(x, y) {
  if (window.matchMedia('(prefers-reduced-motion)').matches) return;
  
  const sparks = document.getElementById('Sparks');

  function createElement() {
      const div = document.createElement('div');       
      const color = getColor();
      const size = getRandomSize();

      const limitSpread = 100;
      div.style.cssText = `background: ${color}; border-radius: 100%; width: ${size}rem; height: ${size}rem; opacity: 0;`;
      div.classList.add(`cursor_sparks`);
      div.style.transform = `translateX(${x + randomIntFromInterval(1,limitSpread)}px) translateY(${y  + randomIntFromInterval(1,limitSpread)}px)`;

      // append
      sparks.appendChild(div);

      div.addEventListener('animationend', () => {
        div.remove();
      });
  }

  function getColor() {
      const hue = Math.round((x / window.screen.width) * 360 + 30);
      return `hsla(${hue}, 100%, 50%, 0.2)`;
  }

  function getRandomSize() {
      const sizes = ["0.8", "1", "1.7", "0.3"];
      return sizes[Math.floor(Math.random() * sizes.length)];

  }

  function randomIntFromInterval(min, max) { // min and max included 
      let num = Math.floor(Math.random() * (max - min + 1) + min);
      
      num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;

      return num;
  } 

  createElement();
}

function useTime() {
  const [time, setTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => {
      window.clearInterval(intervalId);
    }
  }, []);
  
  return time;
}

export default App;

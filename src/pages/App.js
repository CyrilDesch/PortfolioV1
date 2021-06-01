import React, { useEffect } from "react";
import '../styles/App.css';
import Planet from "../components/Planet";
import CanvaIphone from "../components/CanvaIphone";
import AppIcon from '../assets/AppIcon';
import Arrow from '../assets/Arrow';
import useScroll from "../hooks/useScroll";
import automaticTitle from '../helpers/automaticTitle';
import { Link } from "react-scroll";
import IutIcon from "../assets/IutIcon";
import WaitScreen from "../components/WaitScreen";

const App = () => {


  const scrollPosition = useScroll();
  useEffect(() => {
    automaticTitle(scrollPosition);
  }, [scrollPosition]);

  let opacity;
  if (scrollPosition*scrollPosition*0.00003 > 1)
    opacity = 1
  else
    opacity = scrollPosition*scrollPosition*0.00003

  
  return (
    <>
      <WaitScreen />
      <header>
        <div className="headerContainer">
          <div className="sideBarContainer">
            <AppIcon className="icon" />
          </div>
          <div className="menuContainer">
            <Link
              className="accueil"
              to="accueil"
              smooth={true}
              offset={-50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >ACCUEIL</Link>
            <Link
              className="presentation"
              to="presentation"
              smooth={true}
              offset={-0.05*window.innerWidth}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >PRESENTATION</Link>
            <Link
              className="projets"
              to="projets"
              smooth={true}
              offset={-0.05*window.innerWidth}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >PROJETS</Link>
          </div>
          <div className="sideBarContainer">
            <Link
                className="contactText"
                to="contact"
                smooth={true}
                offset={-0.05*window.innerWidth}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
              >Me contacter</Link>
          </div>
        </div>
      </header>      
      <main>
        <span id="accueil"/>
        <div className="canvaContainer">
          <CanvaIphone scrollPosition={scrollPosition}/>
        </div>
        <Arrow className="arrow"/>
        <span className="animateText1" style={{opacity: opacity}}>DEVELOPPEUR<br/><p className="coloredText">REACT NATIVE</p></span>
        <span className="animateText2" style={{opacity: opacity/8}}>DEVELOPPEUR<br/><p className="coloredText">REACT NATIVE</p></span>
        <Planet className="planet1" size={2} position={{x:10, y:10}} />
        <Planet className="planet2" size={3.5} position={{x:80, y:30}} rotate={true} />
        <p className="citation">Mon dicton:<br/><span className="coloredText">"Toujours avancer</span>, ne rien regretter"</p>
        <p className="portfolio">CYRIL DESCHAMPS</p>
        
        <article>
          <div id="presentation" className="delimitationContainer">
            <div className="barContainer">
              <span className="horizontalBar" />
              <p>PRESENTATION</p>
              <span className="horizontalBar" />
            </div>
            <p className="secondLine">A PROPOS DE MOI</p>
          </div>
          <div className="card">
            <IutIcon className="IutIcon"/>
            <span className="verticalBar"></span>
            <span className="textContainer"> 
              <p className="title">Je suis développeur React Native en parallèle de mes études à l'IUT Informatique Lyon 1.</p>
              <p className="paragraphe">Je suis entrée par passion dans le monde du développement mobile depuis maintenant 3 ans, tout d’abord grâce à Java/Kotlin puis avec React Native. J’ai également acquis au fil du temps des compétences dans l’UX Design et dans la gestion d’un back. Mon cursus en IUT Informatique m’a également appris toutes les bonnes pratiques de développement ainsi que la mise en place de tests.</p>
            </span>
          </div>
        </article>

        <article>
          <div id="projets" className="delimitationContainer">
            <div className="barContainer">
              <span className="horizontalBar" />
              <p>MES PROJETS</p>
              <span className="horizontalBar" />
            </div>
          </div>
        </article>
        
        <article>
          <div id="contact" className="delimitationContainer">
            <div className="barContainer">
              <span className="horizontalBar" />
              <p>CONTACT</p>
              <span className="horizontalBar" />
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default App;
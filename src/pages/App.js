import React, { useEffect, useState } from "react";
import '../styles/App.css';
import Planet from "../components/Planet";
import CanvaIphone from "../components/CanvaIphone";
import AppIcon from '../assets/AppIcon';
import Arrow from '../assets/Arrow';
import useScroll from "../hooks/useScroll";
import automaticTitle from '../helpers/automaticTitle';
import { Link, animateScroll } from "react-scroll";
import IutIcon from "../assets/IutIcon";
import WaitScreen from "../components/WaitScreen";
import ValeurCard from "../components/ValeurCard";
import ProjectContainer from "../components/ProjectContainer";
import tabProject from "../assets/tabProject";

const App = () => {

  const [clickedProject, setClickedProject] = useState(-1);
  if(clickedProject !== -1)
    document.body.style.overflowY = 'hidden';
  else
    document.body.style.overflowY = 'overlay';

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
            <AppIcon className="icon" onClick={() => animateScroll.scrollToTop()} />
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
        <span className="animateText1" style={{opacity: opacity}}>DEVELOPPEUR<br/><p className="coloredText">REACT - NATIVE</p></span>
        <span className="animateText2" style={{opacity: opacity/8}}>DEVELOPPEUR<br/><p className="coloredText">REACT - NATIVE</p></span>
        <Planet className="planet1" size={4} position={{x:85, y:20}} rotate={true} />
        <p className="citation">&nbsp;&nbsp;&nbsp;Mon dicton:<br/><span className="citationContenu"><span className="coloredText">Toujours<br/>avancer</span>,<br/>ne rien<br/>regretter</span></p>
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
              <p className="title">Je suis développeur React spécialisé React Native en parallèle de mes études en DUT Informatique</p>
              <p className="paragraphe">Vous avez besoin de développer votre projet rapidement ? Je vous mettrai à disposition mes compétences de développeur avec 3 ans d'expérience dans le développement mobile.</p>
            </span>
          </div>
          <div className="valeurCardList">
            <ValeurCard
              title="Mon optimiste, mon ambition et mon goût de la réussite" 
              paragraphe="Peu importe votre idée et la quantité de travail demandée, c’est avec toute ma bonne volonté que je vous aiderai et vous conseillerai pour mener à bien vos projets." 
              presetIcon="succes"
              childNb={1}
            />
            <ValeurCard 
              title="Je suis passionné" 
              paragraphe="La création informatique est ma passion. Le fait de pouvoir créer n'importe quel projet, seul ou à plusieurs, m’a permis de m’épanouir." 
              presetIcon="passion"
              childNb={2}
            />
            <ValeurCard 
              title="L'amour de la découverte" 
              paragraphe="Ayant toujours été très débrouillard, j’ai appris de nombreuses choses seul et je suis finalement devenu autodidacte. Je ressens le besoin de comprendre tout ce qui m’entoure pour évoluer."
              presetIcon="decouverte"
              childNb={3}
            />
            <ValeurCard 
              title="Ne pas se précipiter !" 
              paragraphe="Je donne beaucoup d'importance à la communication dans un projet, surtout entre les différentes branches de métier. Je ferai mon maximum pour cerner totalement le besoin de votre application et répondre à vos demandes." 
              presetIcon="communication"
              childNb={4}
            />
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
          <div className="card">
            <img src="./assets/react_image.png" alt="react_img" className="reactImage"/>
            <span className="textContainer"> 
              <p className="title">EXPOSITION DE MES REALISATIONS</p>
              <p className="paragraphe">Voici les différents projets sur lesquels j'ai pu travailler.</p>
              <a href="https://github.com/CyrilDesch" target="_blank" class="btn-si btn-github" rel="noreferrer" >Mon GitHub</a>
            </span>
          </div>
          <div className="projectsContainer">
            <div 
              className={"backgroundProject " + (clickedProject !== -1 ? "backgroundClickedProject" : null)}
              onClick={() => {
                setClickedProject(-1);
              }}
            > 
              {clickedProject !== -1 ? 
                <div>
                  <p className="title">{tabProject[clickedProject].title}</p>
                  <p className="description">{tabProject[clickedProject].description}</p>
                </div>
              : null}
            </div>
            {tabProject.map((item, index) => 
              <ProjectContainer
                src={item.image}
                title={item.title}
                description={item.description}
                typeProject={item.typeProject}
                onClick={() => setClickedProject(index)}
              />
            )}
          </div>
        </article>
      </main>
      <footer id="contact">
        <div className="footerBar">
          <p><span className="barTitle">EMAIL: </span>cyril.deschamps@outlook.fr</p>
          <a href="https://github.com/CyrilDesch" target="_blank" class="btn-si btn-github" rel="noreferrer" >GitHub</a>
          <AppIcon className="icon"  onClick={() => animateScroll.scrollToTop()} />
          <a href="https://www.linkedin.com/in/cyril-deschamps-7377681b7/" target="_blank" class="btn-si btn-linkedin" rel="noreferrer" >Linkedin</a>
          <p><span className="barTitle">TELEPHONE: </span>06 42 90 88 40</p>
        </div>
      </footer>
    </>
  )
}

export default App;
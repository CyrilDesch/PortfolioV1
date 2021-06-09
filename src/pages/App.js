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
import ValeurCard from "../components/ValeurCard";
import ProjectContainer from "../components/ProjectContainer";

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
              <p className="title">Je suis développeur React spécialisé React Native en parallèle de mes études à l'IUT Informatique Lyon 1.</p>
              <p className="paragraphe">Vous avez besoin de développer votre projet rapidement ? Je vous mettrais à disposition mes compétences de développeur avec 3 ans d'expérience dans le développement mobile.</p>
            </span>
          </div>
          <div className="valeurCardList">
            <ValeurCard
              title="Mon optimiste, mon ambition et mon goût de la réussite" 
              paragraphe="Peu importe votre idée et la quantité de travail, c’est avec toute ma bonne volonté que je vous aiderais et vous conseillerais pour mener au succès vos projets." 
              presetIcon="succes"
              childNb={1}
            />
            <ValeurCard 
              title="Je suis passionnée" 
              paragraphe="La création informatique est ma passion. La possibilité de crée tout ce que l’on veut, seul ou à plusieurs, m’a permis de m’épanouir." 
              presetIcon="passion"
              childNb={2}
            />
            <ValeurCard 
              title="L'amour de la découverte" 
              paragraphe="Ayant toujours été très débrouillard, j’ai appris beaucoup de choses seul et j’ai notamment 'appris à apprendre'. Je ressens le besoin de comprendre tout ce qui m’entoure pour évoluer." 
              presetIcon="decouverte"
              childNb={3}
            />
            <ValeurCard 
              title="Ne pas se précipiter !" 
              paragraphe="Je donne beaucoup d'importance à la communication dans un projet, surtout entre les différentes branches de métier. Je ferais mon maximum pour cerner totalement le besoin de votre application et répondre à vos demandes." 
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
            <div className="card">
              <img src="./assets/react_image.png" alt="react_img" className="reactImage"/>
              <span className="textContainer"> 
                <p className="title">EXPOSITION DE MES REALISATIONS</p>
                <p className="paragraphe">Voici les différents projets sur lesquels j'ai pu travailler.</p>
                <a href="https://github.com/CyrilDesch" target="_blank" class="btn-si btn-github" rel="noreferrer" >Mon GitHub</a>
              </span>
            </div>
            <div className="projectsContainer">
              <ProjectContainer 
                src="data:image/jpeg;base64,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"
              />
              <ProjectContainer
                src="data:image/jpeg;base64,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"
              />
              <ProjectContainer 
                src="data:image/jpeg;base64,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"
              />
              <ProjectContainer 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEBAQEBANEBAVDQ0NDRUWDRsQEA4NIB0iIiAdHx8kKDQsJCYxJx8fLTstMTM3MDAwIytKQD9AQDQ5MEABCgoKDg0OFQ0NFSslFRkrKzctNy03NystNzctNzcrKysrNy0rKystKysrKystLSsrKysrKystKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEEBQYDBwj/xAA8EAABAwIEBAMGBAQFBQAAAAABAAIRAwQFEiExQVFhcQYTkSKBobHB8AcUMkJSYnLRM0SCk+EjQ1OS8f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAgIDAQAAAAAAAAAAAAECESExAxITQVEy/9oADAMBAAIRAxEAPwDWtXVq5tXQLLQwiCAI2oHSCSdFMUJREISiBJSKFzwFWYliYpNlsOOugQWD6gHP04KPVxCmz9RLNR+ppAnus9V8TaxADuMgjvood3jJqS0loJEj2AcwQa5l7Tds9vfNounmjTUa7dV5mb2o0k56gEOyCJE9ifkudLxDVpwM5IOpH6gQg9MfVyanVvE/wo8w0MggifcsFR8Tk6SI5c1ItPEPlH2gRScTGstYenGFBtgU6orLHmVCAdCYgzueSt/NEjXQzqg6ppSlJUJMUkxUUkJRISgEpJ4TIJbQjCWVPCqHCMIQEYCBJJJIpiqfFMXbTeKbSC/d+v6RyU6+uhSY5x0hpI7ry6+vBnc51SXklxBEDtKIsMYx55JBzjePaG3os7WxNxM5ueh1EKNd1S6YAP7tw6AVBqxALSDtpyP3CqbWDsVcDoXQARB10TV7nND2EtcILmzoD05KsczSewjqubK5bqOILXdQqixGJPmZ6kfFc7m8zmeBMu/lPNQKr9fSOyHOoJYrqZa3v7XatOnvVPm++iJr0Xa5ZdGk4gGRoRyIW2wTHBWoau9tjqZdzIka+gXnb35mzxBE+9SMPvDTPHY+m6zpdvbKFQOAI20Rqi8NXmZhZIlriI3Jbz+CvAUDpkkxVUkxToSVAxTJEpIiyARAJBOqGTwkkgSj3VcU2lxgAAkk7QpCyPi/Gm0z5IidC8zw5Kij8S4yajjqcumQQIAWHu62YnQDXgpmIX7qpI1I1gcPRV9Zm+3D0RK4tqa6zGk9kBf8ySme1clUSJOXXaT9/fJcanRKZ26oJKgU6ISUihIQHmSDlzhJBLpVIDhzA9ZCQeo7V0YdQg13hhlRz21dYa5pPtFs67aEL1SmdB2C8iwS/qDKynm0zOhsZiY31lei+HcQNRmSpOcaExustRdSmTpIoShKMoSUApJ0yItgE8I4ShVQQlCOEoQciF5F4nrZ7qr7U/8AUcyd4AMfReuVtt46ryLF6DRcVtZAedebuPxRFP8AlJku0aJy6/qKiXjQNAOw6cFKu6xJInbSOn0UYiNdyNp/i5qqhPYZjjrPdPTsnOVlZWRdE8VessA1o4Lll5NOmHi32zDcOKVSxjZaZ9nybzXN1seTVz+Sus8MZr8ieicWI4wrz8t/ShdRPNvonyVfiipbYjkudXDuIV2KccAULmDsnvUvijNVaDm7hc2haC4oAhU1xRyHou2Oe3DPx6WGF3wpEabEOkHUFepeHq7bimKgykkBsxrmHNeONK9A/Di4OaoP25WmJ/d09CrWI34CeE8pFRTEISESYqgISTpKC5hPCOEloCAlCJPCCFfD2Hf0kleQYi4vcSARLTGvDZezXFIPa5p4tLT2XmvibCTblzjq0uDGwNhEAD0PogxVRgbJPMgDmjsbY1nAR+7XspVWhmIAEayt34Z8OCnTDnDU6+5Zzuo3hjuqmwwrKJjl6KY+0jhyhas4e1gJJaAATqqLFL+2ozmqCRyBPyXCy16JZFXcWx++ag1aAHNPX8QUCYBPHgQuFK9FSdtIHvWLjY6TKVzFKeCB9AclLDxC4Va7W7xCiob6UcwuZB7oa2JsB1Ud2KU+fwW5jWLlHchV+IUJEqwbUa7UEFKoyRCuPFYy1YzQW2/DWoRcOGsGiZ7yFjrinlcR1+C1v4bk/mTG3lODuy9F6eTqvUEkwSUikUKcoSqEUkxKSI0MJQumVKFpXOEoRwmIQc3BVuM4ey4plrxMSR3VoQuNf9JmYymY3hRHkeH2nm3bGxoagHuEkr0e4u6dtTdUeYa1vvceAHVeV3mJOt67zRJDmvexrtzO2iumYQ+o1tW7e+s9zA8Bzy5rGnYLnnNXddvHdzhGxjxS6q9xL4kkNAd7LQsrc1DUJLntkkky9egWuEUw2XZWDXKA32ndgNVS4oxrCRlfH8zCFn5I38X7WcoWc7EHfjwVha0ixQ6tKmdQIPMeyQVzN3VokDSo0n2SW69tOKnNamseaun1YHVVt5VkEA9EV7Z34aKjqflsMFoOUGO26pnXNQHKQM3UKY4GXk/YKtbkzqojqMcW/wDsp9OiD+slx+HopjKLQNGx/pW/bTn6bUtKs5h0MdiryyuPMHCRuub6AO0FR/yQkbjqNCCl1SS4hxKnD55rRfhvUy3RHA0nj5FZW5L2uyvcXRtOui134c0D+YL+HkOd2MgLcnDlleXpiYpJFVkyEpymKBimSSQaqE0I4TQqoIQkLomKo5FA4T98F1IQFRHkXi/ChQvWiAGOqU46MJ+m3uWrvzm2BI10aJMdAo/jmj+YaGNaTWbVc0aal2Uub6xorXAS2qylWEEPY1/Y8R7jK4586enCevDK32MXdAObRpPoSIfUfT9sjfc7LFXt7cVHHzKlRxkydSCvZPEVmyqJMg8wVg7zBPaMSdSrhZLzFuNvO2VYHaaEnjop2LWWS2D4M+exoP8ANB0WgsPDrnOAJgfGFMxnDhc3Nph9OMrJuroj9o2Hvj5hXKzfDUn1VdWv61aixrmaNpNZmLiXVCBGb37rG1WHz4M7GOmi9e8Q2LKdOGtAAbAgdF5ZjLMlRtTWA7K7sufjuq15NWbiI7MCYEcjC5i5qc3e8KzFKeoTi3C9Us1043G37Qm3DgYIDuoU6kA4SjbRXdjIXLLX0slnanxhgDqen7XT20Xon4f4d5dDzXCHv1AO/ljQHtM/BYDEBnqTwBFL/VufotX4PD33LCJkNc+oZ2ZER8QITetOdx3bXoBQkIimK25BQlGhIUUKZOkiNaQmhdIQkLSuZCYhGQhKiObggcupC5uCozeM1KTKzQf8R1a1e0g/pLTA+ZUOThr3uyudZve6q4gZjaVTvI/gO/Rd8Yw9zrunVkZWupucJ1DRxVnUMgHmJXmt1Xu1xEIVqdy3NTe17CJkPzfBQLnKzbfnzKO9wS1qy51Cnm/iaTTcT1LYVNdYBbDUscQOdeo75uT2hI7MxUMcadBvn3Eey0O9ln8z3bAK48IYMaLq9es7PVqPBe+IzgchwHIcoVfh5p2wBDGMYNYDcoKqca8bNktBy8NAVN/i6+6vvFt6zVoIPBed4hSFQOG8g+qe6xQ1vaBkGfVQTiLWmC4T66pq9pbNacKFU0fZfOX9rv4eh/up7HAwQdNFzqVmvbI/+hcGW1MmYIPRxb8lv2Z1Z0sIK41Lr9lOHPPLZg5lALKmdw496jj9VKo02tENAA5AQnsl2j1aAp+WNSBmc883EjX4rceCLRobUrAyXOFIdGgAn5j0WNvngAjm0BbHwBPkVJmM7Y7xr9FZzWMprGtQkUimXV5zFCSiQlRTFJIpINm4ICF2KBwWhyIQkLoUJQciEDgupQFQV2ItMSBJIy+7eFFbORsgAxsNgrZwUCrRyyASdzquWeP274Z8aVtccFz/ACodGvVSKwlQry/FIRIBXLp2hr20aRlOo5dFjbzAGNc4gyNSAR+kd1p23nmcQB34KFiV3b0gQ54LumplaTm8MJcU8ri3kSor7cA7Ceyuqxo1HlzXQNyCOCjXVek4wCOSSlxqFQpczK7hkJmgc+3ZE1+uqVJXRi7tXAFdqZUiWnayXyRIEAdlv/DlqaNuwHckvPY7fCFGwvw7SpFtR2d7oa6HRla/tCvF2xx1y4557moSYpJErVczIZRIYUCJSTFJVG3KEhOShJWlAQmKclMUAEICjcgKg5uUa5H1Utyj12yCO6VrHiqioJzN25d1ifEld2zd1qqtwWVC076x2WYx4RUmNCuGT0Ys7SF46QAcp4zqAud5hVdokupk8s5zfJaOnewNgNh71SYlfnWJ1lSV0mp2oKjKrdCPQ8FxyP5fFS6lySeHouXmFy0l05B1Ru2vRdqFR/7hC7UQAicQpawkUzxU/CqPmVabImXtB/pnX4KtDoA+9FqfA9pnqOqkaMblH9Z/4n1SRnK8NsmKeEoXd5wymKcpioGKZIpIGKZIpIjbEoSUEpStKRTJiUMoE4oSkShJUDOK5uREoHFBlPEtPy35x0P36KkuAKo5rTeJGTHVhCxrrjyyWnr71wy7enDpJbYAsIB5qpvMDJ1zDXorRt/odY3UK8xQRvrrK58ujOXGHZSQTz9FwNtHFSLi5zGZ5qOaq3yzdCDYQhuvX6JvNQGrx+5VZ2lM9ox9wvVMEsBb0GMA1yhzzzed15ZYjM4Dm4D3L2Fbxcs6aUikkV0cwlMU5TKBiExCdMSooYTJyUlUavMkXLnmSLloKvWbTa5ziGta0ucTsAsJiH4jBhd5VAFoMNLqkE+4D6qZ+IWKeXQFAEZqhBf0pj/n5Lyy4Mgid/mtSM2trT/FGoD7dvScP5ahYfjKvsN/EKyrwHufQcdIe2Wz3H1heLvfCDzU1E3X0fbXlOs3NTqU6jebXh4+CMuXzna3lSm4OpOqMcNi1xa4e8LS4f46v6EZqjKreVQZviNfipYu3puP6+X2f9FjsXtM22/zVjhniB2JU/MdTbTLXOpaPzBxgGdtN0rnrtyXlz4yezx/yw9w6pTMaqtq1narcXVo1wPH6LPXtgCTASZFxUBqFI1F3uLTKuGRa2xZYbOUbGkpALqwIaTsOMVKf9bfSV6+SvGaVSCDyIPvXqNbxFZN/Vc24nh5oJHcBawc/ItJTSqCr4zw9v8AmAe1N5+i4jxxh5/7x/2X/wBl05c2kJQys+PGmHn/ADA99J/9kbfF9gf8wz3tcPopqrteEppVWPEVmdrq3/3QFLt76lW/w6tKpx9moH6e5B3JSTSnUGkzIK1cMa5x2DXOPYJkltHiuO4o+5qvqPMkkwP4W8AFUudP3wSSW2UK6bOo349lHpidTsmSQG+rwGg6JqzHsjM1wkA6jgkks0em+FrI0LSm14hzpqvHU7e+IU2sY67pJLx3mvdjOIr69bQwqS9qQkkkWqS7uJUTMkktxiiaUbSkkjOxByp7t2Wo/f8AUT66pJLph25+Xpw8xGCCkkuriF0jsmD0klUOHqVaXLqbg5jnNcIIIMEFJJE29H8GeJ3XJ8isZqBpNN3/AJANweqdJJc7HSP/2Q=="
              />
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
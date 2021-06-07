import IconCommunication from '../assets/IconCommunication';
import IconDecouverte from '../assets/IconDecouverte';
import IconPassion from '../assets/IconPassion';
import IconSucces from '../assets/IconSucces';

const ValeurCard = ({ title, paragraphe, presetIcon, childNb }) => {

  const styleChoice = (type) => {
    if (type === "icon")
      return {...(childNb === 1 || childNb === 3 ? styles.droit : styles.gauche)};
    else if (type === "card")
      return {...(childNb === 1 || childNb === 3 ? styles.borderRight : styles.borderLeft), ...(childNb === 1 || childNb === 2 || childNb === 3 ? styles.borderBottom : null)};
  }

  return(
    <div className="valeurCard" style={styleChoice("card")}>
      <div className="valeurCardContainer">
        <div className="iconContainer" style={styleChoice("icon")} >
          {presetIcon === "succes" ? <IconSucces className="iconSucces" /> : null}
          {presetIcon === "passion" ? <IconPassion className="iconSucces" /> : null}
          {presetIcon === "decouverte" ? <IconDecouverte className="iconSucces" /> : null}
          {presetIcon === "communication" ? <IconCommunication className="iconSucces" /> : null}
        </div>
        <p className="title">{title}</p>
        <p className="paragraphe">{paragraphe}</p>
      </div>
    </div>
  );
}

const styles = {
  droit: {
    left: "-10vw"
  },
  gauche: {
    right: "-10vw"
  },
  borderLeft: {
    borderLeft: "solid 0.15vw var(--appcolor)",
    padding: "4vw 20vw 4vw 15vw",
  },
  borderRight: {
    borderRight: "solid 0.15vw var(--appcolor)",
    padding: "4vw 15vw 4vw 20vw"
  },
  borderTop: {
    borderTop: "solid 0.15vw var(--appcolor)",
  },
  borderBottom: {
    borderBottom: "solid 0.15vw var(--appcolor)",
  },
}

export default ValeurCard;
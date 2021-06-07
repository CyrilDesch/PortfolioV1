export default function automaticTitle(scrollPosition) {
  if(scrollPosition < 600) {
    if(document.getElementsByClassName('accueil')[0] !== undefined) {
      document.getElementsByClassName('presentation')[0].className = "presentation";
      document.getElementsByClassName('accueil')[0].className = "accueil coloredText";
    }
  } else if (scrollPosition < 2700) {
    if(document.getElementsByClassName('presentation')[0] !== undefined){
      document.getElementsByClassName('presentation')[0].className = "presentation coloredText";
      document.getElementsByClassName('accueil')[0].className = "accueil";
      document.getElementsByClassName('projets')[0].className = "projets";
    }
  } else if (scrollPosition < 5000) {
    if(document.getElementsByClassName('projets')[0] !== undefined){
      document.getElementsByClassName('projets')[0].className = "projets coloredText";
      document.getElementsByClassName('presentation')[0].className = "presentation";
    }
  }
}
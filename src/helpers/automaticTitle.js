export default function automaticTitle(scrollPosition) {
  if(scrollPosition < 530) {
    if(document.getElementsByClassName('accueil')[0] !== undefined) {
      document.getElementsByClassName('presentation')[0].className = "presentation";
      document.getElementsByClassName('accueil')[0].className = "accueil coloredText";
    }
  } else if (scrollPosition < 1200) {
    if(document.getElementsByClassName('presentation')[0] !== undefined){
      document.getElementsByClassName('presentation')[0].className = "presentation coloredText";
      document.getElementsByClassName('accueil')[0].className = "accueil";
    }
  }
}
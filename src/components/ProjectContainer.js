import More from "../assets/More"

const ProjectContainer = ({ src, title, description, typeProject, onClick }) => {

  return(
    <div onClick={onClick} className={"projectContainer " + (typeProject === "app" ? "app" : "site")}>
      <img className="image" src={src} alt="Projet" />
      <p className="title">{title}</p>
      <p className="paragraphe">{description}</p>
      <More className="iconPlus" />
    </div>
  )
}

export default ProjectContainer;
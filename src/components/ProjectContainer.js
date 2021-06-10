const ProjectContainer = ({ src, title, description }) => {
  return(
    <div className="projectContainer">
      <img className="image" src={src} alt="Projet" />
      <p className="title">{title}</p>
      <p className="paragraphe">{description}</p>
    </div>
  )
}

export default ProjectContainer;
import styles from "./Projects.module.css"

export function ProjectCard({image, title, description, tecnologies, projectLink, githubLink}) {
    return (
        <div className={styles.projectCardContainer}>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                {tecnologies.map(tecnology => (
                    <span key={tecnology}>{tecnology}</span>
                ))}
            </div>
            <div>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
        </div>
    )
}
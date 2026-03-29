export function ProjectCard({image, title, description, tecnologies, projectLink, githubLink}) {
    return (
        <div>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
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
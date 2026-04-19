import { ProjectCard } from "./ProjectCard"
import styles from "./Projects.module.css"

export function Projects() {
    return (
        <section className={styles.projectsContainer} id="projectsSection">
            <h1>Proyectos</h1>
            <ProjectCard 
                image="/path/to/image.jpg"
                title="Project Title"
                description="Project description goes here."
                tecnologies={["React", "Node.js", "MongoDB"]}
                projectLink="https://example.com/project"
                githubLink="https://github.com/example/project"
            />
        </section>
    )
}
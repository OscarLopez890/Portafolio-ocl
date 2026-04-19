import styles from "./Navigation.module.css"

export function Navigation(){
    return (
        <nav className={styles.navigation}>
            <a href="#presentationSection">Inicio</a>
            <a href="#experienceSection">Experiencia</a>
            <a href="#projectsSection">Proyectos</a>
            <a href="#tecnologiesSection">Tecnologias</a>
            <a href="#contactSection">Contacto</a>
        </nav>
    )
}
import styles from "./Navigation.module.css"

export function Navigation(){
    return (
        <nav className={styles.navigation}>
            <a href="#home">Inicio</a>
            <a href="#experience">Experiencia</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
            <a href="#tecnologies">Tecnologias</a>
            <a href="#about">Acerca de mi</a>
        </nav>
    )
}
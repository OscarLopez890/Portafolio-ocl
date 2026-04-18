import { TecnologyCard } from "./TecnologyCard"
import styles from "./Tecnologies.module.css"

export function Tecnologies() {
    return (
        <section className={styles.tecnologiesSection}>
            <h1>Tecnologías</h1>
            <section>
                <h2>Lenguajes</h2>
                <div className={styles.tecnologiesContainer}>
                    <TecnologyCard name="JavaScript" icon="/src/images/javascript.png" color="#eee5a8"/>
                    <TecnologyCard name="Java" icon="/src/images/java.png" color="#bd9e73"/>
                    <TecnologyCard name="Python" icon="/src/images/python.png" color="#577a97"/>
                    <TecnologyCard name="PHP" icon="/src/images/php.png" color="#836192"/>
                </div>
            </section>
            <section>
                <h2>Frameworks y Librerías</h2>
                <div className={styles.tecnologiesContainer}>
                    <TecnologyCard name="React" icon="/src/images/react.png" color="#c0e6f0"/>
                    <TecnologyCard name="Spring Boot" icon="/src/images/springboot.png" color="#adc49f"/>
                    <TecnologyCard name="Bootstrap" icon="/src/images/bootstrap.png" color="#b882c6"/>
                </div>
            </section>
            <section>
                <h2>Bases de Datos</h2>
                <div className={styles.tecnologiesContainer}>
                    <TecnologyCard name="MySQL" icon="/src/images/mysql.png" color="#baccfd"/>
                    <TecnologyCard name="MariaDB" icon="/src/images/mariadb.png" color="#fdf9ba"/>
                    <TecnologyCard name="MongoDB" icon="/src/images/mongodb.png" color="#8bf297"/>
                    <TecnologyCard name="Postgre" icon="/src/images/postgre.png" color="#95aaff"/>
                </div>
            </section>
            <section>
                <h2>Herramientas</h2>
                <div className={styles.tecnologiesContainer}>
                    <TecnologyCard name="Git" icon="/src/images/git.png" color="#f7a390"/>
                    <TecnologyCard name="VS Code" icon="/src/images/vscode.png" color="#619ec7"/>
                    <TecnologyCard name="PostMan" icon="/src/images/postman.png" color="#fe9c7c"/>
                </div>
            </section>
        </section>
    )
}
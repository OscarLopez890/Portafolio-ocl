import styles from "./Experience.module.css"

export function ExperienceCard({title, description, tecnologies, image}) {
    return (
        <div className={styles.experienceCard}>
            <img src={image} alt={title}/>
            <div className={styles.experienceContent}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <li>
                {tecnologies.map((tecnology, index) => (
                    <ul key={index}>{tecnology}</ul>
                ))}
            </li>
        </div>
    )
}
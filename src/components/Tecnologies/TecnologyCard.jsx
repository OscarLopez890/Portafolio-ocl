import styles from "./Tecnologies.module.css"

export function TecnologyCard({name, icon, color}) {
    return (
        <div className={styles.tecnologyCard} style={{backgroundColor: color}}>
            <img src={icon} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}
import styles from './Contact.module.css';

export function Contact() {
    return (
        <section className={styles.contactContainer}>
            <h1>Contacto</h1>
            <p>Si deseas contactarme:</p>
            <div className={styles.contactIcons}>
                <a href="mailto:tu-email@example.com">
                    <img src="src/images/Gmail.png" alt="Email Icon" />
                </a>
                <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
                    <img src="src/images/Linkedin.png" alt="LinkedIn Icon" />
                </a>
            </div>
        </section>
    )
}
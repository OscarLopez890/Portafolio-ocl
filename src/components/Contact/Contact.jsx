import styles from './Contact.module.css';

export function Contact() {
    return (
        <section className={styles.contactContainer} id="contactSection">
            <h1>Contacto</h1>
            <p>Si deseas contactarme:</p>
            <div className={styles.contact}>
                <div className={styles.contactIcons}>
                    <a href="https://www.linkedin.com/in/oscar-castillo-lópez-25b306175/" target="_blank" rel="noopener noreferrer">
                        <img src="src/images/Linkedin.png" alt="LinkedIn Icon" />
                    </a>
                </div>
                <svg viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#1572]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"> </path> </g> </g> </g> </g></svg>
                <img src="src/images/contactM.jpeg" className={styles.contactImg}></img>
            </div>
        </section>
    )
}
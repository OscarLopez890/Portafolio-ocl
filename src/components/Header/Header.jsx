import { Navigation } from "../Navigation/Navigation"
import styles from "./Header.module.css"

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <img src="src/images/logo.png" alt="Logo"></img>
            <Navigation />
        </header>
    )
}
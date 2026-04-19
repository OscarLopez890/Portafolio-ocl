import { Presentation } from "../components/Presentation/Presentation"
import { Experience } from "../components/Experience/Experience"
import { Projects } from "../components/Project/Projects"
import { Tecnologies } from "../components/Tecnologies/Tecnologies"
import { Contact } from "../components/Contact/Contact"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Presentation/>
            <Experience/> 
            <Projects/>
            <Tecnologies/>
            <Contact/>
        </div>
    )
}
import { Presentation } from "../components/Presentation"
import { Experience } from "../components/Experience/Experience"
import { Projects } from "../components/Project/Projects"
import { Tecnologies } from "../components/Tecnologies/Tecnologies"
import { Contact } from "../components/Contact"

export default function Home() {
    return (
        <>
            <Presentation/>
            <Experience/> 
            <Projects/>
            <Tecnologies/>
            <Contact/>
        </>
    )
}
import { Presentation } from "../components/Presentation"
import { Experience } from "../components/Experience"
import { Projects } from "../components/Projects"
import { Tecnologies } from "../components/Tecnologies"
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
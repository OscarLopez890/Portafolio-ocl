import { ExperienceCard } from "./ExperienceCard"

export function Experience() {
    return (
        <section>
            <h1>Experiencia</h1>
            <ExperienceCard
                title="Desarrollador Web FullStack | Freelance"
                description="Implementé un sistema de gestión de inventarios para un taller de fabricación de pantalones, 
                mejorando la eficiencia en el seguimiento de productos e inventarios para la fabricación y venta."
                tecnologies={["CSS", "React", "Spring Boot", "PostgreSQL"]}
                image="src/images/Programador.png"
            />
            <ExperienceCard
                title="Desarrollador Web FullStack | CIATEQ"
                description="Lideré el desarrollo de un sistema institucional orientado a centralizar 
                    procesos administrativos, normativos y de mejora continua."
                tecnologies={["HTML", "CSS", "JavaScript", "PHP", "MariaDB", "Bootstrap"]}
                image="src/images/ciateq.png"
            />
            <ExperienceCard
                title="Desarrollador Web FullStack | ITESA"
                description="Implementé mejoras y ampliaciones de un sistema web para la gestión y 
                evaluación de artículos científicos con la implementación de un modelo de IA."
                tecnologies={["CSS", "React", "Node.js", "MongoDB Atlas"]}
                image="src/images/itesa.png"
            />
        </section>
    )
}
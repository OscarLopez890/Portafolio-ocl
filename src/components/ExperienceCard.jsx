export function ExperienceCard({title, description, tecnologies, image}) {
    return (
        <div>
            <img src={image} alt={title}/>
            <div>
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
import { TecnologyCard } from "./TecnologyCard"

export function Tecnologies() {
    return (
        <section>
            <section>
                <h2>Lenguajes</h2>
                <div className="tecnologies-container">
                    <TecnologyCard name="JavaScript" icon="/assets/javascript.png" color="#f0db4f"/>
                    <TecnologyCard name="Python" icon="/assets/python.png" color="#306998"/>
                    <TecnologyCard name="Java" icon="/assets/java.png" color="#b07219"/>
                </div>
            </section>
            <section>
                <h2>Frameworks</h2>
                <div className="tecnologies-container">
                    <TecnologyCard name="React" icon="/assets/react.png" color="#61dafb"/>
                    <TecnologyCard name="Django" icon="/assets/django.png" color="#092e20"/>
                    <TecnologyCard name="Spring" icon="/assets/spring.png" color="#6db33f"/>
                </div>
            </section>
            <section>
                <h2>Herramientas</h2>
                <div className="tecnologies-container">
                    <TecnologyCard name="Git" icon="/assets/git.png" color="#f34f29"/>
                    <TecnologyCard name="Docker" icon="/assets/docker.png" color="#0db7ed"/>
                    <TecnologyCard name="VS Code" icon="/assets/vscode.png" color="#007acc"/>
                </div>
            </section>
        </section>
    )
}
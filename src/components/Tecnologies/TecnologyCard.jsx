export function TecnologyCard({name, icon, color}) {
    return (
        <div className="tecnology-card" style={{backgroundColor: color}}>
            <img src={icon} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}
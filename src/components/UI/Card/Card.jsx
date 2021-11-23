const Card=({name, period, active, confirmed, deaths})=>{


    return(
        <div>
        <h2>Country: {name}</h2>
        <p>For period days : {period}</p>
        <p>Amount of active : {active}</p>
        <p>Amount confirmed : {confirmed}</p>
        <p>Amount of deaths : {deaths}</p>
        </div>
    )
}
export default Card
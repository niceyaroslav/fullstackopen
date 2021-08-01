import React from "react"

const Country = ({data}) => {
    console.log(data)
    
    return (
        <>
            <p><strong>{data.name}</strong></p><br/>
            <p>capital: {data.capital}</p>
            <p>population: {data.population}</p><br/>
            <p><strong>languages</strong></p>
            {data.languages.map((lang, index) => 
            <li key={index}>{lang.name}</li>)}
            <img src={data.flag} alt="flag" style={{height: "200px", border: "1px solid black"}}/>
        </>
    )
}
export default Country;
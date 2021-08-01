import React from "react"

const Countries = ({filteredCountries, showCountry}) => {
    if (filteredCountries.length === 0) {
        return <p>Please specify your filter, blyat!</p>
    } else if (filteredCountries.length === 1) {
        showCountry(filteredCountries[0])
        return null 
    } else if ( 1 < filteredCountries.length && filteredCountries.length <= 10) {
        return filteredCountries.map((element, index) => 
            <li key={index}>{element.name} <button onClick={() => showCountry(element)}>show</button></li>)
    } 
    return <p>Too unspecific...</p>
}

export default Countries;
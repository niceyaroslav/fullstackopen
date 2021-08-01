import "./App.css"
import Filter from "./components/Filter.js"
import Countries from "./components/Countries.js"
import axios from "axios"
import {useEffect, useState, React} from 'react'
import {debounce} from "lodash"
import Country from "./components/Country"
import Weather from "./components/Weather"

function App() {

  const [filter, setFilter] = useState("")
  const [countries, setCountries ] = useState([])
  const [filteredCountries, setFilteredCountries ] = useState([])
  const [selectedCountry, setSelectedCountry ] = useState()
  const [weather, setWeather] = useState()

  
    
    useEffect(() => {if (selectedCountry) {const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: {q: selectedCountry.capital},
      headers: {
        'x-rapidapi-key': 'ef02bcb99bmshaf423efbd6b668cp10bfa2jsn8af08348c729',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setWeather(response.data)
    }).catch(function (error) {
      console.error(error);
    })}}, [selectedCountry])

  useEffect(() => {
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const inputHandler = debounce(event => {
    setFilter(event.target.value);
    filterCountries(event.target.value);
    console.log(event.target.value)
  }, 1000)


  const filterCountries = (filter) => {
    
      setFilteredCountries([])
      setSelectedCountry(null)
      setWeather(null)
   
      if (filter) {const filtered = countries.filter(c => c.name.includes(filter[0].toUpperCase() + filter.slice(1) || 
      c.name.includes(filter)))
      setFilteredCountries(filtered)
    }}

  const showCountry = (country) => {
    setSelectedCountry(country)
  }

  console.log(countries.slice(0, 10))
  console.log(filter)
  console.log(selectedCountry)
  return (
    <div className="App">
      <Filter inputHandler={inputHandler}/>
      {(!selectedCountry) && <Countries filteredCountries={filteredCountries} showCountry={showCountry}/>}
      {(selectedCountry) && <Country data={selectedCountry}/>}
      {(weather) && <Weather data={weather}/>}
    </div>
  );
}

export default App;

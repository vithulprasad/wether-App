import { useState } from 'react'
import {AsyncPaginate} from"react-select-async-paginate"
import { GEO_API_URL,Geo_API_options} from "../../api"

function Search({onSearchChange}) {
    const [search,setSearch] = useState(null)
    const handleOnChange = (searchData) =>{
        setSearch(searchData)
        onSearchChange(searchData)
    }
    const loadOptions = (inputValue)=>{
        return  fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, Geo_API_options)
        .then((Response)=>Response.json())
        .then((Response)=>{return {
            options:Response.data.map((city)=>{
                return {
                    value:`${city.latitude} ${city.latitude}`,
                    label:`${city.name},${city.countryCode}`,
                }
            })
        }})
        .catch((err)=>{console.log(err);})
  
    }
  return (
    <AsyncPaginate
     placeholder="search for city"
     debounceTimeout={600}
     value={search}
     onChange={handleOnChange}
     loadOptions={loadOptions}
     />
   
  )
}

export default Search

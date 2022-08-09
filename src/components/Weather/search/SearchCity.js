import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./WeatherAPI";

const SearchCity = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const loadOptions = async (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=200000&namePrefix=${inputValue}&units=imperial`,
            // `${GEO_API_URL}/cities/Q18383/nearbyCities?radius=100&minPopulation=1000000&units=imperial`,
            // `${GEO_API_URL}/cities/Q18383/nearbyCities?countryIds=US&minPopulation=200000&namePrefix=${inputValue}&units=imperial`,
            geoApiOptions
        )
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.longitude} ${city.latitude}`,
                            label: `${city.name}, ${city.regionCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default SearchCity;
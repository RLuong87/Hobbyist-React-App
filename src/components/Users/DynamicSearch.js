import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';

const DynamicSearch = () => {

    const [myOptions, setMyOptions] = useState([]);

    const getDataFromAPI = () => {
        console.log("Options fetched from API");
        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
            return response.json()
        }).then((res) => {
            console.log(res.data);
            for (let index = 0; index < res.data.length; index++) {
                myOptions.push(res.data[index].employee_name)
            }
            setMyOptions(myOptions);
        })
    }

    return (
        <div style={{ marginLeft: '40%', marginTop: '60px' }}>
            <h3>Search for a user</h3>
            <Autocomplete
                style={{ width: 500 }}
                freeSolo
                autocomplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (
                    <Autocomplete {...params}
                        onChange={getDataFromAPI}
                        variant="outlined"
                        label="Search Box"
                    />
                )}
            />
        </div>
    )
}

export default DynamicSearch;
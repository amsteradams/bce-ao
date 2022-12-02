import { TextField } from '@mui/material';
import { useState } from 'react';
const SearchNav = () => {
    
    const [myOptions, setMyOptions] = useState([])
  
    const getDataFromAPI = () => {
        console.log("Options Fetched from API")
    
        fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        return response.json()
        }).then((res) => {
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
            myOptions.push(res.data[i].employee_name)
        }
        setMyOptions(myOptions)
        })
    }

    return (
        <div style={{ marginLeft: '40%', marginTop: '60px' }}>
          <h3>Greetings from GeeksforGeeks!</h3>
              <TextField 
                onChange={getDataFromAPI}
                variant="outlined"
                label="Search Box"
              />
        </div>
    )
  }
  
  export default SearchNav
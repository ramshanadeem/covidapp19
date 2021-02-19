import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getCountries } from '../../Api';

import './Country.css';

const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setCountries(await getCountries());
      };
    
    fetchAPI();
  }, []);

  return (
    <div style={{color:'white'}}>
    <FormControl className='formControl'>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="" >Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
  );
};

export default Countries;
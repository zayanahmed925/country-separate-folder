import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Countries = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h2>All Country: {countries.length}</h2>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
        </div>
    );
};

export default Countries;
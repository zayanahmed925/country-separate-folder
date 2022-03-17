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
                countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
            }
        </div>
    );
};

export default Countries;
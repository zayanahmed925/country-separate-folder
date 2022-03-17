import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

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
            <div className='all-country'>
                {
                    countries.map(country => <Country country={country} key={country.cca3} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
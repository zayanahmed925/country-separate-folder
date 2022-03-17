import React from 'react';
import './Country.css';
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Name: {props.country.name.common}</h2>
            <p>Population: {props.country.population}</p>
            <img src={props.country.flags.png} alt="" />
        </div>
    );
};

export default Country;
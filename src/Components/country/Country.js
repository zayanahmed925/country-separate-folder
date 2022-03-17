import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country)
    const { population, flags, name } = props.country
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;
import React from 'react'

export default function Card({ personData }) {
    // console.log(personData);
    return (
        <div>
            <div className='card-box'>
                <h2>{personData.id}</h2>
                <h2>{personData.name}</h2>
                <h4>{personData.quote}</h4>
            </div>
        </div>
    )
}

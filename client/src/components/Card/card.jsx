import React from 'react'
import './card.css'
import Button from '../button/button'

function Card(){
    return(
        <>
            <div id="card">
                <div id='card-info'>
                    <h1 id='card-title'>Feed</h1>
                    <h2 id='card-amount'>12,000/=</h2>
                    <Button />
                </div>
                
            </div>
        </>
    )
}

export default Card
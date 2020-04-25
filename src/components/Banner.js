import React from 'react'

const Banner = (props) =>(
 
    <div>
        <div className="banner-container">
            <div    className="banner-image">
                    <img src={props.image} alt={props.title}/>
            </div>

            <div className="banner-title">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>{/* end banner container */}
    </div>
)


export default Banner;
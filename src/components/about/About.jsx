import React from 'react'
import '../about/About.css'
import {useParams} from "react-router-dom";
import Header from '../Header/Header';

function About({data}) {

    
    const {id} = useParams();
    
    const current = data.find((e)=>parseInt(e.id) === parseInt(id))

    return (
        <div className='about'>
        <Header/>
            <div className="data-content">
                <div className="content-img">
                        <div className="frame">
                            <img  src={current.image} alt=""/>
                        </div>
                </div>
                <div className="content-about">
                    <h3><b>{current.title}</b></h3>
                    <p>{current.alt}</p>
                    <h4 className='about-price'><b>{current.price}</b> AZN</h4>
                    <p >Lorem, ipsum dolor sit amet consluptates sapiente aut rerum molestiae explicabo cumque nulla magnam? Error, ab laborum.</p>
                            
                </div>
            </div>
        </div>
    )
}

export default About

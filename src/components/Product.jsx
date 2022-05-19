import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from './Header/Header';


function Product({ data }) {

    const [basket, setBasket] = useState([])


    return (
        <div className='card-all'>
            <Header basket={basket} />
            <div className="card-data">
                {
                    data.map(e => {
                        return (
                            <div className="card" key={e.id}>
                                <div className=' card-body' to={`/about/${e.id}`}>
                                    <div className="for-img pb-5">
                                    <Link to={`/about/${e.id}`}> <img src={e.image} alt="" /></Link>
                                       
                                    </div>
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.price} </p>
                                   
                                    <button onClick={() => {
                                      
                                        let existProd = basket.find(x=> x.id === e.id)
                                        existProd=== undefined ? setBasket([...basket, e]) : e.count +=1
                                        localStorage.setItem("basket", JSON.stringify(basket))
                                    }}  className='btn btn-primary '>Add to Cart</button>
                                </div>

                            </div>
                        )
                    })
                }</div>
        </div>
    )
}

export default Product

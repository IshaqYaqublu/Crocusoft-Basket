import React,{useEffect,useState} from 'react'
import "./Header.css"
import logo from "../Photos/header-logo.png"

function Header({basket}) {

    const [count,setCount] = useState([])
    const [visible,setVisible] = useState("none")

    useEffect(()=>
    {
        const x = JSON.parse(localStorage.getItem("basket"))
        setCount(x)
    },[basket])


    const data = JSON.parse(localStorage.getItem("basket"))

    let sum = 0;
    data&&data.forEach(pr => {
       let sum_price = pr.price * pr.count
       sum += sum_price
                
    })



    // let price = Object.values(data[1]);

   

    const handleHide = ()=>
    {
        setVisible(visible === "none"?"block":"none")
    }

    // const RemoveHandler =(e)=>{
    //    console.log(e.localStorage.removeItem("basket"));

    // }

    return (
        <div className='head-nav'>
            <h1 className='crocusoft-logo'><img src={logo} alt="" /></h1>
            <div className="basket-counter">
                <i onClick={handleHide} className="fa-solid fa-basket-shopping"></i>
                <div className={`portal ${visible}`}>
                    <ul>
                    {
                            data.map(e=>
                                {
                                    return(
                                            <li key={e.id}> <p className='basket-image'><img src={e.image} alt="" /></p><p>{e.title}</p> <p>{e.price}AZN</p> <p>x{e.count} </p> <p className='remove-product' onClick={() => {
                                                let basket = JSON.parse(localStorage.getItem('basket'))
                                                let filteredItems = basket.filter(x => x.id !==e.id)
                                                localStorage.setItem("basket", JSON.stringify(filteredItems))
                                            }} >X</p></li>
                                    )
                                })
                        }
                    </ul>
                     <div className="total">
                    <p>Total Price: {sum.toFixed(2)} AZN</p>
                     </div>
                </div>
                <span>{count&&count.length}</span>
            </div>
            
            
        </div>
    )
}

export default Header

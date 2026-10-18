
import React, { useEffect, useState } from 'react';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';
import { setSelectedProduct } from '../redux/slices/productSlice';

function ProductDetails() {

    const {id} = useParams()
    
    const {products, selectedProduct} = useSelector((store) => store.product)
    const {price,image,title,description} = selectedProduct;

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }

    const dispatch = useDispatch ();

    useEffect(() => {

        getProductById();

    }, [] )

    const getProductById = () => {

        products && products.map((product) => {
            if (product.id == id){
                dispatch(setSelectedProduct(product))
            }
            
        }) 

    }

  return (
    <div style={{marginTop:'30px' , display: 'flex' , flexDirection: 'row' , justifyContent:'center'}}>
        <div style={{marginRight:'50px'}}>
        <img src={image} width={300} height={500} alt="" />
        </div>

        <div>
            <h1 style={{fontFamily:'arial'}}>{title}</h1>
            <p style={{fontFamily:'Poppins' , fontSize:'20px'}} >{description}</p>
            <h1 style={{fontFamily:'Poppins' , fontSize:'50px', fontWeight:'700', color:'darkred'}}> {price}₺</h1>

            <div style={{display:'flex' , alignItems:'center'}}>

                <CiSquarePlus onClick={increment} style={{fontSize:'45px' ,marginRight:'5px'}}/>

                 <span style={{fontSize:'40px'}}> {count} </span> 

                 <CiSquareMinus onClick={decrement} style={{fontSize:'45px',marginLeft:'5px'}}/>
            </div>
            <div>
                <button 
                onClick= {addBasket}
                style={{
                    width:'100px',
                    marginTop:'25px',
                    border:'none',
                    padding:'10px',
                    backgroundColor:'rgb(250, 177, 177)',
                    color:'#fff',
                    borderRadius:'5px'

                        
                }  }>Sepete ekle</button>
            </div>
        </div>
       
     </div>
  )
}

export default ProductDetails
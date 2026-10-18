import Drawer from '@mui/material/Drawer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import { calculateBasket, removeFromBasket, setDrawer } from './redux/slices/basketSlice';

function App() {

  const {products , drawer , totalAmount} = useSelector((store) => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(calculateBasket());
  }, [] )


  return (
    <>

    <div>
      <PageContainer>
        <Loading/>
        <Header/>
        <RouterConfig/>
        <Drawer 
        className= 'drawer' 
        onClose={()=> dispatch(setDrawer())}  
        anchor='right' 
        open={drawer}
        sx={{padding:'20px'}}
        >

         {products.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '50px' }}>
            Sepetiniz boş
        </p>
    ) :
        
          products && products.map((product) => {
            return(
              <div key={product.id} >
              <div className="flex-row"  style={{padding:'30px'}} >  
                <img style={{marginRight:'10px'}} src={product.image} width={50} height={50} />
                <p style={{width:'320px', marginRight:'10px'}}> {product.title}({product.count}) </p>
                <p style={{fontWeight:'bold' , marginRight:'10px'} } >{product.price}TL </p>
                <button style={{padding:'5px' , borderRadius:'5px', backgroundColor:'darkred', border:'none' , color:'#fff' , marginLeft:'10px'}} 
                onClick={() => dispatch(removeFromBasket(product.id))}
                >Sepetten Çıkar</button>
              </div>

              </div>
            )
          })
        }
         <div>
              <p style={{textAlign:'center'}} >Toplam Tutar: {totalAmount}</p>
            </div>
      </Drawer>
        
      </PageContainer>
    </div>
    </>
  )
}

export default App

import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';

function App() {


  return (
    <>

    <div>
      <PageContainer>
        <Loading/>
        <Header/>
        <RouterConfig/>

    
      </PageContainer>
    </div>
    </>
  )
}

export default App

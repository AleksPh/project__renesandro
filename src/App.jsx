
import '../src/style/style.css'

import BackgroundVideo from './components/main/bgcVideo'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Table from './components/main/table'



function App() {

  

  return (
    <div className='wrapper container'>
      <BackgroundVideo/>
      <Header/>  
      <Table/>  
      <Footer/>

    </div>
   
  
  )
}

export default App

// import { useState } from 'react'
// import { useState } from 'react'
import '../src/style/style.css'
import BackgroundVideo from './components/bgcVideo'
import Footer from './components/footer'
import Header from './components/header'
import Table from './components/table'
// import TaskList from './components/taskList'



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

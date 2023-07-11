import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Header title="My React Application"/>
 <Content/>
 <Footer/>
  </React.StrictMode>,
)

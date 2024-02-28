import { useState } from 'react'
import Header from './components/Header.jsx'
import Body from './components/Main.jsx'
import Footer from './components/Foooter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-gradient-to-b from-From-400 to-To-400 overflow-hidden overflow-y-hidden '>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App

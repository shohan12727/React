import './App.css'
import Counter from './Counter'
import Props from './Props'
import Props2 from './Props2'
import Hero from '../Hero'

function App() {
  

  return (
    <>
     <Counter></Counter>
     <Props name='Shohan'></Props>
     <Props2 age='20'></Props2>
     <Hero></Hero>
    </>
  )
}

export default App

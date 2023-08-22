
import './App.css'
import AllNews from './components/AllNews/AllNews'
import Footer from './components/Footer/Footer'
import Heading from './components/Heading/Heading'
import LeftAdds from './components/LeftAdds/LeftAdds'
import Navbar from './components/Navbar/Navbar'
import RightAdds from './components/RightAdds/RightAdds'


function App() {



  return (
   <div>
    <Heading />
    <Navbar />
    <div className='grid grid-cols-8 gap-4 mt-16'>
      <div className='col-span-2'>
      <LeftAdds />
      </div>
      <div className='col-span-4'>
        <AllNews />
      </div>
      <div className='col-span-2'>
        <RightAdds />
      </div>
    </div>
    <Footer />
   </div>
  )
}

export default App

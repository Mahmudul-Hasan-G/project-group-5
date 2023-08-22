
import './App.css'
import AllNews from './components/AllNews/AllNews'
import Heading from './components/Heading/Heading'
import LeftAdds from './components/LeftAdds/LeftAdds'
import RightAdds from './components/RightAdds/RightAdds'


function App() {



  return (
   <div>
    <Heading />
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
   </div>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin} from './pages/Signin'
import { Post } from './pages/Post'
import { Posts } from './pages/Posts'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Signup' element= {<Signup />}></Route>
        <Route path='/Signin' element= {<Signin />}></Route>
        <Route path='/Post/:id' element= {<Post />}></Route>
        <Route path='/Posts' element= {<Posts />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

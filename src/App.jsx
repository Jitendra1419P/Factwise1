import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Model from "./components/Model/Model"
import Delete from "./components/Delete/Delete"
const App = () => {


  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/model/:id' element={<Model />}></Route>
  <Route path='/delete/:id' element={<Delete />}></Route>
  
 </Routes>
 </BrowserRouter>

  )
}

export default App
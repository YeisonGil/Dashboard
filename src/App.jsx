import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar"
import Inicio from "./pages/Inicio"
import Components from "./pages/Components"
import Charts from "./pages/Charts"
import UiFeatures from "./pages/UiFeatures"
import FormElements from "./pages/FormElements"
import Tables from "./pages/Tables"
import Maps from "./pages/Maps"
import MenuLvl1 from "./pages/MenuLvl1"
import Pages from "./pages/Pages"


function App() {
  return (
    <div className="general">
      <BrowserRouter>
      <div className="nav">
        <Sidebar/>
      </div>
      <div className="content">
          <Navbar/>
          <Routes>
            <Route path="/" element={ <Inicio/> }/>
            <Route path="/components" element={ <Components/> }/>
            <Route path="/charts" element={ <Charts/> }/>
            <Route path="/UiFeatures" element={ <UiFeatures/> }/>
            <Route path="/FormElements" element={ <FormElements/> }/>
            <Route path="/tables" element={ <Tables/> }/>
            <Route path="/maps" element={ <Maps/> }/>
            <Route path="/pages" element={ <Pages/> }/>
            <Route path="/menulvl1" element={ <MenuLvl1/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

import "./navbar.css"
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { BsPersonCircle } from 'react-icons/bs'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <AiOutlineMenu className="navbar__menu-icon"/>
      </div>
      <div className="navbar__searcher">
        <AiOutlineSearch className="navbar__searcher-icon"/>
        <input type="text" className="navbar__searcher-input" placeholder="Search for..." />
      </div>
      <div className="nav2">
        <p className="nav2__p">Have questions?<a className="nav2__p-a" href="#">contact@akveo.com</a></p>
        <BsBell className='nav2__bell'/>
        <SlEnvolopeLetter className='nav2__letter'/>
        <BsPersonCircle className='nav2__person'/>
      </div>
    </div>
  )
}

export default Navbar
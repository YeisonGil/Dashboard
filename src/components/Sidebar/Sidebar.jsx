import './sidebar.css'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';



function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className='Titulo'><span className='Titulo__color'>Blur</span>Admin</h2>
      <ul className='sidebar__ul'>
        <li className='sidebar__li'>
          <Link to="/" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Inicio</div></Link>
          <Link to="/components" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Components</div></Link>
          <Link to="/charts" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Charts</div></Link>
          <Link to="/UiFeatures" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>UI Features</div></Link>
          <Link to="/FormElements" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Form Elements</div></Link>
          <Link to="/Tables" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Tables</div></Link>
          <Link to="/Maps" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Maps</div></Link>
          <Link to="/Pages" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Pages</div></Link>
          <Link to="/MenuLvl1" className='sidebar__a'><AiFillHome/><div className='sidebar__text'>Menu Level 1</div></Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar
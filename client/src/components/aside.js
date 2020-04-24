import React from 'react';
import '../componentsCss/aside.css';
import escudo from '../images/Escudo1.png';
import { Link } from 'react-router-dom';

function Aside() {
  return (
    <aside>
        <nav>
            <img  id="imgEsc" src={escudo} alt=""/>
            <ul className="nav-list">
                <Link id="l1" to="/"><li>INICIO</li></Link>
                <Link id="l2" to="/entradasPage"><li>ENTRADAS</li></Link>
                <Link id="l3" to="/polPage"><li>POLERAS</li></Link>
                <Link id="l4" to="/socioPage"><li>HAZTE SOCIO</li></Link>
                <Link id="l5" to="/admin"><li>Administracion</li></Link>
            </ul>
        </nav>
    </aside>
  );
}

export default Aside;

import React from 'react'
import Logo from '../Componentes/multimedia/imagenes/LOGO.png'
import { Link } from 'react-router-dom'

const SideNav = () => {
    const handleHamburger = (checkbox)=>{
        let pageContent = document.getElementById('main-element');
        let sideNav = document.getElementById('side-nav');
        if(checkbox.checked){
            pageContent.style.left = '-300px';
            sideNav.style.transform = 'translateX(-300px)';
        } else{
            pageContent.style.left = '0px';
            sideNav.style.transform = 'translateX(0px)';
        }
    }

    return (
        <div className="side-nav d-flex flex-column" id="side-nav">
            <div className="side-nav-overlay"></div>      
            <div className="hamburger">
                <input type="checkbox" id="checkbox" onClick={(e)=>{handleHamburger(e.target)}}/>
                <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
            </div>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/Servicios'>Servicios</Link></li>
                <li><Link to='/Servicios/servicios-tecnologicos'>Servicios tecnológicos</Link></li>
                <li><Link to='/Servicios/empresas-saludables'>Empresas Saludables</Link></li>
                <li><Link to='/Servicios/marketing-medico'>Marketing</Link></li>
                <li><Link to='/Servicios/produccion'>Producción</Link></li>
            </ul>
            <img src={Logo} className='align-self-center' alt=""/>
        </div>
    )
}

export default SideNav
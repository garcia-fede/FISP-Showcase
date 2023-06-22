import React from 'react'
import Logo from '../Componentes/multimedia/imagenes/logo-iniciales-oscuro.png'

const RegularNavbar = () => {
    return (
        <nav className='container-fluid regular-navbar py-1'>
            <ul className='d-flex align-items-center my-2 list-unstyled'>
                <li>
                    <a href="">
                        <img src={Logo} alt="logo" />
                    </a>
                </li>
                <div className='d-flex gap-5'>
                    <li><a href="">QUIENES SOMOS</a></li>
                    <li><a href="">AUTORIDADES</a></li>
                    <li><a href="">CONTACTO</a></li>
                </div>
            </ul>
        </nav>
        )
}

export default RegularNavbar
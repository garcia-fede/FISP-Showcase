import React from 'react'
import particulas from './multimedia/videos/particulas.mp4'
import RegularNavbar from './RegularNavbar'
import SideNav from './SideNav'
import { Link } from 'react-router-dom';
import ServiciosTecnologicos from '../Componentes/multimedia/imagenes/medico-laptop.jpg'
import EmpresasSaludables from '../Componentes/multimedia/imagenes/primeros-auxilios.jpg'
import Produccion from '../Componentes/multimedia/imagenes/produccion.jpg'
import MarketingMedico from '../Componentes/multimedia/imagenes/reunion.jpg'
import FooterInfo from './FooterInfo';

const Servicios = () => {

    return (
        <>
            <main className="services-page-container" id='main-element'>
                <SideNav />
                <div className="video-container">
                    <video autoPlay muted loop playsInline>
                        <source src={particulas} type='video/mp4' />
                    </video>
                </div>
                <div className="container-fluid py-4 service-section-bar">
                    <div className="d-flex justify-content-around">
                        <h3 className='poppins'>NUESTROS SERVICIOS</h3>
                        <Link to='/'><h3 className='poppins'>HOME</h3></Link>
                    </div>
                </div>
                <div className="container-fluid services">
                    <div className="row">
                        <div className="service col-sm-6 col-xs-12 px-0">
                            <Link to='servicios-tecnologicos'>
                                <img className="service-image" src={ServiciosTecnologicos} alt="servicio" />
                                <div className="service-content d-flex flex-column justify-content-end px-5 py-4 gap-2">
                                    <h3>SERVICIOS TECNOLOGICOS</h3>
                                    <button className='mb-4'>LEER MAS &gt;&gt;</button>
                                </div>
                            </Link>
                        </div>
                        <div className="service col-sm-6 col-xs-12 px-0">
                            <Link to='empresas-saludables'>
                            <img className="service-image" src={EmpresasSaludables} alt="servicio" />
                            <div className="service-content d-flex flex-column justify-content-end px-5 py-4 gap-2">
                                <h3>EMPRESAS SALUDABLES</h3>
                                <button className='mb-4'>LEER MAS &gt;&gt;</button>
                            </div>
                            </Link>
                        </div>
                        <div className="service col-sm-6 col-xs-12 px-0">
                            <Link to='produccion'>
                            <img className="service-image" src={Produccion} alt="servicio" />
                            <div className="service-content d-flex flex-column justify-content-end px-5 py-4 gap-2">
                                <h3>PRODUCCION</h3>
                                <button className='mb-4'>LEER MAS &gt;&gt;</button>
                            </div>
                            </Link>
                        </div>
                        <div className="service col-sm-6 col-xs-12 px-0">
                            <Link to='marketing-medico'>
                            <img className="service-image" src={MarketingMedico} alt="servicio" />
                            <div className="service-content d-flex flex-column justify-content-end px-5 py-4 gap-2">
                                <h3>MARKETING MÉDICO</h3>
                                <button className='mb-4'>LEER MAS &gt;&gt;</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <RegularNavbar />
            </main>
        </>
    )
}

export default Servicios
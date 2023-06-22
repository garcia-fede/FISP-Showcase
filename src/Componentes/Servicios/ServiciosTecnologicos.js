import React, { useEffect, useRef } from 'react'
import RegularNavbar from '../RegularNavbar'
import SideNav from '../SideNav'
import PacienteSensor from '../multimedia/imagenes/servicios-tecnologicos/paciente-sensor.jpg'
import PantallaSignos from '../multimedia/imagenes/servicios-tecnologicos/pantalla-signos.jpg'
import MedicaHolograma from '../multimedia/imagenes/servicios-tecnologicos/medica-holograma.jpg'
import MedicaCliente from '../multimedia/imagenes/servicios-tecnologicos/medica-cliente.jpg'
import MedicoDocumentacion from '../multimedia/imagenes/servicios-tecnologicos/doctor-documentacion.jpg'
import HistoriaClinica from '../multimedia/imagenes/servicios-tecnologicos/historia-clinica-unica.jpg'
import TecnologiaMedica from '../multimedia/imagenes/servicios-tecnologicos/tecnologia-medica.jpg'
import Doctores from '../multimedia/imagenes/servicios-tecnologicos/doctores.svg'
import Implementacion from '../multimedia/imagenes/servicios-tecnologicos/implementacion.jpg'
import FirmaDigital from '../multimedia/imagenes/servicios-tecnologicos/firma-digital.jpg'
import MedicosHablando from '../multimedia/imagenes/servicios-tecnologicos/medicos-hablando.jpg'
import Certificado from '../multimedia/imagenes/servicios-tecnologicos/certificado.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ServiciosTecnologicos = () => {

    const isMountedRef = useRef(false);

    useEffect(()=>{
        if (!isMountedRef.current) {
            window.scroll(0, 0);
            isMountedRef.current = true;
        }
        Aos.init()
    },[])

    return (
        <main className='container-fluid servicios-tecnologicos-section' id='main-element'>
            <SideNav />
            <div className="d-flex image-container servicios-tecnologicos-image">
                <h1 className='poppins' id='titulo'>SERVICIOS TECNOLÓGICOS</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center py-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <p className='poppins my-0 fs-3 m-300'>En el ámbito de la salud, la tecnología juega un papel fundamental en la mejora de la atención médica y la optimización de los procesos clínicos.</p>
            </div>
            <div className="container-fluid">
                <div className="row" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                    <div className="col-6 bg-warning px-0 position-relative">
                        <div className="img-2-1-overlay d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column gap-2 w-75">
                                <h3 className='poppins'>Tecnología de telemedicina de urgencias.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at placeat cupiditate enim. Perspiciatis, voluptatem.</p>
                            </div>
                        </div>
                        <img className="img-2-1"src={MedicaCliente} alt="" />
                    </div>
                    <div className="col-3 bg-semi-blanco d-flex flex-column justify-content-center align-items-center px-0">
                        <svg className='w-25' viewBox="0 0 24 24" strokeWidth="0.75" stroke="#000000" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                            <path d="M7 20h10" />
                            <path d="M9 16v4" />
                            <path d="M15 16v4" />
                            <path d="M7 10h2l2 3l2 -6l1 3h3" />
                        </svg>
                        <p className='w-75 poppins fs-4 text-center fw-semibold'>TECNOLOGÍA DE TELEMEDICINA DE URGENCIAS</p>
                    </div>
                    <div className="col-3 px-0">
                        <img className="img-1-1"src={MedicaHolograma} alt="" />
                    </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                    <div className="col-3 px-0">
                        <img className="img-1-1"src={HistoriaClinica} alt="" />
                    </div>
                    <div className="col-3 bg-negro d-flex flex-column justify-content-center align-items-center px-0">
                    <svg className='w-25' viewBox="0 0 24 24" strokeWidth="0.75" stroke="#FFFFFF" fill='none'>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M4 9h6l1 -2l2 4l1 -2h6" />
                        <path d="M4 14h16" />
                        <path d="M14 17v.01" />
                        <path d="M17 17v.01" />
                    </svg>
                        <p className='w-75 poppins fs-4 text-center fw-semibold'>SISTEMAS DE HISTORIA CLÍNICA ÚNICA</p>
                    </div>
                    <div className="col-6 bg-warning px-0 position-relative">
                        <div className="img-2-1-overlay d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column gap-2 w-75">
                                <h3 className='poppins'>HISTORIA CLÍNICA ÚNICA</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at placeat cupiditate enim. Perspiciatis, voluptatem.</p>
                            </div>
                        </div>
                        <img className="img-2-1"src={MedicoDocumentacion} alt="" />
                    </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                    <div className="col-6 bg-warning px-0 position-relative">
                        <div className="img-2-1-overlay d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column gap-2 w-75">
                                <h3 className='poppins'>EQUIPAMIENTO DE TELEMETRÍA</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at placeat cupiditate enim. Perspiciatis, voluptatem.</p>
                            </div>
                        </div>
                        <img className="img-2-1"src={PantallaSignos} alt="" />
                    </div>
                    <div className="col-3 bg-celeste d-flex flex-column justify-content-center align-items-center px-0">
                        <svg className='w-25' viewBox="0 0 24 24" strokeWidth="0.75" stroke="#000000" fill='none'>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M4 9h6l1 -2l2 4l1 -2h6" />
                            <path d="M4 14h16" />
                            <path d="M14 17v.01" />
                            <path d="M17 17v.01" />
                        </svg>
                        <p className='w-75 poppins fs-4 text-center fw-semibold'>EQUIPAMIENTO DE TELEMETRÍA</p>
                    </div>
                    <div className="col-3 px-0">
                        <img className="img-1-1"src={PacienteSensor} alt="" />
                    </div>
                </div>
            </div>
            <div className="py-5"></div>
            <div className="row d-flex justify-content-center mx-0">
                <div className="col-5 rounded-5 bg-semi-blanco box-shadow d-flex flex-column justify-content-center align-items-center gap-5" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                    <img src={Doctores} className='w-50' alt="" />
                    <p className='poppins fs-4 px-5 mx-5'>Nuestro programa de implementación de tecnología sanitaria está diseñado para ayudarte a adoptar y aprovechar al máximo las soluciones tecnológicas más avanzadas, mejorando la calidad de la atención y optimizando la eficiencia operativa.</p>
                </div>
                <div className="col-5" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                    <img src={TecnologiaMedica} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="py-5"></div>
            <div className="row mx-0 overflow-hidden" id='vertical-services'>
                <div className="col-6 bg-semi-blanco h-500 d-flex flex-column px-5 mb-5 box-shadow" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000">
                    <img src={Implementacion} className='object-fit-cover' alt="" />
                    <div className="d-flex flex-column justify-content-center align-items-center py-3">
                        <p className=' px-4 py-3 my-0 fs-5'>Implementación de tecnologías para la salud para gobiernos y empresas.</p>
                    </div>
                </div>
                <div className="col-6 bg-semi-blanco h-500 d-flex flex-column px-5 mb-5 box-shadow" data-aos="fade-up-left" data-aos-delay="500" data-aos-duration="1000">
                    <img src={FirmaDigital} className='object-fit-cover' alt="" />
                    <div className="d-flex flex-column justify-content-center align-items-center py-3">
                        <p className=' px-4 py-3 my-0 fs-5'>Sistemas de gestión de consultorios con firma digital.</p>
                    </div>
                </div>
                <div className="col-6 bg-semi-blanco h-500 d-flex flex-column px-5 mb-5 box-shadow" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000">
                    <img src={MedicosHablando} className='object-fit-cover' alt="" />
                    <div className="d-flex flex-column justify-content-center align-items-center py-3">
                        <p className=' px-4 py-3 my-0 fs-5'>Consultoría de tecnologías de la salud para obras sociales, sanatorios, empresas y prestadores del sistema sanitario.</p>
                    </div>
                </div>
                <div className="col-6 bg-semi-blanco h-500 d-flex flex-column px-5 mb-5 box-shadow" data-aos="fade-up-left" data-aos-delay="500" data-aos-duration="1000">
                    <img src={Certificado} className='object-fit-cover' alt="" />
                    <div className="d-flex flex-column justify-content-center align-items-center py-3">
                        <p className='px-4 py-3 my-0 fs-5'>Certificación de sistemas tecnológicos en salud.</p>
                    </div>
                </div>
            </div>
            <RegularNavbar />
        </main>
    )
}

export default ServiciosTecnologicos
import React from 'react'
import { Link } from 'react-router-dom'
import Servicios from './Servicios'
const Home = () => {
    return (
        <>
            <Link to='/Servicios/'>Servicios</Link>
            <Link to='/Educativo/'>Educativo</Link>
            <Link to='/Portal/'>Portal</Link>
        </>
    )
}

export default Home
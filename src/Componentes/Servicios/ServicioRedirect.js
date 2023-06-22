import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ServiciosTecnologicos from './ServiciosTecnologicos';
import EmpresasSaludables from './EmpresasSaludables';
import Produccion from './Produccion';
import MarketingMedico from './MarketingMedico';

const ServicioRedirect = () => {
    const { service } = useParams();
    let serviceComponent;
    switch (service) {
        case 'servicios-tecnologicos':
            serviceComponent = <ServiciosTecnologicos />
            break;
        case 'empresas-saludables':
            serviceComponent = <EmpresasSaludables />
            break;
        case 'produccion':
            serviceComponent = <Produccion />
            break;
        case 'marketing-medico':
            serviceComponent = <MarketingMedico />
            break;
        default:
            break;
    }

    return serviceComponent
};

export default ServicioRedirect;
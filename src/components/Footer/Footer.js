import './Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="f-container">
                    <div className="d-infoFooter">
                        <h2 className='h2-footer'>Institucional</h2>
                        <ul>
                            <li><a>Quienes somos</a></li>
                            <li><a>Politicas de Privacidad</a></li>
                            <li><a>Terminos y Condiciones</a></li>
                            <li><a>Sustentabilidad</a></li>
                            <li><a>Defensa del Consumidor</a></li>
                        </ul>
                    </div>
                    <div className="d-infoFooter">
                        <h2 className='h2-footer'>Ayuda</h2>
                        <ul>
                            <li><a>Preguntas Frecuentes</a></li>
                            <li><a>¿Cómo comprar?</a></li>
                            <li><a>Pagos y promociones</a></li>
                            <li><a>Entregas</a></li>
                            <li><a>Cambios</a></li>
                        </ul>
                    </div>
                    <div className="d-infoFooter">
                        <h2 className='h2-footer'>Redes Sociales</h2>
                        <ul>
                            <li><a href='#'><FacebookIcon/> Facebook</a></li>
                            <li><a href='#'><InstagramIcon/> Instagram</a></li>
                            <li><a href='#'><TwitterIcon/> Twitter</a></li>
                        </ul>
                    </div>
                    <div className='d-infoFooter'>
                        <h2 className='h2-footer'>Centro de atención al cliente</h2>
                        <p>Lunes a Viernes de 9 a 20hs / Sábados de 9 a 17 hs.</p>
                        <div className='d-footer-img'>
                            <ul>
                                <li>Contacto</li>
                                <li>WhatsApp</li>
                                <li>0800-333-SNKRS</li>
                                <li><img src={`/assets/snrks.png`} /></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
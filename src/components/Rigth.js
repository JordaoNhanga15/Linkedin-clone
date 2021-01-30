import '../style/components/Rigth.css'
import { RiArrowDropDownFill } from "react-icons/ri";
import li_evergreen from '../assets/li_evergreen.jpg'
import { Link } from "react-router-dom";
function Rigth(){
    return(
        <>
        <main className="Rigth">
                <article className="RigthBar-container">
                    <img className="live" alt="" src={li_evergreen}/>
                </article>
                
                <article className="RigthBar-container" style={{background:'transparent',border:'0px'}}>
                    <ul>
                        <li>
                            <Link to="/">Sobre</Link>
                            <Link to="/">Acessibilidade</Link>
                            <Link to="/">Central de ajuda</Link>
                        </li>
                        <li>
                            <Link to="/">Termos e privacidade <RiArrowDropDownFill size={20} color=""/></Link>
                        </li>
                        <li>
                            <Link to="/">Preferencias de anuncios</Link>
                            <Link to="/">Publicidade</Link>
                        </li>
                        <li>
                            <Link to="/">Servicos empresarias <RiArrowDropDownFill size={20} color=""/></Link>
                        </li>
                    </ul>
                </article>
            </main>
        </>
    )
}
export default Rigth;
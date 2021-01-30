import { BsFillInfoSquareFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import '../../style/components/Menu/Rigthbar.css'
import jose from '../../assets/jose.jpg'
import kennedy from '../../assets/kennedy.jpg'
import anilesio from '../../assets/anilesio.jpg'
import { RiArrowDropDownFill } from "react-icons/ri";
import li_evergreen from '../../assets/li_evergreen.jpg'
import { Link } from "react-router-dom";
function RigthBar(){
    return(
        <>
            <main className="RigthBar">
                <article className="RigthBar-container">
                    <h1>Adicione ao seu feed <span><BsFillInfoSquareFill size={15} className="svg-65"/></span></h1>
                    <div className="rigth-contai">
                        <main className="rigth">
                            <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <img src={jose} alt="" width="50px" height="50px" className="pic"/>
                                <main className="textos">
                                    <span>Jose Tandavala</span>
                                    <p>Backend Engineer | Open Source</p>
                                </main>
                            </div>
                            <button>
                                <FiPlus size={15} />
                                Seguir
                            </button>
                        </header>
                            <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <img src={kennedy} alt="" width="60px" height="60px" className="pic"/>
                                <main className="textos">
                                    <span>Anderson Augusto</span>
                                    <p>Designer de produto na Buka</p>
                                </main>
                            </div>
                            <button>
                                <FiPlus size={15} />
                                Seguir
                            </button>
                        </header>
                            <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <img src={anilesio} alt="" width="50px" height="50px" className="pic"/>
                                <main className="textos">
                                    <span>Anilésio Xavier</span>
                                    <p>Full Stack Development </p>
                                </main>
                            </div>
                            <button>
                                <FiPlus size={15} />
                                Seguir
                            </button>
                        </header>
                        </main>
                    </div>
                </article>

                <article className="RigthBar-container">
                    <h1>os cursos mais visualizados hoje <span><BsFillInfoSquareFill size={15} className="svg-65"/></span></h1>
                    <div className="rigth-contai">
                        <main className="rigth">
                            <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <h2>1.</h2>
                                <main className="textos">
                                    <span>Como vencer a Procrastinacao</span>
                                    <p>Brenda Bailey-hughes</p>
                                   
                                </main>
                            </div>
                           
                        </header>
                        <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <h2>2.</h2>
                                <main className="textos">
                                    <span>Tecnicas de comunicacao</span>
                                    <p>Dorie clark</p>
                                    
                                </main>
                            </div>
                            
                        </header>
                        
                        <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <h2>3.</h2>
                                <main className="textos">
                                    <span>Fundamentos de gestao de tempo</span>
                                    <p>Davie chenshaw</p>
                                    
                                </main>
                            </div>
                            
                        </header>

                        </main>
                    </div>
                </article>

                
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
export default RigthBar
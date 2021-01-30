import img_back from '../../assets/pwa-reliable.png'
import '../../style/components/Menu/leftbar.css'
import profile from '../../assets/profile.jpg'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {FiHash} from 'react-icons/fi'
import { IoIosPeople } from "react-icons/io";

function LeftBar(){
    return(
        <>
            <main className="LeftBar">
                <img src={img_back} alt="" className="img_back"/>
                <div className="img">
                            <img src={profile} alt="" className="pict"/>
                </div>
                <article className="left-container">
                    <div className="leftbar-conteudo">
                    <header>
                        <small>Jordao de Oliveira</small>
                        <span>Developer | teacher | WEB | MOBILE | React.js | React Native | C# | SQL | graphql</span>
                    </header>
                    <div className="hr"></div>
                    <main className="quem_container">
                        <article className="quem_">
                            <div className="box">
                                <span>Quem viu o seu perfil</span>
                                <h5>250</h5>
                            </div>
                            <div className="box">
                                <span>Viram o seu video</span>
                                <h5>1050</h5>
                            </div>
                        </article>
                        <article className="quem_">
                            <div className="box">
                                <span>Acesse ferramentas exclusivas</span>
                            </div>
                            {/* <div className="box">
                                <span>Viram o seu video</span>
                            </div> */}
                        </article>
                        <div className="hr"></div>
                        <article className="quem_">
                            <div className="itens">
                                <BsFillBookmarkFill size={15} color="rgba(0,0,0,0.6)"/>
                                meus itens
                            </div>
                        </article>
                    </main>
                </div>
                    <div className="leftbar-conteudo">
                        <span className="span">Recentes</span>
                        <article className="leftd">
                            <span className=""><IoIosPeople size={15} color=""/> Angola Parcerias</span>
                            <span className=""><IoIosPeople size={15} color=""/> Elite african</span>
                            <span className=""><IoIosPeople size={15} color=""/> Emprego Angola</span>
                        </article>
                        <article className="leftd">
                            <h5>Grupos</h5>
                            <span className=""><IoIosPeople size={15} color=""/> Angola Parcerias</span>
                            <span className=""><IoIosPeople size={15} color=""/> Elite african</span>
                            <span className=""><IoIosPeople size={15} color=""/> Emprego Angola</span>
                        </article>
                        <article className="leftd">
                            <h5>Hastags seguidas</h5>
                            <span className=""><FiHash size={15} color=""/> Angola Parcerias</span>
                            <span className=""><FiHash size={15} color=""/> Elite african</span>
                            <span className=""><FiHash size={15} color=""/> Emprego Angola</span>
                        </article>
                    </div>    
                </article>
            </main>
        </>
    )
}
export default LeftBar
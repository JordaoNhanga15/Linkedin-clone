import '../../style/components/Notificacoes/Container.css'
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaDotCircle } from "react-icons/fa";
import Rigth from '../Rigth'
import Amiraldes from '../../assets/Amiraldes.jpg'
import kennedy from '../../assets/kennedy.jpg'
import jose from '../../assets/jose.jpg'
import eleandro from '../../assets/eleandro.jpg'
import anilesio from '../../assets/anilesio.jpg'
import amelion from '../../assets/amelion.jpg'
import gabriel from '../../assets/1603732875642.jpg'
function Containe(){
    return(
        <>
        <main className="container-Notii">
                <aside className="lado-1">
                    <section>
                        <article className="da">
                            <h1>Notificações</h1>
                            <span>Por enquanto é só! Volte mais tarde para visualizar novas notificações</span>
                        </article>
                        <div>
                            <small>Melhore suas notificações</small>
                            <span>Visualizar configurações</span>
                        </div>
                    </section>
                </aside>
                <aside className="lado-2">
                    <section className="Noti">
                        <div className="img">
                            <img src={Amiraldes} alt=""/>
                            <FaDotCircle size={15} color="green" className="break"/>
                        </div>
                        <div className="box">
                            <p>Deseje <h2>um feliz aniversario</h2>a Amiraldes Xavier</p>
                            <button>Deseje feliz aniversario</button>
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                    <section className="Noti">
                        <div className="img">
                            <img src={kennedy} alt=""/>
                            <FaDotCircle size={15} color="green" className="break"/>
                        </div>
                        <div className="box">
                            <p>Deseje <h2> um feliz aniversario </h2>a Anderson Augusto(hoje)</p>
                            <button>Deseje feliz aniversario</button>
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                    <section className="Noti">
                        <div className="img">
                            <img src={gabriel} alt=""/>
                            <FaDotCircle size={15} color="green" className="break"/>
                        </div>
                        <div className="box">
                            <p>Gabriel de Jesus <h2>compartilhou uma publicacao</h2>5 APis uteis</p>
                            {/* <button>Ver todas visitas</button> */}
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                    <section className="Noti">
                        <div className="img">
                            <img src={eleandro} alt=""/>
                            {/* <FaDotCircle size={15} color="green" className="break"/> */}
                        </div>
                        <div className="box">
                            <p>Eleandro duzentos <h2>compartilhou uma publicacao</h2> Mind Blowing</p>
                            {/* <button>Ver todas visitas</button> */}
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                    <section className="Noti">
                        <div className="img">
                            <img src={jose} alt=""/>
                            <FaDotCircle size={15} color="green" className="break"/>
                        </div>
                        <div className="box">
                            <p>Jose Tandavala <h2> Viu o seu Perfil</h2></p>
                            <button>Ver todas visitas</button>
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                    <section className="Noti">
                        <div className="img">
                            <img src={anilesio} alt=""/>
                            {/* <FaDotCircle size={15} color="green" className="break"/> */}
                        </div>
                        <div className="box">
                            <p>Deseje <h2> um feliz aniversario </h2>a Anilesio Xavier(hoje)</p>
                            <button>Deseje feliz aniversario</button>
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                    <section className="Noti">
                        <div className="img">
                            <img src={amelion} alt=""/>
                            <FaDotCircle size={15} color="green" className="break"/>
                        </div>
                        <div className="box">
                            <p>Amelion Jorge <h2> Viu o seu perfil </h2></p>
                            <button>Ver todas visitas</button>
                        </div>
                        <main>
                            <span>1h</span>
                            <small>
                                <IoEllipsisHorizontal size={20} color="rgba(0,0,0,0.65)"/>
                            </small>
                        </main>
                    </section>
                </aside>
                <aside className="lado-3">
                    <Rigth />
                </aside>
            </main>
        </>
    )
}
export default Containe;
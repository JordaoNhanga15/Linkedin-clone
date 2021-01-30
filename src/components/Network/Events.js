import '../../style/components/Network/Midle.css'
import profile from "../../assets/1610116666189.jpg";
import {RiCloseLine} from "react-icons/ri";
import back from "../../assets/1610117142723.jpg";
import Logo from "../../assets/logo.jpg";
import BukaLogo from "../../assets/buka.jpg";
import BukaP from "../../assets/bukas.jpg";
import Utanga from "../../assets/utanga.jpg";
import utangaFeira from "../../assets/utangaFeira.jpg";
import nlw from "../../assets/nlw.png";
import { Link } from 'react-router-dom';

function Events(){
    return(
        <>
        <main className="events-container">
            <aside className="events">
                <header>
                    <img src={nlw} alt="" className="back-events"/>
                    <img src={Logo} alt="" className="profile-events"/>
                </header>
                <div className="bod">
                    <main>
                        <h1>Trilha nlw omnistack Rocketseat</h1>
                        <p>20 de Fevereiro</p>
                    </main>
                    <span>4.000 participantes</span>
                </div>
                <Link to="/" className="a">Visualizar</Link>
                <div className="close">
                    <RiCloseLine size={25} color="#fff"/>
                </div>
            </aside>
            <aside className="events">
                <header>
                    <img src={BukaP} alt="" className="back-events"/>
                    <img src={BukaLogo} alt="" className="profile-events"/>
                </header>
                <div className="bod">
                    <main>
                        <h1>Gestao e marketing de redes sociais</h1>
                        <p>Hoje as 14:30</p>
                    </main>
                    <span>4.000 participantes</span>
                </div>
                <Link to="/" className="a">Visualizar</Link>
                <div className="close">
                    <RiCloseLine size={25} color="#fff"/>
                </div>
            </aside>
            <aside className="events">
                <header>
                    <img src={utangaFeira} alt="" className="back-events"/>
                    <img src={Utanga} alt="" className="profile-events"/>
                </header>
                <div className="bod">
                    <main>
                        <h1>Feira de gestao e empreendedorismo</h1>
                        <p>Hoje as 14:30</p>
                    </main>
                    <span>4.000 participantes</span>
                </div>
                <Link to="/" className="a">Visualizar</Link>
                <div className="close">
                    <RiCloseLine size={25} color="#fff"/>
                </div>
            </aside>
            <aside className="events">
                <header>
                    <img src={back} alt="" className="back-events"/>
                    <img src={profile} alt="" className="profile-events"/>
                </header>
                <div className="bod">
                    <main>
                        <h1>Tendencias de RH para 2021</h1>
                        <p>Hoje as 14:30</p>
                    </main>
                    <span>4.000 participantes</span>
                </div>
                <Link to="/" className="a">Visualizar</Link>
                <div className="close">
                    <RiCloseLine size={25} color="#fff"/>
                </div>
            </aside>
            <aside className="events">
                <header>
                    <img src={back} alt="" className="back-events"/>
                    <img src={profile} alt="" className="profile-events"/>
                </header>
                <div className="bod">
                    <main>
                        <h1>Tendencias de RH para 2021</h1>
                        <p>Hoje as 14:30</p>
                    </main>
                    <span>4.000 participantes</span>
                </div>
                <Link to="/" className="a">Visualizar</Link>
                <div className="close">
                    <RiCloseLine size={25} color="#fff"/>
                </div>
            </aside>
            <aside className="events">
                <header>
                    <img src={back} alt="" className="back-events"/>
                    <img src={profile} alt="" className="profile-events"/>
                </header>
                <div className="bod">
                    <main>
                        <h1>Tendencias de RH para 2021</h1>
                        <p>Hoje as 14:30</p>
                    </main>
                    <span>4.000 participantes</span>
                </div>
                <Link to="/" className="a">Visualizar</Link>
                <div className="close">
                    <RiCloseLine size={25} color="#fff"/>
                </div>
            </aside>
        </main>
        </>
    )
}
export default Events;
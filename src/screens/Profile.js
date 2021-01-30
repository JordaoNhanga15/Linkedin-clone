import '../style/components/Perfil/Perfil.css'
import Rigth from '../components/Rigth'
import { HiQuestionMarkCircle } from "react-icons/hi";
import jose from '../assets/jose.jpg'
import '../style/components/Perfil/lado1.css' 
import anilesio from '../assets/anilesio.jpg'
import profile from '../assets/profile.jpg'
import pwa from '../assets/pwa-reliable.png'
import fb from '../assets/fb.gif'
import twitter from '../assets/twitter.gif'
import taag from '../assets/taag.gif'
import { BsFillInfoSquareFill,BsMoon } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { TiThumbsOk } from "react-icons/ti";
import { AiOutlineLeft,AiOutlineRight,AiFillLike,AiTwotoneHeart } from "react-icons/ai";
import { IoMdArrowDropdown,IoIosSunny } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useEffect } from 'react';


function Profile(){
    const sun=
    <IoIosSunny size={40} color="#0a66c2" className="first"/>

    const moon=
    <BsMoon size={40} color="#0a66c2" className="second"/>
    
    function HandleTogle() {
        const ht={
            html:document.querySelector('html'),
            checkbox:document.querySelector('input[name=theme]'),
            la:[...document.querySelector('.la').children],
            la1:document.querySelector('.la'),
            fisrt:document.querySelector('.first'),
            second:document.querySelector('.second')
        }
        const getStyle=(element,style)=>
            window.getComputedStyle(element).getPropertyValue(style)
        const InitialColors={
            white:getStyle(ht.html,"--white"),
            blackA75:getStyle(ht.html,"--black-a75"),
            blackA90:getStyle(ht.html,"--black-a90"),
            blackA09:getStyle(ht.html,"--black-a09"),
            blackA65:getStyle(ht.html,"--black-a65"),
            blackA45:getStyle(ht.html,"--black-a45"),
            blackA15:getStyle(ht.html,"--black-a15"),
            black:getStyle(ht.html,"--black"),
            back1:getStyle(ht.html,"--back1"),
            backgroundI:getStyle(ht.html,"--background-i"),
            warmGray20:getStyle(ht.html,"--warm-gray20"),
            backEvents:getStyle(ht.html,"--back-events"),
            colorTextLowEmphasis:getStyle(ht.html,"--color-text-low-emphasis"),
            colorText:getStyle(ht.html,"--color-text"),
            colorBackgroundFaintActive:getStyle(ht.html,"--color-background-faint-active")
        }
        const whiteMode={
            white:"rgb(21, 32, 43)",
            back1:"rgb(21, 32, 43)",
            blackA75:"rgb(136, 153, 166)",
            blackA90:"rgb(136, 153, 166)",
            blackA09:"white",
            blackA65:"rgb(136, 153, 166)",
            blackA45:"#fff",
            // blackA09:"rgb(136, 153, 166)",
            backEvents:"rgba(0,0,0,.7)",
            blackA15:"rgba(0,0,0,0.15)",
            black:"white",
            warmGray20:"rgba(0,0,0,1)",
            colorTextLowEmphasis:"rgb(136, 153, 166)",
            colorText:"#fff",
            colorBackgroundFaintActive:"#fff"
        }
        const transformKey = key =>
        "--" + key.replace(/([A-Z])/,"-$1").toLowerCase()

        function changeColors(colors){
            Object.keys(colors).map(key=>
                ht.html.style.setProperty(transformKey(key),colors[key])
            )
        }
        
        function init() {
            ht.la.forEach(ele=>{
                ele.addEventListener('click',()=>{
                    if(ht.la1.classList.contains('mode')){
                        changeColors(InitialColors)
                        ht.fisrt.style.display="none"
                        ht.second.style.display="flex"
                        ht.la1.classList.remove('mode')
                    }else{
                        changeColors(whiteMode)
                        ht.fisrt.style.display="flex"
                        ht.second.style.display="none"
                        ht.la1.classList.add('mode')
                    }
                })
            })
        }
        return{
            init
        }
    }
   
    useEffect(()=>{
        const da=HandleTogle()
        da.init()
    },[])
    return(
        <>
            <main className="container-perfil">
                <aside className="perfil-1">
                    <main className="perfil-1-a">
                        <img src={pwa} alt="" width="100%" height="250px" className="back-perfil"/>
                        <section className="sectio-perfil">
                            <header>
                                <img src={profile} alt="" width="150px" height="150px" className="Pic"/>
                                <div className="rigth">
                                    <button>Adcionar a secção do perfil <IoMdArrowDropdown size={15} color="white"/></button>
                                    <button>mais...</button>
                                    <FaPen size={25} color="rgba(0,0,0,0.65)" className="svg-65"/>
                                </div>
                            </header>
                            <div className="body-perfil">
                                <section className="nome">
                                    <div className="nome-">
                                        <h1>Jordao de Oliveira</h1>
                                        <p>Developer | teacher | Web designer | MOBILE dev | React.js | React Native | C# | SQL | graphql </p>
                                    </div>
                                    <div className="loca">
                                        <small>Popula, Luanda, Angola</small>
                                        <div className="po"></div>
                                        <span>+ de 2000 conexoes</span>
                                        <div className="po"></div>
                                        <span>Informacoes de contacto</span>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <div className="Pen"><FaPen size={18} color=" #378fe9" /></div>
                        <div className="Dark">
                        <div className="ls toggle">
                            <div className="la">
                                    {
                                        moon
                                    }
                                    {
                                        sun
                                    }
                            </div>
                        </div>
                        </div>
                    </main>
                    <main className="perfil-1-a">
                    <section className="sectio-perfil">
                        <header>
                                    <h2>Sobre</h2>
                                    <div className="rigth">
                                        <FaPen size={25} color="rgba(0,0,0,0.65)" className="svg-65"/>
                                    </div>
                        </header>
                        <div className="body-perfil">
                            <div className="nome">
                                <ul className="nome-">
                                    <span>Formador das seguintes Linguagens</span>
                                    <div>
                                        <li>C#</li>
                                        <li>SQL</li>
                                        <li>JavaScript</li>
                                    </div>
                                </ul>
                                <ul className="nome-">
                                    <span>Programador das seguintes Linguagens e Libs</span>
                                    <div>
                                        <li>C#</li>
                                        <li>SQL</li>
                                        <li>React.js</li>
                                        <li>React Native</li>
                                        <li>CSS</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </section>
                    </main>
                    <main className="perfil-1-a">
                    <section className="sectio-perfil">
                        <header>
                                    <h2>Em destaque</h2>
                                    <div className="rigth">
                                        <span style={{fontWeight:'bold'}}>Visualizar todos</span>
                                        <AiOutlineLeft size={25} color="rgba(0,0,0,0.65" className="svg-65"/>
                                        <AiOutlineRight size={25} color="rgba(0,0,0,0.65" className="svg-65"/>
                                        <FiPlus size={25} color="rgba(0,0,0,0.65)" className="svg-65"/>
                                        <FaPen size={25} color="rgba(0,0,0,0.65)" className="svg-65"/>
                                    </div>
                        </header>
                        <div className="body-perfil">
                            <div className="grids">
                                <article>
                                    <span className="span" style={{fontWeight:'bold'}}>Fui selecionado para lecionar aulas de programacao na minha turma, vou apresentar...</span>
                                    <img src={taag} alt="" width="100%" className="gif"/>
                                    <footer>
                                    <div className="loca">
                                        <div className="emo" style={{background:'#0a66c2'}}>
                                            <AiFillLike size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'green'}}>
                                            <TiThumbsOk size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'red'}}>
                                            <AiTwotoneHeart size={10} color="white"/>
                                        </div>
                                        <span className="svg-65">222</span>
                                        <div className="po"></div>
                                        <span className="svg-65">80 comentarios</span>
                                    </div>
                                    </footer>
                                </article>

                                <article>
                                    <span className="span" style={{fontWeight:'bold'}}>Saudacoes a todos para comecar o ano desenvolvi o clone do twitter...</span>
                                    <img src={twitter} alt="" width="100%" className="gif"/>
                                    <footer>
                                    <div className="loca">
                                        <div className="emo" style={{background:'#0a66c2'}}>
                                            <AiFillLike size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'green'}}>
                                            <TiThumbsOk size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'red'}}>
                                            <AiTwotoneHeart size={10} color="white"/>
                                        </div>
                                        <span>122</span>
                                        <div className="po"></div>
                                        <span>40 comentarios</span>
                                    </div>
                                    </footer>
                                </article>

                                <article>
                                    <span className="span" style={{fontWeight:'bold'}}>Fui selecionado para lecionar aulas de programacao na minha turma, vou apresentar...</span>
                                    <img src={fb} alt="" width="100%" className="gif"/>
                                    <footer>
                                    <div className="loca">
                                        <div className="emo" style={{background:'#0a66c2'}}>
                                            <AiFillLike size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'green'}}>
                                            <TiThumbsOk size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'red'}}>
                                            <AiTwotoneHeart size={10} color="white"/>
                                        </div>
                                        <span>122</span>
                                        <div className="po"></div>
                                        <span>40 comentarios</span>
                                    </div>
                                    </footer>
                                </article>

                                <article>
                                    <span className="span" style={{fontWeight:'bold'}}>Fui selecionado para lecionar aulas de programacao na minha turma, vou apresentar...</span>
                                    <img src={fb} alt="" width="100%" className="gif"/>
                                    <footer>
                                    <div className="loca">
                                        <div className="emo" style={{background:'#0a66c2'}}>
                                            <AiFillLike size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'green'}}>
                                            <TiThumbsOk size={10} color="white"/>
                                        </div>
                                        <div className="emo" style={{background:'red'}}>
                                            <AiTwotoneHeart size={10} color="white"/>
                                        </div>
                                        <span>122</span>
                                        <div className="po"></div>
                                        <span>40 comentarios</span>
                                    </div>
                                    </footer>
                                </article>
                            </div>
                        </div>
                    </section>
                    </main>
                </aside>
                <aside className="perfil-2">
                    <section className="Perfil-2-container">
                        <main className="perfil-2-a">
                            <div className="perfil-line">
                                <h4>Editar Perfil e Publico URL</h4>
                                <HiQuestionMarkCircle size={20} color="rgba(0,0,0,0.65)" className="svg-65"/>
                            </div>
                            <div className="perfil-line">
                                <h4>Adciona Perfil em outro idioma</h4>
                                <HiQuestionMarkCircle size={20} color="rgba(0,0,0,0.65)" className="svg-65"/>
                            </div>
                        </main>
                        <article className="perfil-2-a">
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
                                        <img src={jose} alt="" width="60px" height="60px" className="pic"/>
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
                        <Rigth />
                    </section>
                </aside>
            </main>
        </>
    )
}
export default Profile
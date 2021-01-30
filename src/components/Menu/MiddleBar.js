import '../../style/components/Menu/MidleBar.css'
import  fernando from "../../assets/fernado.jpg";
import pub_eleandro from '../../assets/1610388279413.jpg'
import pub_gabriel from '../../assets/1610544716589.jpg'
import gabriel from '../../assets/1603732875642.jpg'
import  eleandro from "../../assets/eleandro.jpg";
import { AiOutlinePicture,AiTwotoneHeart,AiFillLike,AiOutlineComment } from "react-icons/ai";
import {FaYoutube,FaShare} from 'react-icons/fa'
import { RiSendPlaneFill } from "react-icons/ri";
import {FcNews} from 'react-icons/fc'
import { TiWorldOutline,TiThumbsOk } from "react-icons/ti";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import {IoCreateOutline,IoEllipsisHorizontal} from 'react-icons/io5'
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect } from 'react';

function MiddleBar(){
    useEffect(()=>{
        const da=Handle()
        da.init()
    },[])
    function Handle(){
        const html={
            r:document.querySelectorAll('.emojis'),
            d:document.querySelectorAll('.reaT')
        }
        const aparece=(e)=>{
            html.r[e].style.display="flex"
        }
        const desaparece=(e)=>{
            html.r[e].style.display="none"
        }
        function init(){
            hover()
            // html.d.forEach(ele=>{
            //     ele.addEventListener('MouseOut',alert('jordao'))
            // })
        }
        function hover(){
            html.d.forEach((ele,id)=>{
                ele.addEventListener('mouseover',()=>{aparece(id)})
            })    
            html.d.forEach((ele,id)=>{
                ele.addEventListener('mouseout',()=>{desaparece(id)})
            })          
        }
        return{
            init
        }
    }
    return(
        <>
            <main className="MiddleBar">
                <article className="box">
                    <button>
                        <IoCreateOutline size={28} color="" className="svg-65"/>
                        <span>
                        Começar publicar
                        </span>
                    </button>
                    <div className="icons">
                        <main className="icon">
                            <AiOutlinePicture size={25}/>
                            Foto
                        </main>
                        <main className="icon">
                            <FaYoutube size={25}/>
                            Video
                        </main>
                        <main className="icon">
                            <HiOutlineClipboardCheck size={25}/>
                            Objectivo
                        </main>
                        <main className="icon">
                            <FcNews size={25}/>
                            Escrever artigo
                        </main>
                    </div>
                </article>
                <div className="hr-container">
                    <div className="hr"></div>
                    <span>Classificar por:<small>Principais <IoMdArrowDropdown size={15} /></small>
                    </span>
                </div>
                <article className="pub-container">
                    <main className="pub">
                        <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <img src={fernando} alt="" width="50px" height="50px" className="pic"/>
                                <main className="textos">
                                    <span>Fernando dos santos</span>
                                    <p>Software Developer | Front-end Developer | Instructor </p>
                                    <div className="locate">
                                        <small>6 min .</small>
                                        <TiWorldOutline size={15} color="#000"/>
                                    </div>
                                </main>
                            </div>
                            <IoEllipsisHorizontal size={20} color="#000" className="svg-65"/>
                        </header>
                        <div className="pub-body">
                            <p>Hey Folks!
Faz um tempo que postei na rede sobre uma série de postos sobre ReactJs, então venho para anúnciar que hoje sai o primeiro post da sérei.</p>
                        </div>
                        <nav className="reactions-pub">
                            <div className="react" style={{background:"red"}}>
                                <AiTwotoneHeart size={10} color='#fff'/>
                            </div>
                            <div className="react" style={{background:"#0a66c2"}}>
                                <AiFillLike size={10} color='#fff'/>
                            </div>
                            <span>2</span>
                        </nav>
                        <div className="hr-c">
                            <div className="hr"></div>
                        </div>
                        <footer>
                            <div className="reaT">
                                <AiFillLike size={25}/>
                                Gosto
                                <main className="emojis">
                                    <AiFillLike size={25} color="#378fe9"/>
                                    <TiThumbsOk size={25} color="green"/>
                                    <AiTwotoneHeart size={25} color="red"/>
                                </main>
                            </div>
                            <div className="">
                                <AiOutlineComment size={25}/>
                                Comentar
                            </div>
                            <div className="">
                                <FaShare size={25}/>
                                partilhar
                            </div>
                            <div className="">
                                <RiSendPlaneFill size={25}/>
                                Enviar
                            </div>
                        </footer>
                    </main>
                    <main className="pub">
                        <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <img src={eleandro} alt="" width="50px" height="50px" className="pic"/>
                                <main className="textos">
                                    <span>Eleandro Duzentos</span>
                                    <p>Senior Software Developer | ITGest </p>
                                    <div className="locate">
                                        <small>6 min .</small>
                                        <TiWorldOutline size={15} color="#000" />
                                    </div>
                                </main>
                            </div>
                            <IoEllipsisHorizontal size={20} color="#000" className="svg-65"/>
                        </header>
                        <div className="pub-body">
                            <p>Mind blowing programmers! 🤯.</p>
                            <img src={pub_eleandro} alt=""/>
                        </div>
                        <nav className="reactions-pub">
                            <div className="react" style={{background:"red"}}>
                                <AiTwotoneHeart size={10} color='#fff'/>
                            </div>
                            <div className="react" style={{background:"#0a66c2"}}>
                                <AiFillLike size={10} color='#fff'/>
                            </div>
                            <span>2</span>
                        </nav>
                        <div className="hr-c">
                            <div className="hr"></div>
                        </div>
                        <footer>
                            <div className="reaT">
                                <AiFillLike size={25}/>
                                Gosto
                                <main className="emojis">
                                    <AiFillLike size={25} color="#378fe9"/>
                                    <TiThumbsOk size={25} color="green"/>
                                    <AiTwotoneHeart size={25} color="red"/>
                                </main>
                            </div>
                            <div className="">
                                <AiOutlineComment size={25}/>
                                Comentar
                            </div>
                            <div className="">
                                <FaShare size={25}/>
                                partilhar
                            </div>
                            <div className="">
                                <RiSendPlaneFill size={25}/>
                                Enviar
                            </div>
                        </footer>
                    </main>
                    <main className="pub">
                        <header className="pub-header">
                            <div className="box" style={{background:'transparent'}}>
                                <img src={gabriel} alt="" width="50px" height="50px" className="pic"/>
                                <main className="textos">
                                    <span>Gabriel de Jesus</span>
                                    <p>Software Developer at Rocketseat</p>
                                    <div className="locate">
                                        <small>6 min .</small>
                                        <TiWorldOutline size={15} color="#000"/>
                                    </div>
                                </main>
                            </div>
                            <IoEllipsisHorizontal size={20} color="#000" className="svg-65"/>
                        </header>
                        <div className="pub-body">
                            <p>Hoje decidi pesquisar um pouco sobre APIs e fiz uma pequena lista que pretendo testar nos meus novos projetos.
Sentiu curiosidade para saber quais selecionei? Aqui está a lista das que eu mais gostei e pretendo utilizar.
                            </p>
                            <img src={pub_gabriel} alt=""/>
                        </div>
                        <nav className="reactions-pub">
                            <div className="react" style={{background:"red"}}>
                                <AiTwotoneHeart size={10} color='#fff'/>
                            </div>
                            <div className="react" style={{background:"#0a66c2"}}>
                                <AiFillLike size={10} color='#fff'/>
                            </div>
                            <span>2</span>
                        </nav>
                        <div className="hr-c">
                            <div className="hr"></div>
                        </div>
                        <footer>
                            <div className="reaT">
                                <AiFillLike size={25}/>
                                Gosto
                                <main className="emojis">
                                    <AiFillLike size={25} color="#378fe9"/>
                                    <TiThumbsOk size={25} color="green"/>
                                    <AiTwotoneHeart size={25} color="red"/>
                                </main>
                            </div>
                            <div className="">
                                <AiOutlineComment size={25}/>
                                Comentar
                            </div>
                            <div className="">
                                <FaShare size={25}/>
                                partilhar
                            </div>
                            <div className="">
                                <RiSendPlaneFill size={25}/>
                                Enviar
                            </div>
                        </footer>
                    </main>
                </article>
            </main>
        </>
    )
}
export default MiddleBar
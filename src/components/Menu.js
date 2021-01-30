import React,{useEffect} from 'react'
import '../style/components/Menu.css'
import Profi from '../assets/profile.jpg'
import { FaLinkedin,FaUserFriends } from "react-icons/fa";
import {IoHomeSharp,IoBagRemove} from 'react-icons/io5'
import {IoMdNotifications} from 'react-icons/io'
import { BsSearch,BsFillChatDotsFill,BsGrid3X3Gap } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";


function Menu(){
    useEffect(()=>{
        const u=HandleAncora();
        u.Init()
        document.title="Feed | Linkedin"
      },[])

      function HandleAncora(){
        const html={
          ancora:document.querySelectorAll('.a'),
          links:document.querySelectorAll('.tab-links'),
          content:[...document.querySelector('.tab-content').children],
          open:document.querySelector('[data-open]'),
          //emoji:document.querySelectorAll('.reacti')
        }
        function addClass(e){
          e.classList.add('active')
        }
        function hideAllTabcontent(){
          html.content.forEach(section=>{
            section.style.display='none'
          })
        }
        function ShowCurrentTab(id){
          const tabContent=document.querySelector('#'+id)
          tabContent.style.display='block'
        }
        function  selectTab(event) {
          hideAllTabcontent()
          const target=event.currentTarget
          ShowCurrentTab(target.dataset.id)
        }
        function  ListeForCHanges() {
          // html.links.forEach(tab=>{
          //   tab.addEventListener('click',selectTab)
          // })
          html.links.forEach(tab=>{
            [...tab.children].forEach(ele=>{
              ele.addEventListener('click',selectTab)
            })
          })
        }
        function click(){
          html.ancora.forEach(ele=>{
            ele.addEventListener('click',(e)=>{
              deleteAllClasses()
              addClass(ele)
            })
          })
        }
        function deleteAllClasses(){
          html.ancora.forEach(ele=>{
            ele.classList.replace('active','l')
          })
        }
        
        function Init(){
          click()
          hideAllTabcontent()
          ListeForCHanges()
          html.open.click()
        } 
        return{Init};
      }
    return(
    <>
        <nav className="menu-container">
            <article className="global-menu">
                <div className="lado-direito-menu">
                    <FaLinkedin size={60} color="#0a66c2"/>
                    <div className="input-container">
                        <BsSearch size={20} color="#000" className="icone-input"/>
                        <input type="text" placeholder="pesquisar"/>
                    </div>
                </div>
                <div className="gr-menu">
                    <ul className="ul-menu tab-links">
                        <li data-id="Home" data-open>
                            <div  className="a active" aria-disabled="true">
                                <IoHomeSharp size={25} color="rgba(0,0,0,0.6)" aria-disabled="true"/>
                                <span>Home</span>
                            </div>
                        </li>
                        <li data-id="Rede">
                            <div  aria-disabled="true" className="a">
                                <FaUserFriends size={25} color="rgba(0,0,0,0.6)" aria-disabled="true"/>
                                <span aria-disabled="true">Minha rede</span>
                            </div>
                        </li>
                        <li data-id="Vagas">
                            <div  aria-disabled="true" className="a">
                                <IoBagRemove size={25} color="rgba(0,0,0,0.6)" aria-disabled="true"/>
                                <span>Vagas</span>
                            </div>
                        </li>
                        <li data-id="Mensagem" >
                            <div  aria-disabled="true" className="a">
                                <BsFillChatDotsFill size={25} color="rgba(0,0,0,0.6)" aria-disabled="true"/>
                                <span>Mensagens</span>
                            </div>
                        </li>
                        <li data-id="Notificacoes" >
                            <div  aria-disabled="true" className="a">
                                <IoMdNotifications size={25} color="rgba(0,0,0,0.6)" aria-disabled="true"/>
                                <span>   Notificações</span>
                            </div>
                        </li>
                    </ul>
                    <aside className="gradle tab-links">
                    <div className="box" data-id="Perfil">
                            <main className="a">
                                <img src={Profi} alt="" width="25px" height="25px"/>
                                <span>Eu <RiArrowDropDownFill/></span>
                            </main>
                        </div>
                        <div className="hr">1</div>
                        <div className="box">
                            <main className="a">
                                <BsGrid3X3Gap size={25} color="rgba(0,0,0,0.6)"/>
                                <span>Solucoes <RiArrowDropDownFill/> </span>
                            </main>
                        </div>
                    </aside>
                </div>
            </article>
        </nav>
    </>
    )
}

export default Menu;
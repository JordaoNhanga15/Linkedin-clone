import { Link } from "react-router-dom";
import '../../style/components/Network/Left.css'
import {FaUserFriends,FaRegListAlt } from "react-icons/fa";
import {BiNotepad} from 'react-icons/bi'
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { RiShieldUserLine } from "react-icons/ri";
import Rigth from '../Rigth'

function Left(){
    return(
        <>
        <main className="Left">
            <aside className="left-1">
                <h3>Gerenciar a sua rede</h3>
                <ul>
                    <li><Link To="">
                        <span> <FaUserFriends size={20} color="rgba(0,0,0,.9)"/> Conexoes </span>   
                        1000 
                    </Link> </li>
                    <li><Link To="">
                        <span> <BiNotepad size={20} color="rgba(0,0,0,.9)"/> Contacts </span>   
                        1000 
                    </Link> </li>
                    <li><Link To="">
                        <span> <RiShieldUserLine size={20} color="rgba(0,0,0,.9)"/> pessoas que eu sigo </span>   
                        1000 
                    </Link> </li>
                    <li><Link To="">
                        <span> <HiOutlineClipboardCheck size={20} color="rgba(0,0,0,.9)"/> Eventos </span>   
                        1000 
                    </Link> </li>
                    <li><Link To="">
                        <span> <FaRegListAlt size={20} color="rgba(0,0,0,.9)"/> Pages </span>   
                        1000 
                    </Link> </li>
                </ul>
            </aside>
            <div className="">
                <Rigth />
            </div>
        </main>
        </>
    )
}
export default Left;
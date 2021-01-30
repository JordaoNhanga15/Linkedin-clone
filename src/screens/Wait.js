import { CgDanger } from "react-icons/cg";
import '../style/components/wait.css'

function Wait(props){
    return(
        <>
            <main className="wait">
                <CgDanger size={40} color="#e91e63"/>
                <h1>De momento nao ha {props.name}</h1>
            </main>
        </>
    )
}
export default Wait;
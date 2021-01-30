import '../style/screens/Loading.css'
import { AiFillLinkedin } from "react-icons/ai";

function Loading({history}){       
        setTimeout(
            function Mudanca(){
                history.push('/network')
            },6000)
    return(
        <>
            <section className="Loading">
                <h1>Linked <AiFillLinkedin size={50} color=""/></h1>
                <div className="line">
                    <div className="trans"></div>
                </div>
                <div id="confettis">
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
                <div class="confetti"></div>
            </div>
            </section>
            
        </>
    )
}
export default Loading;
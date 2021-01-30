import LeftBar from "./LeftBar"
import MiddleBar from "./MiddleBar"
import RigthBar from "./RigthBar"
import '../../style/components/Menu/Container.css'


function Container(){
    return(
        <>
            <main className="container-menu">
                <LeftBar />
                <MiddleBar />
                <RigthBar />
            </main>
        </>
    )
}
export default Container
import '../../style/components/Network/Container.css'
import Left from './Left'
import Midle from './Middle'

function ContainerNet(){
    return(
        <>
        <main className="container-menus">
            <Left />
            <Midle />
        </main>
        </>
    )
}
export default ContainerNet;
import '../../style/components/Network/Midle.css'
import Events from './Events'

function Midle(){
    return(
        <>
        <main className="Middle">
            <aside className="Middle-1">
                <div className="text">
                    <h3>Nenhum convite pendente</h3>
                    <small>Gerenciar</small>
                </div>
            </aside>
            <aside className="Middle-1">
                <div className="text">
                    <h3>Eventos on-line para voce</h3>
                    <small>Ver todas</small>
                </div>
                <Events />
            </aside>
        </main>
        </>
    )
}
export default Midle;
import React from 'react'
import Profile from '../screens/Profile'
import '../style/components/Controls.css'
import Container from './Menu/Container'
import ContainerNet from './Network/ContainerNet'
import Containe from './Notiicacoes/Container'
import Wait from '../screens/Wait'

function Controls() {
    return(
        <>
            <main className="tab-content">
                <div className="s" id="Home">
                    <Container />
                </div>
                <div className="s" id="Rede">
                    <ContainerNet />
                </div>
                <div className="s" id="Vagas">
                    <Wait name="Vagas"/>
                </div>
                <div className="s" id="Perfil">
                    <Profile />
                </div>
                <div className="s" id="Mensagem">
                    <Wait name="Mensagens"/>
                </div>
                <div className="s" id="Notificacoes">
                    <Containe />
                </div>
            </main>
        </>
    )
}
export default Controls
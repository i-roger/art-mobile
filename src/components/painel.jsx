import TopNavbar from './top-navbar/navbar'
import './style/navbarStyle.scss'

export default function Painel() {
    return(
        <>
        <TopNavbar/>
        <div className='container'>
            <aside>
                <div className='item'>
                    <p>Início</p>
                </div>
                <div className='item'>
                    <p>Desenhos</p>
                </div>
                <div className='item'>
                    <p>Sobre Nós</p>
                </div>
            </aside>

            <div className='r-side'>
                <div className='section'>
                    <div className='title'>
                     <h1>Sobre</h1>
                    </div>
                    <div className='content'>
                     <p>"Desenhos mobile são a nova tendência para quem adora desenhar em qualquer lugar e a qualquer hora! Com um celular ou tablet em mãos, é possível soltar a criatividade e criar ilustrações incríveis, seja durante uma viagem, no transporte público ou na pausa do trabalho. Aqui você vai encontrar dicas, tutoriais e inspirações para aprimorar suas habilidades de desenho e criar obras de arte no mundo mobile. Junte-se a nós nessa jornada artística e compartilhe seus desenhos usando a hashtag #desenhosmobile. Vamos criar juntos!"</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
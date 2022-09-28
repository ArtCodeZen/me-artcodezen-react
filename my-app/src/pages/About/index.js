import './about.css'
import imgAbout from '../../assets/pictures/ImagesForSite/About/about.webp';
function About() {




    return (
        <div className='pageContent'>
            <div className="infoCardAbout">
                <article>
                    <img src={imgAbout} alt="about" width='100' height='100'></img>
                    <div className="textBlock">
                        <h3>Sobre</h3>
                        <p>Leia mais abaixo!</p>
                    </div>
                </article>
                <article>
                    <h3>Sobre mim</h3>
                    <p>No começo do meu aprendizado de programação tive
                        bastante dificuldade de entender o que estava se
                        passando a cada linha de código. Comecei com a
                        linguagem Pascal na epoca da faculdade, depois de
                        um tempo comecei a ter contato com a linguagem C / C++
                        uma linguagem complexa, mas maravilhosa para desenvolvimento de
                        softwares locais e para embarcados tais como o Arduino Uno que me
                        ensinou como entrar de cabeça no mundo da robótica.
                        Graças a essa linguagem fui aprofundando no mundo robótico e depois de um tempo
                        passando a desenvolver softwares para estabilização de drones.
                        Mais para frente entrei no mundo IOT (Internet of Things) com
                        ESP8266 e ESP32 quando comecei a estagiar dentro da empresa de TI e
                        dai enxerguei a necessidade de aprender a parte front-end pois sem ela não
                        conseguiria exibir os dados ao vivo para o usuário, sendo
                        que até atualmente estou buscando aprender novos conceitos sobre cada
                        tecnologia principalmente de front-end.

                    </p>
                </article>
                <article>
                    <h3>Sobre o site</h3>
                    <p> Este site foi desenvolvido utilizando o serviço de hospedagem gratuito
                        do <a href="https://pages.github.com/"><b>github pages</b></a> , mas com uma configuração modificada para trabalhar com
                        a biblioteca do <a href="https://pt-br.reactjs.org/"><b>ReactJs</b></a>. Veja esta configuração seguindo os passos de
                        configuração com o <a href="https://github.com/gitname/react-gh-pages"><b>react-gh-pages</b></a>. Algumas das tecnologias usadas
                        dentro deste site são: HTML5; CSS3; SASS; Javascript e ReactJS.

                    </p>
                    
                </article>

            </div>

        </div>
    )
}
export default About;
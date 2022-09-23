import "./home.css"
import imageProfile from "../../assets/img/mePhoto.jpg";
import imgArduino from '../../assets/pictures/ImagesForSite/embedded.svg';
//import imgHardware from '../../assets/pictures/ImagesForSite/hardware.jpg';
import imgProg from '../../assets/pictures/ImagesForSite/frontend.svg';
import imgLinux from '../../assets/pictures/ImagesForSite/linux.svg';
import imgBackEnd from '../../assets/pictures/ImagesForSite/backend.svg';

// art
import imgArt from '../../assets/pictures/ImagesForSite/Art/art.webp';
import certUdemy from '../../assets/pictures/ImagesForSite/Art/certificadoDesenho.webp';

// hobby
import imgHeli from '../../assets/pictures/ImagesForSite/Hobby/heli.webp';
import imgDrone from '../../assets/pictures/ImagesForSite/Hobby/drone.webp';
import imgAero from '../../assets/pictures/ImagesForSite/Hobby/aeromodel.svg';

import { useEffect, useState } from "react";
function Home() {



    const [myTitles, setTitles] = useState([]);
    const [infoText, setInfoText] = useState("");
    const [myTitle, setMyTitle] = useState("");

    useEffect(() => {

        const STATES =
        {
            Programacao: "Programação",
            Arte: "Arte",
            Hobby: "Hobby"
        }
        function showInfo() {
           
            let stateHtml = "";
            switch (myTitle) {
                case STATES.Programacao:

                    stateHtml = (
                        <div>
                            <div className="cardInfoContent">
                                <img className="svg" alt={myTitle} src={imgArduino} />
                                <p><b>Programação para microcontroladores</b> na
                                    linguagem c/c++, experiencia com firmware para drones e IOT</p>
                            </div>
                            <div className="cardInfoContent">
                                <img className="svg" alt={myTitle} src={imgLinux} />
                                <p> <b>Sistema Linux</b>, Instalação, configuração Distros Debian e OpenSuse</p>
                            </div>
                            <div className="cardInfoContent">
                                <img className="svg" alt={myTitle} src={imgProg} />
                                <p> <b>Desenvolvimento de páginas web</b>, utilizando as tecnologias HTML5, CSS3, SASS, Javascript e React.JS</p>
                            </div>
                            <div className="cardInfoContent">
                                <img className="svg" alt={myTitle} src={imgBackEnd} />
                                <p> <b>Desenvolvimento em backend</b>, utilizando as linguagens de programação C/C++, Python, Java</p>
                            </div>
                        </div>
                    )
                    break;
                case STATES.Arte:
                    stateHtml = (
                        <div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgArt} />
                                <p> <b>Desenho realista de rostos</b>, representação de expressões de faces utilizando lápis, grafite,
                                    caneta (ballpoint) e formato digital</p>
                            </div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={certUdemy} />
                                <p> <b>Udemy certificado de desenho</b>, O desenho de cabeças, rostos e retratos</p>
                            </div>
                        </div>

                    );
                    break;
                case STATES.Hobby:
                    stateHtml = (
                        <div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgHeli} />
                                <p> <b>Heli R/C</b>, Eletric / Glow; Montagem, configuração e voo em modo Sport / 3D acrobatico</p>
                            </div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgDrone} />
                                <p> <b>Drones</b>, Montagem, configuração de embarcados, fabricação de circuitos PDB e frames</p>
                            </div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgAero} />
                                <p> <b>Aeromodelismo</b>, Montagem, configuração, fabricação de fuselagem voo estilo acrobático</p>
                            </div>
                        </div>
                    );
                    break;
                default:
                    break;
            }
            return (
            <div className="selectedCardInfo">
                <h1>{myTitle}</h1>
                {stateHtml}
            </div>)
        }
        if (myTitles.length === 0) {
            setTitles([STATES.Programacao, STATES.Arte, STATES.Hobby]);
            setMyTitle(STATES.Programacao);
        }
        console.log(showInfo());
        setInfoText(showInfo());

    }, [myTitle, myTitles]);

    return (
        <section className="pageContent">
            <div className="infoCard">
                <div className="cardImage">
                    <h3>A.K.A</h3>
                    <p>artcodezen</p>
                    <img alt="my face" src={imageProfile} />
                    <p>Henrique <br />H. Watanabe</p>
                </div>
                <div className="cardDesc">
                    <p>"Sempre buscando novos conhecimentos de tecnologia e aplicando para cada situação
                        , desafiando o erro para evoluir a cada solução!"
                    </p>
                </div>
            </div>
            <div className="selectCard">
                <h3>NAVEGUE</h3>
                <div className="selectTitle">
                    {myTitles.map((item) => {
                        return (
                            <button key={item} onClick={() => {                               
                                setMyTitle(item);
                            }
                            }>{item}</button>
                        )
                    })}
                </div>
            </div>
            {infoText}
            
        </section >
    )
}
export default Home;
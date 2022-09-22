import "./home.css"
import imageProfile from "../../assets/img/mePhoto.jpg";
import imgArduino from '../../assets/pictures/ImagesForSite/embedded.svg';
//import imgHardware from '../../assets/pictures/ImagesForSite/hardware.jpg';
import imgProg from '../../assets/pictures/ImagesForSite/frontend.svg';
import imgLinux from '../../assets/pictures/ImagesForSite/linux.svg';
import imgBackEnd from '../../assets/pictures/ImagesForSite/backend.svg';
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
            switch (myTitle) {
                case STATES.Programacao:

                    return (
                        <div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgArduino} />
                                <p><b>Programação para microcontroladores</b> na
                                    linguagem c/c++, experiencia com firmware para drones e IOT</p>
                            </div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgLinux} />
                                <p> <b>Sistema Linux</b>, Instalação, configuração Distros Debian e OpenSuse</p>
                            </div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgProg} />
                                <p> <b>Desenvolvimento de páginas web</b>, utilizando as tecnologias HTML5, CSS3, SASS, Javascript e React.JS</p>
                            </div>
                            <div className="cardInfoContent">
                                <img alt={myTitle} src={imgBackEnd} />
                                <p> <b>Desenvolvimento em backend</b>, utilizando as linguagens de programação C/C++, Python, Java</p>
                            </div>
                        </div>
                    )
                case STATES.Arte:
                    return (
                        <div></div>
                    );

                case STATES.Hobby:
                    return (
                        <div></div>
                    );

                default:
                    break;
            }
        }
        if (myTitles.length === 0) {
            setTitles([STATES.Programacao, STATES.Arte, STATES.Hobby]);
            setMyTitle(STATES.Programacao);
        }
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
                            <button key={item} onClick={() => setMyTitle(item)}>{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="selectedCardInfo">
                <h1>{myTitle}</h1>
                {infoText}
            </div>


        </section >
    )
}
export default Home;
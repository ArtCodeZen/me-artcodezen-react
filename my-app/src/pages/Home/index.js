import "./home.css"
import imageProfile from "../../assets/img/mePhoto.jpg";
import imgArduino from '../../assets/pictures/ImagesForSite/arduino.jpg';
//import imgHardware from '../../assets/pictures/ImagesForSite/hardware.jpg';
import imgLinux from '../../assets/pictures/ImagesForSite/linux.jpg';
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
                                <p> <b>Sistema Linux</b>, Instalação, configuração tanto para uso desktop quanto servidores</p>
                            </div>
                        </div>
                    )
                case STATES.Arte:
                    return (
                        <div>arte</div>
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
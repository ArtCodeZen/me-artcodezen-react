import "./home.css"
import imageProfile from "../../assets/img/mePhoto.jpg";
import imageNote from "../../assets/image.jpg";
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
                            <h1>{myTitle}</h1>

                            <img alt={myTitle} src={imageNote} />
                            <p>sdsdsdsdds</p>
                        </div>
                    )
                case STATES.Arte:
                    break;
                case STATES.Hobby:
                    break;
                default:                    
                    break;
            }
        }
        setTitles([STATES.Programacao, STATES.Arte, STATES.Hobby]);
        setMyTitle(STATES.Programacao);
        setInfoText(showInfo());

    }, [myTitle]);

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
                {infoText}
            </div>


        </section >
    )
}
export default Home;
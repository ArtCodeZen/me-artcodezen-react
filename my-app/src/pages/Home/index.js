import "./home.css"
import imageProfile from "../../assets/img/mePhoto.jpg";
import imageNote from "../../assets/image.jpg";
import { useState } from "react";
function Home() {


    const STATES =
    {
        Programacao: "Programação",
        Arte: "Arte",
        Hobby: "Hobby"
    }
    const myTitles = [STATES.Programacao, STATES.Arte, STATES.Hobby];
    const [infoText, setInfoText] = useState("");
    function showInfo(stateItem) {
        switch (stateItem) {
            case STATES.Programacao:
                return (
                    <div>
                        <h1>{stateItem}</h1>

                        <img alt={stateItem} src={imageNote} />
                        <img alt={stateItem} src={imageNote} />
                        <img alt={stateItem} src={imageNote} />
                        <img alt={stateItem} src={imageNote} />

                    </div>


                )

            default:
                alert('default')
                break;
        }
    }
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

                <div className="selectCard">
                    <h3>NAVEGUE</h3>
                    <div className="selectTitle">
                        {myTitles.map((item) => {
                            return (
                                <button key={item} onClick={() => setInfoText(showInfo(item))}>{item}</button>
                            )
                        })}                       
                    </div>
                    <div className="myCard">
                            {infoText}
                    </div>
                </div>

            </div>
        </section >
    )
}
export default Home;
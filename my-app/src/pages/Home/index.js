import "./home.css"
import imageProfile from "../../assets/img/mePhoto.jpg";
import imgtest from "../../assets/thumb6.jpg"
import myImage from "../../assets/image.jpg";
function Home() {

    const myTitles = ["Programação", "Arte"];
    function showInfo(item){
        alert(item + "ok");
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
                                <button key={item} onClick={()=>showInfo(item)}>{item}</button>
                            )
                        })}
                    </div>
                    <img alt="img" src={imgtest}></img>
                    <img alt="img" src={myImage}></img>

                    <img alt="img" src={imgtest}></img>
                    <img alt="img" src={imgtest}></img>


                </div>

            </div>
        </section >
    )
}
export default Home;
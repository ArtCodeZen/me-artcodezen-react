import "./footer.css"
import imgInstagram from "../../assets/footerImages/instagram.svg";
import imgGithub from "../../assets/footerImages/github.svg";
import imgTikTok from "../../assets/footerImages/tiktok.svg";
import imgYoutube from "../../assets/footerImages/youtube.svg";
import imgDeviantArt from "../../assets/footerImages/deviantart.svg";
import imgLinkedin from "../../assets/footerImages/linkedin.svg";
function Footer() {
    const arrayPathImg = [imgInstagram, imgGithub, imgTikTok, imgYoutube, imgDeviantArt, imgLinkedin];
    const arrayUrl = ['https://www.instagram.com/artcodezen/', 'https://github.com/artcodezen',
                        'https://www.tiktok.com/@artcodezen', 'https://www.youtube.com/channel/UCi3xYozMiKuvpc-aTbAgA3Q',
                    'https://www.deviantart.com/artcodezen', 'https://www.linkedin.com/in/henrique-watanabe-b09b21243/'];
    let arrayItems = [];
    for(let i = 0; i < arrayPathImg.length; i++){
        let jsonitem = {};
        jsonitem = {img: arrayPathImg[i], link: arrayUrl[i]};
        arrayItems.push(jsonitem);
    }
    return (
        <footer className="footer">
            <div className="author">
                <p>Powered by Henrique H. Watanabe&copy;</p>
            </div>
            <ul className='links'>
                {arrayItems.map((item)=>{
                    return (<li className='itemsList'><a href={item.link}><img src={item.img} alt="item.img"/></a></li>)
                })}
            </ul>
           
        </footer>
    )
}
export default Footer;
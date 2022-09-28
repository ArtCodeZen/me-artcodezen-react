import './technologies.css';

// frontEnd
import imghtml from '../../assets/pictures/ImagesForSite/Tech/Frontend/html5.svg';
import css3 from '../../assets/pictures/ImagesForSite/Tech/Frontend/css3.svg';
import sass from '../../assets/pictures/ImagesForSite/Tech/Frontend/sass.svg';
import javascript from '../../assets/pictures/ImagesForSite/Tech/Frontend/javascript.svg';
import jquery from '../../assets/pictures/ImagesForSite/Tech/Frontend/jquery.svg';
import react from '../../assets/pictures/ImagesForSite/Tech/Frontend/react.svg';
// embedded
import esp from '../../assets/pictures/ImagesForSite/Tech/Embedded/esp.svg';
import stm from '../../assets/pictures/ImagesForSite/Tech/Embedded/stm.svg';
import arduino from '../../assets/pictures/ImagesForSite/Tech/Embedded/arduino.svg'
// backend
import c from '../../assets/pictures/ImagesForSite/Tech/Backend/c.svg'
import cplusplus from '../../assets/pictures/ImagesForSite/Tech/Backend/cplusplus.svg'
import python from '../../assets/pictures/ImagesForSite/Tech/Backend/python.svg'
import node from '../../assets/pictures/ImagesForSite/Tech/Backend/nodejs.svg'
import android from '../../assets/pictures/ImagesForSite/Tech/Backend/android.svg'
// databases
import mysql from '../../assets/pictures/ImagesForSite/Tech/Database/mysql.svg'
import firebase from '../../assets/pictures/ImagesForSite/Tech/Database/firebase.svg'
import postgresql from '../../assets/pictures/ImagesForSite/Tech/Database/postgresql.svg'
// SO
import windows from '../../assets/pictures/ImagesForSite/Tech/SO/windows.svg'
import linux from '../../assets/pictures/ImagesForSite/Tech/SO/linux.svg'
import debian from '../../assets/pictures/ImagesForSite/Tech/SO/debian.svg'
import opensuse from '../../assets/pictures/ImagesForSite/Tech/SO/opensuse.svg'
import ubuntu from '../../assets/pictures/ImagesForSite/Tech/SO/ubuntu.svg'
//Servers
import heroku from '../../assets/pictures/ImagesForSite/Tech/Servers/heroku.svg';
import amazon from '../../assets/pictures/ImagesForSite/Tech/Servers/amazonwebservices.svg';
import azure from '../../assets/pictures/ImagesForSite/Tech/Servers/azure.svg';
// Others
import git from '../../assets/pictures/ImagesForSite/Tech/Others/git.svg';
import npm from '../../assets/pictures/ImagesForSite/Tech/Others/npm.svg';
import yarn from '../../assets/pictures/ImagesForSite/Tech/Others/yarn.svg';
import gimp from '../../assets/pictures/ImagesForSite/Tech/Others/gimp.svg';
import inkscape from '../../assets/pictures/ImagesForSite/Tech/Others/inkscape.svg';
import filezilla from '../../assets/pictures/ImagesForSite/Tech/Others/filezilla.svg';


function Technologies() {
    const arrayFrontEnd = [imghtml, css3, sass, javascript, jquery, react];
    const arrayBackend = [c, cplusplus, python, node, android];
    const arrayEmbedded = [arduino, esp, stm];
    const arrayDatabases = [mysql, firebase, postgresql];
    const arraySOs = [windows, linux, debian, ubuntu, opensuse];
    const arrayServers = [heroku, amazon, azure];
    const arrayOthers = [git, npm, yarn, gimp, inkscape, filezilla];
    return (
        <div className="techContent">
            <div className='myItems'>
                <article>
                    <h3>Frontend</h3>
                </article>
                <div className='cardContent clearfix'>
                {arrayFrontEnd.map((item, i) => {
                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
            <div className='myItems'>
                <article>
                    <h3>Embarcados</h3>
                </article>
                <div className='cardContent clearfix'>
                {arrayEmbedded.map((item, i) => {                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
            <div className='myItems'>
                <article>
                    <h3>Backend</h3>
                </article>
                <div className='cardContent clearfix'>
                {arrayBackend.map((item, i) => {                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
            <div className='myItems'>
                <article>
                    <h3>Banco de dados</h3>
                </article>
                <div className='cardContent clearfix'>
                {arrayDatabases.map((item, i) => {                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
            <div className='myItems'>
                <article>
                    <h3>Sistemas Operacionais</h3>
                </article>
                <div className='cardContent clearfix'>
                {arraySOs.map((item, i) => {                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
            <div className='myItems'>
                <article>
                    <h3>Servidores remotos</h3>
                </article>
                <div className='cardContent clearfix'>
                {arrayServers.map((item, i) => {                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
            <div className='myItems'>
                <article>
                    <h3>Outros</h3>
                </article>
                <div className='cardContent clearfix'>
                {arrayOthers.map((item, i) => {                       
                       return(<div className="imgContainer" alt={i} key={i}>
                           <img src={item} alt={i}></img>
                       </div>)
                   })}
                </div>
            </div>
        </div>
    )
}
export default Technologies;
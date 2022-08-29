import Img from './componentes/Img';
import styles from './App.module.css';
import Button from './componentes/Button';
import { BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';
import {FaSteamSquare} from 'react-icons/fa'
function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Henrique Gomes</h1>
      <Img/>
      <p className={styles.frase}>Seja bem-vindo a minha área de links, caso queira me conhecer mais clique em algumas das redes abaixo.</p>
      <Button link='https://www.instagram.com/henriquegomesj_/' logo={<BsInstagram/>} nome_botao='Instagram'/>
      <Button link='https://www.linkedin.com/in/henrique-gomes-757727225/' logo={<BsLinkedin/>} nome_botao='Linkedin'/>
      <Button link='https://github.com/Henrique-Gomesz/' logo={<BsGithub/>} nome_botao='Github'/>
      <Button link='https://steamcommunity.com/id/gomesxd/' logo={<FaSteamSquare/>} nome_botao='Steam'/>
      <p className={styles.footer}>Desenvolvido por Henrique Gomes &copy;</p>
    </div>
  );
}

export default App;

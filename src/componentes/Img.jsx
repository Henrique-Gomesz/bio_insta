import styles from './Img.module.css'
import imagem from '../eu.jpg'
function Img(){
    return(
        <div className={styles.container}>
            <img className={styles.img} src={imagem} alt="" />
        </div>
    );
}
export default Img
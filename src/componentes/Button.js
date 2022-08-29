import styles from "./Button.module.css"
function Button({nome_botao,logo,link}){
    return (
        <div className={styles.container}>
           
            <a target='__blank' href={link}><button className={styles.botao}> <div className={styles.svg}>{logo}</div> {nome_botao}</button></a>
        </div>
    )
}
export default Button
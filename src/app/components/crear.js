import styles from "../page.module.css";

export default function Crear() {
   
    return (
        <>
            <div className={styles.divCrear}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>
                <div className={styles.divPublicar}>
                    <input placeholder="Iniciar hilo..." />
                    <button>Publicar</button>
                </div>
            </div>
        </>
    );
}

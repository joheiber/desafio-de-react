import Crear from "./crear"
import styles from "../page.module.css"
export default function Main() {

    return (
        <main>
            <Crear />
            <div className={styles.divCard}>
                <div className={styles.divUsuariP}>
                    <div >
                        <div className={styles.iconP}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </div>
                        <div >
                            <p className={styles.pNombre}>dolartodsay</p>
                            <p>
                                <a href="https://dolartoday.com/que-se-sabe-del-primer-banco-completamente-digital-que-funcionara-en-venezuela/"> dolartoday.com/que-se-sabe-del....</a>
                            </p>
                        </div>

                    </div>
                    <div className={styles.divInfo}>
                        <p>3 min</p>
                        <div className={styles.iconPuntos}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg></div>
                    </div>

                </div>
                <div className={styles.divPublicacion}>
                    <div className={styles.divImg}>
                        <img src="https://scontent.cdninstagram.com/v/t39.30808-6/369951301_18387255049041189_5531175473495794210_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=5NskqetTcYQAX8mVizy&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE3OTQ2MDA4ODU4NjQyNjQwNQ%3D%3D.2-ccb7-5&oh=00_AfC4VXPA9xN8-yzE9g-BwMkbs2Ps5KMly7IDjjV73xheZA&oe=65B73D4A&_nc_sid=10d13b" alt="" />
                    </div>
                    <div className={styles.divIcon}>
                        <div className={styles.iconPuntos}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg></div>
                        <div className={styles.iconPuntos}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                        </svg></div>
                        <div className={styles.iconPuntos}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-repeat" viewBox="0 0 16 16">
                            <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                        </svg></div>
                        <div className={styles.iconPuntos}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                            </svg>
                        </div>

                    </div>
                    <div className={styles.divInfo}>
                        <p>1 me gusta</p>
                    </div>

                </div>



            </div>
        </main>

    )

}
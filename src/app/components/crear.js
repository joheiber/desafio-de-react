"use client"
import styles from "../page.module.css";
import React, { useState } from 'react';


export default function Crear({ onCambioCategoría }) {
    
    const [inputValue, setInputValue] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) { 
            setError("El campo no puede estar vacío");
            return;
        }
        onCambioCategoría(inputValue);
        setInputValue("");
        setError(""); 
    };

    const handleCambio = (event) => {
        setInputValue(event.target.value);
        setError(""); 
    };

    return (
        <>
            <div className={styles.divCrear}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                </div>
                <div className={styles.divPublicar}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Iniciar hilo..."
                            value={inputValue}
                            onChange={handleCambio}
                        />
                        {error && <p id={styles.pError} >{error}</p>}
                        <button type="submit">Publicar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

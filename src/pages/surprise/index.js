import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.scss';


export default function Pai() {

    const [Frase, setFrase] = useState([]);
    const [mostrarFrase, setMostrarFrase] = useState(false);

    function click() {
        const x = 'Obrigado por ser esse pai incrivel que o senhor é, sou muito grato a tudo que o senhor ja fez por mim, saiba que o senhor é minha inspiração, meu espelho, o meu heroi, Te amo !'

        setFrase(x);
        setMostrarFrase(true)
    }

    return (
        <section className="nav-home">
            <header>
                <main>
                    <h2>
                        Um presente que espero que goste, pai
                    </h2>
                    <nav>
                        <Link className="link" to={'/galeria'}>
                            <img src="/src/images/nigga.png" alt="" />
                        </Link>
                    </nav>


                </main>
            </header>

            <main className="mom">
                <div className="container">
                    <div className="p1">
                        <h4>
                            "Nosso herói silencioso, guia e amigo. No Dia dos Pais, celebramos aquele que nos inspira, nos apoia e nos enche de amor incondicional. É um dia para honrar os sorrisos compartilhados, os momentos preciosos e a sabedoria transmitida. Feliz Dia dos Pais a todos os papais incríveis que iluminam nossas vidas com seu carinho e presença constante."
                        </h4>
                    </div>

                    <div className="p2">
                        <p>
                            A cada dia que acordo, vejo um batalhador, alguem que luta todos os dias para trazer o 'Pão' de cada dia, se levantar da cama mesmo cansado para não me deixar passar fome ou qualquer tipo de necessidade, e isso é o que mais me motiva ser alguém melhor, um espelho do guerreiro que tenho dentro de casa, alguém cheio de forças para dar o melhor a quem eu amo
                        </p>

                        <button onClick={click}>
                            <img src="/src/images/envelope.png" alt="" />
                        </button>
                    </div>


                    <div className={`line ${mostrarFrase ? 'mostrar' : ''}`}></div>
                    <div className={`nav-text ${mostrarFrase ? 'mostrar' : ''}`}>

                        <span>
                            {Frase}
                        </span>

                        <h4>
                            Agora volte la pra cima e aperte no icone de envelope preto
                        </h4>
                    </div>
                </div>
            </main>


        </section >
    );
}
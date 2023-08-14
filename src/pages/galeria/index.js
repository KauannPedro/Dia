import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.scss';

export default function Galeria() {


    return (
        <section className="nav-galeria">
            <header>
                <main>
                    <h2>
                        Memórias
                    </h2>
                </main>
            </header>

            <main className="father">
                <div className="container">
                    <div>
                        <img src="/src/images/praia.jpg" alt="" />
                        <p>
                            Data: 10/06/2023
                        </p>
                    </div>

                    <div>
                        <img src="/src/images/praia2.jpg" alt="" />
                        <p>
                            Data: 10/06/2023
                        </p>
                    </div>

                    <div>
                        <img src="/src/images/praia3.jpg" alt="" />
                        <p>
                            Data: 12/11/2022
                        </p>
                    </div>

                    <div>
                        <img src="/src/images/family.jpg" alt="" />
                        <p>
                            Data: muitos anos atrás
                        </p>
                    </div>

                    <div>
                        <img src="/src/images/kim.jpg" alt="" />
                        <p>
                            Data: mais de muitos anos atrás
                        </p>
                    </div>

                    <div>
                        <img src="/src/images/fut.jpg" alt="" />
                        <p>
                            Data: muitos anos atrás
                        </p>
                    </div>

                </div>


                <Link className="back" to={'/'}>Voltar</Link>

            </main>
        </section>
    );
}
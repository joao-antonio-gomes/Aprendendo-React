import React, { Component } from 'react';
import "./estilo.css";

class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">Título</h3>
                </header>
                <p className="card-nota_texto">Texto da sua Nota</p>
            </section>
        );
    }
}

export default CardNota;
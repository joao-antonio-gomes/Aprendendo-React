import React, { Component } from 'react'

class FormularioCadastro extends Component {
    state = {}
    render() {
        return (
            <form>
                <input type="text" placeholder="Digite um título" />
                <textarea placeholder="Digite um texto" />
                <button>Criar</button>
            </form>
        );
    }
}

export default FormularioCadastro;
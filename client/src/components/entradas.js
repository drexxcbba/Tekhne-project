import React, { Component } from 'react';
import '../componentsCss/entradas.css';
import Header from './header'
import pic from '../images/partido.jpg'

class Entrada extends Component{

    constructor(){
        super();
        this.state = { title1: ''};
        this.state = { parrafo1: ''};
        this.state = { tipoAsientos: []};
        this.state = { nombre: ''};
        this.state = { carnet: 0};
        this.state = { tipoasiento: 0};
        this.state = { entradascant: 0};
    }

    componentDidMount(){
        this.setState({ title1: 'Compra de entradas'});
        this.setState({ parrafo1: 'Gracias por apoyar a la familia de Wilstermann.'});
        fetch('http://localhost:8080/tipoasiento')
        .then(res => res.json())
        .then(ta => this.setState({ tipoAsientos : Object.values(ta)}));
    }

    valueToState(target){
        this.setState({ [target.name]: target.value });
    }

    insert(){
        return fetch('http://localhost:8080/ventaent/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ persona_idpersona: this.state.carnet, entrada_identrada: 1, cant: this.state.entradascant})
        }).then(res => res)
        .catch(err => err);
    }

    render(){
        return (
            <div className="entradas1">
                <div className="part1">
                    <Header title={this.state.title1} parrafo={this.state.parrafo1} />
                    <h2>Llene el siguiente formulario:</h2>
                    <form action="valores.php">
                        <p>Ingresa tu nombre completo: <input type="text" name="nombre" onChange={event => this.valueToState(event.target)} /></p>
                        <p>Ingresa tu carnet de identidad: <input type="text" name="carnet" onChange={event => this.valueToState(event.target)} /></p>
                        <p>Escoja el tipo de asiento: <select name="tipoasiento" onChange={event => this.valueToState(event.target)}>
                            {this.state.tipoAsientos && this.state.tipoAsientos.map(
                                ta => <option value = {ta.idtipoasiento}>{ ta.nombretipo }</option>
                            )}   
                        </select></p>
                        <p>Precio por entrada es: 60</p>
                        <p>Cantidad de entradas: <input type="text" name="entradascant" onChange={event => this.valueToState(event.target)} /></p>
                        <input type="submit" value="Registrar" onClick={() => this.insert()}/>
                    </form>
                </div>
                <div className="part2">
                    <img id='imgEnt' src={pic} alt="" />
                </div>
            </div>
        );
    }
}

export default Entrada;
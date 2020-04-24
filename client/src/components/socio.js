import React, { Component } from 'react';
import '../componentsCss/socio.css';
import Header from './header'
import pic from '../images/socio.jpg'

class Socio extends Component {

    constructor(){
        super();
        this.state = { title1: ''};
        this.state = { parrafo1: ''};
        this.state = { tipoAsientos: []};
        this.state = { nombre: ''};
        this.state = { carnet: 0};
        this.state = { actualtipo: 0};
    }

    componentDidMount(){
        this.setState({ title1: 'Nuevo socio'});
        this.setState({ parrafo1: 'Gracias por unirte a la familia de Wilstermann.'});
        fetch('http://localhost:8080/tipoasiento')
        .then(res => res.json())
        .then(ta => this.setState({ tipoAsientos : Object.values(ta)}));
    }

    valueToState(target){
        this.setState({ [target.name]: target.value });
    }

    insert(){
        return fetch('http://localhost:8080/socio', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ tipoasiento_idtipoasiento: this.state.actualtipo, persona_idpersona: this.state.carnet })
        }).then(res => res.json())
        .catch(err => err);
    }
    
    render(){
        return (
            <div className="socio1">
                <div className="part1">
                    <Header title={this.state.title1} parrafo={this.state.parrafo1} />
                    <h2>Llene el siguiente formulario:</h2>
                    <form>
                        <p>Ingresa tu nombre completo: <input type="text" name="nombre" onChange={event => this.valueToState(event.target)}/></p>
                        <p>Ingresa tu carnet de identidad: <input type="text" name="carnet" onChange={event => this.valueToState(event.target)}/></p>
                        <p>Escoja el tipo de asiento: <select name="actualtipo" onChange={event => this.valueToState(event.target)}>
                            {this.state.tipoAsientos && this.state.tipoAsientos.map(
                                ta => <option value = {ta.idtipoasiento}>{ ta.nombretipo }</option>
                            )}
                        </select></p>
                        <input type="submit" value="Registrarse" onClick={() => this.insert()}/>
                    </form>
                </div>
                <div class="part2">
                    <img id='imgSocio' src={pic} alt="" />
                </div>
            </div>
        );
    }
}

export default Socio;
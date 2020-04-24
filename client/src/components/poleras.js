import React ,{ Component } from 'react';
import '../componentsCss/poleras.css';
import Header from './header'
import pic1 from '../images/polera1.png';

class Poleras extends Component{

    constructor(){
        super();
        this.state = { title1: ''};
        this.state = { parrafo1: ''};
        this.state = { tipoPoleras: []};
        this.state = { nombre: ''};
        this.state = { carnet: 0};
        this.state = { tipopolera: 0};
        this.state = { polerascant: 0};
    }
    

    componentDidMount(){
        this.setState({ title1: 'Compra de poleras'})
        this.setState({ parrafo1: 'Gracias por apoyar a la familia de Wilstermann.'})
        fetch('http://localhost:8080/tipopolera')
        .then(res => res.json())
        .then(tp => this.setState({ tipoPoleras : Object.values(tp)}));
    }

    valueToState(target){
        this.setState({ [target.name]: target.value });
    }

    insert(){
        return fetch('http://localhost:8080/ventapolera/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ polera_idpolera: this.state.tipopolera, persona_idpersona: this.state.carnet, cant: this.state.polerascant})
        }).then(res => res)
        .catch(err => err);
    }
    
    render(){
        return (
            <div className="poleras1">
                <div className="part1">
                    <Header title={this.state.title1} parrafo={this.state.parrafo1} />
                    <h2>Llene el siguiente formulario:</h2>
                    <form>
                        <p>Ingresa tu nombre completo: <input type="text" name="nombre" onChange={event => this.valueToState(event.target)}/></p>
                        <p>Ingresa tu carnet de identidad: <input type="text" name="carnet" onChange={event => this.valueToState(event.target)} /></p>
                        <p>Escoja el tipo de polera: <select name="tipopolera" onChange={event => this.valueToState(event.target)}>
                        {this.state.tipoPoleras && this.state.tipoPoleras.map(
                                tp => <option value = {tp.idtipopolera}>{ tp.nombretipop }</option>
                            )}
                        </select></p>
                        <p>Precio por polera es: 60</p>
                        <p>Cantidad de poleras: <input type="text" name="polerascant" onChange={event => this.valueToState(event.target)}/></p>
                        <input type="submit" value="Registrar" onClick={() => this.insert()}/>
                    </form>
                </div>
                <div className="part2">
                   <img id="pol1" src={pic1} alt="" />
                </div>
            </div>
        );
    }
}

export default Poleras;
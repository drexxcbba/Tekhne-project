import React, { Component } from 'react';
import '../componentsCss/admin.css';
import Header from './header'

class Admin extends Component {

    constructor(){
        super();
        this.state = { title1: ''};
        this.state = { title2: ''};
        this.state = { title3: ''};
        this.state = { title4: ''};
        this.state = { parrafo1: ''};
        this.state = { listaSO: []};
        this.state = { listaVP: []};
        this.state = { listaVE: []};
    }

    componentDidMount(){
        this.setState({ title1: 'Administracion de Transacciones'});
        this.setState({ title2: 'Seccion venta de poleras'});
        this.setState({ title3: 'Seccion venta de Entradas'});
        this.setState({ title4: 'Seccion de Socios'});
        this.setState({ parrafo1: 'Organizador de transaciones.'});
        
        fetch('http://localhost:8080/socio')
        .then(res => res.json())
        .then(so => this.setState({ listaSO : Object.values(so)}));
        
        fetch('http://localhost:8080/ventaent')
        .then(res => res.json())
        .then(ve => this.setState({ listaVE : Object.values(ve)}));

        fetch('http://localhost:8080/ventapolera')
        .then(res => res.json())
        .then(vp => this.setState({ listaVP : Object.values(vp)}));
    }

    deleteByid(wrd,id){
        return fetch('http://localhost:8080/'+ wrd + id, {
            method: 'DELETE'
        }).then(res => res)
        .catch(err => err);
    }

    render(){
        return (
            <div className="admin1">
                <Header title={this.state.title1} parrafo={this.state.parrafo1} />
                <h2>{this.state.title2}</h2>
                {this.state.listaVP && this.state.listaVP.map(
                    it => <div className="vp-item" key= {it.idventapoleras}>
                            <span>-Nombre:  {it.nombre}   -Cantidad:   {it.cant}   -Tipo:   {it.nombretipop}  -Precio:  {it.precio}</span>
                            <button onClick ={() => this.deleteByid('ventapolera/',it.idventapoleras)}>Eliminar</button>
                        </div>
                )}
                <h2>{this.state.title3}</h2>
                {this.state.listaVE && this.state.listaVE.map(
                    it => <div className="ve-item" key= {it.idventaent}>
                        <span>-Nombre:  {it.nombre}   -Evento:   {it.nombreevento}   -Tipo:   {it.nombretipo}   -Precio:  {it.precio}</span>
                        <button onClick ={() => this.deleteByid('ventaent/',it.idventaent)}>Eliminar</button>
                     </div>
                )}
                <h2>{this.state.title4}</h2>
                {this.state.listaSO && this.state.listaSO.map(
                    it => <div className="so-item" key= {it.idsocio}>
                        <span>-Nombre:  {it.nombre}     -Tipo:   {it.nombretipo}   -Precio:  {it.precio}</span>
                        <button onClick ={() => this.deleteByid('socio/',it.idsocio)}>Eliminar</button>
                      </div>
                )}
            </div>
    );
  }
}

export default Admin;
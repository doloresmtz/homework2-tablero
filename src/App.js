import React from 'react';
import produce from 'immer/dist/immer';

// data
import {tableros} from './ws-tableros.json';

// subcomponents
import Tablero from './components/Tablero/Tablero';
import {IconQuit} from './resources/svg/Icons';


class App extends React.PureComponent {
	constructor() {
		super();
		this.state = {
		  tableros
		}
		this.handleAddTablero = this.handleAddTablero.bind(this);
		this.removeTablero = this.removeTablero.bind(this);
		this.removeItemTablero = this.removeItemTablero.bind(this);
	  }
	
	  removeTablero(index) {
		this.setState({
		  tableros: this.state.tableros.filter((e, i) => {
			return i !== index
		  })
		});
	  }
	
	  handleAddTablero(tablero) {
		this.setState({
		  tableros: [...this.state.tableros, tablero]
		})
	  }
	
	  removeItemTablero(t,index) {
		
		//Items con el elemento index eliminado
		const tempitems=this.state.tableros[t].items.filter((e, i) => {
		  return i !== index
		})
		//Nuevo tablero editado
		const temptab = {
		  title: this.state.tableros[t].title,
		  items: tempitems
		};

		this.setState({
			tableros: [...this.state.tableros.filter((e, i) => {
			  return i !== t
			}) , temptab]
		  });
		      
	  }
	
	  render() {
		const tableros = this.state.tableros.map((tablero, i) => {
		  return (
			<div className="col-md-3" key={i}>
			  <div className="card mt-3">
				<div className="card-title text-center">
				  <h3>{tablero.title}</h3>
				</div>
				<div className="card-body">
				<ul className="list-group list-group-flush">
					{tablero.items.map((item, j) => (
					  <li key={j}>
						
						{item}
						<div onClick={() => this.removeItemTablero(i,j)}>							
							<IconQuit className="icon"/>
						</div>
											              
					  </li>
					))}
				</ul>
				</div>
				<div className="card-footer">
				  <button
					className="btn btn-danger"
					onClick={this.removeTablero.bind(this, i)}>
					Borrar
				  </button>
				</div>
			  </div>
			</div>
		  )
		});
	
		// RETURN THE COMPONENT
		return (
		  <div className="App">
	
			<nav className="navbar navbar-dark bg-dark">
			  <a className="navbar-brand" href="/">
				Mis Tableros
				<span className="badge badge-pill badge-light ml-2">
				  {this.state.tableros.length}
				</span>
			  </a>
			</nav>
	
			<div className="container">
				<div className="row">
					   <div className="col-md-12">&nbsp;</div>
					</div>
			        <div className="row">
						<div className="col-md-4">&nbsp; </div>
						<div className="col-md-4">
							<Tablero onAddTablero={this.handleAddTablero}></Tablero>
						</div>
						<div className="col-md-4">&nbsp; </div>
			         </div>
			
				  <div className="row">
					{tableros}			  
			      </div>
			</div>
		  </div>
		);
	  }
	}
	
	export default App;
	
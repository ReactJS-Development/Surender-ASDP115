import React , { Component } from 'react';
import Data from './Data';
class Employee extends Component{
	
		constructor(props){
		super(props);
		this.state={user:[],name:'',gender:'',city:'',number:''};
	}

	onNameHandler = (event) => {
		this.setState({name :event.target.value});
	};
	onGenderHandler=(event)=>{
		this.setState({gender:event.target.value});
	};
	onCityHandler=(event)=>{
		this.setState({city:event.target.value});
	};
	onNumberHandler=(event)=>{
		this.setState({number:event.target.value});
	};
	componentDidMount(){
 
    fetch('http://localhost:9000/api/employees')
      .then(response => response.json())
      .then(data =>  {
      	this.setState({user : data})
      });
  }

	onClickme=()=>{
		fetch('http://localhost:9000/api/employees', {
			  method: 'POST',
			  headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
 				 },
				body: JSON.stringify({
				name: this.state.name,
				gender: this.state.gender,
				city : this.state.city,
				mobile_no :this.state.number
											  })
		});

    	fetch('http://localhost:9000/api/employees')
    	  .then(response => response.json())
    	  .then(data =>  {
    	  	this.setState({user : data})
      });
	}
	render(){
		return(
			<div>
				This is new user data.
				<Data user={this.state.user} name={this.state.name} onNameHandler={this.onNameHandler} 
							gender={this.state.gender}  onGenderHandler={this.onGenderHandler}
							city = {this.state.city}  onCityHandler={this.onCityHandler}
							number ={this.state.number} onNumberHandler={this.onNumberHandler} onClickme={this.onClickme}/>
			</div>
			);}
}
export default Employee;
import React , {Component} from 'react';

class Data extends Component{
	render(){
		return(
			<div>
		Name:<input type = 'text' value = {this.props.name} onChange={this.props.onNameHandler} /><br/>
		Gender:<input type = 'text' value = {this.props.gender} onChange={this.props.onGenderHandler} /><br/>
		City: <input type = 'text' value = {this.props.city} onChange={this.props.onCityHandler} /><br/><br/>
		Mobile No: <input type = 'text' value = {this.props.number} onChange={this.props.onNumberHandler} /><br/><br/>
		<button onClick={this.props.onClickme}> Click me </button>
		<table ><tr>
					<th>Sr.no</th>
					<th>Name</th>
					<th>Gender</th>
					<th>City</th>
					<th>Cont. No.</th> </tr>
			{
				this.props.user.map((name, index) =>(
					<p> 
						<tr>
							<td>{index+1}</td>
							<td> {name.name}</td>
							<td>{name.gender}</td>
							<td>{name.city}</td>
							<td>{name.mobile_no}</td>
						</tr>
					</p>)
					)
			}
		</table>
		</div>

			)
	}

}

export default Data;
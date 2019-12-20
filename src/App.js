import React, { Component } from 'react';
import './app.css';
import CardList from './CardList';
import Title from './Title';
import SearchBox from './SearchBox';
import { robots } from './robots';

//STATE = object = that describes your application
//PROPS = tings that come out of state
//A parent feed state into child component. As soon as the child component recives the state it's a property. Child can't change properties. 
//State can change and affect our app
//State describes our app - it usually live in parent component

class App extends Component{
	constructor(){
		super(); //calls the constructor of component
		this.state = {
			robots: robots,
			searchfield: ''	
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
		})  
		return(
			<main className=''>
				<Title title={'Robofriends'}/>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</main>
		);
	}
}

export default App;
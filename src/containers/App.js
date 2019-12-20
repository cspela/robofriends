import React, { Component } from 'react';
import './app.css';
import CardList from '../components/CardList';
import Title from '../components/Title';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(robots => this.setState({robots: robots}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value}); 
	}

	render(){
		const {robots, searchfield} = this.state; 
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
		})  

		return !robots.length ? 
			<Title title={"Loading..."}/> : 
			(
				<main className=''>
					<Title title={'Robofriends'}/>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</main>
			)
	}
}

export default App;
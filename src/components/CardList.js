import React from 'react';
import Card from './Card'; 

const CardList = ({ robots }) => {
	const cardsArray = robots.map(robot => {
		const { name, email, id } = robot; 
		return (<Card 
			key={id} 
			id={id} 
			name={name} 
			email={email} 
		/>); 
	});

	return(
		<div id='robots' className='mb5 mt3 flex flex-wrap justify-center'>
			{ cardsArray }
		</div>
	); 
}

export default CardList; 
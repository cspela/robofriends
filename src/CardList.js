import React from 'react';
import Card from './Card'; 

const CardList = (props) => {
	const { robots } = props; 

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

	// return(
	// 	<div>
	// 		<Card 
	// 			id={robots[0].id}
	// 			name={robots[0].name} 
	// 			email={robots[0].email}
	// 		/>
	// 		<Card 
	// 			id={robots[1].id}
	// 			name={robots[1].name} 
	// 			email={robots[1].email}
	// 		/>
	// 	</div>
	// )
}

export default CardList; 
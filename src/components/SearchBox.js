import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2 tc mb3'>
			<input 
				id='search' 
				type='search' 
				name='search' 
				placeholder='Search robot' 
				className='pa3 ba b--near-white bg-light-gray'
				onChange={searchChange}
			/>
		</div>
	); 
}


export default SearchBox; 
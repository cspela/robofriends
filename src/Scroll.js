import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{
				overflowY: 'scroll', 
				height: '270px'
		}}>
			{ props.children }
		</div>
	); 
}

export default Scroll;
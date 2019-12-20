import React from 'react';

const Card = ({ id, name, email }) => {
	return(
		<article className='w-80 w-40-m w-20-l tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img  className="br-100 h4 w4 dib ba b--black-10" src={`https://robohash.org/${id}?200x200`} alt='robot' width='200'/>
			<div>
				<h2 className='f5 mb2'>{name}</h2>
				<p className='f6 fw4 gray mt0'>{email}</p>
			</div>
		</article>
	)
}

export default Card; 
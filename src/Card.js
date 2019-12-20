import React from 'react';

const Card = (props) => {
	const { id, name, email } = props; 
	return(
		<article className='w-20 tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img  className="br-100 h4 w4 dib ba b--black-10" src={`https://robohash.org/${id}?200x200`} alt='robot' width='200'/>
			<div>
				<h2 className='f5 mb2'>{name}</h2>
				<p className='f6 fw4 gray mt0'>{email}</p>
			</div>
		</article>
		//JS expression --> {}
	)
}
 
//<article className="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
   

// class Card extends Component{
// 	render(){
// 		return(
// 			<article>
// 				<img src={this.props.img} alt="robot"/>
//				<div>
// 					<h1>{this.props.name}</h1>
// 					<p>{this.props.email}</p>
// 				</div>	
//			</article>
// 		)
// 	}
// }

export default Card; 
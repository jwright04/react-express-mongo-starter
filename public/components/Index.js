import React from 'react'

import Router from 'react-router'

class Index extends React.Component{
	constructor(){
		super();
	}

	componentWillMount(){
		//do stuff before the component mounts
	}

	componentDidMount(){
		//do stuff after the component mounts
	}

    render() {
	    return (
	        <div>
	        	<br />
	        	<div className="main-img clearfix">
	        		<img src="images/weeknd_bg.png" />

	        	</div>
				<p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>

				<div>
					-<a href="http://slipsum.com" target="_blank">Samuel L. Ipsum</a>
				</div>

	        </div>
	    )
  	}

};

module.exports = Index;
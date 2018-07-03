var React = require('react');
var GetWeatherForm = require('GetWeatherForm');
var GetWeatherMsg = require('GetWeatherMsg');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			showFetchLoader: false
		}
	},
	handleIds : function(id){
		var that = this;
		//alert(id);
		this.setState({showFetchLoader: true});
		var baseURL = `https://samples.openweathermap.org/data/2.5/weather?q=${id},uk&appid=24eb4999e4306b032fbfa44ea9b740df}`;
		fetch(baseURL)
		.then(response => response.json())
		.then(data => {
				console.log(data);
				this.setState({
					id: data.id,
					msg: data.body,
					showFetchLoader: false
				});
			}
		)
		.catch(error => {console.log(error);this.setState({showFetchLoader: false});});

	},
	render : function(){
		console.log(this.state);
		var {id,msg,showFetchLoader} = this.state;
		function renderMessage(){
			if(showFetchLoader){
				return <h3>Fetching Data...</h3>;
			}else if(id && msg){
					return <GetWeatherMsg id={id} msg={msg}/>;
			}
		}

		return (
			<div>
				<GetWeatherForm getData={this.handleIds}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;

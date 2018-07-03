var React = require('react');

var GetWeatherForm = React.createClass({
	submitData : function(e){
		e.preventDefault();
		var id = this.refs.id.value;

			this.refs.id.value = '';
			this.props.getData(id);

	},
	render : function(){
		return (
			<div>
        <form onSubmit={this.submitData}>
				  <input type="text" ref="id" placeholder="Enter ref id"/>
          <button>Submit</button>
        </form>
			</div>
		);
	}
});

module.exports = GetWeatherForm;

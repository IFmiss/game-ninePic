var RewordList = React.createClass({
	getInitialState:function(){
		display:none,
	}

	var divStyle = {
	  display: this.state.display,
	};

	render:function(){
		return(
			<div style = {{divStyle}}>
				<RewordLists className = 'ul_rewordLists1' url=''/>
				<RewordLists className = 'ul_rewordLists2' url=''/>
			</div>
		)
	}
});

var RewordLists = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function() {
	    $.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
	    });
	},


	render:function(){
		return(
			<ul className = {this.props.className}>
				{

					return(
						
					)
				}
			</ul>
		)
	}
})



reactDOM.render(
	<RewordList />,
	document.getElementById('reword_list')
)
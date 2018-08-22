import React, {Component} from 'react';
import fetchRecipes from '../utils/api'

/**
	Timer code adapted from:
	https://gist.github.com/krambertech/76afec49d7508e89e028fce14894724c
**/

const WAIT_TIME = 400

class SearchField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.triggerSearch = this.triggerSearch.bind(this);
	}

	componentWillMount() {
		this.timer = null;
	}

	handleChange(event) {
		clearTimeout(this.timer)
		this.setState({searchText: event.target.value});
		this.timer = setTimeout(this.triggerSearch, WAIT_TIME);
	}

	triggerSearch() {
		if (this.state.searchText){
			fetchRecipes(this.state.searchText).then( list =>
					this.props.onChange(list, this.state.searchText)
			);
		}
		else{
			this.props.onChange([])
		}
	}

	render() {
		return (
			<div className="search-field">
				<input
					type="text"
					placeholder="omelete"
					value={this.state.searchText}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default SearchField;
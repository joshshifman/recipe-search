import React, { Component } from 'react';
import RecipeList from './RecipeList';
import SearchField from './SearchField';

import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      hasSearched: false
    };
    this.setList = this.setList.bind(this)
  }

  setList(list, searchText) {
    this.setState({list: list, hasSearched: searchText ? true : false});
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 offset-sm-3">
            <h1>Recipe Search</h1>
            <h4>
              Provided by <a href="http://www.recipepuppy.com/">Recipe Puppy</a>
            </h4>
            <SearchField  onChange={this.setList}/>
            <RecipeList recipes={this.state.list} hasSearched={this.state.hasSearched}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCZhuA2LsEoL6hclYA-fAH9WPOqg2LYSog';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));

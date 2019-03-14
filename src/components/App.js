import React, { Component } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Hello Guys!</h2>
        <div style={styles.listContainer}>
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listContainer : {
    display : 'flex',
    flexDirection : 'row'
  }
}

const mapStateToProps = state => ({
  // state.list is from reducers-listReducer.js
  lists : state.lists
});

export default connect(mapStateToProps) (App);

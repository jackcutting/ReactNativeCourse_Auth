import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyATHG38KoCHV5hWtQinFf1PIB2uflHju84',
      authDomain: 'reactnativeauth-bd8c7.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-bd8c7.firebaseio.com',
      storageBucket: 'reactnativeauth-bd8c7.appspot.com',
      messagingSenderId: '385347941002'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

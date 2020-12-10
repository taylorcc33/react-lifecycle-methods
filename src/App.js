import React from 'react';
import Clock from "./classes/Clock.js";
import Contacts from "./classes/Contacts.js";
import ContactForm from "./classes/ContactForm.js";
import Counter from "./Counter";
import Nav from "./Nav";
import { Header, Button, Container, Icon, Segment } from "semantic-ui-react";

class App extends React.Component {
  state = { 
    showClock: false,
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656", },
      { id: 2, name: "George", phone: "626-567-1872", },
      { id: 3, name: "Cosmo", phone: "802-134-9876", },
    ],
    showForm: true,
  };

  toggleShowClock = () => {
    this.setState( state => {
      return { showClock: !state.showClock, };
    })
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData, };
    this.setState({ contacts: [contact, ...this.state.contacts], });
  };

  removeContact = (id) => {
    const contacts = this.state.contacts.filter ( contact => {
      if (contact.id !== id)
        return contact
    });
    this.setState({ contacts: [...contacts], });
  };
    

  render() {
    const { showForm, showClock } = this.state;
    return (
      <>
        <Container>
          <Header as="h1" style={{ marginTop: "30px" }}>
            React Lifecycle Examples
          </Header>
          <Nav />
        </Container>
        <Container style={{ marginTop: "25px", }}>
          { showClock && <Clock /> }
          <Button onClick={this.toggleShowClock} color="purple">Toggle Clock</Button>
        </Container>
        <Container style={{ paddingTop: "25px", }}>
          <Header as="h1">React Contact List</Header>
          <br />
          <Segment basic> 
            <Button icon color="blue" onClick={this.toggleForm}>
              <Icon name={showForm? 'angle double up' : 'angle double down'} />
            </Button>
          { showForm ? <ContactForm add={this.addContact} /> : null }
          </Segment>
          <br />
          <Contacts contacts={this.state.contacts} remove={this.removeContact} />
        </Container>
      </>
    );
  }
}

export default App;

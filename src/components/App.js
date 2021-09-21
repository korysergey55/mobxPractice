import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Section from "./sectipon/Section";
import ContactList from "./contactList/ContactList";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import CounterComponent from "./counter/CounterComponent";
import { observer } from 'mobx-react';

 class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    ],
    filter: "",
  };

  componentDidMount() {
    const items = localStorage.getItem("contacts");
    if (items) {
      const parsedContacts = JSON.parse(items);
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  submitNewContact = (data) => {
    const newTodo = {
      name: data.name,
      number: data.number,
      id: uuid(),
    };

    this.setState((prevState) => {
      const newContact = [newTodo, ...prevState.contacts];
      return { contacts: newContact };
    });
  };

  findDuplicate = (newContactName) => {
    if (!newContactName) {
      alert("The field cannot be empty!");
      return false;
    }
    const isDublicate = this.state.contacts.some(
      (contact) => contact.name === newContactName
    );
    if (isDublicate) {
      alert("This Name already exist!" + newContactName);
      return false;
    }
    return true;
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    const stateContacts = this.state.filter.toLowerCase().trim();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(stateContacts));

    return (
      <>
        
        <Section title={"Phonebook"}>
          <ContactForm findDuplicate={this.findDuplicate} />
        </Section>

        <Section title={"Contacts"}>
          <Filter filterState={this.state.filter} filterContacts={this.filterContacts} />
          <ContactList />
        </Section>

        <Section title={"Counter"}>
          <CounterComponent />
        </Section>
      </>
    );
  }
}
export default App;

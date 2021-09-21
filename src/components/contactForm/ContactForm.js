import React, {  useState } from "react";
import styles from "./ContactForm.module.css";
import todo from '../../store/todo';
import { observer } from 'mobx-react';

const ContactForm = observer(({ findDuplicate }) => {
  const initialState = {
    name: "",
    number: "",
  }
  const [state, setState] = useState(initialState);

  const saveInputValueToState = (evt) => {
    setState((prevState)=> ({
      ...prevState, [evt.target.name]: evt.target.value,
    }))
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (findDuplicate(state.name)) {
      todo.addTodo(state)
      resetForm();
    }
  };

  const resetForm = () => {
    setState({ name: "", number: ""});
  };

  return (
    <>
      <form className={styles.mainForm} onSubmit={handleSubmitForm}>
        <div className={styles.inputContainer}>
          <label className={styles.labelName}>Name</label>
          <input
            onChange={saveInputValueToState}
            type="text"
            name="name"
            value={state.name}
            className={styles.inputName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Enter Name"
          ></input>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.labelName}>Number</label>
          <input
            onChange={saveInputValueToState}
            type="tel"
            name="number"
            value={state.number}
            className={styles.inputName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </div>
        <button type="submit" className={styles.buttonAddContact}>
          Add contact
        </button>
      </form>
    </>
  );
})
export default ContactForm;

import React from "react";
import styles from "./ContactList.module.css";
import { v4 as uuid } from "uuid";
import todo from '../../store/todo';
import { observer } from 'mobx-react';

const ContactList = observer(() => {
  return (
    <div className={styles.mainContainer}>
      <button type='button'
        onClick={() => todo.fetchTodos()}>
        fetchTodos
      </button>
      <h2>Total Todo {todo.lengthTodo}</h2>
      <ul>
        {/* todo.todos */}
        {/* todo.filterTodo */}
        {todo.todos?.map((contact) => (
          <li className={styles.newContact} key={uuid()}>
            <p className={styles.newContactName}>
              {contact.name} : {contact.number}
            </p>
            {contact?.title && <p>{contact?.title}</p>}
            <button
              type="button"
              className={styles.btn}
              onClick={() => todo.removeTodo(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});


export default ContactList;

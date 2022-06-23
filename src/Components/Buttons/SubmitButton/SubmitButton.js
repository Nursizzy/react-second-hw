import React from 'react';
import styles from './SubmitButton.module.css';

export function SubmitButton(props) {
  return (
    <button
      className={styles.submitButton}
      type='submit'
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

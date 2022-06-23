import React from 'react';
import styles from './ResetButton.module.css';

export function ResetButton(props) {
  return (
    <button className={styles.resetButton} type='reset' onClick={props.onClick}>
      {props.label}
    </button>
  );
}

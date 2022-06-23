import React, { useState } from 'react';
import styles from './Input.module.css';

export function Input2(props) {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
    props.onFocus?.();
  }

  function handleBlur() {
    setFocus(false);
  }

  return (
    <div className={styles.inputForm}>
      <label className={styles.label}>
        <span>{props.label}</span>
        <span className={styles.errorMessage}>
          {!focus && props.dirty ? props.error : null}
        </span>
      </label>
      <input
        className={'input'}
        type={props.type}
        value={props.value}
        title={props.title}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        name={props.name}
        id={props.id}
        required
      />
    </div>
  );
}

function applyMask(str, mask) {
  const chars = mask.split('');

  let currentIndex = 0;
  let result = '';
  for (let i = 0; i < chars.length; i++) {
    if (currentIndex === str.length) {
      break;
    }
    if (/\d/.test(chars[i])) {
      result += str[currentIndex];
      currentIndex++;
    } else {
      result += chars[i];
    }
  }

  return result;
}

export function MobilePhoneInput2(props) {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
    props.onFocus?.();
  }

  function handleBlur() {
    setFocus(false);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    console.log('>>>', value);
    // regexp
    const digits = value.replace(/[^\d]/g, ''); // fy5e45dy3 → 5453
    const masked = applyMask(digits, props.mask);
    props.onChange(masked);
  };

  return (
    <div className={styles.inputForm}>
      <label className={styles.label}>
        <span>{props.label}</span>
        <span className={styles.errorMessage}>
          {!focus && props.dirty ? props.error : null}
        </span>
      </label>
      <input
        className={'input'}
        type={props.type}
        value={props.value}
        title={props.title}
        placeholder={props.placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        name={props.name}
        id={props.id}
        required
      />
    </div>
  );
}

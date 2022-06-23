import React from 'react';
import styles from './Input.module.css';

export class Input extends React.Component {
  render() {
    return (
      <div className={styles.inputForm}>
        <label className={styles.label}>
          <span>{this.props.label}</span>
          <span className={styles.errorMessage}>{this.props.error}</span>
        </label>
        <input
          className={'input'}
          type={this.props.type}
          value={this.props.value}
          title={this.props.title}
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onChange(e.target.value)}
          onBlur={(e) => this.props.onBlur?.(e.target.value)}
          name={this.props.name}
          id={this.props.id}
          required
        />
      </div>
    );
  }
}

export class MobilePhoneInput extends React.Component {
  applyMask(str, mask) {
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

  handleChange = (e) => {
    const { value } = e.target;
    console.log('>>>', value);
    // regexp
    const digits = value.replace(/[^\d]/g, ''); // fy5e45dy3 → 5453
    const masked = this.applyMask(digits, this.props.mask);
    this.props.onChange(masked);
  };
  render() {
    // this.props.mask === "7-7777-77-77"
    return (
      <div className={styles.inputForm}>
        <label className={styles.label}>
          <span>{this.props.label}</span>
          <span className={styles.errorMessage}>{this.props.error}</span>
        </label>
        <input
          className={'input'}
          type={this.props.type}
          value={this.props.value}
          title={this.props.title}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onBlur={this.props.onBlur}
          name={this.props.name}
          id={this.props.id}
          required
        />
      </div>
    );
  }
}

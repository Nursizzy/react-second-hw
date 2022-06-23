import React from 'react';
import styles from './TextArea.module.css';

export class TextArea extends React.Component {
  handleChange = (e) => {
    const { value } = e.target;
    console.log('-------------', value);
    this.props.onChange(value.slice(0, this.props.max));
  };

  render() {
    return (
      <div className={styles.box}>
        <label className={styles.label}>
          <span>{this.props.label}</span>
          <span className={styles.errorMessage}>{this.props.error}</span>
          <span className={styles.maxChar}>
            {this.props.value.length}/{this.props.max}
          </span>
        </label>

        <textarea
          className={styles.textArea}
          placeholder={this.props.placeholder}
          type={this.props.type}
          title={this.props.title}
          rows={this.props.rows}
          onChange={this.handleChange}
          name={this.props.name}
          value={this.props.value}
          onBlur={(e) => this.props.onBlur(e.target.value)}
          required
        />
      </div>
    );
  }
}

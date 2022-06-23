import styles from './FilledForm.module.css';
import React from 'react';
import logo from '../../logo.svg';

export class FilledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.stateData;
  }

  handleReset = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  };
  render() {
    console.log(this.state);
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <img
            style={{ width: '80px', padding: 0 }}
            src={logo}
            className={styles.Applogo}
            alt='logo'
          />
          <h1>
            <span className={styles.header}>
              {this.state.firstname.toUpperCase()}{' '}
              {this.state.lastname.toUpperCase()}{' '}
            </span>
            {this.props.title}
          </h1>
        </div>
        <div className={styles.inputs}>
          <div className={styles.filledForm}>
            <h4>
              <span className={styles.header}>First Name: </span>
              {this.state.firstname}
            </h4>
            <h4>
              <span className={styles.header}>Last Name: </span>
              {this.state.lastname}
            </h4>
            <h4>
              <span className={styles.header}>Birth Date: </span>
              {this.state.birthdate}
            </h4>
            <h4>
              <span className={styles.header}>Phone Number: </span>
              {this.state.phone}
            </h4>
            <h4>
              <span className={styles.header}>Website: </span>
              <a href={this.state.url}>{this.state.url}</a>
            </h4>
            <h4>
              <span className={styles.header}>About: </span>
              {this.state.about}
            </h4>
            <h4>
              <span className={styles.header}>Techstack: </span>
              {this.state.techstack}
            </h4>
            <h4>
              <span className={styles.header}>Project: </span>
              {this.state.project}
            </h4>
          </div>
          <div className={styles.buttons}>
            <button className={styles.resetButton} onClick={this.handleReset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    );
  }
}

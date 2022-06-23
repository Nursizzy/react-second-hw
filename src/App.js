import './App.css';
import React from 'react';
import { Form } from './Components/Form/Form';
import { FilledForm } from './Components/FilledForm/FilledForm';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormFilled: false,
      stateData: {},
    };
  }

  resetFilledForm = () => {
    this.setState({
      isFormFilled: false,
    });
  };

  onSubmitForm = (state) => {
    this.setState({
      isFormFilled: true,
      stateData: state,
    });
  };

  render() {
    return (
      <>
        {this.state.isFormFilled ? (
          <FilledForm
            title='FILLED FORM'
            stateData={this.state.stateData}
            onSubmit={this.resetFilledForm}
          />
        ) : (
          <Form title='REGISTRATION FORM' onSubmit={this.onSubmitForm} />
        )}
      </>
    );
  }
}

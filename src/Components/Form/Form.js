import React from 'react';
import styles from './Form.module.css';
import logo from '../../logo.svg';
import { Input, MobilePhoneInput } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { SubmitButton } from '../Buttons/SubmitButton/SubmitButton';
import { ResetButton } from '../Buttons/ResetButton/ResetButton';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().getFullYear(),
      age: '',
      firstname: '',
      lastname: '',
      birthdate: '',
      phone: '',
      url: 'https://',
      about: '',
      techstack: '',
      project: '',
      dirty: {
        firstname: false,
      },
      // Empty Errors
      errorEmptyFirstName: null,
      errorEmptyLastName: null,
      errorEmptyBirthDate: null,
      errorEmptyPhone: null,
      errorEmptyUrl: null,
      errorEmptyAbout: null,
      errorEmptyTechStack: null,
      errorEmptyProject: null,
      // Errors
      errorPhone: null,
      errorUrl: null,
      errorBirthDate: null,
    };
  }

  //Functions
  handleOnChange = (name, value) => {
    this.setState({ [name]: value.trim() });
  };

  handleOnChangeTextArea = (name, value) => {
    this.setState({ [name]: value });
  };

  // // Need to fix
  // handleTouchedInput = (name) => {
  //   this.setState((prev) => ({
  //     dirty: {
  //       ...prev.dirty,
  //       [name]: true,
  //     },
  //   }));
  // };

  handleNameChange = (name, value) => {
    if (value === '') {
      this.setState({
        [name]: '',
      });
    } else {
      const result = value[0].toUpperCase() + value.slice(1).toLowerCase();
      this.setState({ [name]: result.trim() });
    }
  };

  // Manual validations (временно пока не найду лучше решение)
  firstnameValidation = () => {
    if (this.state.firstname === '') {
      this.setState({
        errorEmptyFirstName: 'Field is empty. Please fill',
      });
    }
  };

  lastnameValidation = () => {
    if (this.state.lastname === '') {
      this.setState({
        errorEmptyLastName: 'Field is empty. Please fill',
      });
    }
  };

  birhdateValidation = () => {
    if (this.state.birthdate === '') {
      this.setState({
        errorEmptyBirthDate: 'Field is empty. Please fill',
      });
    }

    if (this.state.age < 16 || this.state.age > 100) {
      this.setState({
        errorBirthDate: 'Invalid birth date',
      });
    }
  };
  phoneValidation = () => {
    if (this.state.phone === '') {
      this.setState({
        errorEmptyPhone: 'Field is empty. Please fill',
      });
    }

    if (this.state.phone.length < 17) {
      this.setState({
        errorPhone: 'Invalid phone number',
      });
    }
  };
  urlValidation = () => {
    if (this.state.url === '' || this.state.url === 'https://') {
      this.setState({
        errorEmptyUrl: 'Field is empty. Please fill',
      });
    }

    if (!this.state.url.startsWith('https://')) {
      this.setState({
        errorUrl: "Required to start with 'https://'",
      });
    }
  };
  aboutValidation = () => {
    if (this.state.about === '') {
      this.setState({
        errorEmptyAbout: 'Field is empty. Please fill',
      });
    }
  };
  techstackValidation = () => {
    if (this.state.techstack === '') {
      this.setState({
        errorEmptyTechStack: 'Field is empty. Please fill',
      });
    }
  };

  projectValidation = () => {
    if (this.state.project === '') {
      this.setState({
        errorEmptyProject: 'Field is empty. Please fill',
      });
    }
  };

  validation = (name) => {
    // Firstname check
    if (name === 'firstname') {
      this.firstnameValidation();

      if (this.state.firstname !== '') {
        this.setState({
          errorEmptyFirstName: null,
        });
      }
    }

    // Lastname check
    if (name === 'lastname') {
      this.lastnameValidation();

      if (this.state.lastname !== '') {
        this.setState({
          errorEmptyLastName: null,
        });
      }
    }
    // Birthdate check
    if (name === 'birthdate') {
      this.birhdateValidation();

      if (this.state.birthdate !== '') {
        this.setState({
          errorEmptyBirthDate: null,
        });
      }

      if (this.state.age > 16 && this.state.age < 100) {
        this.setState({
          errorBirthDate: null,
        });
      }
    }
    // Phone number check
    if (name === 'phone') {
      this.phoneValidation();

      if (this.state.phone !== '') {
        this.setState({
          errorEmptyPhone: null,
        });
      }

      if (this.state.phone.length === 17) {
        this.setState({
          errorPhone: null,
        });
      }
    }
    // Url check
    if (name === 'url') {
      this.urlValidation();

      if (this.state.url !== '' && this.state.url !== 'https://') {
        this.setState({
          errorEmptyUrl: null,
        });
      }

      if (this.state.url.startsWith('https://')) {
        this.setState({
          errorUrl: null,
        });
      }
    }

    // About check
    if (name === 'about') {
      this.aboutValidation();

      if (this.state.about !== '') {
        this.setState({
          errorEmptyAbout: null,
        });
      }
    }

    // Tech stack check
    if (name === 'techstack') {
      this.techstackValidation();

      if (this.state.techstack !== '') {
        this.setState({
          errorEmptyTechStack: null,
        });
      }
    }
    // Project check
    if (name === 'project') {
      this.projectValidation();

      if (this.state.project !== '') {
        this.setState({
          errorEmptyProject: null,
        });
      }
    }
  };

  handleOnBlur = (name, value) => {
    const birthDate = new Date(this.state.birthdate);
    this.setState({
      age: Math.abs(this.state.currentDate - birthDate.getFullYear()),
    });
    this.validation(name);
  };

  handleSave = (e) => {
    e.preventDefault();

    const isValid =
      this.state.errorEmptyFirstName === null &&
      this.state.errorEmptyLastName === null &&
      this.state.errorEmptyBirthDate === null &&
      this.state.errorEmptyPhone === null &&
      this.state.errorEmptyUrl === null &&
      this.state.errorEmptyAbout === null &&
      this.state.errorEmptyTechStack === null &&
      this.state.errorEmptyProject === null &&
      this.state.errorPhone === null &&
      this.state.errorUrl === null &&
      this.state.errorBirthDate === null;

    if (isValid) {
      this.props.onSubmit(this.state);
    }
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      age: '',
      firstname: '',
      lastname: '',
      birthdate: '',
      phone: '',
      url: 'https://',
      about: '',
      techstack: '',
      project: '',
      // Empty Errors
      errorEmptyFirstName: null,
      errorEmptyLastName: null,
      errorEmptyBirthDate: null,
      errorEmptyPhone: null,
      errorEmptyUrl: null,
      errorEmptyAbout: null,
      errorEmptyTechStack: null,
      errorEmptyProject: null,
      // Errors
      errorPhone: null,
      errorUrl: null,
      errorBirthDate: null,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className={styles.title}>
          <h1>
            <span className={styles.header}>APPLICANT </span>
            {this.props.title}
          </h1>
        </div>
        <form className={styles.inputs} onSubmit={this.handleSave}>
          <div className={styles.fields}>
            <div className={styles.inputFields}>
              <Input
                label='Name'
                name='firstname'
                type='text'
                placeholder='Ivan'
                title='Enter your name'
                value={this.state.firstname}
                onChange={(value) => this.handleNameChange('firstname', value)}
                onBlur={(value) => this.handleOnBlur('firstname', value)}
                error={this.state.errorEmptyFirstName}
              />
              <Input
                label='Last Name'
                name='lastname'
                type='text'
                placeholder='Ivanov'
                title='Enter your last name'
                value={this.state.lastname}
                onChange={(value) => this.handleNameChange('lastname', value)}
                onBlur={(value) => this.handleOnBlur('lastname', value)}
                error={this.state.errorEmptyLastName}
              />
              <Input
                label='Birth Date'
                type='date'
                name='birthdate'
                data-date-format='DD MMMM YYYY'
                title='Enter your birth date'
                value={this.state.birthdate}
                onChange={(value) => this.handleOnChange('birthdate', value)}
                onBlur={(value) => this.handleOnBlur('birthdate', value)}
                error={
                  this.state.errorEmptyBirthDate === null
                    ? this.state.errorBirthDate
                    : this.state.errorEmptyBirthDate
                }
              />
              <MobilePhoneInput
                label='Phone number'
                id='telinput'
                type='tel'
                name='phone'
                placeholder='7-(777)-777-77-77'
                mask='7-(777)-777-77-77'
                title='Enter your phone number'
                value={this.state.phone}
                onChange={(value) => this.handleOnChange('phone', value)}
                onBlur={(value) => this.handleOnBlur('phone', value)}
                error={
                  this.state.errorEmptyPhone === null
                    ? this.state.errorPhone
                    : this.state.errorEmptyPhone
                }
              />
              <Input
                label='Website URL'
                type='text'
                name='url'
                placeholder='https://github.com/IvanIvanov'
                title='Provide link to your website'
                value={this.state.url}
                onChange={(value) => this.handleOnChange('url', value)}
                onBlur={(value) => this.handleOnBlur('url', value)}
                error={
                  this.state.errorEmptyUrl === null
                    ? this.state.errorUrl
                    : this.state.errorEmptyUrl
                }
              />
            </div>
            <div className={styles.textArea}>
              <TextArea
                label='About you'
                placeholder='Please tell us about you...'
                name='about'
                type='text'
                title='Max 7 rows'
                rows='7'
                value={this.state.about}
                max='600'
                onChange={(value) =>
                  this.handleOnChangeTextArea('about', value)
                }
                onBlur={(value) => this.handleOnBlur('about', value)}
                error={this.state.errorEmptyAbout}
              />
              <TextArea
                label='Your technology stack'
                placeholder='Please tell us about your tech stack...'
                name='techstack'
                type='text'
                title='Max 7 rows'
                rows='7'
                max='600'
                value={this.state.techstack}
                onChange={(value) =>
                  this.handleOnChangeTextArea('techstack', value)
                }
                onBlur={(value) => this.handleOnBlur('techstack', value)}
                error={this.state.errorEmptyTechStack}
              />
              <TextArea
                label='Last project description'
                placeholder='Please tell us about your last project...'
                name='project'
                type='text'
                title='Max 7 rows'
                rows='7'
                max='600'
                value={this.state.project}
                onChange={(value) =>
                  this.handleOnChangeTextArea('project', value)
                }
                onBlur={(value) => this.handleOnBlur('project', value)}
                error={this.state.errorEmptyProject}
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <SubmitButton label='Submit' />
            <ResetButton label='Reset' onClick={this.handleReset} />
          </div>
          <div className={styles.image}>
            <img src={logo} className={styles.Applogo} alt='logo' />
          </div>
        </form>
      </>
    );
  }
}

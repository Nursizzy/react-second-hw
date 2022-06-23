function firstname(value) {
  if (value === '') {
    return 'Please fill before submit';
  }
  return null;
}

function lastname(value) {
  if (value === '') {
    return 'Please fill before submit';
  }

  return null;
}

function birthdate(value) {
  if (value === '') {
    return 'Please fill before submit';
  }

  return null;
}

function phone(value) {
  if (value === '') {
    return 'Please fill before submit';
  }
  if (value.length < 17) {
    return 'Invalid phone number';
  }

  return null;
}

function url(value) {
  if (value === '' || value === 'https://') {
    return 'Please fill before submit';
  }
  if (!value.startsWith('https://')) {
    return 'Invalid URL adress';
  }

  return null;
}

function about(value) {
  if (value === '') {
    return 'Please fill before submit';
  }

  return null;
}

function techstack(value) {
  if (value === '') {
    return 'Please fill before submit';
  }

  return null;
}

function project(value) {
  if (value === '') {
    return 'Please fill before submit';
  }

  return null;
}

export const validation = {
  firstname,
  lastname,
  birthdate,
  phone,
  url,
  about,
  techstack,
  project,
};

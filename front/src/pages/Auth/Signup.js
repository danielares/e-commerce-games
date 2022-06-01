import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('/login');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2
    };

    fetch('/api/users/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('/login');
        } else {
          setEmail('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className='container min-vh-100'>
      {loading === false && <h1 className='fw-bold'>Informe seus dados para cadastrar</h1>}
      {errors === true &&
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          Não foi possivel cadastrar com os dados fornecidos.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      }
      <form onSubmit={onSubmit}>
        <div className="offset-md-3 col-12 col-md-6 mt-5">
          <div className="mb-3">
            <label className='form-label' htmlFor='email'>Email address:</label>
            <input
              className="form-control"
              name='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className='form-label' htmlFor='password1'>Password:</label>
            <input
              className="form-control"
              name='password1'
              type='password'
              value={password1}
              onChange={e => setPassword1(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className='form-label' htmlFor='password2'>Confirm password:</label>
            <input
              className="form-control"
              name='password2'
              type='password'
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              required
            />
          </div>

          <button class="btn btn-lg btn-outline-primary" type='submit'>
            Cadastrar
          </button>

        </div>
      </form>
    </div>
  );
};

export default Signup;
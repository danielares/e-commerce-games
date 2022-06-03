import React, { useState, useEffect } from 'react';
import { getCookie } from '../../utils/getCsrftToken';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);
    const csrftoken = getCookie('csrftoken');

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('/');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        fetch('/api/users/auth/login/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    window.location.replace('/');
                } else {
                    setEmail('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <div className='container min-vh-100'>
            <div className="row">
                {loading === false && <h1 className='text-center fw-bold'>Informe seus dados de acesso</h1>}
                {errors === true &&
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        Não foi possivel logar com os dados fornecidos.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                {loading === false && (
                    <form onSubmit={onSubmit}>
                        <div className="offset-md-3 col-12 col-md-6 mt-5">
                            <div className="mb-3">
                                <label className='form-label' htmlFor='email'>Email address:</label>
                                <input
                                    className="form-control"
                                    name='email'
                                    type='email'
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label className='form-label' htmlFor='password'>Password:</label>
                                <input
                                    className="form-control"
                                    name='password'
                                    type='password'
                                    value={password}
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <button class="btn btn-lg btn-outline-primary" type='submit' value='Login'>
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div >
    );
};

export default Login;
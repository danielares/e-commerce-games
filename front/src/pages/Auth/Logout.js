import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('/');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();

    fetch('/api/users/auth/logout/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('/');
      });
  };

  return (
    <div className='container min-vh-100'>
      <div className="row">
        {loading === false && (
          <Fragment>
            <h1 className='fw-bold'>Você tem certeza que deseja sair?</h1>
            <button class="btn btn-lg btn-outline-primary mt-5" type='submit' onClick={handleLogout}>
              Sair
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Logout;
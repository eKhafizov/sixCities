import { ChangeEvent, FormEvent, useState } from 'react';
import { AppRoutes } from '../../utils/appRoutes';
import { Link } from 'react-router-dom';
import { loginAuth } from '../../store/api-actions/api-actions';
import { useAppDispatch } from '../../store/hooks/hooks';


function LoginPage() : JSX.Element {

  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    login: '',
    password: ''
  });

  const handleChanges = (e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.login.length > 0 && form.password.length > 0 && dispatch(loginAuth(form));
    setForm({
      login: '',
      password: ''
    });
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="login"
                  placeholder="Email"
                  value={form.login}
                  onChange={handleChanges}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Password"
                  onChange={handleChanges}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LoginPage;

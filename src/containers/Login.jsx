import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions";

import twitterIcon from "../assets/images/icons8-twitter-100.png";
import googleIcon from "../assets/images/icons8-logo-de-google-100.png";

const Login = (props) => {
	const [form, setValues] = useState({
		email: "",
	});
	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.loginRequest(form);
		props.history.push("/");
	};

	return (
		<section className="login">
			<h2>Inicia Sesión</h2>
			<form className="login__form" onSubmit={handleSubmit}>
				<input
					name="email"
					className="input"
					type="text"
					placeholder="email"
					onChange={handleInput}
				/>
				<input
					name="password"
					className="input"
					type="password"
					placeholder="Contraseña"
					onChange={handleInput}
				/>
				<button type="submit" className="button">
					Iniciar sesión
				</button>
				<div className="remember">
					<label>
						<input type="checkbox" name id="cbox1" defaultValue="checkbox" />
						Recuerdame
					</label>
					<a href="#">Olvidé mi contraseña</a>
				</div>
			</form>
			<div className="login__social">
				<a href="#">
					<img src={googleIcon} alt="Inicia sesión con Google" />
					Inicia sesión con Google
				</a>
				<a href="#">
					<img src={twitterIcon} alt="Inicia sesión con Twitter" />
					Inicia sesión con Twitter
				</a>
			</div>
			<div className="login__unregistered">
				<p>
					No tienes ninguna cuenta
					<Link to="/register">Registrate</Link>
				</p>
			</div>
		</section>
	);
};

const mapDispatchToProps = {
	loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

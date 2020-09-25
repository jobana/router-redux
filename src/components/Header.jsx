import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRequest } from "../actions";
import gravatar from "../utils/gravatar";
import logo from "../assets/images/logo-platzi-video-BW2.png";
import userIcon from "../assets/images/user.svg";

const Header = (props) => {
	const { user } = props;
	const hasUser = object.keys(user).length > 0;

	const handleLogOut = () => {
		props.logoutRequest({});
	};
	return (
		<header className="header">
			<Link to="/">
				<img className="header__logo" src={logo} alt="logo Platzi Music" />
			</Link>
			<nav className="header__menu">
				<div className="header__menu__profile">
					{hasUser ? (
						<img src={gravatar(user.email)} alt={user.email} />
					) : (
						<img src={userIcon} alt="user" />
					)}

					<p>Perfil</p>
				</div>
				<ul>
					{hasUser ? (
						<li>
							<Link to="/">{user.name}</Link>
						</li>
					) : null}
					{hasUser ? (
						<li>
							<a href="#logout" onClick={handleLogOut}>
								Cerrar sesión
							</a>
						</li>
					) : (
						<li>
							<Link to="/login">Iniciar sesión</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = {
	logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

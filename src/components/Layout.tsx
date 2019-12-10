import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import cart from '../styles/img/cart.svg';

const Navigation = styled.nav`
	background-color: #232323;
	color: #fff;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	height: 90px;
	font-size: 18px;
	border-bottom: 2px solid rgba(255, 255, 255, 0.3);

	@media screen and (max-width: 767px){
		& .content{
			display: none !important;
		}
	}

	& .content{
		display: flex;
		width: 80%;
		justify-content: space-around;
		align-items: baseline;
	}

	& .logo{
		margin: 0;
	}

	& .icon-list sup{
		color: teal;
	}

	& .icon-list li img{
		height: 20px;
		width: 20px;
	}

	& .navigation-list, & .auth-list, .icon-list{
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		list-style: none;
		text-transform: uppercase;
		font-size: 15px;
	}

	a{
		text-decoration: none;
		color: inherit;
	}

	li:hover{cursor:pointer;}

	& .navigation-list li{
		margin: 0 15px;
	}

	& .auth-list li, .icon-list li{
		margin: 0 10px;
	}
`


const Layout: React.FC = ()=>{
	return (
		<Navigation>
			<h3 className="logo">Mariano Collections</h3>
			<div className="content">
				<ul className='auth-list'>
					<li><Link to="/login">Log in</Link></li>/
					<li><Link to="/signup">Sign Up</Link></li>
				</ul>
				<ul className='navigation-list'>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/categories">Products</NavLink></li>
					<li><NavLink to="/about">About Us</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
				<ul className="icon-list">
					<li>
						<img
							alt="Cart Icon"
							className="cart"
							src={cart} />
						<sup>(2)</sup>
					</li>
				</ul>
			</div>
		</Navigation>
	)
}

export default Layout;

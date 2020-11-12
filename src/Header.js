import React from "react"
import mtv_logo from "./mtv_logo.jpg"
// import styled from "@emotion/styled"
import "./Header.css"
import Avatar from "@material-ui/core/Avatar"

const Header = () => {
	// const HeaderContainer = styled.div`
	// 	background-color: black;
	// 	color: white;
	// 	padding: 5px;
	// `
	// // const Logo = styled.Logo`
	// // 	width: 80px;
	// // 	object-fit: contain;
	// // 	position: relative;
	// // 	border: 2px white;
	// // `

	return (
		<div className='header'>
			<div className='header__left'>
				<img className='header__icon' src={mtv_logo} alt='mtv log' />
			</div>
			<div className='header__center'>
				<div className='center__text'>
					<h1>I Want MyMTV</h1>
				</div>
			</div>
			<div className='header__right'>
				<Avatar />
			</div>
		</div>
	)
}

export default Header

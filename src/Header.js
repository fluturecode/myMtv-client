import React from "react"
import mtv_logo from "./mtv_logo.jpg"
import styled from "@emotion/styled"

const Header = () => {
	const HeaderContainer = styled.div`
		background-color: black;
		color: white;
		padding: 5px;
	`
	// const Logo = styled.Logo`
	// 	width: 80px;
	// 	object-fit: contain;
	// 	position: relative;
	// 	border: 2px white;
	// `

	return (
		<HeaderContainer>
			<img src={mtv_logo} />
			<h1>I want MyMTV</h1>
		</HeaderContainer>
	)
}

export default Header

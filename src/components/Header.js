import React from "react"
import mtv_logo from "../assets/mtv_logo.jpg"
import styled from "@emotion/styled"

const HeaderContainer = styled.div`
		background-color: black;
		height: 80px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px;
		box-shadow: 0px 6px 18px -5px rgba(0, 0, 0, 0.75);
		position: relative;
	`

	const LogoImage = styled.img`
		height: 140%;
		object-fit: contain;
		border-radius: 10px;
		position: relative;
	`
const Header = () => {

	return (
		<HeaderContainer>
			<LogoImage src={mtv_logo} />
		</HeaderContainer>
	)
}

export default Header

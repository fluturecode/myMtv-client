import React from "react"
import mtv_logo from "./mtv_logo.jpg"
import styled from "@emotion/styled"
import Avatar from "@material-ui/core/Avatar"

const Header = () => {
	const HeaderContainer = styled.div`
		background-color: black;
		height: 80px;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px;
	`

	const HeaderText = styled.h1`
		color: white;
		&hover {
		}
	`
	// const LogoContainer = styled.img`
	// 	object-fit: contain;
	// `
	const LogoImage = styled.img`
		object-fit: contain;
	`

	return (
		<>
			<HeaderContainer>
				<HeaderText>I Want My MTV...</HeaderText>
				<LogoImage src={mtv_logo} />
				<Avatar />
			</HeaderContainer>
		</>
	)
}

export default Header

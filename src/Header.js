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
		font-style: italic;
		&hover {
		}
	`

	const LogoImage = styled.img`
		height: 120px;
		object-fit: contain;
		margin-right: 60px;
		border-radius: 10px;
	`

	return (
		<>
			<HeaderContainer>
				<HeaderText>I Want My....</HeaderText>
				<LogoImage src={mtv_logo} />
				<Avatar />
			</HeaderContainer>
		</>
	)
}

export default Header

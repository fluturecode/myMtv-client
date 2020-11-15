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
		box-shadow: 0px 6px 18px -5px rgba(0, 0, 0, 0.75);
		position: relative;
	`

	const HeaderText = styled.h1`
		color: white;
		font-style: italic;
		padding-right: 10px;
		&hover {
		}
	`

	const LogoImage = styled.img`
		height: 140%;
		object-fit: contain;
		margin-right: 60px;
		border-radius: 10px;
		position: relative;
	`
	const AvatarImage = styled.div`
		background-color: white;
		width: 40px;
		padding: 8px;

		object-fit: contain;
		border-radius: 100%;
	`
	return (
		<>
			<HeaderContainer>
				<HeaderText>I Want My....</HeaderText>
				<LogoImage src={mtv_logo} />
				<AvatarImage>
					<Avatar src='https://avatars0.githubusercontent.com/u/59614789?s=460&u=59598c79c99b8067a17479b52a3281c239e0cdb7&v=4' />
				</AvatarImage>
			</HeaderContainer>
		</>
	)
}

export default Header

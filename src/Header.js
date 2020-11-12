import React from "react"
import mtv_logo from "./mtv_logo.jpg"
import styled from "@emotion/styled"
import Avatar from "@material-ui/core/Avatar"

const Header = () => {
	const HeaderContainer = styled.div`
		background-color: black;
		justify-content: space-between;
		align-items: center;
	`
	const LogoContainer = styled.div`
		width: 80px;
		object-fit: contain;
		position: relative;
	`

	const HeaderText = styled.h1`
		color: white;
	`

	return (
		<>
			<HeaderContainer>
				<LogoContainer>
					<img className='header__icon' src={mtv_logo} alt='mtv log' />
				</LogoContainer>
				<HeaderText>I Want MyMTV</HeaderText>
				<Avatar />
			</HeaderContainer>
		</>
	)
}

export default Header

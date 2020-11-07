import React from "react"
import logo from "./logo.jpeg"
import styled from "@emotion/styled"

const Header = () => {
	const HeaderContainer = styled.div`
		background-color: black;
		color: white;
		padding: 5px;
	`
	return (
		<HeaderContainer>
			<h1>I want MyMTV</h1>
			{/* <link>{logo}</link> */}
		</HeaderContainer>
	)
}

export default Header

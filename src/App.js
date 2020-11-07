import "./App.css"

import Header from "./Header"
import Body from "./Body"
import MusicVideo from "./MusicVideo"
import styled from "@emotion/styled"

function App() {
	const AppContainer = styled.div`
		background-color: grey;
	`
	const BodyContainer = styled.div`
		color: white;
	`

	return (
		<AppContainer>
			<Header />
			<BodyContainer>
				<Body />
				<MusicVideo />
			</BodyContainer>
		</AppContainer>
	)
}

export default App

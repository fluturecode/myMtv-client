import "./App.css"
import logo from "./logo.jpeg"
import Header from "./Header"
import Body from "./Body"
import MusicVideo from "./MusicVideo"
import styled from "@emotion/styled"

function App() {
	const AppContainer = styled.div`
		background-color: black;
	`

	return (
		<AppContainer>
			<Header />
			<Body />
			<MusicVideo />
		</AppContainer>
	)
}

export default App

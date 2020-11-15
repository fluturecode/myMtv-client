import "./App.css"
import Header from "./Header"
import Videos from "./Videos"
import styled from "@emotion/styled"

function App() {
	const AppContainer = styled.div`
		background-color: grey;
		padding: 20px;
		height: 100%;
	`
	return (
		<AppContainer>
			<Header />
			<Videos />
		</AppContainer>
	)
}

export default App

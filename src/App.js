import "./App.css"
import Header from "./Header"
import AllVideos from "./AllVideos"
import styled from "@emotion/styled"

function App() {
	const AppContainer = styled.div`
		background-color: grey;
		padding: 20px;
	`
	return (
		<AppContainer>
			<Header />
			<AllVideos />
		</AppContainer>
	)
}

export default App

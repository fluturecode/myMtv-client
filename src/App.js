import "./App.css"
import Header from "./Header"
import Video from "./Video"
import styled from "@emotion/styled"

function App() {
	const AppContainer = styled.div`
		background-color: grey;
		padding: 20px;
	`
	// const VideoContainer = styled.div`
	// 	color: white;
	// 	padding: 200px;
	// 	display: flex;
	// `

	return (
		<AppContainer>
			<Header />
			<Video />
		</AppContainer>
	)
}

export default App

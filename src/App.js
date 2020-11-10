import "./App.css"
import Header from "./Header"
import Video from "./Video"
import styled from "@emotion/styled"

function App() {
	const AppContainer = styled.div`
		background-color: grey;
	`
	const VideoContainer = styled.div`
		color: white;
		padding: 200px;
		display: flex;
	`

	return (
		<AppContainer>
			<Header />
			<VideoContainer>
				<Video />
			</VideoContainer>
		</AppContainer>
	)
}

export default App

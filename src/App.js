import Footer from "./components/Footer"
import Header from "./components/Header"
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
			<Footer />
		</AppContainer>
	)
}

export default App

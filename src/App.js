import Footer from "./components/Footer"
import Header from "./components/Header"
import Videos from "./Videos"
import styled from "@emotion/styled"
import { View }  from "react-xnft";

const AppContainer = styled.View`
background-color: grey;
padding: 20px;
height: 100%;
`
function App() {
	return (
		<View>
			<AppContainer>
				<Header />
				<Videos />
				<Footer />
			</AppContainer>
		</View>
	)
}

export default App

import React from "react"
import "./index.css"
import App from "./App"
import ReactXnft, { AnchorDom } from "react-xnft";

ReactXnft.render(
	<AnchorDom>
		<App />
	</AnchorDom>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

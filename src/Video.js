import React from "react"
import YouTube from "react-youtube"
import styled from "@emotion/styled"

const Video = ({ title, artist, video }) => {
	const VideoContainer = styled.div`
		.video {
			margin: 10px;
			border-radius: 10px;
			overflow: hidden;
		}
	`

	return (
		<div className='video'>
			<YouTube videoId='5HI_xFQWiYU' />
			<YouTube videoId='iIpfWORQWhU' />
			<YouTube videoId='yRYFKcMa_Ek' />
		</div>
	)
}

export default Video

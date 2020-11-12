import React from "react"
import YouTube from "react-youtube"
import styled from "@emotion/styled"

const Video = ({ title, artist, video }) => {
	const VideoContainer = styled.div`
		margin: 10px;
		border-radius: 10px;
		overflow: hidden;
	`

	return (
		<div className='video'>
			<VideoContainer>
				<YouTube videoId='5HI_xFQWiYU' />
			</VideoContainer>
			<VideoContainer>
				<YouTube videoId='iIpfWORQWhU' />
			</VideoContainer>
			<VideoContainer>
				<YouTube videoId='yRYFKcMa_Ek' />
			</VideoContainer>
		</div>
	)
}

export default Video

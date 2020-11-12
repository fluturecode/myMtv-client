import React from "react"
import YouTube from "react-youtube"
import styled from "@emotion/styled"

const Video = ({ title, artist, video }) => {
	const VideoContainer = styled.div`
		margin: 10px;
		border-radius: 10px;
		overflow: hidden;
	`
	const VideoRow = styled.div`
		display: flex;
		padding: 20px;
		border: 2px green bold;
	`
	const OneVideo = styled.div`
		border: 2px red bold;
	`

	return (
		<div className='video'>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='5HI_xFQWiYU' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='iIpfWORQWhU' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='yRYFKcMa_Ek' />
				</VideoContainer>
			</VideoRow>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='5HI_xFQWiYU' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='iIpfWORQWhU' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='yRYFKcMa_Ek' />
				</VideoContainer>
			</VideoRow>
		</div>
	)
}

export default Video

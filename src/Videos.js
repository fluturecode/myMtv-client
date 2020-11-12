import React from "react"
import YouTube from "react-youtube"
import styled from "@emotion/styled"

const Videos = () => {
	// Add props later --> { title, artist, video }

	const VideoRow = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
	`
	const VideoContainer = styled.div`
		margin: 20px;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
		&:hover {
			transform: scale(1.07);
			transition: 0.2s ease-in;
		}
	`

	return (
		<div className='video'>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='R8AOAap6_k4' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='iIpfWORQWhU' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='Zi_XLOBDo_Y' />
				</VideoContainer>
			</VideoRow>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='Y3ywicffOj4' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='yG07WSu7Q9w' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='yRYFKcMa_Ek' />
				</VideoContainer>
			</VideoRow>
		</div>
	)
}

export default Videos

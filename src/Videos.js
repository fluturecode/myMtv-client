import React from "react"
import YouTube from "react-youtube"
import styled from "@emotion/styled"

const Videos = () => {
	// Add props later --> { title, artist, video }

	const VideosContainer = styled.div`
		background-color: #575352;
		margin-top: 20px;
		/* border: 2px black solid; */
		border-radius: 10px;
	`

	const VideoRow = styled.div`
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 20px;
	`
	const VideoContainer = styled.div`
		// One single video
		width: 640px;
		margin: 20px;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0px 6px 18px -2px rgba(0, 0, 0, 0.75);
		&:hover {
			transform: scale(1.07);
			transition: 0.28s ease-in;
		}
	`

	return (
		<VideosContainer>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='R8AOAap6_k4' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='hic-dnps6MU' />
				</VideoContainer>
			</VideoRow>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='Zi_XLOBDo_Y' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='Y3ywicffOj4' />
				</VideoContainer>
			</VideoRow>
			<VideoRow>
				<VideoContainer>
					<YouTube videoId='kxNJV83EMJw' />
				</VideoContainer>
				<VideoContainer>
					<YouTube videoId='yRYFKcMa_Ek' />
				</VideoContainer>
			</VideoRow>
		</VideosContainer>
	)
}

export default Videos

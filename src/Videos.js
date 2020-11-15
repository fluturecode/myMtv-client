import styled from "@emotion/styled"
import Video from "./Video.js"

const Videos = () => {
	const videoList = [
		{ videoId: "R8AOAap6_k4" },
		{ videoId: "uxX2gA18grk" },
		{ videoId: "N3oCS85HvpY" },
		{ videoId: "aGSKrC7dGcY" },
		{ videoId: "kxNJV83EMJw" },
		{ videoId: "Y3ywicffOj4" },
	]
	const VideosContainer = styled.div`
		background-color: #575352;
		margin-top: 20px;
		border-radius: 10px;
	`
	const VideoRow = styled.div`
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 20px;
		flex-wrap: wrap;
	`

	return (
		<VideosContainer>
			<VideoRow>
				{videoList.map((videoList) => (
					<Video video={videoList.videoId} />
				))}
			</VideoRow>
		</VideosContainer>
	)
}

export default Videos

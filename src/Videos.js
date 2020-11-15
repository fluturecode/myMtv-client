import styled from "@emotion/styled"
import Video from "./Video.js"

const Videos = () => {
	const videoList = [
		{ videoId: "5HI_xFQWiYU" },
		{ videoId: "iIpfWORQWhU" },
		{ videoId: "yRYFKcMa_Ek" },
		{ videoId: "5HI_xFQWiYU" },
		{ videoId: "iIpfWORQWhU" },
		{ videoId: "yRYFKcMa_Ek" },
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

import styled from "@emotion/styled"
import Video from "./Video.js"

const Videos = () => {
	const videoList = [
		{ videoId: "wTP2RUD_cL0" },
		{ videoId: "8SbUC-UaAxE" },
		{ videoId: "R8AOAap6_k4" },
		{ videoId: "aGSKrC7dGcY" },
		{ videoId: "xuZA6qiJVfU" },
		{ videoId: "iIpfWORQWhU" },
		{ videoId: "kxNJV83EMJw" },
		{ videoId: "Y3ywicffOj4" },
		{ videoId: "RP0_8J7uxhs" },
		{ videoId: "5HI_xFQWiYU" },
		{ videoId: "pWxJEIz7sSA" },
		{ videoId: "d1n_O6DeS1c" },
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
				{videoList.map((video, index) => (
					<Video key={index} video={video.videoId} />
				))}
			</VideoRow>
		</VideosContainer>
	)
}

export default Videos

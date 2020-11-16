import YouTube from "react-youtube"
import styled from "@emotion/styled"

function Video({ video }) {
	const VideoPlayer = styled.div`
		max-width: 640px;
		object-fit: contain;
		margin: 20px;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0px 6px 18px -2px rgba(0, 0, 0, 0.75);
		&:hover {
			transform: scale(1.07);
			transition: 0.25s ease-in;
		}
	`
	return (
		<VideoPlayer>
			<YouTube videoId={video} />
		</VideoPlayer>
	)
}

export default Video

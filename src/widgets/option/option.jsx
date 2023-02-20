import "./option.css"

import playIcon from "../../assets/play.png"
import loveIcon from "../../assets/hearth.png"
import waitIcon from "../../assets/comments.png"

export const icons = {
	wait: waitIcon,
	love: loveIcon,
	music: playIcon,
}

export const Option = ({ icon = icons.love, onClick = () => {} }) => {
	return (
		<div className="option-container">
			<div className="option" onClick={onClick}>
				<img src={icon} alt="optionIcon" height={50} width={50} />
			</div>
		</div>
	)
}

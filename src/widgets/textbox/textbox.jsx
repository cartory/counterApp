import "./textbox.css"

import soundReaction from "../../assets/audio/reaction.mp3"

export const defaultText = ["Please press any option #forYou #loveCounter #playMusic"]

const sound = new Audio(soundReaction)

export const Textbox = ({ words = defaultText, setWords }) => {
	const handleWords = async () => {
		setWords(defaultText)
		document.getElementById("sound").click()
		sound.load()
		await sound.play()
	}

	return (
		<div className="textbox" onClick={handleWords}>
			{words.map((word, index) => (
				<p key={index}>{word}</p>
			))}
		</div>
	)
}

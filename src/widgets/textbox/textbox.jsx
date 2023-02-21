import "./textbox.css"
import soundReaction from "../../assets/audio/reaction.mp3"

import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"

const defaultText = [
	// defaultText
	"I hope you enjoy this litle penguin, My name is Charlie  #madeWithLove",
	"Please press any option #aboutMe #loveCounter #changeMusic",
]

const sound = new Audio(soundReaction)

export const Textbox = ({ text = defaultText }) => {
	const [words, setWords] = useState(text)

	const handleWords = async () => {
		setWords(defaultText)
		sound.load()
		await sound.play()
	}

	return (
		<div className="textbox" onClick={handleWords}>
			<Typewriter words={words} typeSpeed={30} deleteSpeed={15} />
		</div>
	)
}

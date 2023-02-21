import "./app.css"
import { useState } from "react"

import { Snow } from "./widgets/snow/snow"
import { Textbox } from "./widgets/textbox/textbox"
import { Option, icons } from "./widgets/option/option"
import { Penguin, baloons } from "./widgets/penguin/penguin"

import noseva from "./assets/audio/noseva8bits.mp3"
import takeOnMe from "./assets/audio/takeOnme8bits.mp3"

// let index = 0
// const audios = [
// 	{ name: "No se va by Morat", audio: new Audio(noseva) },
// 	{ name: "Take On Me by Ellie (TLOU2)", audio: new Audio(takeOnMe) },
// ]

// const getAudio = () => {
// 	const music = audios[index++ % 2]

// 	music.audio.load()

// 	music.audio.loop = true
// 	music.audio.autoplay = true
// 	music.audio.playbackRate = 1.03

// 	return music
// }

export const App = () => {
	const [baloon, setBaloon] = useState(baloons.hello)

	const handleBaloon = async (icon) => {
		const baloonIcon = baloons[icon]

		// if (icon === "play") {
		// 	console.log("play click")
		// 	const { audio } = getAudio()
		// 	await audio.play()
		// }

		if (!!baloonIcon) {
			setBaloon(baloonIcon)
			document.getElementById("sound").click()
		}

		return !!baloonIcon
	}

	return (
		<>
			<Snow />
			<div className="app">
				<Penguin baloon={baloon} setBaloon={setBaloon} />
				<Textbox />
				<div className="flex" style={{ gap: 15 }}>
					{Object.keys(icons).map((icon) => {
						return <Option key={icon} icon={icons[icon]} onClick={() => handleBaloon(icon)} />
					})}
				</div>
			</div>
		</>
	)
}

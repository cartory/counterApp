import "./app.css"

import { useState } from "react"

import { Snow } from "./widgets/snow/snow"
import { Option, icons } from "./widgets/option/option"
import { Penguin, baloons } from "./widgets/penguin/penguin"
import { Textbox, defaultText } from "./widgets/textbox/textbox"

import got from "./assets/audio/got8bits.mp3"
import noseva from "./assets/audio/noseva8bits.mp3"
import takeOnMe from "./assets/audio/takeOnme8bits.mp3"

const audios = [
	{ name: "#GameOfThrones", audio: new Audio(got) },
	{ name: "#NoSeVaMorat", audio: new Audio(noseva) },
	{ name: "#TakeOnMeTLOU2", audio: new Audio(takeOnMe) },
]

let index = Math.floor(Math.random() * 10) % audios.length

const getAudio = () => {
	audios[index].audio.pause()
	audios[index].audio.currentTime = 0

	index = (index + 1) % audios.length
	const music = audios[index]

	music.audio.load()
	music.audio.loop = true
	music.audio.autoplay = true
	music.audio.playbackRate = !!index ? 1.05 : 0.95

	return music
}

export const App = () => {
	const [words, setWords] = useState(defaultText)
	const [baloon, setBaloon] = useState(baloons.hello)

	const handleBaloon = async (icon) => {
		const baloonIcon = baloons[icon]

		if (icon === "play") {
			const { name } = getAudio()
			setWords([`🎵 playing music 🎵  ${name} #8bits`])
		}

		if (icon === "love") {
			const loveCounter = Number.parseInt(localStorage.getItem("loveCounter") ?? 0)
			setWords(["+1 ❤️", "I love You Babe", `${loveCounter + 1} times`])
			localStorage.setItem("loveCounter", loveCounter + 1)
		}

		if (icon === "wait") {
			setWords(["I hope you enjoy it", "by pedro.caricari ☺️","#madeWithLove"])
		}

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
				<Textbox words={words} setWords={setWords} />
				<div className="flex" style={{ gap: 15 }}>
					{Object.keys(icons).map((icon) => {
						return <Option key={icon} icon={icons[icon]} onClick={() => handleBaloon(icon)} />
					})}
				</div>
			</div>
		</>
	)
}

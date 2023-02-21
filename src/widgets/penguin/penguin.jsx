import { useEffect, useState } from "react"

import "./penguin.css"

import penguin from "../../assets/penguin.png"
import soundReaction from "../../assets/audio/reaction.mp3"

import wait from "../../assets/gifs/wait.gif"
import love from "../../assets/gifs/love.gif"
import happy from "../../assets/gifs/happy.gif"
import hello from "../../assets/gifs/hello.gif"
import music from "../../assets/gifs/music.gif"
import quest from "../../assets/gifs/quest.gif"

const reaction = new Audio(soundReaction)

export const baloons = {
	wait,
	love,
	happy,
	hello,
	music,
	quest,
}

export const Penguin = ({ baloon = baloons.hello, setBaloon }) => {
	const playReaction = async () => {
		reaction.load()
		await reaction.play()
		const penguin = document.getElementById("penguin")

		penguin.classList.add("jump")
		setTimeout(() => {
			penguin.classList.remove("jump")
		}, 250)
	}

	return (
		<div>
			<div id="sound" onClick={playReaction} hidden />
			<div
				id="penguin"
				className="flex"
				onClick={() => {
					setBaloon(happy)
					playReaction().finally()
				}}
				style={{
					flexDirection: "column",
				}}
			>
				<div>{!baloon ? <div style={{ height: 100 }} /> : <img src={baloon} height={100} alt="penguin.png" />}</div>
				<div>
					<div className="penguin">
						<img id="img-penguin" src={penguin} height={200} alt="#" />
					</div>
				</div>
			</div>
		</div>
	)
}

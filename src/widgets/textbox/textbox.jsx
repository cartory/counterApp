import "./textbox.css"

import { useEffect, useRef } from "react"
import { Typewriter } from "react-simple-typewriter"

const test = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

export const Textbox = ({ text = test }) => {
	return (
		<div className="textbox">
			<Typewriter words={[text]} typeSpeed={15} />
		</div>
	)
}

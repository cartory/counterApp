import "./app.css"
import { useState } from "react"

import { Snow } from "./widgets/snow/snow"
import { Textbox } from "./widgets/textbox/textbox"
import { Option, icons } from "./widgets/option/option"
import { Penguin, baloons } from "./widgets/penguin/penguin"

export const App = () => {
	const [baloon, setBaloon] = useState(baloons.hello)

	const handleBaloon = (icon) => {
		const baloonIcon = baloons[icon]

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

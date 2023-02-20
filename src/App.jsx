import "./app.css"

import { useState } from "react"

import { Option, icons } from "./widgets/option/option"
import { Penguin, baloons } from "./widgets/penguin/penguin"

export const App = () => {
	const [baloon, setBaloon] = useState(baloons.hello)

	return (
		<div className="app">
			<Penguin baloon={baloon} setBaloon={setBaloon} />
			<div className="flex">
				<div className="textbox">
					<p>textbox</p>
				</div>
			</div>
			<div className="flex" style={{ gap: 15 }}>
				{Object.keys(icons).map((icon) => {
					return (
						<Option
							key={icon}
							icon={icons[icon]}
							onClick={() => {
								const baloonIcon = baloons[icon]
								
								if (!!baloonIcon) {
									setBaloon(baloonIcon)
									document.getElementById("penguin").click()
								}
							}}
						/>
					)
				})}
			</div>
		</div>
	)
}

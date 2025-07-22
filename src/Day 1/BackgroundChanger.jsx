import React, { useState } from "react";
import './BackgroundChanger.css';

export default function BackgroundChanger() {
	const [bgColor, setBgColor] = useState("white");

	return (
		<div
			style={{
				backgroundColor: bgColor,
				height: "100vh",
				textAlign: "center",
				paddingTop: "50px",
			}}
		>
			<h1>Click to Change Background</h1>
			<button onClick={() => setBgColor("lightblue")}>Light Blue</button>
			<button
				onClick={() => setBgColor("lightgreen")}
				style={{ marginLeft: "10px" }}
			>
				Light Green
			</button>
			<button
				onClick={() => setBgColor("white")}
				style={{ marginLeft: "10px" }}
			>
				Reset
			</button>
		</div>
	);
}


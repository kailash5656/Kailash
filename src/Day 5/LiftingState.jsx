import React, { useState } from "react";

function Parent() {
	const [text, setText] = useState("");

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#f9f9f9",
				flexDirection: "column",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<div
				style={{
					padding: "20px",
					border: "1px solid #ccc",
					borderRadius: "8px",
					backgroundColor: "white",
					minWidth: "300px",
					boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
				}}
			>
				<h2 style={{ textAlign: "center" }}>Lifting State Example</h2>
				<ChildA text={text} setText={setText} />
				<ChildB text={text} />
			</div>
		</div>
	);
}

function ChildA({ text, setText }) {
	return (
		<div style={{ marginTop: "10px" }}>
			<label>Enter Text:</label>
			<br />
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type something..."
				style={{
					padding: "8px",
					marginTop: "6px",
					width: "100%",
					boxSizing: "border-box",
				}}
			/>
		</div>
	);
}

function ChildB({ text }) {
	return (
		<div style={{ marginTop: "20px", textAlign: "center" }}>
			<strong>Output:</strong>
			<p>{text || "Nothing typed yet."}</p>
		</div>
	);
}

export default Parent;
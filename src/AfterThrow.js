import { useContext, useEffect, useState } from "react";
import { Context } from "./App";

function AfterThrow() {
	const { userThrow, setUserThrow, setScore } = useContext(Context);
	const [userOutlineColor, setUserOutlineColor] = useState("");
	const [houseOutlineColor, setHouseOutlineColor] = useState("");
	const [result, setResult] = useState(false);
	const [houseThrow, setHouseThrow] = useState("");

	useEffect(() => {
		const options = ["rock", "paper", "scissors"];
		const randomNumber = Math.floor(Math.random() * 3);
		const newHouseThrow = options[randomNumber];
		setHouseThrow(newHouseThrow);
	}, [userThrow, setScore]);

	useEffect(() => {
		if (userThrow === "rock") setUserOutlineColor("red");
		if (userThrow === "scissors") setUserOutlineColor("yellow");
		if (userThrow === "paper") setUserOutlineColor("blue");
		if (houseThrow === "rock") setHouseOutlineColor("red");
		if (houseThrow === "scissors") setHouseOutlineColor("yellow");
		if (houseThrow === "paper") setHouseOutlineColor("blue");

		const userWins =
			(userThrow === "rock" && houseThrow === "scissors") ||
			(userThrow === "paper" && houseThrow === "rock") ||
			(userThrow === "scissors" && houseThrow === "paper");

		const houseWins =
			(houseThrow === "rock" && userThrow === "scissors") ||
			(houseThrow === "paper" && userThrow === "rock") ||
			(houseThrow === "scissors" && userThrow === "paper");

		if (userWins) {
			setScore((prevScore) => prevScore + 1);
			setResult(true);
		} else if (houseWins) {
			setScore((prevScore) => prevScore - 1);
			setResult(false);
		}
	}, [userThrow, houseThrow, setScore]);

	return (
		<div className="afterThrow">
			<div className="userThrow">
				<p>YOU PICKED</p>
				<div className="throws" style={{ outlineColor: userOutlineColor }}>
					<img src={`/icon-${userThrow}.svg`} alt="throw symbol" />
				</div>
			</div>
			<div className="result">
				{result ? <p>YOU WIN</p> : <p>YOU LOSE</p>}
				<button
					onClick={(e) => {
						e.preventDefault();
						setUserThrow("");
						setUserOutlineColor("");
						setHouseOutlineColor("");
						setResult(false);
					}}
				>
					PLAY AGAIN
				</button>
			</div>
			<div className="houseThrow">
				<p>THE HOUSE PICKED</p>
				<div className="throws" style={{ outlineColor: houseOutlineColor }}>
					<img src={`/icon-${houseThrow}.svg`} alt="throw symbol" />
				</div>
			</div>
		</div>
	);
}

export default AfterThrow;

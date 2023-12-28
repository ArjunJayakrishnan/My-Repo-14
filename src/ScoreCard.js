import { useContext } from "react";
import { Context } from "./App";

function ScoreCard() {
	const { score } = useContext(Context);
	return (
		<div className="scoreCard">
			<h4>SCORE</h4>
			<p>{score}</p>
		</div>
	);
}

export default ScoreCard;

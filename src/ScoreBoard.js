import ScoreCard from "./ScoreCard";

function ScoreBoard() {
	return (
		<div className="scoreBoard">
			<div className="gameName">
				<h3>ROCK</h3>
				<h3>PAPER</h3>
				<h3>SCISSOR</h3>
			</div>
			<ScoreCard />
		</div>
	);
}

export default ScoreBoard;

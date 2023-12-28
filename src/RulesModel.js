import { useContext } from "react";
import { Context } from "./App";

function RulesModel() {
	const { setRulesOpen } = useContext(Context);
	return (
		<div className="rulesContainer">
			<div className="headingRulesContainer">
				<h2>Rules</h2>
				<img
					src="/icon-close.svg"
					alt="close logo"
					onClick={() => setRulesOpen(false)}
				/>
			</div>
			<div className="rulesImageContainer">
				<img src="/image-rules.svg" alt="rules" className="rulesImage" />
			</div>
		</div>
	);
}

export default RulesModel;

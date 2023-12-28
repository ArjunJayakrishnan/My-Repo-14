import { createContext, useState } from "react";
import RulesModel from "./RulesModel";

import ScoreBoard from "./ScoreBoard";
import AfterThrow from "./AfterThrow";
import Selection from "./Selection";

export const Context = createContext();

function App() {
	const [rulesOpen, setRulesOpen] = useState(false);
	const [userThrow, setUserThrow] = useState("");
	const [score, setScore] = useState(0);
	return (
		<Context.Provider
			value={{
				rulesOpen,
				setRulesOpen,
				userThrow,
				setUserThrow,
				score,
				setScore,
			}}
		>
			<div className="appContainer">
				<ScoreBoard />
				{userThrow === "" && <Selection />}
				{userThrow && userThrow !== "" && <AfterThrow />}
				<button
					className="toRulesButton"
					onClick={(e) => {
						e.preventDefault();
						setRulesOpen(true);
					}}
				>
					RULES
				</button>
				{rulesOpen && <RulesModel />}
			</div>
		</Context.Provider>
	);
}

export default App;

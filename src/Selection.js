import { useContext } from "react";
import { Context } from "./App";

function Selection() {
	const { setUserThrow } = useContext(Context);

	// console.log(userThrow);
	return (
		<div className="triangleContainer">
			<img src="/bg-triangle.svg" alt="triangle" className="triangleImage" />
			<div className="choosePaper" onClick={() => setUserThrow("paper")}>
				<img src="/icon-paper.svg" alt="something" />
			</div>
			<div className="chooseScissor" onClick={() => setUserThrow("scissors")}>
				<img src="/icon-scissors.svg" alt="something" />
			</div>
			<div className="chooseRock" onClick={() => setUserThrow("rock")}>
				<img src="/icon-rock.svg" alt="something" />
			</div>
		</div>
	);
}

export default Selection;

import "./App.css"
import AccountBal from "../cashApp/AccountBal";


function App() {
	const accounts = {
		bal: 1500,

		savingBal: 1328,
	}


	return (
		<div className="app container">
			<div className="section">
				<h1 className="center">
					Welcome to the personal finance app!
				</h1>
			</div>

			<AccountBal  acct = {accounts} />
		</div>
	);
}


export default App;

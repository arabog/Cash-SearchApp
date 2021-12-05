import "./App.css"
import AccountBal from "../cashApp/AccountBal";
import data from "../../data.json"
import SearchBar from "../SearchBox/SearchBar";


function App() {
	const accounts = {
		bal: 1500,

		savingBal: 1328,
	}


	return (
		<>
			<div className="app container">
				<div className="section">
					<h1 className="center">
						Welcome to the personal finance app!
					</h1>
				</div>

				<AccountBal  acct = {accounts} />
			</div>


			<div className="search-app">
				<SearchBar 
					placeholder="Enter a Book Name...." 
				
					data={data}
				/>
			</div>
		</>
	);
}


export default App;

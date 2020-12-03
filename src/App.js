import { Container, Box } from '@material-ui/core'
import QuotesContainer from './QuotesContainer'
import './App.css'
function App(props) {
	return (
		<Box>
			<Container fixed>
				<h1 class='apph1'>Quotes</h1>
			</Container>
			<Container fixed>
				<QuotesContainer />
			</Container>
		</Box>
	)
}

export default App

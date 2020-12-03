import React, { useState, useEffect } from 'react'
import { Container, Box, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import QuotesList from './QuotesList'
import AddQuotes from './AddQuotes'
const QuotesContainer = (props) => {
	const [quotes, setQuotes] = useState([])
	const [snackbaropen, snackbarsetOpen] = useState(false) //snackbar state
	const handleClose = (event, reason) => {
		//snackbar close handling
		if (reason === 'clickaway') {
			return
		}
		snackbarsetOpen(false)
	}
	useEffect(() => {
		const result = JSON.parse(localStorage.getItem('quotes')) || []
		setQuotes(result)
	}, [])
	useEffect(() => {
		localStorage.setItem('quotes', JSON.stringify(quotes))
	}, [quotes])

	const addItem = (quote) => {
		const result = [...quotes, quote]
		setQuotes(result)
		snackbarsetOpen(true)
	}
	//console.log()
	const removeItem = (id) => {
		const result = quotes.filter((ele) => {
			return ele.id !== id
		})
		snackbarsetOpen(true)
		setQuotes(result)
	}
	const editItem = (quote) => {
		const result = quotes.map((q) => {
			if (q.id === quote.id) {
				return { ...q, ...quote }
			} else {
				return { ...q }
			}
		})
		snackbarsetOpen(true)
		setQuotes(result)
	}
	return (
		<Box>
			<Container fixed>
				<h1>Quotes Display</h1>
				<QuotesList
					quotes={quotes}
					removeItem={removeItem}
					editItem={editItem}
				/>
			</Container>
			<Container fixed>
				<AddQuotes addItem={addItem} />
			</Container>
			<Snackbar
				open={snackbaropen}
				autoHideDuration={2000}
				onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					success!
				</Alert>
			</Snackbar>
		</Box>
	)
}
export default QuotesContainer

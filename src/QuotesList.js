import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import QuotesItem from './QuotesItem'
const QuotesList = (props) => {
	const { quotes, removeItem, editItem } = props
	return (
		<Container fixed>
			{quotes.length === 0 ? (
				<Container fixed>
					<h1>No quotes found</h1>
					<p>Add your first quote</p>
				</Container>
			) : (
				<Container>
					<h1>My Quotes- {quotes.length}</h1>

					{quotes.map((quote) => {
						return (
							<Container>
								<QuotesItem
									key={quote.id}
									{...quote}
									removeItem={removeItem}
									editItem={editItem}
								/>
							</Container>
						)
					})}
				</Container>
			)}
		</Container>
	)
}
export default QuotesList

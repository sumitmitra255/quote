import React, { useState, useEffect } from 'react'
import { Container, Box } from '@material-ui/core'
import QuotesForm from './QuotesForm'
const AddQuotes = (props) => {
	const formSubmission = (formdata) => {
		props.addItem(formdata)
	}
	return (
		<Container>
			<h1>Add Quotes</h1>
			<QuotesForm addItem={props.addItem} formSubmission={formSubmission} />
		</Container>
	)
}
export default AddQuotes

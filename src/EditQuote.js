import React, { useState, useEffect } from 'react'
import { Container, Box } from '@material-ui/core'
import QuotesForm from './QuotesForm'
const EditQuote = (props) => {
	const { id, name, body, editItem, handleToggle } = props
	const formSubmission = (formdata) => {
		editItem(formdata)
	}
	return (
		<Container fixed>
			<h3>Edit Quote</h3>
			<QuotesForm
				id={id}
				name={name}
				body={body}
				formSubmission={formSubmission}
				handleToggle={handleToggle}
			/>
			<br />
		</Container>
	)
}
export default EditQuote

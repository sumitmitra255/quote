import React, { useState, useEffect } from 'react'
import { Container, TextField, Button, Snackbar } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { Alert } from '@material-ui/lab'
import { v4 as uuidv4 } from 'uuid'
const QuotesForm = (props) => {
	const {
		formSubmission,
		id: slno,
		name: author,
		body: quote,
		handleToggle,
	} = props
	const [name, setname] = useState(author ? author : '')
	const [body, setbody] = useState(quote ? quote : '')
	const [id, setid] = useState(slno ? slno : uuidv4())

	const handlename = (e) => {
		setname(e.target.value)
	}
	const handlebody = (e) => {
		setbody(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const formdata = { id: id, name: name, body: body }
		formSubmission(formdata)
		if (handleToggle) {
			handleToggle()
		}
		//setid(uuidv4())
		setname('')
		setbody('')
	}
	return (
		<Container fixed>
			<form onSubmit={handleSubmit}>
				<TextField
					id='name'
					label='Name'
					variant='outlined'
					value={name}
					onChange={handlename}
				/>
				<br />
				<br />
				<TextField
					id='body'
					label='Body'
					variant='outlined'
					multiline
					value={body}
					onChange={handlebody}
				/>
				<br />
				<br />
				<Button
					variant='contained'
					color='primary'
					size='small'
					startIcon={<SaveIcon />}
					type='submit'>
					Save
				</Button>
			</form>
		</Container>
	)
}

export default QuotesForm

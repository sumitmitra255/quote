import React, { useState, useEffect } from 'react'
import { Container, Button, Paper, ButtonGroup, Chip } from '@material-ui/core'
import EditQuote from './EditQuote'
const QuotesItem = (props) => {
	const { id, name, body, removeItem, editItem, Snackbar, Alert } = props
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(!toggle)
	}
	const chiplable = body + '~' + name
	return (
		<Container fixed>
			{toggle ? (
				<Container fixed>
					<EditQuote
						id={id}
						name={name}
						body={body}
						editItem={editItem}
						handleToggle={handleToggle}
					/>
					<ButtonGroup
						variant='contained'
						color='primary'
						aria-label='contained primary button group'>
						<Button onClick={handleToggle}>Cancel</Button>
					</ButtonGroup>
				</Container>
			) : (
				<Container fixed>
					<Chip label={chiplable}></Chip>
					<br />
					<br />
					<ButtonGroup
						variant='contained'
						color='primary'
						aria-label=' small contained primary button group'
						size='small'>
						<Button onClick={handleToggle}>Edit</Button>
						<Button
							onClick={() => {
								removeItem(id)
							}}>
							Remove
						</Button>
					</ButtonGroup>
				</Container>
			)}
		</Container>
	)
}

export default QuotesItem

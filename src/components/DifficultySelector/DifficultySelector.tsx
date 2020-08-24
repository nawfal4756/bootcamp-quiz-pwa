import React, { useState } from 'react';
import { Grid, Button, Typography, makeStyles } from '@material-ui/core';
import { difficultyHandler } from '../../App';
import styles from './DifficultySelector.module.css';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.up('xs')]: {
			width: 350
		}
	}
}));

const DifficultySelector = () => {
	const difficulty = [ { id: 'easy', name: 'Easy' }, { id: 'medium', name: 'Medium' }, { id: 'hard', name: 'Hard' } ];

	const [ difficultySelection, setDifficultySelection ] = useState('easy');

	difficultyHandler(difficultySelection);

	const classes = useStyles();

	return (
		<div>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12} md={12} className={classes.container}>
					<Typography variant="h4" className={styles.heading}>
						Select Difficulty Level
					</Typography>
				</Grid>
				{difficulty.map(({ id, name }) => (
					<Grid item xs={10} md={3} key={id} className={classes.container}>
						<Button
							className={styles.buttons}
							variant="outlined"
							onClick={(e) => setDifficultySelection(id)}
						>
							{name}
						</Button>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default DifficultySelector;

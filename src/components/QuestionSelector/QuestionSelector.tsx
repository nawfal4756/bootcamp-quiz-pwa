import React, { useState } from 'react';
import { Grid, Typography, Slider, makeStyles } from '@material-ui/core';
import { questionsHandler } from '../../App';
import styles from './QuestionSelector.module.css';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.up('xs')]: {
			width: 350
		}
	}
}));

const QuestionSelector = () => {
	const [ questions, setQuestions ] = useState(5);

	const handleChange = (e: any, newValue: any) => {
		setQuestions(newValue);
		console.log(questions);
		questionsHandler(String(questions));
	};

	const classes = useStyles();

	return (
		<div className={styles.container}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12} md={12} className={classes.container}>
					<Typography variant="h4" className={styles.text}>
						Select No. of Questions
					</Typography>
				</Grid>
				<Grid item xs={12} md={12} className={classes.container}>
					<Typography className={styles.text}>Kindly click your desired option twice</Typography>
					<Slider
						defaultValue={5}
						marks
						step={1}
						min={5}
						max={25}
						valueLabelDisplay="auto"
						onChangeCommitted={handleChange}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default QuestionSelector;

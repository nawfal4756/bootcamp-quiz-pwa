import React, { useState } from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';
import { questionsHandler } from '../../App';
import styles from './QuestionSelector.module.css';

const QuestionSelector = () => {
	const [ questions, setQuestions ] = useState(5);

	const handleChange = (e: any, newValue: any) => {
		setQuestions(newValue);
		console.log(questions);
		questionsHandler(String(questions));
	};

	return (
		<div className={styles.container}>
			<Grid container spacing={2} justify="center">
				<Grid item xs={12}>
					<Typography variant="h4" className={styles.text}>
						Select No. of Questions
					</Typography>
				</Grid>
				<Grid item xs={12}>
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

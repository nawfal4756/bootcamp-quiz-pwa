import React, { useState } from 'react';
import styles from './TypeSelector.module.css';
import { Grid, Typography, FormControl, RadioGroup, FormControlLabel, Radio, makeStyles } from '@material-ui/core';
import { typeHandler } from '../../App';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.up('xs')]: {
			width: 350
		}
	}
}));

const TypeSelector = () => {
	const [ type, setType ] = useState('multiple');

	typeHandler(type);

	const classes = useStyles();

	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={12} className={classes.container}>
					<Typography variant="h4" className={styles.text}>
						Select Type of Questions
					</Typography>
				</Grid>
				<Grid item xs={12} md={12} className={classes.container}>
					<FormControl component="fieldset">
						<RadioGroup
							row
							aria-label="questionType"
							name="questionType"
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<FormControlLabel value="multiple" control={<Radio />} label="Multiple Type Question" />
							<FormControlLabel value="boolean" control={<Radio />} label="True False Question" />
						</RadioGroup>
					</FormControl>
				</Grid>
			</Grid>
		</div>
	);
};

export default TypeSelector;

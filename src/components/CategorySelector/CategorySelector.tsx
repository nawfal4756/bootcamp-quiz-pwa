import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core';
import { categoryHandler } from '../../App';
import styles from './CategorySelector.module.css';

const CategorySelector = () => {
	const categoryList = [
		{ id: 'any', name: 'Any', img: require('../../images/any.gif') },
		{ id: '9', name: 'General Knowledge', img: require('../../images/generalKnowledge.jpg') },
		{ id: '10', name: 'Entertainment Books', img: require('../../images/books.jpg') },
		{ id: '11', name: 'Entertainment - Film', img: require('../../images/film.jpg') },
		{ id: '12', name: 'Entertainment - Music', img: require('../../images/music.jpg') },
		{ id: '13', name: 'Entertainment - Musicals & Theaters', img: require('../../images/theater.jpg') },
		{ id: '14', name: 'Entertainment - Televison', img: require('../../images/television.jpg') },
		{ id: '15', name: 'Entertainment - Video Games', img: require('../../images/videoGames.jpg') },
		{ id: '16', name: 'Entertainment - Board Games', img: require('../../images/boardGames.jpg') },
		{ id: '17', name: 'Science & Nature', img: require('../../images/scienceNature.jpg') },
		{ id: '18', name: 'Science - Computers', img: require('../../images/computers.jpg') },
		{ id: '19', name: 'Science - Mathematics', img: require('../../images/mathematics.jpg') },
		{ id: '20', name: 'Mythology', img: require('../../images/mythology.jpg') },
		{ id: '21', name: 'Sports', img: require('../../images/sports.jpg') },
		{ id: '22', name: 'Geography', img: require('../../images/geography.jpg') },
		{ id: '23', name: 'History', img: require('../../images/history.jpg') },
		{ id: '24', name: 'Politics', img: require('../../images/politics.jpg') },
		{
			id: '25',
			name: 'Art',
			img: require('../../images/art.jpg')
		},
		{ id: '26', name: 'Celebrities', img: require('../../images/celebrities.jpg') },
		{ id: '27', name: 'Animals', img: require('../../images/animals.jpg') },
		{ id: '28', name: 'Vehicles', img: require('../../images/vehicles.jpg') },
		{ id: '29', name: 'Entertainment - Comics', img: require('../../images/comics.jpg') },
		{ id: '30', name: 'Science - Gadgets', img: require('../../images/gadgets.jpg') },
		{ id: '31', name: 'Entertainment - Japanese Anime & Manga', img: require('../../images/japaneeseAnime.jpg') },
		{ id: '32', name: 'Enertainment - Cartoon & Animations', img: require('../../images/cartoon.gif') }
	];

	const [ categoryValue, setCategoryValue ] = useState('any');

	categoryHandler(categoryValue);


	return (
		<div className={styles.container}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={12} className={styles.images}>
					<Typography variant="h4" className={styles.text}>
						Select Your Category
					</Typography>
				</Grid>
				{categoryList.map(({ id, name, img }) => (
					<Grid item xs={6} md={2} key={id}>
						<Button onClick={(e) => setCategoryValue(id)}>
							<Card>
								<CardContent>
									<img src={img} alt={name} className={styles.images} />
									<Typography>{name}</Typography>
								</CardContent>
							</Card>
						</Button>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CategorySelector;

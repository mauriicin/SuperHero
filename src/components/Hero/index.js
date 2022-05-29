import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Hero({ data }) {
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 2,
					flexWrap: 'wrap',
				}}
			>
				{data.map((hero) => (
					<>
						<Card
							sx={{ width: 345, marginLeft: 2, marginBottom: 2 }}
						>
							<CardMedia
								component="img"
								height="250"
								image={hero.image.url}
								alt={hero.name}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									{hero.name}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									Gender: {hero.appearance.gender}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									Race: {hero.appearance.race}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									Publisher: {hero.biography.publisher}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">more details</Button>
							</CardActions>
						</Card>
					</>
				))}
			</Box>
		</Container>
	);
}

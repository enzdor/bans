import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { animated, useSpring } from "react-spring"

export default function About(){
	const AnimatedGear = animated(SettingsIcon)
	const AnimatedPencil = animated(CreateIcon)
	const AnimatedHeart = animated(FavoriteIcon)
	const [flip, setFlip] = useState(false)

	const animationGear = useSpring({
		to: {rotateZ: 0},
		from: {rotateZ: 180},
		loop: true,
		delay: 1000
	})

	const animationHeart = useSpring({
		to: {color: 'red'},
		from: {color: 'black'},
		reset: true,
		reverse: flip,
		delay: 1000,
		onRest: () => setFlip(!flip)
	})

	const animationPencil = useSpring({
		to: {marginRight: '3rem'},
		from: {marginRight: '-3rem'},
		reset: true,
		reverse: flip,
		delay: 1000,
		onRest: () => setFlip(!flip)
	})

	return(
		<>
			<Header />
			<Box component="img" sx={{height: '110vh',width: '100vw', objectFit: 'cover' }} src="https://wmimg.azureedge.net/public/img/marathons/bmw-frankfurt-marathon/bmw-frankfurt-marathon.jpg"/>
			<Container sx={{
				backgroundColor: 'white', 
				zIndex: '2', 
				position: 'absolute', 
				top: '50vh', 
				left: '50vw', 
				transform: 'translate(-50%, -50%)',
				width: {xs: '70%', md: '50%'} 
			}}>
				<Hidden smDown>
					<Typography variant="h2" sx={{m: '1rem', mb: '0'}}>We make the best shoes!</Typography>
					<Typography variant="h4" sx={{m: '1rem'}}>Soft landings followed by explosive take-offs. Or, as we call it, running on clouds.</Typography>
				</Hidden>

				<Hidden smUp>
					<Typography variant="h3" sx={{m: '1rem', mb: '0'}}>We make the best shoes!</Typography>
					<Typography variant="h5" sx={{m: '1rem'}}>Soft landings followed by explosive take-offs. Or, as we call it, running on clouds.</Typography>
				</Hidden>
			</Container>
			<Grid container spacing={6}>
				<Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'center',}}>
					<Stack sx={{dipslay: 'flex', flexDirection: 'column',  alignItems: 'center', mx: {xs: '2rem', sm: '10rem', md: '6rem'}, my: {xs: '1rem', md: '3rem'}}}>
						<AnimatedGear sx={{fontSize: '5rem'}} style={animationGear} />
						<Typography variant="h4" sx={{m: '2rem'}}>Technology</Typography>
						<Typography variant="h6" sx={{textAlign: 'justify'}}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </Typography>
					</Stack>	
				</Grid>
				<Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'center',}}>
					<Stack sx={{dipslay: 'flex', flexDirection: 'column', alignItems: 'center', mx: {xs: '2rem', sm: '10rem', md: '6rem'}, my: {xs: '1rem', md: '3rem'}}}>
						<AnimatedPencil sx={{fontSize: '5rem'}} style={animationPencil}/>
						<Typography variant="h4" sx={{m: '2rem'}}>Creativity</Typography>
						<Typography variant="h6" sx={{textAlign: 'justify'}}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</Typography>
					</Stack>	
				</Grid>			
				<Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'center',}}>
					<Stack sx={{dipslay: 'flex', flexDirection: 'column', alignItems: 'center', mx: {xs: '2rem', sm: '10rem', md: '6rem'}, my: {xs: '1rem', md: '3rem'}}}>
						<AnimatedHeart sx={{fontSize: '5rem'}} style={animationHeart}/>
						<Typography variant="h4" sx={{m: '2rem'}}>Enjoyment</Typography>
						<Typography variant="h6" sx={{textAlign: 'justify'}}>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. </Typography>
					</Stack>	
				</Grid>
			</Grid>
			<Footer />
		</>
	)
}

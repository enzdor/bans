import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import ShoeCanvas from "./ShoeCanvas";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box"

export default function Home(){
	return(
		<>
			<Header />
			<Grid container spacing={{xs: 0, sm: 3}}>
				<Grid item xs={12} sm={6} sx={{height: {xs: '80vh', sm: '110vh'}}}>
					<ShoeCanvas spin={true}/>
				</Grid>
				<Grid item xs={12} sm={6} sx={{height: {xs: '20vh', sm: '110vh'}, 
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Hidden smDown>
						<Stack direction="column" spacing={1}>
							<Typography variant="h1">Buy this shoe</Typography>
							<Typography variant="h4">The best shoe ever made.</Typography>
						</Stack>
					</Hidden>
					<Hidden smUp>
						<Stack direction="column" spacing={1} sx={{position: 'absolute', top: '75vh'}}>
							<Typography variant="h2">Buy this shoe</Typography>
							<Typography variant="h5">The best shoe ever made.</Typography>
						</Stack>
					</Hidden>
				</Grid>
			</Grid>
			<Grid container spacing={0} sx={{backgroundColor: "black"}}>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, p: '2.5rem', display: 'flex', alignItems: 'center'}}>
					<Stack direction="column" spacing={3}>
						<Typography variant="h2" color="white">Made resposibly</Typography>
						<Typography variant="h5" color="white"> When it comes to business and sport, we value fair play. We believe world-class manufacturing is grounded in standards that respect the environment, the people who work in factories and the principles of a healthy and safe workplace.</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} md={6} sx={{display: 'flex'}}>
					<Box component="img" sx={{
						justifySelf: 'center',
						alignSelf: 'center',
						width: '90%', 
						mx: '5%',
						mb: '2rem'
					}} src="https://static01.nyt.com/images/2017/06/07/world/07chinalabor-1/07chinafactory-1-superJumbo.jpg" />
				</Grid>
			</Grid>
			<Grid container spacing={0} sx={{backgroundColor: "white"}}>
				<Grid item xs={12} md={6} sx={{display: 'flex'}}>
					<Box component="img" sx={{
						justifySelf: 'center',
						alignSelf: 'center',
						width: '90%', 
						mx: '5%',
						mt: '2rem'
					}} src="https://www.sneakerfactory.net/wp-content/uploads/2015/10/shutterstock_85489504.jpg" />
				</Grid>
				<Grid item xs={12} md={6} sx={{height: {md: '100vh'}, p: '2.5rem', display: 'flex', alignItems: 'center'}}>
					<Stack direction="column" spacing={3}>
						<Typography variant="h2">Best Materials</Typography>
						<Typography variant="h5">When it comes to what we make and how we make it, we build long-term relationships with manufacturing suppliers who share our commitment to making products responsibly and sustainably.</Typography>
					</Stack>
				</Grid>
			</Grid>
			<Footer />
		</>
	)
}

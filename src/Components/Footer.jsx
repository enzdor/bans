import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
	return(
		<div style={{backgroundColor: 'black'}}>
			<Stack direction="column" sx={{p: '1rem'}}>
				<Typography variant="h3" color="white">Bans</Typography>
				<Typography variant="h5" color="white">The best shoes</Typography>
				<Stack direction="row" spacing={9} sx={{py: '1rem'}}>
					<InstagramIcon fontSize="large" sx={{color: 'white', mr: '1rem'}}/>
					<TwitterIcon fontSize="large" sx={{color: 'white', mr: '1rem'}}/>
					<FacebookIcon fontSize="large" sx={{color: 'white', mr: '1rem'}}/>
				</Stack>
			</Stack>
		</div>
	)
}

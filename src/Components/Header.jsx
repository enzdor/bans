import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Hidden from "@mui/material/Hidden";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export default function Header(){
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()

	return(
		<>
			<Grid container spacing={10} sx={{
				position: 'absolute',
				top: '0',
				left: '0',
				zIndex: '2',
				backgroundColor: 'transparent'
			}}>
				<Grid item xs={4}>
					<Typography variant="h3" onClick={() => navigate('/')} sx={{my: '1rem', mx: '1.5rem', cursor: 'pointer'}}>Bans</Typography>
				</Grid>
				<Hidden smDown>
					<Grid item xs={8} sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'flex-end'
					}}>
						<Stack direction="row" spacing={12} sx={{my: '1rem', mx: '1.5rem'}}>
							<Typography variant="h4" sx={{cursor: 'pointer'}} onClick={() => navigate('/buy')}>Buy</Typography>
							<Typography variant="h4" sx={{cursor: 'pointer'}} onClick={() => navigate('/about')}>About</Typography>
						</Stack>
					</Grid>
				</Hidden>
				<Hidden smUp>
					<Grid item xs={8} sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center'
					}}>
						<MenuIcon fontSize="large" onClick={() => {setOpen(true)}} sx={{
							my: '1rem', 
							mx: '1.5rem',
							zIndex: '10'}}
						/>
					</Grid>
				</Hidden>
			</Grid>
			<Hidden smUp>
				<Drawer open={open} anchor="top">
					<CloseIcon fontSize="large" onClick={() => {setOpen(false)}} sx={{
						position: 'absolute', 
						top: '1.5rem', 
						right: '1.5rem'
					}}/>
					<Stack direction="column" spacing={6} sx={{
						my: '1rem', 
						mx: '1.5rem',
						dipslay: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}>
						<Typography variant="h3" onClick={() => navigate('/')} sx={{alignSelf: 'flex-start'}}>Bans</Typography>
						<Typography variant="h4" onClick={() => navigate('/buy')}>Buy</Typography>
						<Typography variant="h4" onClick={() => navigate('/about')}>About</Typography>
					</Stack>
				</Drawer>
			</Hidden>
		</>
	)
}

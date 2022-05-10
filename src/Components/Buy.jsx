import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Grid from "@mui/material/Grid";
import ShoeCanvas from "./ShoeCanvas";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function Buy(){
	const [size, setSize] = useState(null)
	return(
		<>
			<Header />
			<Grid container spacing={{xs: 0, sm: 3}}>
				<Grid item xs={12} sm={6} sx={{height: {xs: '80vh', sm: '100vh'}}}>
					<ShoeCanvas spin={true} rotation={[0, Math.PI / 2, 0]}/>
				</Grid>
				<Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
					<Stack spacing={2} sx={{mx: {xs: '1rem', sm: '0'}}}>
						<Typography variant="h1">Shoe v1</Typography>
						<Typography variant="h4" color="green">$100</Typography>
						<Stack>
							<Typography variant="h4">Size</Typography>
							<ButtonGroup variant="contained" sx={{boxShadow: '0'}} aria-label="shoe size">
								<Button onClick={() => setSize(7)} color={size === 7 ? 'secondary' : 'primary'}>7</Button>
								<Button onClick={() => setSize(8)} color={size === 8 ? 'secondary' : 'primary'}>8</Button>
								<Button onClick={() => setSize(9)} color={size === 9 ? 'secondary' : 'primary'}>9</Button>
								<Button onClick={() => setSize(10)} color={size === 10 ? 'secondary' : 'primary'}>10</Button>
								<Button onClick={() => setSize(11)} color={size === 11 ? 'secondary' : 'primary'}>11</Button>
								<Button onClick={() => setSize(12)} color={size === 12 ? 'secondary' : 'primary'}>12</Button>
							</ButtonGroup>
						</Stack>
						<Button disabled variant="contained" color="secondary" sx={{width: '3rem'}}>Buy</Button>
						<Typography variant="h6" color="error">Out of stock!</Typography>
					</Stack>	
				</Grid>
			</Grid>
			<Footer />
		</>
	)
}

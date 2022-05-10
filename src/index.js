import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider, createTheme }from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: '#000000'
		},
		secondary: {
			main: '#008000'
		}
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</Router>
);


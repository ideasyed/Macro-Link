import { createMuiTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		secondary: purple,
		primary: green,
	},
	typography: {
		fontFamily: ["Courier", "Helvetica"],
	},
});

export default theme;

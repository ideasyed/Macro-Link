import { memo } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
const Layout = memo(({ children }) => (
	<Paper
		elevation={0}
		style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
	>
		<AppBar color="primary" position="static" style={{ height: 64 }}>
			<Toolbar style={{ height: 64 }}>
				<Typography variant="h6" gutterBottom>
					Macro Link - Multi Links Shrinker
				</Typography>
			</Toolbar>
		</AppBar>
		{children}
	</Paper>
));
export default Layout;

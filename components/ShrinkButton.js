import { memo } from "react";
import { Grid, Button, CircularProgress } from "@material-ui/core";
const ShrinkButton = memo(({ onButtonClick, disableShrink, loading }) => (
	<Grid container justify="center" display="none">
		<Button
			color="secondary"
			variant="contained"
			onClick={onButtonClick}
			disabled={disableShrink || loading}
		>
			Shrink Links
			{loading && (
				<CircularProgress size={14} style={{ marginLeft: "10px" }} />
			)}
		</Button>
	</Grid>
));
export default ShrinkButton;

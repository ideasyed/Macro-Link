import { memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
const AddLink = memo(
	({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (
		<Paper style={{ margin: 16, padding: 16 }}>
			<Grid container>
				<Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
					<TextField
						placeholder="Add URL here"
						value={inputValue}
						onChange={onInputChange}
						onKeyPress={onInputKeyPress}
						fullWidth
					/>
				</Grid>
				<Grid xs={2} md={1} item>
					<Button
						fullWidth
						color="secondary"
						variant="outlined"
						onClick={onButtonClick}
					>
						Add
					</Button>
				</Grid>
			</Grid>
		</Paper>
	)
);
export default AddLink;

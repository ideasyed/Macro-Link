import { memo } from "react";
import { TextField, Paper } from "@material-ui/core";
const AddDescription = memo(({ inputValue, onInputChange }) => (
	<Paper style={{ margin: 16, padding: 16 }}>
		<TextField
			placeholder="Add Description here"
			value={inputValue}
			onChange={onInputChange}
			fullWidth
		/>
	</Paper>
));
export default AddDescription;

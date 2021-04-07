import { memo } from "react";
import {
	ListItem,
	IconButton,
	ListItemText,
	ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
const UrlListItem = memo(({divider, text, onButtonClick}) => (
	<ListItem divider={divider}>
		<ListItemText primary={text} />
		<ListItemSecondaryAction>
			<IconButton onClick={onButtonClick}>
				<DeleteOutlined />
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
));
export default UrlListItem;

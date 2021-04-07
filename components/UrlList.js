import { memo } from "react";
import { List, Paper } from "@material-ui/core";
import UrlListItem from "./UrlListItem";
const UrlList = memo(({items, onItemRemove}) => (
	<>
		{items.length > 0 && (
			<Paper style={{ margin: 16 }}>
				<List style={{ overflow: "scroll" }}>
					{items.map((link, idx) => (
						<UrlListItem
							text={link}
							key={`ListItem.${idx}`}
							divider={idx !== items.length - 1}
							onButtonClick={() => onItemRemove(idx)}
						/>
					))}
				</List>
			</Paper>
		)}
	</>
));
export default UrlList;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import {
	List,
	Paper,
	ListItem,
	ListItemText,
	Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));

function LinkLists(arg) {
	const classes = useStyles();
	const router = useRouter();
	const { alias } = router.query;
	const [response, setResponse] = useState({});
	useEffect(async () => {
		if (alias) {
			const response = await fetch(`/api/shrinker?id=${alias}`);
			const result = await response.json();
			setResponse(result);
		}
	}, [alias]);
	return (
		<Layout>
			<Backdrop
				className={classes.backdrop}
				open={response.links && response.links.length ? false : true}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			{response.description && (
				<Paper style={{ margin: 16 }}>
					<Typography variant="body1" style={{ padding: "8px 16px" }}>
						{response.description}
					</Typography>
				</Paper>
			)}
			{response.links && response.links.length > 0 && (
				<Paper style={{ margin: 16 }}>
					<List style={{ overflow: "scroll" }}>
						{response.links.map((link, idx) => (
							<ListItem
								key={`ListItem.${idx}`}
								divider={idx !== response.links.length - 1}
								button
							>
								<a
									target="_blank"
									href={link}
									rel="noopener noreferrer"
									style={{
										"text-decoration": "none",
										color: "blue",
									}}
								>
									<ListItemText primary={link} />
								</a>
							</ListItem>
						))}
					</List>
				</Paper>
			)}
		</Layout>
	);
}

export default LinkLists;

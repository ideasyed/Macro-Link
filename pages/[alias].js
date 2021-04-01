import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { List, Paper, ListItem, ListItemText } from '@material-ui/core';

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
	const [links, setLinks] = useState([]);
	useEffect(async () => {
		if (alias) {
			const response = await fetch(`/api/shrinker?id=${alias}`);
			const result = await response.json();
			setLinks(result.links);
		}
	}, [alias]);
	return (
		<Layout>
			<Backdrop
				className={classes.backdrop}
				open={links.length ? false : true}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			{links.length > 0 && (
				<Paper style={{ margin: 16 }}>
					<List style={{ overflow: "scroll" }}>
						{links.map((link, idx) => (
							<ListItem key={`ListItem.${idx}`} divider={idx !== links.length - 1} button>
								<a target="_blank" href={link} rel="noopener noreferrer" style={{"text-decoration": "none", color: "blue"}}><ListItemText primary={link} /></a>
							</ListItem>
						))}
					</List>
				</Paper>
			)}
		</Layout>
	);
}

export default LinkLists;

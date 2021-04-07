import { makeStyles, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	heartEmoji: {
		color: "red",
		verticalAlign: "middle",
	},
	linkTag: {
		borderBottom: "1px solid #453886",
		color: "#453886",
		paddingBottom: ".25em",
		textDecoration: "none",
		"&:hover": {
			color: "#2196f3",
			backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
			backgroundPosition: "bottom",
			backgroundRepeat: "repeat-x",
			backgroundSize: "20%",
			borderBottom: "0",
			paddingBottom: ".3em",
			textDecoration: "none",
		},
	},
	footer: {
		margin: "25px",
		color: theme.palette.primary.main,
		textAlign: "center",
	},
}));

const Footer = () => {
	const styles = useStyles();
	return (
		<Typography className={styles.footer}>
			Made with <Favorite className={styles.heartEmoji} /> by{" "}
			<a
				target="_blank"
				href="https://ideasyed.dev"
				rel="noopener noreferrer"
				className={styles.linkTag}
			>
				IdeaSyed
			</a>
		</Typography>
	);
};
export default Footer;

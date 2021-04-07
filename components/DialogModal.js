import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "next/link";
import Router from "next/router";

const DialogModal = ({ open, aliasUrl }) => {
	const handleClose = () => Router.reload();
	return (
		<div>
			<Dialog fullScreen={false} open={open} onClose={handleClose}>
				<DialogTitle id="responsive-dialog-title">
					Success, Shrunk Link!
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<p>
							Thank you for using this app, copy and share the
							link!
						</p>
						<center>
							<Link href={aliasUrl}>
								<a>{aliasUrl}</a>
							</Link>
						</center>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default DialogModal;

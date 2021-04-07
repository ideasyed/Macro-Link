import { memo, useState } from "react";
import { useInputValue, useLinks } from "../customHooks";
import Layout from "../components/Layout";
import AddLink from "../components/AddLink";
import UrlList from "../components/UrlList";
import ShrinkButton from "../components/ShrinkButton";
import { isUri } from "valid-url";
import DialogModal from "../components/DialogModal";
import AddDescription from "../components/AddDescription";

const Index = memo(() => {
	const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
	const { links, addLink, removeLink } = useLinks();
	const [shrunkURLs, setShrunkURLs] = useState({});
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const clearInputAndAddLink = () => {
		if (isUri(inputValue)) {
			clearInput();
			addLink(inputValue);
		}
	};
	const shrinkLinks = async () => {
		setLoading(true);
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify({ links, description: description.trim() }),
			redirect: "follow",
		};

		const response = await fetch("/api/shrinker", requestOptions);
		const result = await response.json();
		setShrunkURLs(result);
	};
	return (
		<Layout>
			<AddDescription
				inputValue={description}
				onInputChange={(event) => setDescription(event.target.value)}
			/>
			<AddLink
				inputValue={inputValue}
				onInputChange={changeInput}
				onButtonClick={clearInputAndAddLink}
				onInputKeyPress={(event) =>
					keyInput(event, clearInputAndAddLink)
				}
			/>
			<UrlList items={links} onItemRemove={(idx) => removeLink(idx)} />
			<ShrinkButton
				onButtonClick={shrinkLinks}
				disableShrink={links.length ? false : true}
				loading={loading}
			></ShrinkButton>
			<DialogModal
				open={shrunkURLs.alias ? true : false}
				aliasUrl={shrunkURLs.fullURL}
			></DialogModal>
		</Layout>
	);
});

export default Index;

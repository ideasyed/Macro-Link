import { useState } from "react";

export const useInputValue = (initialValue = "") => {
	const [inputValue, setInputValue] = useState(initialValue);
	return {
		inputValue,
		changeInput: (event) => setInputValue(event.target.value),
		clearInput: () => setInputValue(""),
		keyInput: (event, callback) => {
			if (event.which === 13 || event.keyCode === 13) {
				callback(inputValue);
				return true;
			}
			return false;
		},
	};
};

export const useLinks = () => {
	const [links, setLinks] = useState([]);
	return {
		links,
		addLink: (newLink) => setLinks([...links, newLink]),
		removeLink: (idx) =>
			setLinks(links.filter((_link, index) => idx !== index)),
	};
};

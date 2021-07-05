const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import Example from "./example";

registerBlockType("button-group/button-group", {
	title: __("Button Group", "button-group"),
	description: __(
		"Create Two Buttons To Be Stacked Together",
		"button-group"
	),
	keywords: [__("buttons", "grouped button", "Button Group")],
	icon,
	attributes,
	category: "widgets",
	edit: Edit,
	save,
	example: Example,
});
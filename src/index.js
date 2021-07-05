const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("create-block/dual-button", {
	title: __("Dual Button", "button-group"),
	description: __(
		"Create Two Buttons To Be Stacked Together",
		"button-group"
	),
	keywords: [__("buttons", "grouped button", "Dual Button")],
	icon,
	attributes,
	category: "widgets",
	edit: Edit,
	save,
});
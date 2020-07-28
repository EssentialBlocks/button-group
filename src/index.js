import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";

registerBlockType("block/button-group", {
	title: __("Button Group", "button-group"),
	description: __(
		"Create A Series of Buttons To Be Stacked Together ",
		"button-group"
	),
	icon,
	category: "widgets",
	edit: Edit,
	save,
});

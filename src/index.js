import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("create-block/duel-button", {
	title: __("Duel Button", "button-group"),
	description: __(
		"Create A Series of Buttons To Be Stacked Together ",
		"button-group"
	),
	keywords: [__("buttons", "grouped button", "Duel Button")],
	icon,
	attributes,
	category: "widgets",
	edit: Edit,
	save,
});
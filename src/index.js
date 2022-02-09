/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Save from "./save";
import Edit from "./edit";
import attributes from "./attributes";
import metadata from "../block.json";
import Example from "./example";
import { DualButtonIcon } from "./icon";
import "./style.scss";
const { ebConditionalRegisterBlockType } = EBButtonGroup;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("buttons", "essential-blocks"),
		__("grouped button", "essential-blocks"),
		__("Button Group", "essential-blocks"),
		__("dual", "essential-blocks"),
	],
	attributes,
	icon: DualButtonIcon,
	edit: Edit,
	save: Save,
	example: Example,
});

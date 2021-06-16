import {
	BUTTON_BORDER_SHADOW,
	BUTTON_ONE_BG,
	BUTTON_TWO_BG,
	WRAPPER_MARGIN,
	BUTTONS_MARGIN,
	BUTTONS_PADDING,
} from "./constants/constants";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
} from "../util/helpers";
import * as typographyObjs from "./constants/typographyPrefixConstants";

const attributes = {
	resOption: {
		type: "string",
		default: "desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},

	preset: {
		type: "string",
		default: "button-1"
	},
	buttonWidth: {
		type: "number",
		default: "auto",
	},
	widthUnit: {
		type: "string",
		default: "px",
	},
	buttonTextOne: {
		type: "string",
		default: "Button One",
	},
	buttonTextTwo: {
		type: "string",
		default: "Button Two",
	},
	buttonOneColor: {
		type: "string",
	},
	hoverButtonOneColor: {
		type: "string",
		default: "#309bff",
	},
	textOneColor: {
		type: "string",
	},
	hoverTextOneColor: {
		type: "string",
	},
	buttonTwoColor: {
		type: "string",
	},
	hoverButtonTwoColor: {
		type: "string",
		default: "#7967ff",
	},
	textTwoColor: {
		type: "string",
	},
	hoverTextTwoColor: {
		type: "string",
	},
	textSize: {
		type: "number",
	},
	buttonURLOne: {
		type: "string",
		selector: ".eb-dual-button-link",
		source: "attribute",
		attribute: "href",
		default: "#",
	},
	buttonURLTwo: {
		type: "string",
		selector: ".eb-dual-button-link-two",
		source: "attribute",
		attribute: "href",
		default: "#",
	},
	buttonAlign: {
		type: "string",
		default: "center",
	},
	isHoverOne: {
		type: "boolean",
		default: false,
	},
	isHoverTwo: {
		type: "boolean",
		default: false,
	},
	innerButtonText: {
		type: "string",
		default: "or",
	},
	innerButtonColor: {
		type: "string",
	},
	innerButtonTextColor: {
		type: "string",
	},
	innerButtonIcon: {
		type: "string",
	},
	isShowText: {
		type: "boolean",
		default: true,
	},
	isShowIcon: {
		type: "boolean",
		default: false,
	},
	showConnector: {
		type: "boolean",
		default: true
	},
	connectorType: {
		type: "string",
		default: "text"
	},
	borderType: {
		type: "string",
		default: "normal",
	},
	buttonsColorType: {
		type: "string",
		default: "normal",
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(typographyObjs)),

	// margin padding attributes ⬇
	...generateDimensionsAttributes(WRAPPER_MARGIN),
	...generateDimensionsAttributes(BUTTONS_MARGIN),
	...generateDimensionsAttributes(BUTTONS_PADDING, {
		top: 5,
		bottom: 5,
		right: 25,
		left: 25,
	}),

	// border shadow attributes ⬇
	...generateBorderShadowAttributes(BUTTON_BORDER_SHADOW, {
		// bdrDefaults: {
		// 	top: 0,
		// 	bottom: 0,
		// 	right: 0,
		// 	left: 0,
		// },
		// rdsDefaults: {
		// 	top: 0,
		// 	bottom: 50,
		// 	right: 500,
		// 	left: 1000,
		// },
		// noShadow: true,
		// noBorder: true,
	}),

	// background attributes ⬇
	...generateBackgroundAttributes(BUTTON_ONE_BG, {
		defaultFillColor: "#3074ff",
	}),
	...generateBackgroundAttributes(BUTTON_TWO_BG, {
		defaultFillColor: "#3074ff",
	}),
};

export default attributes;

import {
	BUTTON_ONE_BORDER_SHADOW,
	BUTTON_TWO_BORDER_SHADOW,
	BUTTON_ONE_BG,
	BUTTON_TWO_BG,
	WRAPPER_MARGIN,
	BUTTONS_MARGIN,
	BUTTONS_PADDING,
	BUTTONS_WIDTH,
	BUTTONS_GAP,
	BUTTONS_CONNECTOR_SIZE,
	BUTTONS_CONNECTOR_ICON_SIZE,
} from "./constants/constants";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes
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
	contentPosition: {
		type: "string",
		default: "center"
	},
	buttonWidth: {
		type: "number",
		default: "auto",
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
		default: "#7967ff"
	},
	hoverButtonOneColor: {
		type: "string",
		default: "#513fd4",
	},
	textOneColor: {
		type: "string",
		default: "#fff"
	},
	hoverTextOneColor: {
		type: "string",
	},
	buttonTwoColor: {
		type: "string",
		default: "#309bff"
	},
	hoverButtonTwoColor: {
		type: "string",
		default: "#2587e2",
	},
	textTwoColor: {
		type: "string",
		default: "#fff"
	},
	hoverTextTwoColor: {
		type: "string",
	},
	buttonURLOne: {
		type: "string",
		selector: ".eb-button-group-link",
		source: "attribute",
		attribute: "href",
		default: "#",
	},
	buttonURLTwo: {
		type: "string",
		selector: ".eb-button-group-link-two",
		source: "attribute",
		attribute: "href",
		default: "#",
	},
	buttonTextAlign: {
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
		default: "OR",
	},
	innerButtonColor: {
		type: "string",
		default: "#fff"
	},
	innerButtonTextColor: {
		type: "string",
		default: "#000"
	},
	innerButtonIcon: {
		type: "string",
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
		top: 10,
		bottom: 10,
		right: 25,
		left: 25,
		isLinked: false,
	}),

	// border shadow attributes ⬇
	...generateBorderShadowAttributes(BUTTON_ONE_BORDER_SHADOW, {
		bdrDefaults: {
			top: 2,
			bottom: 2,
			right: 2,
			left: 2,
		},
		rdsDefaults: {
			top: 20,
			bottom: 0,
			right: 0,
			left: 20,
			isLinked: false,
		},
		noShadow: true,
		// noBorder: true,
	}),
	...generateBorderShadowAttributes(BUTTON_TWO_BORDER_SHADOW, {
		bdrDefaults: {
			top: 2,
			bottom: 2,
			right: 2,
			left: 2,
		},
		rdsDefaults: {
			top: 0,
			bottom: 20,
			right: 20,
			left: 0,
			isLinked: false,
		},
		noShadow: true,
		// noBorder: true,
	}),

	// background attributes ⬇
	...generateBackgroundAttributes(BUTTON_ONE_BG, {
		defaultFillColor: "#3074ff",
	}),
	...generateBackgroundAttributes(BUTTON_TWO_BG, {
		defaultFillColor: "#3074ff",
	}),

	// range controller
	...generateResponsiveRangeAttributes(BUTTONS_WIDTH, {
		defaultRange: 200,
	}),
	...generateResponsiveRangeAttributes(BUTTONS_GAP, {
		defaultRange: 0,
	}),
	...generateResponsiveRangeAttributes(BUTTONS_CONNECTOR_SIZE, {
		defaultRange: 30,
	}),
	...generateResponsiveRangeAttributes(BUTTONS_CONNECTOR_ICON_SIZE, {
		defaultRange: 16,
	}),
};

export default attributes;

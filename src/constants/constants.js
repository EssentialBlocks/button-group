const { __ } = wp.i18n;

// the consts defined here should be unique from one another
export const WRAPPER_MARGIN = "wrpMargin";
export const BUTTONS_MARGIN = "buttonsMargin";
export const BUTTONS_PADDING = "buttonsPadding";
export const BUTTON_BORDER_SHADOW = "wrpBorderShadow";
export const BUTTON_ONE_BG = "button1Bg";
export const BUTTON_TWO_BG = "button2Bg";
export const BUTTONS_WIDTH = "buttonsWidth";
export const BUTTONS_GAP = "buttonsGap";
export const BUTTONS_CONNECTOR_SIZE = "buttonsConnectorSize";

export const BORDER_STYLES = [
	{ label: __("None"), value: "none" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];

export const BUTTON_ONE_STYLES = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Outline"), value: "outline" },
	{ label: __("Text"), value: "text" },
];

export const BUTTON_TWO_STYLES = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Outline"), value: "outline" },
	{ label: __("Text"), value: "text" },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const BORDER_TYPES = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const CONNECTOR_TYPE = [
	{ label: __("Text"), value: "text" },
	{ label: __("Icon"), value: "icon" },
];
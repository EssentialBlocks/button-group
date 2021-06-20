const { __ } = wp.i18n;

// the consts defined here should be unique from one another
export const WRAPPER_MARGIN = "wrpMargin";
export const BUTTONS_MARGIN = "buttonsMargin";
export const BUTTONS_PADDING = "buttonsPadding";
export const BUTTON_ONE_BORDER_SHADOW = "buttonOneBorderShadow";
export const BUTTON_TWO_BORDER_SHADOW = "buttonTwoBorderShadow";
export const BUTTON_ONE_BG = "button1Bg";
export const BUTTON_TWO_BG = "button2Bg";
export const BUTTONS_WIDTH = "buttonsWidth";
export const BUTTONS_GAP = "buttonsGap";
export const BUTTONS_CONNECTOR_SIZE = "buttonsConnectorSize";

export const BUTTON_STYLES = [
	{ label: __("Fill"), value: "fill" },
	{ label: __("Outline"), value: "outline" },
	{ label: __("Text"), value: "text" },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const CONNECTOR_TYPE = [
	{ label: __("Text"), value: "text" },
	{ label: __("Icon"), value: "icon" },
];

export const PRESETS = [
	{ label: __("Button 1"), value: "button-1" },
	{ label: __("Button 2"), value: "button-2" },
	{ label: __("Button 3"), value: "button-3" }
];
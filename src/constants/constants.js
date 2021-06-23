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
	{ label: __("Preset 1"), value: "preset-1" },
	{ label: __("Preset 2"), value: "preset-2" },
	{ label: __("Preset 3"), value: "preset-3" },
	{ label: __("Preset 4"), value: "preset-4" },
];

export const TEXT_ALIGN = [
	{ label: __('<i class="fas fa-align-left"></i>'), value: "left" },
	{ label: __('<i class="fas fa-align-center"></i>'), value: "center" },
	{ label: __('<i class="fas fa-align-right"></i>'), value: "right" }
];

export const CONTENT_POSITION = [
	{ label: __('<i class="fas fa-align-left"></i>'), value: "flex-start" },
	{ label: __('<i class="fas fa-align-center"></i>'), value: "center" },
	{ label: __('<i class="fas fa-align-right"></i>'), value: "flex-end" }
];
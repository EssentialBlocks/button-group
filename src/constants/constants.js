const { __ } = wp.i18n;
const {Dashicon} = wp.components;

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
export const BUTTONS_CONNECTOR_ICON_SIZE = "buttonsConnectorIconSize";

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
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" }
];

export const CONTENT_POSITION = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" }
];
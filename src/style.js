import {
    BUTTON_ONE_BACKGROUND,
    BUTTON_TWO_BACKGROUND,
    BUTTON_ONE_BORDER_SHADOW,
    BUTTON_TWO_BORDER_SHADOW,
    WRAPPER_MARGIN,
    BUTTONS_PADDING,
    BUTTONS_WIDTH,
    BUTTONS_GAP,
    BUTTONS_CONNECTOR_SIZE,
    BUTTONS_CONNECTOR_ICON_SIZE,
    BUTTON_ONE_ICON_SIZE,
    BUTTON_TWO_ICON_SIZE,
    BUTTON_ONE_ICON_GAP,
    BUTTON_TWO_ICON_GAP,
} from "./constants/constants";
import {
    BUTTONS_TYPOGRAPHY,
    BUTTONS_CONNECTOR_TYPOGRAPHY,
} from "./constants/typographyPrefixConstants";

const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    generateBackgroundControlStyles,
    StyleComponent
} = window.EBButtonGroup;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
    const {
        blockId,
        blockMeta,
        // responsive control attribute ⬇
        resOption,
        preset,
        contentPosition,
        buttonTextOne,
        buttonTextTwo,
        textOneColor,
        hoverTextOneColor,
        textTwoColor,
        hoverTextTwoColor,
        innerButtonText,
        innerButtonColor,
        innerButtonTextColor,
        innerButtonIcon,
        showConnector,
        connectorType,
        buttonTextAlign,
        classHook,
        buttonsWidthType,
        showButtonOneIcon,
        showButtonTwoIcon,
        buttonOneStyle = "fill",
        buttonTwoStyle = "fill",
        buttonOneIconColor,
        buttonOneIconHoverColor,
        buttonTwoIconColor,
        buttonTwoIconHoverColor,
    } = attributes;

    //
    // CSS/styling Codes Starts from Here

    const {
        typoStylesDesktop: buttonsTypoStylesDesktop,
        typoStylesTab: buttonsTypoStylesTab,
        typoStylesMobile: buttonsTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: BUTTONS_TYPOGRAPHY,
        defaultFontSize: 16,
    });

    const {
        typoStylesDesktop: connectorTypoStylesDesktop,
        typoStylesTab: connectorTypoStylesTab,
        typoStylesMobile: connectorTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        prefixConstant: BUTTONS_CONNECTOR_TYPOGRAPHY,
        defaultFontSize: 14,
    });

    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: WRAPPER_MARGIN,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: buttonsPaddingStylesDesktop,
        dimensionStylesTab: buttonsPaddingStylesTab,
        dimensionStylesMobile: buttonsPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: BUTTONS_PADDING,
        styleFor: "padding",
        attributes,
    });

    const {
        styesDesktop: buttonOneBDShadowDesktop,
        styesTab: buttonOneBDShadowTab,
        styesMobile: buttonOneBDShadowMobile,
        stylesHoverDesktop: buttonOneBDShadowHoverDesktop,
        stylesHoverTab: buttonOneBDShadowHoverTab,
        stylesHoverMobile: buttonOneBDShadowHoverMobile,
        transitionStyle: buttonOneBDShadowtransitionStyle,
    } = generateBorderShadowStyles({
        controlName: BUTTON_ONE_BORDER_SHADOW,
        attributes,
        noShadow: true,
    });

    const {
        styesDesktop: buttonTwoBDShadowDesktop,
        styesTab: buttonTwoBDShadowTab,
        styesMobile: buttonTwoBDShadowMobile,
        stylesHoverDesktop: buttonTwoBDShadowHoverDesktop,
        stylesHoverTab: buttonTwoBDShadowHoverTab,
        stylesHoverMobile: buttonTwoBDShadowHoverMobile,
        transitionStyle: buttonTwoBDShadowtransitionStyle,
    } = generateBorderShadowStyles({
        controlName: BUTTON_TWO_BORDER_SHADOW,
        attributes,
        noShadow: true,
    });

    // responsive range controller
    const {
        rangeStylesDesktop: buttonWidthStyleDesktop,
        rangeStylesTab: buttonWidthStyleTab,
        rangeStylesMobile: buttonWidthStyleMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTONS_WIDTH,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: buttonGapDesktop,
        rangeStylesTab: buttonGapTab,
        rangeStylesMobile: buttonGapMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTONS_GAP,
        property: "margin",
        attributes,
    });

    const {
        rangeStylesDesktop: buttonConnectorHeightDesktop,
        rangeStylesTab: buttonConnectorHeightTab,
        rangeStylesMobile: buttonConnectorHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTONS_CONNECTOR_SIZE,
        property: "height",
        attributes,
    });

    const {
        rangeStylesDesktop: buttonConnectorWidthDesktop,
        rangeStylesTab: buttonConnectorWidthTab,
        rangeStylesMobile: buttonConnectorWidthMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTONS_CONNECTOR_SIZE,
        property: "width",
        attributes,
    });

    const {
        rangeStylesDesktop: buttonConnectorLineHeightDesktop,
        rangeStylesTab: buttonConnectorLineHeightTab,
        rangeStylesMobile: buttonConnectorLineHeightMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTONS_CONNECTOR_SIZE,
        property: "line-height",
        attributes,
    });

    const {
        rangeStylesDesktop: buttonConnectorIconSizeDesktop,
        rangeStylesTab: buttonConnectorIconSizeTab,
        rangeStylesMobile: buttonConnectorIconSizeMobile,
    } = generateResponsiveRangeStyles({
        controlName: BUTTONS_CONNECTOR_ICON_SIZE,
        property: "font-size",
        attributes,
    });

    // button style (Outline / Text) ⬇
    // Outline and Text reuse the button's background colour as the accent colour
    // for the border and text. Nothing is emitted for "fill", so existing blocks
    // keep exactly the same CSS.
    const styleColors = (bgControl, textColor, hoverTextColor) => {
        const accent = attributes[`${bgControl}backgroundColor`] || textColor;
        const hoverAccent = attributes[`hov_${bgControl}backgroundColor`] || accent;
        return { accent, hoverAccent, textColor, hoverTextColor };
    };
    const btnOneColors = styleColors(BUTTON_ONE_BACKGROUND, textOneColor, hoverTextOneColor);
    const btnTwoColors = styleColors(BUTTON_TWO_BACKGROUND, textTwoColor, hoverTextTwoColor);

    // The colour the button text actually ends up with, used as the icon fallback.
    const effectiveText = (style, c) => (style === "fill" ? c.textColor : c.accent);
    const effectiveHoverText = (style, c) => {
        if (style === "outline") {
            return c.hoverTextColor || c.textColor;
        }
        if (style === "text") {
            return c.hoverTextColor || c.hoverAccent;
        }
        return c.hoverTextColor;
    };

    const buttonStyleCss = (key, style, c) => {
        if (style !== "outline" && style !== "text") {
            return "";
        }
        const sel = `.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-${key}`;
        const common = `
		${sel},
		${sel}:focus {
			background: transparent;
			background-image: none;
		}
		${sel} .eb-button-${key}-text {
			color: ${c.accent};
		}
		${sel}:hover .eb-button-${key}-text {
			color: ${effectiveHoverText(style, c)};
		}
	`;
        if (style === "outline") {
            return `${common}
		${sel} {
			border-style: solid;
			border-width: 2px;
			border-color: ${c.accent};
		}
		${sel}:hover {
			background: ${c.hoverAccent};
			border-color: ${c.hoverAccent};
		}
	`;
        }
        return `${common}
		${sel},
		${sel}:hover,
		${sel}:focus {
			border-color: transparent;
			box-shadow: none;
		}
		${sel}:hover {
			background: transparent;
		}
	`;
    };
    const buttonStylesCss = `
		${buttonStyleCss("one", buttonOneStyle, btnOneColors)}
		${buttonStyleCss("two", buttonTwoStyle, btnTwoColors)}
	`;

    // per-button icon size and gap ⬇
    const iconRange = (controlName, property) => {
        const {
            rangeStylesDesktop: desktop,
            rangeStylesTab: tab,
            rangeStylesMobile: mobile,
        } = generateResponsiveRangeStyles({ controlName, property, attributes });
        return { desktop, tab, mobile };
    };
    const btnOneIconSize = iconRange(BUTTON_ONE_ICON_SIZE, "font-size");
    const btnTwoIconSize = iconRange(BUTTON_TWO_ICON_SIZE, "font-size");
    const btnOneIconGap = iconRange(BUTTON_ONE_ICON_GAP, "gap");
    const btnTwoIconGap = iconRange(BUTTON_TWO_ICON_GAP, "gap");

    const iconJustify =
        buttonTextAlign === "left"
            ? "flex-start"
            : buttonTextAlign === "right"
                ? "flex-end"
                : "center";

    // Only emitted when the icon is on, so the CSS of existing blocks is unchanged.
    const buttonIconStyles = (key, show, size, gap, color, hoverColor, device) => {
        if (!show) {
            return "";
        }
        const sel = `.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-${key}.eb-button-has-icon`;
        if (device !== "desktop") {
            return `
		${sel} { ${gap[device]} }
		${sel} .eb-button-${key}-icon { ${size[device]} }
	`;
        }
        return `
		${sel} {
			display: flex;
			align-items: center;
			justify-content: ${iconJustify};
			${gap.desktop}
		}
		${sel} .eb-button-${key}-icon {
			display: inline-flex;
			align-items: center;
			line-height: 1;
			flex-shrink: 0;
			${size.desktop}
			${color ? `color: ${color};` : ""}
		}
		${sel} .eb-button-${key}-icon .dashicons,
		${sel} .eb-button-${key}-icon svg,
		${sel} .eb-button-${key}-icon img {
			font-size: inherit;
			width: 1em;
			height: 1em;
		}
		${sel}:hover .eb-button-${key}-icon {
			${hoverColor ? `color: ${hoverColor};` : ""}
		}
	`;
    };
    const buttonIconsCss = (device) => `
		${buttonIconStyles("one", showButtonOneIcon, btnOneIconSize, btnOneIconGap, buttonOneIconColor || effectiveText(buttonOneStyle, btnOneColors), buttonOneIconHoverColor || effectiveHoverText(buttonOneStyle, btnOneColors), device)}
		${buttonIconStyles("two", showButtonTwoIcon, btnTwoIconSize, btnTwoIconGap, buttonTwoIconColor || effectiveText(buttonTwoStyle, btnTwoColors), buttonTwoIconHoverColor || effectiveHoverText(buttonTwoStyle, btnTwoColors), device)}
	`;

    // button background styles
    const {
        backgroundStylesDesktop: btnOneBg,
        hoverBackgroundStylesDesktop: btnOneHoverBg,
        bgTransitionStyle: btnOneBgTransition,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: BUTTON_ONE_BACKGROUND,
    });
    const {
        backgroundStylesDesktop: btnTwoBg,
        hoverBackgroundStylesDesktop: btnTwoHoverBg,
        bgTransitionStyle: btnTwoBgTransition,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: BUTTON_TWO_BACKGROUND,
    });

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `
		.eb-button-group-wrapper.${blockId}{
			display: flex;
			flex-direction: row;
			align-items: ${contentPosition};
			justify-content: ${contentPosition};
			position: relative;
			${wrapperMarginStylesDesktop}
		}
	`;
    const wrapperStylesTab = `
		.eb-button-group-wrapper.${blockId}{
			${wrapperMarginStylesTab}

		}
	`;
    const wrapperStylesMobile = `
		.eb-button-group-wrapper.${blockId}{
			${wrapperMarginStylesMobile}

		}
	`;

    // Buttons Common styles css in strings ⬇
    const buttonsCommonStyleDesktop = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent {
			${buttonsPaddingStylesDesktop}
			${buttonsWidthType === "custom" ? buttonWidthStyleDesktop : "width: auto;"}
			${buttonGapDesktop}
			text-align: ${buttonTextAlign};
			cursor: pointer;
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent .eb-button-text {
			${buttonsTypoStylesDesktop}
		}

		.eb-button-group-wrapper.${blockId}.preset-4 {
			width: fit-content;
			margin: ${contentPosition === "center"
            ? "0 auto;"
            : contentPosition === "flex-end"
                ? "0 0 0 auto;"
                : "auto 0;"
        }
		}
	`;

    const buttonsCommonStyleTab = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent {
			${buttonsPaddingStylesTab}
			${buttonsWidthType === "custom" ? buttonWidthStyleTab : "width: auto;"}
			${buttonGapTab}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent .eb-button-text {
			${buttonsTypoStylesTab}
		}
	`;

    const buttonsCommonStyleMobile = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent {
			${buttonsPaddingStylesMobile}
			${buttonsWidthType === "custom" ? buttonWidthStyleMobile : "width: auto;"}
			${buttonGapMobile}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent .eb-button-text {
			${buttonsTypoStylesMobile}
		}
	`;

    // Buttons One styles css in strings ⬇
    const buttonOneStyleDesktop = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one {
			${buttonOneBDShadowDesktop}
			transition:${buttonOneBDShadowtransitionStyle};
			${btnOneBg}
			transition: ${btnOneBgTransition.replace(/[^0-9.]/g, "")}s;
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one:hover,
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one:focus {
			${buttonOneBDShadowHoverDesktop}
			${btnOneHoverBg}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {
			color: ${textOneColor};
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one:hover .eb-button-one-text {
			color: ${hoverTextOneColor};
		}
	`;
    const buttonOneStyleTab = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one {
			${buttonOneBDShadowTab}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
			${buttonOneBDShadowHoverTab}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {

		}
	`;
    const buttonOneStyleMobile = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one {
			${buttonOneBDShadowMobile}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
			${buttonOneBDShadowHoverMobile}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {

		}
	`;

    // Buttons Two styles css in strings ⬇
    const buttonTwoStyleDesktop = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two {
			${buttonTwoBDShadowDesktop}
			${buttonGapDesktop}
			transition:${buttonTwoBDShadowtransitionStyle};
			${btnTwoBg}
			transition: ${btnOneBgTransition.replace(/[^0-9.]/g, "")}s;
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two:hover,
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two:focus {
			${buttonTwoBDShadowHoverDesktop}
			${btnTwoHoverBg}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {
			color: ${textTwoColor};
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two:hover .eb-button-two-text {
			color: ${hoverTextTwoColor};
		}
	`;
    const buttonTwoStyleTab = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two {
			${buttonTwoBDShadowTab}
			${buttonGapTab}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
			${buttonTwoBDShadowHoverTab}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {

		}
	`;
    const buttonTwoStyleMobile = `
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two {
			${buttonTwoBDShadowMobile}
			${buttonGapMobile}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
			${buttonTwoBDShadowHoverMobile}
		}
		.eb-button-group-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {

		}
	`;

    // Connector styles css in strings ⬇
    const connectorStylesDesktop = `
		.eb-button-group-wrapper.${blockId} .eb-button-group__midldeInner span {
			${connectorType === "text"
            ? connectorTypoStylesDesktop
            : buttonConnectorIconSizeDesktop
        }
			${buttonConnectorHeightDesktop}
			${buttonConnectorWidthDesktop}
			${buttonConnectorLineHeightDesktop}
			background: ${innerButtonColor};
			color: ${innerButtonTextColor};
		}
	`;

    const connectorStylesTab = `
		.eb-button-group-wrapper.${blockId} .eb-button-group__midldeInner span {
			${connectorType === "text"
            ? connectorTypoStylesTab
            : buttonConnectorIconSizeTab
        }
			${buttonConnectorHeightTab}
			${buttonConnectorWidthTab}
			${buttonConnectorLineHeightTab}
		}
	`;

    const connectorStylesMobile = `
		.eb-button-group-wrapper.${blockId} .eb-button-group__midldeInner span {
			${connectorType === "text"
            ? connectorTypoStylesMobile
            : buttonConnectorIconSizeMobile
        }
			${buttonConnectorHeightMobile}
			${buttonConnectorWidthMobile}
			${buttonConnectorLineHeightMobile}
		}
	`;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
			${wrapperStylesDesktop}
			${buttonsCommonStyleDesktop}
			${buttonOneStyleDesktop}
			${buttonTwoStyleDesktop}
			${connectorStylesDesktop}
			${buttonStylesCss}
			${buttonIconsCss("desktop")}
		`);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
			${wrapperStylesTab}
			${buttonsCommonStyleTab}
			${buttonOneStyleTab}
			${buttonTwoStyleTab}
			${connectorStylesTab}
			${buttonIconsCss("tab")}
		`);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
			${wrapperStylesMobile}
			${buttonsCommonStyleMobile}
			${buttonOneStyleMobile}
			${buttonTwoStyleMobile}
			${connectorStylesMobile}
			${buttonIconsCss("mobile")}
		`);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}

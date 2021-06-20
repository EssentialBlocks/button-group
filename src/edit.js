/**
 * WordPress dependencies
*/
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings, RichText, useBlockProps } = wp.blockEditor;
const { useEffect } = wp.element;
const { select } = wp.data;

/**
  * Internal depencencies
*/
import Inspector from "./inspector";
import "./editor.scss";
import {
	BUTTON_STYLES,
	NORMAL_HOVER,
	UNIT_TYPES,
	BUTTON_ONE_BORDER_SHADOW,
	BUTTON_TWO_BORDER_SHADOW,
	WRAPPER_MARGIN,
	BUTTONS_PADDING,
	BUTTONS_WIDTH,
	BUTTONS_GAP,
	CONNECTOR_TYPE,
	PRESETS,
	BUTTONS_CONNECTOR_SIZE,
} from "./constants/constants";
import { BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY } from "./constants/typographyPrefixConstants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBackgroundControlStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		preset,
		buttonTextOne,
		buttonTextTwo,
		buttonOneColor,
		hoverButtonOneColor,
		textOneColor,
		hoverTextOneColor,
		buttonTwoColor,
		hoverButtonTwoColor,
		textTwoColor,
		hoverTextTwoColor,
		innerButtonText,
		innerButtonSize,
		innerButtonColor,
		innerButtonTextColor,
		isShowIcon,
		innerButtonIcon,
		isShowText,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});

	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-duel-button";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

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
		rangeStylesDesktop: buttonGapStyleDesktop,
		rangeStylesTab: buttonGapStyleTab,
		rangeStylesMobile: buttonGapStyleMobile,
	} = generateResponsiveRangeStyles({
		controlName: BUTTONS_GAP,
		property: "margin-right",
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

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
		.eb-duel-button-wrapper.${blockId}{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			position: relative;
			${wrapperMarginStylesDesktop}
		}
	`;

	const wrapperStylesTab = `
		.eb-duel-button-wrapper.${blockId}{
			${wrapperMarginStylesTab}

		}
	`;

	const wrapperStylesMobile = `
		.eb-duel-button-wrapper.${blockId}{
			${wrapperMarginStylesMobile}

		}
	`;

	// Buttons Common styles css in strings ⬇
	const buttonsCommonStyleDesktop = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent {
			${buttonsTypoStylesDesktop}
			${buttonsPaddingStylesDesktop}
			${buttonWidthStyleDesktop}
			text-align: center
			cursor: pointer
		}
	`;

	const buttonsCommonStyleTab = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent {
			${buttonsTypoStylesTab}
			${buttonsPaddingStylesTab}
			${buttonWidthStyleTab}
		}
	`;

	const buttonsCommonStyleMobile = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent {
			${buttonsTypoStylesMobile}
			${buttonsPaddingStylesMobile}
			${buttonWidthStyleMobile}
		}
	`;

	// Buttons One styles css in strings ⬇
	const buttonOneStyleDesktop = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one {
			${buttonOneBDShadowDesktop}
			${buttonGapStyleDesktop}
			background-color: ${buttonOneColor};
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
			${buttonOneBDShadowHoverDesktop}
			background-color: ${hoverButtonOneColor};
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {
			color: ${textOneColor};
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one:hover .eb-button-one-text {
			color: ${hoverTextOneColor};
		}
	`;
	const buttonOneStyleTab = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one {
			${buttonOneBDShadowTab}
			${buttonGapStyleTab}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
			${buttonOneBDShadowHoverTab}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {

		}
	`;
	const buttonOneStyleMobile = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one {
			${buttonOneBDShadowMobile}
			${buttonGapStyleMobile}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one:hover {
			${buttonOneBDShadowHoverMobile}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-one .eb-button-one-text {

		}
	`;

	// Buttons Two styles css in strings ⬇
	const buttonTwoStyleDesktop = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two {
			${buttonTwoBDShadowDesktop}
			${buttonGapStyleDesktop}
			background-color: ${buttonTwoColor};
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
			${buttonTwoBDShadowHoverDesktop}
			background-color: ${hoverButtonTwoColor};
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {
			color: ${textTwoColor};
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two:hover .eb-button-two-text {
			color: ${hoverTextTwoColor};
		}
	`;
	const buttonTwoStyleTab = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two {
			${buttonTwoBDShadowTab}
			${buttonGapStyleTab}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
			${buttonTwoBDShadowHoverTab}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {

		}
	`;
	const buttonTwoStyleMobile = `
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two {
			${buttonTwoBDShadowMobile}
			${buttonGapStyleMobile}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two:hover {
			${buttonTwoBDShadowHoverMobile}
		}
		.eb-duel-button-wrapper.${blockId} .eb-button-parent.eb-button-two .eb-button-two-text {

		}
	`;

	// Connector styles css in strings ⬇
	const connectorStylesDesktop = `
		.eb-duel-button-wrapper.${blockId} .eb-dual-button__midldeInner {
			${connectorTypoStylesDesktop}
			${buttonConnectorHeightDesktop}
			${buttonConnectorWidthDesktop}
			background: ${innerButtonColor};
			color: ${innerButtonTextColor};
		}
	`;

	const connectorStylesTab = `
		.eb-duel-button-wrapper.${blockId} .eb-duel-button-text{
			${connectorTypoStylesTab}
		}
	`;

	const connectorStylesMobile = `
		.eb-duel-button-wrapper.${blockId} .eb-duel-button-text{
			${connectorTypoStylesMobile}
		}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
			${isCssExists(buttonsCommonStyleDesktop) ? buttonsCommonStyleDesktop : " "}
			${isCssExists(buttonOneStyleDesktop) ? buttonOneStyleDesktop : " "}
			${isCssExists(buttonTwoStyleDesktop) ? buttonTwoStyleDesktop : " "}
			${isCssExists(connectorStylesDesktop) ? connectorStylesDesktop : " "}
		`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
			${isCssExists(buttonsCommonStyleTab) ? buttonsCommonStyleTab : " "}
			${isCssExists(buttonOneStyleTab) ? buttonOneStyleTab : " "}
			${isCssExists(buttonTwoStyleTab) ? buttonTwoStyleTab : " "}
			${isCssExists(connectorStylesTab) ? connectorStylesTab : " "}
		`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
			${isCssExists(buttonsCommonStyleMobile) ? buttonsCommonStyleMobile : " "}
			${isCssExists(buttonOneStyleMobile) ? buttonOneStyleMobile : " "}
			${isCssExists(buttonTwoStyleMobile) ? buttonTwoStyleMobile : " "}
			${isCssExists(connectorStylesMobile) ? connectorStylesMobile : " "}
		`);

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	// const buttonStyles = {
	// 	margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${marginBottom || 0
	// 		}${marginUnit} ${marginLeft || 0}${marginUnit}`,
	// 	padding: `${paddingTop || 0}${paddingUnit} ${paddingRight || 0
	// 		}${paddingUnit} ${paddingBottom || 0}${paddingUnit} ${paddingLeft || 0
	// 		}${paddingUnit}`,
	// 	width: `${buttonWidth !== 0 && buttonWidth !== undefined
	// 			? `${buttonWidth}${widthUnit}`
	// 			: "auto"
	// 		}`,
	// 	font-family: buttonFontFamily ? buttonFontFamily : null,
	// 	font-weight: buttonFontWeight ? buttonFontWeight : "normal",
	// 	text-transform: buttonTextTransform ? buttonTextTransform : "none",
	// 	display: "inline-block",
	// 	border-width: `${borderWidth || 0}px`,
	// 	border-style: borderStyle,
	// 	font-size: `${buttonFontSize || 18}${buttonFontUnit}`,
	// 	letter-spacing: buttonLetterSpacing ? buttonLetterSpacing : 0,
	// 	text-align: "center",
	// 	cursor: "pointer",
	// };

	// const buttonStyleOne = {
	// 	...buttonStyles,
	// 	borderRadius: `${borderRadiusTopLeft || 5
	// 		}${borderRadiusUnit}  ${0}${borderRadiusUnit} ${0}${borderRadiusUnit} ${borderRadiusBottomLeft || 5
	// 		}${borderRadiusUnit}`,
	// 	borderColor:
	// 		isHoverOne && hoverBorderOneColor
	// 			? hoverBorderOneColor
	// 			: borderOneColor || "#7967ff",
	// 	background:
	// 		isHoverOne && hoverButtonOneColor
	// 			? hoverButtonOneColor
	// 			: buttonOneColor || "#7967ff",
	// 	color: textOneColor || "#fff",
	// 	marginRight: `${seperateButtonsSpace || 0}${seperateButtonsSpaceUnit}`,
	// };

	// const buttonStyleTwo = {
	// 	...buttonStyles,
	// 	borderRadius: `${0}${borderRadiusUnit}  ${borderRadiusTopRight || 5
	// 		}${borderRadiusUnit} ${borderRadiusBottomRight || 5
	// 		}${borderRadiusUnit} ${0}${borderRadiusUnit}`,
	// 	borderColor:
	// 		isHoverTwo && hoverBorderTwoColor
	// 			? hoverBorderTwoColor
	// 			: borderTwoColor || "#309bff",
	// 	background:
	// 		isHoverTwo && hoverButtonTwoColor
	// 			? hoverButtonTwoColor
	// 			: buttonTwoColor || "#309bff",
	// 	color: textTwoColor || "#fff",
	// };

	// const textStylesOne = {
	// 	color:
	// 		isHoverOne && hoverTextOneColor
	// 			? hoverTextOneColor
	// 			: textOneColor || "#ffffff",
	// };
	// const textStylesTwo = {
	// 	color:
	// 		isHoverTwo && hoverTextTwoColor
	// 			? hoverTextTwoColor
	// 			: textTwoColor || "#ffffff",
	// };

	// const buttonMiddleInnerStyles = {
	// 	width: `${innerButtonSize || 30}px`,
	// 	height: `${innerButtonSize || 30}px`,
	// 	background: `${innerButtonColor ? innerButtonColor : "#fff"}`,
	// 	color: `${innerButtonTextColor ? innerButtonTextColor : "#4a5059"}`,
	// 	fontSize: `${innerButtonTextSize || 14}px`,
	// 	textTransform: innerButtonTextTransform
	// 		? innerButtonTextTransform
	// 		: "uppercase",
	// 	letterSpacing: innerButtonLetterSpacing ? innerButtonLetterSpacing : 0,
	// };

	return [
		isSelected && <Inspector {...props} />,
		//Edit view here
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

			<div className={`eb-duel-button-wrapper ${blockId} ${preset}`} data-id={blockId}>
				<div
					className={"eb-button-parent eb-button-one"}
					// style={buttonStyleOne}
					onMouseEnter={() => setAttributes({ isHoverOne: true })}
					onMouseLeave={() => setAttributes({ isHoverOne: false })}
				>
					<RichText
						// style={textStylesOne}
						className={"eb-button-one-text"}
						placeholder="Add Text.."
						value={buttonTextOne}
						onChange={(newText) => setAttributes({ buttonTextOne: newText })}
						allowedFormats={["bold", "italic", "strikethrough"]}
					/>
				</div>
				<div
					className={"eb-button-parent eb-button-two"}
					// style={buttonStyleTwo}
					onMouseEnter={() => setAttributes({ isHoverTwo: true })}
					onMouseLeave={() => setAttributes({ isHoverTwo: false })}
				>
					<RichText
						// style={textStylesTwo}
						className={"eb-button-two-text"}
						placeholder="Add Text.."
						value={buttonTextTwo}
						onChange={(newText) => setAttributes({ buttonTextTwo: newText })}
						allowedFormats={["bold", "italic", "strikethrough"]}
					/>
				</div>
				{(isShowText || isShowIcon) && (
					<div
						className="eb-dual-button__midldeInner"
						// style={buttonMiddleInnerStyles}
					>
						{isShowIcon && (
							<span
								className={`${innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h"
									}`}
							/>
						)}

						{!isShowIcon && <span>{innerButtonText}</span>}
					</div>
				)}
			</div>
		</div>,
	];
};
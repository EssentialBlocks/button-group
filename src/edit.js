/**
 * WordPress dependencies
*/
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings, RichText, useBlockProps } = wp.blockEditor;
const { useEffect } = wp.element;

/**
  * Internal depencencies
*/
import Inspector from "./inspector";
import "./editor.scss";
import {
	BUTTON_STYLES,
	NORMAL_HOVER,
	UNIT_TYPES,
	BUTTON_BORDER_SHADOW,
	WRAPPER_MARGIN,
	BUTTONS_PADDING,
	BUTTONS_WIDTH,
	BUTTONS_GAP,
	CONNECTOR_TYPE,
	PRESETS,
} from "./constants/constants";
import { BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY } from "./constants/typographyPrefixConstants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBackgroundControlStyles,
	generateBorderShadowStyles,
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
		innerButtonText,
		isShowIcon,
		innerButtonIcon,
		isShowText,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-duel-button";
		const unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		// console.log({ all_blocks });

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						// console.log("found a duplicate");
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);

		// console.log({ blockId });
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
		styesDesktop: bdShadowStyesDesktop,
		styesTab: bdShadowStyesTab,
		styesMobile: bdShadowStyesMobile,
		stylesHoverDesktop: bdShadowStylesHoverDesktop,
		stylesHoverTab: bdShadowStylesHoverTab,
		stylesHoverMobile: bdShadowStylesHoverMobile,
	} = generateBorderShadowStyles({
		controlName: BUTTON_BORDER_SHADOW,
		attributes,
		noShadow: true,
	});

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
		.eb-duel-button-wrapper.${blockId}{
			
		}
	`;

	const wrapperStylesTab = `
		.eb-duel-button-wrapper.${blockId}{

		}
	`;

	const wrapperStylesMobile = `
		.eb-duel-button-wrapper.${blockId}{

		}
	`;

	// Buttons Common styles css in strings ⬇
	const buttonsCommonStyleDesktop = `
		.eb-duel-button-wrapper.${blockId} .eb-duel-button-title{
			${buttonsTypoStylesDesktop}
		}
		`;

	const buttonsCommonStyleTab = `
		.eb-duel-button-wrapper.${blockId} .eb-duel-button-title{
			${buttonsTypoStylesTab}
		}
		`;

	const buttonsCommonStyleMobile = `
		.eb-duel-button-wrapper.${blockId} .eb-duel-button-title{
			${buttonsTypoStylesMobile}
		}
		`;

	// Connector styles css in strings ⬇
	const connectorStylesDesktop = `
		.eb-duel-button-wrapper.${blockId} .eb-duel-button-text{
			${connectorTypoStylesDesktop}
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
			${isCssExists(buttonsCommonStyleDesktop) ? buttonsCommonStyleDesktop : " "}
			${isCssExists(connectorStylesDesktop) ? connectorStylesDesktop : " "}
		`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
			${isCssExists(buttonsCommonStyleTab) ? buttonsCommonStyleTab : " "}
			${isCssExists(connectorStylesTab) ? connectorStylesTab : " "}
		`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
			${isCssExists(buttonsCommonStyleMobile) ? buttonsCommonStyleMobile : " "}
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
					className={"eb-button-1"}
					// style={buttonStyleOne}
					onMouseEnter={() => setAttributes({ isHoverOne: true })}
					onMouseLeave={() => setAttributes({ isHoverOne: false })}
				>
					<RichText
						// style={textStylesOne}
						placeholder="Add Text.."
						value={buttonTextOne}
						onChange={(newText) => setAttributes({ buttonTextOne: newText })}
						allowedFormats={["bold", "italic", "strikethrough"]}
					/>
				</div>
				<div
					className={"eb-button-2"}
					// style={buttonStyleTwo}
					onMouseEnter={() => setAttributes({ isHoverTwo: true })}
					onMouseLeave={() => setAttributes({ isHoverTwo: false })}
				>
					<RichText
						// style={textStylesTwo}
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

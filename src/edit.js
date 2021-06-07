/**
 * Import WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

const Edit = (props) => {
	const { attributes, isSelected, setAttributes } = props;
	const {
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		borderWidth,
		borderOneColor,
		hoverBorderOneColor,
		borderTwoColor,
		hoverBorderTwoColor,
		borderStyle,
		borderRadiusTopLeft,
		borderRadiusTopRight,
		borderRadiusBottomRight,
		borderRadiusBottomLeft,
		buttonOneColor,
		textOneColor,
		hoverButtonOneColor,
		hoverTextOneColor,
		buttonTwoColor,
		textTwoColor,
		hoverButtonTwoColor,
		hoverTextTwoColor,
		buttonTextOne,
		buttonTextTwo,
		buttonFontSize,
		buttonAlign,
		marginUnit,
		paddingUnit,
		buttonFontUnit,
		borderRadiusUnit,
		isHoverOne,
		isHoverTwo,
		buttonWidth,
		widthUnit,
		seperateButtonsSpace,
		seperateButtonsSpaceUnit,
		innerButtonText,
		innerButtonSize,
		innerButtonColor,
		innerButtonTextColor,
		innerButtonTextSize,
		isShowIcon,
		innerButtonIcon,
		buttonFontFamily,
		buttonFontWeight,
		buttonTextTransform,
		innerButtonTextTransform,
		buttonLetterSpacing,
		innerButtonLetterSpacing,
		isShowText,
	} = attributes;

	const buttonStyles = {
		margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${
			marginBottom || 0
		}${marginUnit} ${marginLeft || 0}${marginUnit}`,
		padding: `${paddingTop || 0}${paddingUnit} ${
			paddingRight || 0
		}${paddingUnit} ${paddingBottom || 0}${paddingUnit} ${
			paddingLeft || 0
		}${paddingUnit}`,
		width: `${
			buttonWidth !== 0 && buttonWidth !== undefined
				? `${buttonWidth}${widthUnit}`
				: "auto"
		}`,
		fontFamily: buttonFontFamily ? buttonFontFamily : null,
		fontWeight: buttonFontWeight ? buttonFontWeight : "normal",
		textTransform: buttonTextTransform ? buttonTextTransform : "none",
		display: "inline-block",
		borderWidth: `${borderWidth || 0}px`,
		borderStyle: borderStyle,
		fontSize: `${buttonFontSize || 18}${buttonFontUnit}`,
		letterSpacing: buttonLetterSpacing ? buttonLetterSpacing : 0,
		textAlign: "center",
		cursor: "pointer",
	};

	const buttonStyleOne = {
		...buttonStyles,
		borderRadius: `${
			borderRadiusTopLeft || 5
		}${borderRadiusUnit}  ${0}${borderRadiusUnit} ${0}${borderRadiusUnit} ${
			borderRadiusBottomLeft || 5
		}${borderRadiusUnit}`,
		borderColor:
			isHoverOne && hoverBorderOneColor
				? hoverBorderOneColor
				: borderOneColor || "#7967ff",
		background:
			isHoverOne && hoverButtonOneColor
				? hoverButtonOneColor
				: buttonOneColor || "#7967ff",
		color: textOneColor || "#fff",
		marginRight: `${seperateButtonsSpace || 0}${seperateButtonsSpaceUnit}`,
	};

	const buttonStyleTwo = {
		...buttonStyles,
		borderRadius: `${0}${borderRadiusUnit}  ${
			borderRadiusTopRight || 5
		}${borderRadiusUnit} ${
			borderRadiusBottomRight || 5
		}${borderRadiusUnit} ${0}${borderRadiusUnit}`,
		borderColor:
			isHoverTwo && hoverBorderTwoColor
				? hoverBorderTwoColor
				: borderTwoColor || "#309bff",
		background:
			isHoverTwo && hoverButtonTwoColor
				? hoverButtonTwoColor
				: buttonTwoColor || "#309bff",
		color: textTwoColor || "#fff",
	};

	const textStylesOne = {
		color:
			isHoverOne && hoverTextOneColor
				? hoverTextOneColor
				: textOneColor || "#ffffff",
	};
	const textStylesTwo = {
		color:
			isHoverTwo && hoverTextTwoColor
				? hoverTextTwoColor
				: textTwoColor || "#ffffff",
	};

	const buttonMiddleInnerStyles = {
		width: `${innerButtonSize || 30}px`,
		height: `${innerButtonSize || 30}px`,
		background: `${innerButtonColor ? innerButtonColor : "#fff"}`,
		color: `${innerButtonTextColor ? innerButtonTextColor : "#4a5059"}`,
		fontSize: `${innerButtonTextSize || 14}px`,
		textTransform: innerButtonTextTransform
			? innerButtonTextTransform
			: "uppercase",
		letterSpacing: innerButtonLetterSpacing ? innerButtonLetterSpacing : 0,
	};

	return [
		isSelected && <Inspector {...props} />,
		<div className="eb-dual-button-wrapper">
			<div>
				<div
					style={buttonStyleOne}
					onMouseEnter={() => setAttributes({ isHoverOne: true })}
					onMouseLeave={() => setAttributes({ isHoverOne: false })}
				>
					<RichText 
						style={textStylesOne}
						placeholder="Add Text.."
						value={buttonTextOne}
						onChange={(newText) => setAttributes({ buttonTextOne: newText })}
						allowedFormats={["bold", "italic", "strikethrough"]}
					/>
				</div>
			</div>
			<div>
				<div
					style={buttonStyleTwo}
					onMouseEnter={() => setAttributes({ isHoverTwo: true })}
					onMouseLeave={() => setAttributes({ isHoverTwo: false })}
				>
					<RichText
						style={textStylesTwo}
						placeholder="Add Text.."
						value={buttonTextTwo}
						onChange={(newText) => setAttributes({ buttonTextTwo: newText })}
						allowedFormats={["bold", "italic", "strikethrough"]}
					/>
				</div>
			</div>
			{(isShowText || isShowIcon) && (
				<div
					className="eb-dual-button__midldeInner"
					style={buttonMiddleInnerStyles}
				>
					{isShowIcon && (
						<span
							className={`${
								innerButtonIcon ? innerButtonIcon : "fas fa-arrows-alt-h"
							}`}
						/>
					)}

					{!isShowIcon && <span>{innerButtonText}</span>}
				</div>
			)}
		</div>,
	];
};
export default Edit;

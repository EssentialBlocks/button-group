const { RichText } = wp.blockEditor;

const Save = ({ attributes }) => {
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
		buttonURLTwo,
		buttonURLOne,
		isShowText
	} = attributes;

	const buttonStyles = {
		margin: `${marginTop || 0}${marginUnit} ${marginRight ||
			0}${marginUnit} ${marginBottom || 0}${marginUnit} ${marginLeft ||
			0}${marginUnit}`,
		padding: `${paddingTop || 0}${paddingUnit} ${paddingRight ||
			0}${paddingUnit} ${paddingBottom || 0}${paddingUnit} ${paddingLeft ||
			0}${paddingUnit}`,
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
		cursor: "pointer"
	};

	const buttonStyleOne = {
		...buttonStyles,
		borderRadius: `${borderRadiusTopLeft ||
			5}${borderRadiusUnit}  ${0}${borderRadiusUnit} ${0}${borderRadiusUnit} ${borderRadiusBottomLeft ||
			5}${borderRadiusUnit}`,
		borderColor:
			isHoverOne && hoverBorderOneColor
				? hoverBorderOneColor
				: borderOneColor || "#7967ff",
		background:
			isHoverOne && hoverButtonOneColor
				? hoverButtonOneColor
				: buttonOneColor || "#7967ff",
		color:
			isHoverOne && hoverTextOneColor
				? hoverTextOneColor
				: textOneColor || "#fff",
		marginRight: `${seperateButtonsSpace || 0}${seperateButtonsSpaceUnit}`
	};

	const buttonStyleTwo = {
		...buttonStyles,
		borderRadius: `${0}${borderRadiusUnit}  ${borderRadiusTopRight ||
			5}${borderRadiusUnit} ${borderRadiusBottomRight ||
			5}${borderRadiusUnit} ${0}${borderRadiusUnit}`,
		borderColor:
			isHoverTwo && hoverBorderTwoColor
				? hoverBorderTwoColor
				: borderTwoColor || "#309bff",
		background:
			isHoverTwo && hoverButtonTwoColor
				? hoverButtonTwoColor
				: buttonTwoColor || "#309bff",
		color:
			isHoverTwo && hoverTextTwoColor
				? hoverTextTwoColor
				: textTwoColor || "#fff"
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
		letterSpacing: innerButtonLetterSpacing ? innerButtonLetterSpacing : 0
	};

	return (
		<div
			className="eb-dual-button-wrapper"
			data-button-one-color={buttonOneColor || "#7967ff"}
			data-button-two-color={buttonTwoColor || "#309bff"}
			data-text-one-color={textOneColor || "#ffffff"}
			data-text-two-color={textTwoColor || "#ffffff"}
			data-border-one-color={borderOneColor || "#7967ff"}
			data-border-two-color={borderTwoColor || "#309bff"}
			data-hover-button-one-color={hoverButtonOneColor || "#309bff"}
			data-hover-button-two-color={hoverButtonTwoColor || "#7967ff"}
			data-hover-text-one-color={hoverTextOneColor || "#ffffff"}
			data-hover-text-two-color={hoverTextTwoColor || "#ffffff"}
			data-hover-border-one-color={hoverBorderOneColor || "#309bff"}
			data-hover-border-two-color={hoverBorderTwoColor || "#7967ff"}
		>
			<a className="eb-dual-button-link" href={buttonURLOne}>
				<div
					className="eb-dual-button-one eb-dual-button"
					style={buttonStyleOne}
				>
					<RichText.Content
						className="eb-button-text-one"
						value={buttonTextOne}
					/>
				</div>
			</a>
			<a className="eb-dual-button-link-two" href={buttonURLTwo}>
				<div
					className="eb-dual-button-two eb-dual-button"
					style={buttonStyleTwo}
				>
					<RichText.Content
						className="eb-button-text-two"
						value={buttonTextTwo}
					/>
				</div>
			</a>
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
		</div>
	);
};

export default Save;

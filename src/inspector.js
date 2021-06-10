/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl,
	Dropdown, } = wp.components;
const { useEffect } = wp.element;

/**
 * Internal depencencies
 */
import {
	BORDER_STYLES,
	BUTTON_ONE_STYLES,
	BUTTON_TWO_STYLES,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	BORDER_TYPES,
	UNIT_TYPES,
	BUTTON_BORDER_SHADOW,
	BUTTON_ONE_BG,
	BUTTON_TWO_BG,
	WRAPPER_MARGIN,
	BUTTONS_MARGIN,
	BUTTONS_PADDING,
	BUTTONS_WIDTH,
	BUTTONS_GAP,
	BUTTONS_CONNECTOR_SIZE,
	CONNECTOR_TYPE
} from "./constants/constants";
import {BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY} from "./constants/typographyPrefixConstants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconList from "../util/faIcons";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";
import FontPicker from "../util/typography-control/FontPicker";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";
// import BackgroundControl from "../util/background-control";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resOption,
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
		buttonFontSize,
		buttonAlign,
		selectButtonStyleOne,
		selectButtonStyleTwo,
		buttonStyleTwo,
		marginUnit,
		paddingUnit,
		buttonFontUnit,
		borderRadiusUnit,
		buttonWidth,
		widthUnit,
		seperateButtonsSpace,
		seperateButtonsSpaceUnit,
		buttonTextOne,
		buttonURLOne,
		buttonTextTwo,
		buttonURLTwo,
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
		borderType,
		connectorType,
	} = attributes;

	const hasConnector = isShowText || isShowIcon;

	const handleButtonOneStyles = (style) => {
		switch (style) {
			case "fill":
				setAttributes({
					buttonOneColor: "#2196f3",
					textOneColor: "white",
					hoverButtonOneColor: "#1976d2",
					hoverTextOneColor: "white",
					borderOneColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
					borderRightWidth: "0px",
				});
				break;
			case "outline":
				setAttributes({
					buttonOneColor: "transparent",
					textOneColor: "#0f94f6",
					hoverButtonOneColor: "#e10050",
					hoverTextOneColor: "white",
					borderOneColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
				});
				break;

			case "text":
				setAttributes({
					buttonOneColor: "white",
					textOneColor: "#0f94f6",
					hoverButtonOneColor: "#4CAF50",
					hoverTextOneColor: "white",
					borderOneColor: "transparent",
					borderWidth: 0,
					borderStyle: "none",
				});
				break;
		}
		setAttributes({ selectButtonStyleOne: style });
	};

	const handleButtonTwoStyles = (style) => {
		switch (style) {
			case "fill":
				setAttributes({
					buttonTwoColor: "#2196f3",
					textTwoColor: "white",
					hoverButtonTwoColor: "#1976d2",
					hoverTextTwoColor: "white",
					borderTwoColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
				});
				break;
			case "outline":
				setAttributes({
					buttonTwoColor: "transparent",
					textTwoColor: "#0f94f6",
					hoverButtonTwoColor: "#e10050",
					hoverTextTwoColor: "white",
					borderTwoColor: "#0f94f6",
					borderWidth: 2,
					borderStyle: "solid",
				});
				break;

			case "text":
				setAttributes({
					buttonTwoColor: "white",
					textTwoColor: "#0f94f6",
					hoverButtonTwoColor: "#4CAF50",
					hoverTextTwoColor: "white",
					borderTwoColor: "transparent",
					borderWidth: 0,
					borderStyle: "none",
				});
				break;
		}
		setAttributes({ selectButtonStyleTwo: style });
	};

	const changeAllBorderRadius = (newValue) => {
		setAttributes({
			borderRadiusTopLeft: newValue,
			borderRadiusTopRight: newValue,
			borderRadiusBottomRight: newValue,
			borderRadiusBottomLeft: newValue,
		});
	}

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		const bodyClasses = document.body.className;
		// console.log("----log from inspector useEffect with empty []", {
		// 	bodyClasses,
		// });

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

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		const allEbBlocksWrapper = document.querySelectorAll(
			".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
		);
		// console.log("---inspector", { allEbBlocksWrapper });
		if (allEbBlocksWrapper.length < 1) return;
		allEbBlocksWrapper.forEach((styleTag) => {
			const cssStrings = styleTag.textContent;
			const minCss = cssStrings.replace(/\s+/g, " ");
			const regexCssMimmikSpace =
				/(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
			let newCssStrings = " ";
			if (resOption === "tab") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];
				// console.log({ tabCssStrings });
				newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
			} else if (resOption === "mobile") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];

				const mobCssStrings = (minCss.match(
					/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
				) || [" "])[0];

				// console.log({ tabCssStrings, mobCssStrings });

				newCssStrings = minCss.replace(
					regexCssMimmikSpace,
					`${tabCssStrings} ${mobCssStrings}`
				);
			} else {
				newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
			}
			styleTag.textContent = newCssStrings;
		});
	}, [resOption]);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<PanelBody title={__("General Settings")} initialOpen={false}>
					<TextControl
						label={__("Button One Text")}
						value={buttonTextOne}
						onChange={(text) => setAttributes({ buttonTextOne: text })}
					/>
					<TextControl
						label={__("Button One Link")}
						value={buttonURLOne}
						onChange={(link) => setAttributes({ buttonURLOne: link })}
					/>

					<TextControl
						label={__("Button Two Text")}
						value={buttonTextTwo}
						onChange={(text) => setAttributes({ buttonTextTwo: text })}
					/>
					<TextControl
						label={__("Button Two Link")}
						value={buttonURLTwo}
						onChange={(link) => setAttributes({ buttonURLTwo: link })}
					/>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={WRAPPER_MARGIN}
						baseLabel="Margin"
					/>
				</PanelBody>

				<PanelBody title={__("Buttons Settings")} initialOpen={false}>
					<SelectControl
						label={__("Button One Styles")}
						value={selectButtonStyleOne}
						options={BUTTON_ONE_STYLES}
						onChange={(style) => handleButtonOneStyles(style)}
					/>

					<SelectControl
						label={__("Button Two Styles")}
						value={selectButtonStyleTwo}
						options={BUTTON_TWO_STYLES}
						onChange={(style) => handleButtonTwoStyles(style)}
					/>

					<ResponsiveRangeController
						baseLabel={__("Buttons Width", "button-group")}
						controlName={BUTTONS_WIDTH}
						resRequiredProps={resRequiredProps}
						units={UNIT_TYPES}
						min={100}
						max={600}
						step={1}
					/>

					<ResponsiveRangeController
						baseLabel={__("Buttons Gap", "button-group")}
						controlName={BUTTONS_GAP}
						resRequiredProps={resRequiredProps}
						units={UNIT_TYPES}
						min={100}
						max={600}
						step={1}
					/>

					<TypographyDropdown
						baseLabel={__("Typography", "button-group")}
						typographyPrefixConstant={BUTTONS_TYPOGRAPHY}
						resRequiredProps={resRequiredProps}
					/>
				</PanelBody>

				<PanelBody title={__("Connector Settings")} initialOpen={false}>
					<BaseControl label={__("Connector Type")}>
						<ButtonGroup id="eb-duel-button-connector-type">
							{CONNECTOR_TYPE.map((item) => (
								<Button
									isLarge
									isPrimary={connectorType === item.value}
									isSecondary={connectorType !== item.value}
									onClick={() =>
										setAttributes({
											connectorType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{connectorType === "icon" && (
						<PanelBody title={__("Icon Settings")} initialOpen={true}>
							<BaseControl label={__("Icon")}>
								<FontIconPicker
									icons={iconList}
									value={innerButtonIcon}
									onChange={(icon) => setAttributes({ innerButtonIcon: icon })}
									appendTo="body"
								/>
							</BaseControl>
						</PanelBody>
					)}

					{connectorType === "text" && (
						<TextControl
							label={__("Text")}
							value={innerButtonText}
							onChange={(text) => setAttributes({ innerButtonText: text })}
						/>
					)}

					{hasConnector && (
						<RangeControl
							label={__("Button Size")}
							value={innerButtonSize || 40}
							allowReset
							onChange={(newSize) =>
								setAttributes({
									innerButtonSize: newSize,
								})
							}
						/>
					)}

					{hasConnector && (
						<TypographyDropdown
							baseLabel={__("Typography", "button-group")}
							typographyPrefixConstant={BUTTONS_CONNECTOR_TYPOGRAPHY}
							resRequiredProps={resRequiredProps}
						/>
					)}

					{hasConnector && (
						<>
							<ColorControl
								label={__("Background Color")}
								color={innerButtonColor}
								onChange={(innerButtonColor) =>
									setAttributes({ innerButtonColor })
								}
							/>

							<ColorControl
								label={__("Icon Color")}
								color={innerButtonTextColor}
								onChange={(innerButtonTextColor) =>
									setAttributes({ innerButtonTextColor })
								}
							/>
						</>
					)}
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label="Margin"
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) => {
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							});
						}}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label="Padding"
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) => {
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							});
						}}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__("Button One Colors")}
					initialOpen={false}
					colorSettings={[
						{
							value: buttonOneColor,
							onChange: (newColor) =>
								setAttributes({ buttonOneColor: newColor }),
							label: __("Button Color"),
						},
						{
							value: textOneColor,
							onChange: (newColor) => setAttributes({ textOneColor: newColor }),
							label: __("Text Color"),
						},
						{
							value: hoverButtonOneColor,
							onChange: (newColor) =>
								setAttributes({
									hoverButtonOneColor: newColor,
								}),
							label: __("Hover Button Color"),
						},
						{
							value: hoverTextOneColor,
							onChange: (newColor) =>
								setAttributes({
									hoverTextOneColor: newColor,
								}),
							label: __("Hover Text Color"),
						},
					]}
				/>

				<PanelColorSettings
					title={__("Button Two Colors")}
					initialOpen={false}
					colorSettings={[
						{
							value: buttonTwoColor,
							onChange: (newColor) =>
								setAttributes({ buttonTwoColor: newColor }),
							label: __("Button Color"),
						},
						{
							value: textTwoColor,
							onChange: (newColor) => setAttributes({ textTwoColor: newColor }),
							label: __("Text Color"),
						},
						{
							value: hoverButtonTwoColor,
							onChange: (newColor) =>
								setAttributes({
									hoverButtonTwoColor: newColor,
								}),
							label: __("Hover Button Color"),
						},
						{
							value: hoverTextTwoColor,
							onChange: (newColor) =>
								setAttributes({
									hoverTextTwoColor: newColor,
								}),
							label: __("Hover Text Color"),
						},
					]}
				/>

				<PanelBody title={__("Border Settings")} initialOpen={false}>
					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(newStyle) => setAttributes({ borderStyle: newStyle })}
					/>

					<RangeControl
						label={__("Border Width")}
						value={borderWidth || 0}
						allowReset
						onChange={(newValue) => setAttributes({ borderWidth: newValue })}
						min={0}
						max={20}
					/>

					<ButtonGroup className="eb-inspector-btn-group">
						{BORDER_TYPES.map((item) => (
							<Button
								isLarge
								isPrimary={borderType === item.value}
								isSecondary={borderType !== item.value}
								onClick={() => setAttributes({ borderType: item.value })}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>

					{borderType === "normal" && (
						<>
							<ColorControl
								label={__("Button One Border Color")}
								color={borderOneColor}
								onChange={(borderOneColor) => setAttributes({ borderOneColor })}
							/>

							<ColorControl
								label={__("Button Two Border Color ")}
								color={borderTwoColor}
								onChange={(borderTwoColor) => setAttributes({ borderTwoColor })}
							/>
						</>
					)}

					{borderType === "hover" && (
						<>
							<ColorControl
								label={__("Button One Hover Color")}
								color={hoverBorderOneColor}
								onChange={(hoverBorderOneColor) =>
									setAttributes({ hoverBorderOneColor })
								}
							/>

							<ColorControl
								label={__("Button Two Hover Color")}
								color={hoverBorderTwoColor}
								onChange={(hoverBorderTwoColor) =>
									setAttributes({ hoverBorderTwoColor })
								}
							/>
						</>
					)}

					<UnitControl
						selectedUnit={borderRadiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(borderRadiusUnit) => setAttributes({ borderRadiusUnit })}
					/>

					<DimensionsControl
						label={__("Border Radius")}
						top={borderRadiusTopLeft}
						right={borderRadiusTopRight}
						bottom={borderRadiusBottomRight}
						left={borderRadiusBottomLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								borderRadiusTopLeft: top,
								borderRadiusTopRight: right,
								borderRadiusBottomRight: bottom,
								borderRadiusBottomLeft: left,
							})
						}
					/>
				</PanelBody>
			</div>
		</InspectorControls>
	);
}

export default Inspector;

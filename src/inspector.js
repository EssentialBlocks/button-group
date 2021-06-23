/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { 
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl 
} = wp.components;
const { useEffect } = wp.element;
const { select } = wp.data;

/**
 * Internal depencencies
 */
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
	TEXT_ALIGN,
	CONTENT_POSITION,
} from "./constants/constants";
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";
import {BUTTONS_TYPOGRAPHY, BUTTONS_CONNECTOR_TYPOGRAPHY} from "./constants/typographyPrefixConstants";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconList from "../util/faIcons";
import ColorControl from "../util/color-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resOption,
		preset,
		contentPosition,
		buttonOneColor,
		textOneColor,
		hoverButtonOneColor,
		hoverTextOneColor,
		buttonTwoColor,
		textTwoColor,
		hoverButtonTwoColor,
		hoverTextTwoColor,
		selectButtonStyleOne,
		selectButtonStyleTwo,
		buttonTextOne,
		buttonURLOne,
		buttonTextTwo,
		buttonURLTwo,
		innerButtonText,
		innerButtonColor,
		innerButtonTextColor,
		isShowIcon,
		innerButtonIcon,
		isShowText,
		showConnector,
		connectorType,
		buttonsColorType,
		buttonTextAlign,
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
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	const changePreset = (selected) => {
		setAttributes({ preset: selected });
		switch(selected) {
			case 'button-1':
				setAttributes({
					showConnector: "true",
					buttonOneBorderShadowRds_Top: 20,
					buttonOneBorderShadowRds_Bottom: 0,
					buttonOneBorderShadowRds_Left: 20,
					buttonOneBorderShadowRds_Right: 0,
					buttonTwoBorderShadowRds_Top: 0,
					buttonTwoBorderShadowRds_Bottom: 20,
					buttonTwoBorderShadowRds_Left: 0,
					buttonTwoBorderShadowRds_Right: 20,
					buttonsGapRange: 0,
				});
				break;
			case 'button-2':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "30",
					buttonOneBorderShadowRds_Bottom: "30",
					buttonOneBorderShadowRds_Left: "30",
					buttonOneBorderShadowRds_Right: "30",
					buttonTwoBorderShadowRds_Top: "30",
					buttonTwoBorderShadowRds_Bottom: "30",
					buttonTwoBorderShadowRds_Left: "30",
					buttonTwoBorderShadowRds_Right: "30",
					buttonsGapRange: 20,
				});
				break;
			case 'button-3':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "0",
					buttonOneBorderShadowRds_Bottom: "0",
					buttonOneBorderShadowRds_Left: "15",
					buttonOneBorderShadowRds_Right: "15",
					buttonTwoBorderShadowRds_Top: "15",
					buttonTwoBorderShadowRds_Bottom: "15",
					buttonTwoBorderShadowRds_Left: "0",
					buttonTwoBorderShadowRds_Right: "0",
					buttonsGapRange: 20,
				});
				break;
			case 'button-4':
				setAttributes({
					showConnector: false,
					buttonOneBorderShadowRds_Top: "30",
					buttonOneBorderShadowRds_Bottom: "30",
					buttonOneBorderShadowRds_Left: "30",
					buttonOneBorderShadowRds_Right: "30",
					buttonTwoBorderShadowRds_Top: "30",
					buttonTwoBorderShadowRds_Bottom: "30",
					buttonTwoBorderShadowRds_Left: "30",
					buttonTwoBorderShadowRds_Right: "30",
					buttonsGapRange: 10,
				});
				break;
			default:
			  return false;
		}
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<PanelBody title={__("General Settings")} initialOpen={true}>
					<SelectControl
						label={__("Preset Designs")}
						value={preset}
						options={PRESETS}
						onChange={(selected) => changePreset(selected)}
					/>
					<BaseControl label={__("Alignment")} id="eb-duel-button-alignment">
						<ButtonGroup id="eb-duel-button-alignment">
							{CONTENT_POSITION.map((item) => (
								<Button
									isLarge
									isPrimary={contentPosition === item.value}
									isSecondary={contentPosition !== item.value}
									onClick={() =>
										setAttributes({
											contentPosition: item.value,
										})
									}
								>
									<span dangerouslySetInnerHTML={{ __html: item.label }} />
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
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

				<PanelBody title={__("Button Settings")} initialOpen={false}>
					<SelectControl
						label={__("Button One Styles")}
						value={selectButtonStyleOne}
						options={BUTTON_STYLES}
						onChange={(style) => handleButtonOneStyles(style)}
					/>

					<SelectControl
						label={__("Button Two Styles")}
						value={selectButtonStyleTwo}
						options={BUTTON_STYLES}
						onChange={(style) => handleButtonTwoStyles(style)}
					/>

					<ResponsiveRangeController
						baseLabel={__("Buttons Width", "duel-button")}
						controlName={BUTTONS_WIDTH}
						resRequiredProps={resRequiredProps}
						units={UNIT_TYPES}
						min={50}
						max={500}
						step={1}
					/>

					<ResponsiveRangeController
						baseLabel={__("Buttons Gap", "duel-button")}
						controlName={BUTTONS_GAP}
						resRequiredProps={resRequiredProps}
						units={UNIT_TYPES}
						min={0}
						max={100}
						step={1}
					/>

					<BaseControl label={__("Text Align")} id="eb-duel-button-text-align">
						<ButtonGroup id="eb-duel-button-text-align">
							{TEXT_ALIGN.map((item) => (
								<Button
									isLarge
									isPrimary={buttonTextAlign === item.value}
									isSecondary={buttonTextAlign !== item.value}
									onClick={() =>
										setAttributes({
											buttonTextAlign: item.value,
										})
									}
								>
									<span dangerouslySetInnerHTML={{ __html: item.label }} />
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<TypographyDropdown
						baseLabel={__("Typography", "duel-button")}
						typographyPrefixConstant={BUTTONS_TYPOGRAPHY}
						resRequiredProps={resRequiredProps}
					/>

					<ButtonGroup className="eb-inspector-btn-group">
						{NORMAL_HOVER.map((item) => (
							<Button
								isLarge
								isPrimary={buttonsColorType === item.value}
								isSecondary={buttonsColorType !== item.value}
								onClick={() => setAttributes({ buttonsColorType: item.value })}
							>
								{item.label}
							</Button>
						))}
					</ButtonGroup>

					{buttonsColorType === "normal" && (
						<PanelColorSettings
							className={"eb-subpanel"}
							title={__("Normal Colors")}
							initialOpen={true}
							colorSettings={[
								{
									value: buttonOneColor,
									onChange: (newColor) =>
										setAttributes({ buttonOneColor: newColor }),
									label: __("Button One Color"),
								},
								{
									value: textOneColor,
									onChange: (newColor) => setAttributes({ textOneColor: newColor }),
									label: __("Button One Text Color"),
								},
								{
									value: buttonTwoColor,
									onChange: (newColor) =>
										setAttributes({
											buttonTwoColor: newColor,
										}),
									label: __("Button Two Color"),
								},
								{
									value: textTwoColor,
									onChange: (newColor) =>
										setAttributes({
											textTwoColor: newColor,
										}),
									label: __("Button Two Text Color"),
								},
							]}
						/>
					)}

					{buttonsColorType === "hover" && (
						<PanelColorSettings
							className={"eb-subpanel"}
							title={__("Hover Colors")}
							initialOpen={true}
							colorSettings={[
								{
									value: hoverButtonOneColor,
									onChange: (newColor) =>
										setAttributes({ hoverButtonOneColor: newColor }),
									label: __("Button One Color"),
								},
								{
									value: hoverTextOneColor,
									onChange: (newColor) => setAttributes({ hoverTextOneColor: newColor }),
									label: __("Button One Text Color"),
								},
								{
									value: hoverButtonTwoColor,
									onChange: (newColor) =>
										setAttributes({
											hoverButtonTwoColor: newColor,
										}),
									label: __("Button Two Color"),
								},
								{
									value: hoverTextTwoColor,
									onChange: (newColor) =>
										setAttributes({
											hoverTextTwoColor: newColor,
										}),
									label: __("Button Two Text Color"),
								},
							]}
						/>
					)}

					<PanelBody className={"eb-subpanel"} title={__("Button One Border")} initialOpen={true}>
						<BorderShadowControl
							controlName={BUTTON_ONE_BORDER_SHADOW}
							resRequiredProps={resRequiredProps}
							noShadow
						/>
					</PanelBody>

					<PanelBody className={"eb-subpanel"} title={__("Button Two Border")} initialOpen={true}>
						<BorderShadowControl
							controlName={BUTTON_TWO_BORDER_SHADOW}
							resRequiredProps={resRequiredProps}
							noShadow
						/>
					</PanelBody>

					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						controlName={BUTTONS_PADDING}
						baseLabel="Padding"
					/>
					
				</PanelBody>

				<PanelBody title={__("Connector Settings")} initialOpen={false}>
					<ToggleControl
						label={__("Show Connector?")}
						checked={showConnector}
						onChange={() => {
							setAttributes({ showConnector: !showConnector });
						}}
					/>
					{showConnector && (
						<>
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
								<ResponsiveRangeController
									baseLabel={__("Connector Size", "duel-button")}
									controlName={BUTTONS_CONNECTOR_SIZE}
									resRequiredProps={resRequiredProps}
									units={UNIT_TYPES}
									min={0}
									max={100}
									step={1}
								/>
							)}

							{hasConnector && (
								<TypographyDropdown
									baseLabel={__("Typography", "duel-button")}
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
										label={__("Text/ Icon Color")}
										color={innerButtonTextColor}
										onChange={(innerButtonTextColor) =>
											setAttributes({ innerButtonTextColor })
										}
									/>
								</>
							)}
						</>
					)}
					
				</PanelBody>
			</div>
		</InspectorControls>
	);
}

export default Inspector;

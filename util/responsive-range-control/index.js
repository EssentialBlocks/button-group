import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import UnitControl from "./unit-control";
import WithResBtns from "./responsive-btn";

const ResponsiveRangeController = ({
  baseLabel,
  controlName,
  resRequiredProps,
  units,
  min,
  max,
  step,
}) => {
  const { attributes, setAttributes, resOption } = resRequiredProps;

  const {
    [`${controlName}Range`]: desktopRange,
    [`${controlName}Unit`]: desktopSizeUnit,
    [`TAB${controlName}Range`]: TABrange,
    [`TAB${controlName}Unit`]: TABsizeUnit,
    [`MOB${controlName}Range`]: MOBrange,
    [`MOB${controlName}Unit`]: MOBsizeUnit,
  } = attributes;

  const UNITS = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
  ];

  return (
    <>
      {resOption == "desktop" && (
        <>
          <UnitControl
            selectedUnit={desktopSizeUnit}
            unitTypes={units || UNITS}
            onClick={(desktopSizeUnit) =>
              setAttributes({ [`${controlName}Unit`]: desktopSizeUnit })
            }
          />
          <WithResBtns
            label={baseLabel}
            resRequiredProps={resRequiredProps}
            controlName={controlName}
          >
            <RangeControl
              value={desktopRange}
              onChange={(desktopRange) =>
                setAttributes({
                  [`${controlName}Range`]: desktopRange,
                })
              }
              step={
                desktopSizeUnit === "em"
                  ? 0.1
                  : desktopSizeUnit === "%"
                  ? 1
                  : step
              }
              min={
                desktopSizeUnit === "em" ? 0 : desktopSizeUnit === "%" ? 0 : min
              }
              max={
                desktopSizeUnit === "em"
                  ? 10
                  : desktopSizeUnit === "%"
                  ? 100
                  : max
              }
            />
          </WithResBtns>
        </>
      )}
      {resOption == "tab" && (
        <>
          <UnitControl
            selectedUnit={TABsizeUnit}
            unitTypes={units || UNITS}
            onClick={(TABsizeUnit) =>
              setAttributes({ [`TAB${controlName}Unit`]: TABsizeUnit })
            }
          />
          <WithResBtns
            label={baseLabel}
            resRequiredProps={resRequiredProps}
            controlName={controlName}
          >
            <RangeControl
              value={TABrange}
              onChange={(TABrange) =>
                setAttributes({
                  [`TAB${controlName}Range`]: TABrange,
                })
              }
              step={TABsizeUnit === "em" ? 0.1 : TABsizeUnit === "%" ? 1 : step}
              min={TABsizeUnit === "em" ? 0 : TABsizeUnit === "%" ? 0 : min}
              max={TABsizeUnit === "em" ? 10 : TABsizeUnit === "%" ? 100 : max}
            />
          </WithResBtns>
        </>
      )}
      {resOption == "mobile" && (
        <>
          <UnitControl
            selectedUnit={MOBsizeUnit}
            unitTypes={units || UNITS}
            onClick={(MOBsizeUnit) =>
              setAttributes({ [`MOB${controlName}Unit`]: MOBsizeUnit })
            }
          />
          <WithResBtns
            label={baseLabel}
            resRequiredProps={resRequiredProps}
            controlName={controlName}
          >
            <RangeControl
              value={MOBrange}
              onChange={(MOBrange) =>
                setAttributes({
                  [`MOB${controlName}Range`]: MOBrange,
                })
              }
              step={MOBsizeUnit === "em" ? 0.1 : MOBsizeUnit === "%" ? 1 : step}
              min={MOBsizeUnit === "em" ? 0 : MOBsizeUnit === "%" ? 0 : min}
              max={MOBsizeUnit === "em" ? 10 : MOBsizeUnit === "%" ? 100 : max}
            />
          </WithResBtns>
        </>
      )}
    </>
  );
};

export default ResponsiveRangeController;

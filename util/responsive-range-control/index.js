const { __ } = wp.i18n;
const { RangeControl } = wp.components;

import WithResBtns from "./responsive-btn";
import UnitControl from "../unit-control";

const ResponsiveRangeController = ({
  baseLabel,
  controlName,
  resRequiredProps,
  units,
  min,
  max,
  step,
  noUnits,
}) => {
  const { attributes, setAttributes, resOption } = resRequiredProps;

  let desktopSizeUnit;
  let TABsizeUnit;
  let MOBsizeUnit;
  let defaultUnits;

  const {
    [`${controlName}Range`]: desktopRange,
    [`TAB${controlName}Range`]: TABrange,
    [`MOB${controlName}Range`]: MOBrange,
  } = attributes;

  if (!noUnits) {
    desktopSizeUnit = attributes[`${controlName}Unit`];
    TABsizeUnit = attributes[`TAB${controlName}Unit`];
    MOBsizeUnit = attributes[`MOB${controlName}Unit`];
    defaultUnits = [
      { label: "px", value: "px" },
      { label: "em", value: "em" },
      { label: "%", value: "%" },
    ];
  }

  return (
    <>
      {noUnits ? (
        <>
          {
            // console.log("====---- noUnits aase")
          }
          {resOption == "Desktop" && (
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
                step={step || 1}
                min={min || 0}
                max={max || 2000}
              />
            </WithResBtns>
          )}
          {resOption == "Tablet" && (
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
                step={step || 1}
                min={min || 0}
                max={max || 2000}
              />
            </WithResBtns>
          )}
          {resOption == "Mobile" && (
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
                step={step || 1}
                min={min || 0}
                max={max || 2000}
              />
            </WithResBtns>
          )}
        </>
      ) : (
        <>
          {
            //  {console.log("-- noUnits naai")}
          }

          {resOption == "Desktop" && (
            <>
              <UnitControl
                selectedUnit={desktopSizeUnit}
                unitTypes={units || defaultUnits}
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
                  step={step || (desktopSizeUnit !== "em" ? 1 : 0.1)}
                  min={min || 0}
                  max={max || (desktopSizeUnit === "px" ? 2000 : 100)}
                />
              </WithResBtns>
            </>
          )}
          {resOption == "Tablet" && (
            <>
              <UnitControl
                selectedUnit={TABsizeUnit}
                unitTypes={units || defaultUnits}
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
                  step={step || (TABsizeUnit !== "em" ? 1 : 0.1)}
                  min={min || 0}
                  max={max || (TABsizeUnit === "px" ? 2000 : 100)}
                />
              </WithResBtns>
            </>
          )}
          {resOption == "Mobile" && (
            <>
              <UnitControl
                selectedUnit={MOBsizeUnit}
                unitTypes={units || defaultUnits}
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
                  step={step || (MOBsizeUnit !== "em" ? 1 : 0.1)}
                  min={min || 0}
                  max={max || (MOBsizeUnit === "px" ? 2000 : 100)}
                />
              </WithResBtns>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ResponsiveRangeController;

export const GetPortEx = `use Libraries.Robots.Spike.ForceSensor
ForceSensor fs
integer forceSensorPort = fs:GetPort()`;

export const SetPortEx = `use Libraries.Robots.Spike.ForceSensor
ForceSensor fs
fs:SetPort(0)`;

export const GetForceEx = `use Libraries.Robots.Spike.ForceSensor
ForceSensor fs
integer currentForce = fs:GetForce()`;

export const GetForceRawEx = `use Libraries.Robots.Spike.ForceSensor
ForceSensor fs
integer currentRawForce = fs:GetRawForce()`;

export const IsPressedEx = `use Libraries.Robots.Spike.ForceSensor
ForceSensor fs
boolean isForceSensorPressed = fs:IsPressed()`;
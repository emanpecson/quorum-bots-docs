export const GetPortEx = `use Libraries.Robots.Spike.Motor
Motor wheel
integer wheelPort = wheel:GetPort()`;

export const SetPortEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:SetPort(0)`;

export const GetDutyCycleEx = `use Libraries.Robots.Spike.Motor
Motor wheel
integer currentPWM = wheel:GetDutyCyle()`;

export const SetDutyCycleEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:SetDutyCycle(5000)`;

export const GetRelativePositionEx = `use Libraries.Robots.Spike.Motor
 Motor wheel
integer currentRelativeWheelPosition = wheel:GetRelativePosition()`;

export const SetRelativePositionEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:SetRelativePosition(90)`;

export const GetAbsolutePositionEx = `use Libraries.Robots.Spike.Motor
Motor wheel
integer currentAbsoluteWheelPosition = wheel:GetAbsolutePosition()`;

export const RunEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:Run(90)`;

export const RunForTimeEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:RunForTime(2000, 360)`;

export const RunToDegreesEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:RunToDegrees(720, 90)`;


export const RunToRelativePositionEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:RunToRelativePosition(360, 360)`;

export const RunToAbsolutePositionEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:RunToAbsolutePosition(1200, 360)`;

export const StopEx = `use Libraries.Robots.Spike.Motor
use Libraries.Robots.Spike.Hub
Motor wheel
Hub hb
wheel:Run(360)
hb:Sleep(1000)
wheel:Stop()`;

export const GetVelocityEx = `use Libraries.Robots.Spike.Motor
Motor wheel
wheel:Run(360)
integer currentVelocity = wheel:GetVelocity()`;
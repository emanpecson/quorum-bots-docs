export const GetPortEx = `use Libraries.Robots.Spike.ColorSensor
ColorSensor cs
integer port = cs:GetPort()`;

export const SetPortEx = `use Libraries.Robots.Spike.ColorSensor
use Libraries.Robots.Spike.Port
ColorSensor cs
Port port
cs:SetPort(port:A)`;

export const GetColorIntegerEx = `use Libraries.Robots.Spike.ColorSensor
use Libraries.Robots.Spike.Color
use Libraries.Robots.Spike.Port
use Libraries.Robots.Spike.LightMatrix
ColorSensor cs
Color color
LighMatrix lights
Port port
cs:SetPort(port:A)
if cs:GetColorInteger = color:RED
    lights:Write("Red Detected!")
end`;

export const GetReflectionEx = `use Libraries.Robots.Spike.ColorSensor
use Libraries.Robots.Spike.Port
ColorSensor cs
Port port
cs:SetPort(port:A)
integer intensity = cs:GetReflection()`;

export const GetRGBIEx = `use Libraries.Robots.Spike.ColorSensor
use Libraries.Robots.Spike.Port
use Libraries.Containers.Array
ColorSensor cs
Port port
Array<integer> rgbi
cs:SetPort(port:A)
rgbi = cs:GetRGBI()`;
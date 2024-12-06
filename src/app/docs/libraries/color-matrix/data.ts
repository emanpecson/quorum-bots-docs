export const GetPortEx = `use Libraries.Robots.Spike.ColorMatrix
ColorMatrix cm
integer port = cm:GetPort()`;

export const SetPortEx = `use Libraries.Robots.Spike.ColorMatrix
use Libraries.Robots.Spike.Port
ColorMatrix cm
Port port
cm:SetPort(port:A)`;

export const ClearEx = `use Libraries.Robots.Spike.ColorMatrix
use Libraries.Robots.Spike.Port
ColorMatrix cm
Port port
cm:SetPort(port:A)
cm:Clear()`;

export const GetPixelColorEx = `use Libraries.Robots.Spike.ColorMatrix
use Libraries.Robots.Spike.Port
use Libraries.Containers.Array
ColorMatrix cm
Port port
cm:SetPort(port:A)
Array<integer> colorIntensity = cm:GetPixelColor(0, 0)`;

export const SetPixelColorEx = `use Libraries.Robots.Spike.ColorMatrix
use Libraries.Robots.Spike.Color
use Libraries.Robots.Spike.Port
ColorMatrix cm
Color color
Port port
cm:SetPort(port:A)
cm:SetPixelColor(0, 0, color:RED, 100)`;

export const ShowColorsEx = `use Libraries.Robots.Spike.ColorMatrix
use Libraries.Robots.Spike.Color
use Libraries.Robots.Spike.Port
use Libraries.Containers.Array
ColorMatrix cm
Color color
Port port
Array<integer> colors
Array<integer> intensities
repeat 9 times
    colors:Add(color:RED)
    intensities:Add(100)
end
cm:SetPort(port:A)
cm:ShowColors(colors, intensities)`;
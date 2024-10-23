export const WriteEx = `use Libraries.Robots.Spike.LightMatrix
LightMatrix lights
lights:Write("Hi!")`;

export const GetPixelEx = `use Libraries.Robots.Spike.LightMatrix
LightMatrix lights
output lights:GetPixel(0,0)`;

export const SetPixelEx = `use Libraries.Robots.Spike.LightMatrix
LightMatrix lights
lights:SetPixel(0,0,100)
lights:SetPixel(4,4,100)`;

export const ShowImageEx = `use Libraries.Robots.Spike.LightMatrix
LightMatrix lights
lights:ShowImage(1)`;

export const ClearEx = `use Libraries.Robots.Spike.LightMatrix
LightMatrix lights
lights:Clear()`;

export const GetOrientationEx = `use Libraries.Robots.Spike.LightMatrix
LighMatrix lights
integer orientation = lights:GetOrientation()`;

export const SetOrientationEx = `use Lsibraries.Robots.Spike.LightMatrix
LightMatrix lights
lights:SetOrientation(lights:UP)`;

export const ShowEx = `
use Libraries.Robots.Spike.LightMatrix
use Libraries.Containers.Array
Array pixels
LightMatrix lights
integer i = 0
repeat 25 times
    pixels:Add(i)
    i = i + 4
end
lights:Show(pixels)`;
export const GetPortEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
integer distanceSensorPort = ds:GetPort()`;

export const SetPortEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
ds:SetPort(0)`;

export const GetDistanceEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
integer currentDistance = ds:GetDistance`;

export const GetPixelEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
integer firstPixel = ds:GetPixel(0, 0)`;

export const SetPixelEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
ds:SetPixel(0, 0, 100)`;

export const ClearLightsEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
ds:ClearLights()`;

export const SetAllLightsEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
ds:SetAllLights(50)`;

export const ShowEx = `use Libraries.Robots.Spike.DistanceSensor
use Libraries.Containers.Array
use Libraries.Robots.Spike.Port
Port port
DistanceSensor ds
ds:SetPort(port:A)
Array<integer> pixels
pixels:Add(0)
pixels:Add(25)
pixels:Add(50)
pixels:Add(100)
ds:Show(pixels)`;
export const SleepEx = `use Libraries.Robots.Spike.Hub
Hub hb
hb:Sleep(1000)`;

export const GetDeviceUUIDEx = `use Libraries.Robots.Spike.Hub
Hub hb
text deviceID = hb:GetDeviceUUID()`;

export const GetHardwareIDEx = `use Libraries.Robots.Spike.Hub
Hub hb
text hardwareID = hb:GetHardwareID()`;

export const PowerOffEx = `use Libraries.Robots.Spike.Hub
Hub hb
hb:PowerOff()`;

export const GetTemperatureEx = `use Libraries.Robots.Spike.Hub
Hub hb
integer currentTemperature = hb:GetTemperature()`;

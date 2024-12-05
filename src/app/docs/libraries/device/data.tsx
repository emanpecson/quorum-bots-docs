export const GetDataFromPortEx = `use Libraries.Robots.Spike.Device
use Libraries.Robots.Spike.Port
use Libraries.Containers.Array
Device dv
Port port
Array<integer> raw_data_of_port_A
raw_data_of_port_A = dv:GetDataFromPort(port:A)`;

export const GetIDOfPortEx = `use Libraries.Robots.Spike.Device
use Libraries.Robots.Spike.Port
Device dv
Port port
integer port_A_device_ID = dv:GetIDOfPort(port:A)`;

export const GetDutyCycleEx = `use Libraries.Robots.Spike.Device
use Libraries.Robots.Spike.Port
Device dv
Port port
integer port_A_duty_cycle = dv:GetDutyCycle(port:A)`;

export const IsPortReadyEx = `use Libraries.Robots.Spike.Device
use Libraries.Robots.Spike.Hub
use Libraries.Robots.Spike.LightMatrix
use Libraries.Robots.Spike.Port
Port port
Device dv
Hub hb
LightMatrix lights
repeat until IsPortReady(port:A)
    hb:Sleep(1)
end
lights:Write("Device at Port A is READY!!!")`;

export const SetDutyCycleEx = `use Libraries.Robots.Spike.Device
use Libraries.Robots.Spike.Port
Device dv
Port port
dv:SetDutyCycle(port:A, 5000)`;
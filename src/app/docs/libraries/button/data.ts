export const isLeftPressedEx = `use Libraries.Robots.Spike.Button
use Libraries.Robots.Spike.LightMatrix
use Libraries.Robots.Spike.Hub

Hub hb
LightMatrix lights
Button btn

repeat until btn:IsLeftPressed()
	hb:Sleep(1)
end

lights:Write("Left Button Pressed!")`;

export const isRightPressedEx = `use Libraries.Robots.Spike.Button
use Libraries.Robots.Spike.LightMatrix
use Libraries.Robots.Spike.Hub

Hub hb
LightMatrix lights
Button btn

repeat until btn:IsRightPressed()
		hb:Sleep(1)
end

lights:Write("Right Button Pressed!")`;

export const buttonPressDurationEx = `use Libraries.Robots.Spike.Button
use Libraries.Robots.Spike.LightMatrix

Button btn
LightMatrix lights
integer left_button_duration = 0

repeat until (left_button_duration > 1000)
		left_button_duration = btn:ButtonPressDuration(btn:LEFT)
end

lights:Write("Button held for 1 second")`;

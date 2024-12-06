export const ChangeEx = `use Libraries.Robots.Spike.Bargraph
Bargraph bg
Color color
bg:SetValue(color:RED, 0.5)
bg:Change(color:RED, 1.0)
bg:Change(color:RED, -2)`;

export const ClearAllEx = `use Libraries.Robots.Spike.Bargraph
Bargraph bg
Color color
bg:SetValue(color:RED, 0.5)
bg:SetValue(color:BLACK, 1.5)
bg:SetValue(color:BLUE, 2.5)
bg:ClearAll()`;

export const GetValueEx = `use Libraries.Robots.Spike.Bargraph
Bargraph bg
Color color
bg:SetValue(color:RED, 0.5)
number redValue = bg:GetValue(color:RED)`;

export const HideEx = `use Libraries.Robots.Spike.Bargraph
use Libraries.Robots.Spike.Hub
Bargraph bg
Hub hb
Color color
bg:SetValue(color:RED, 0.5)
hb:Sleep(1000)
bg:Hide()`;

export const SetValueEx = `use Libraries.Robots.Spike.Bargraph
Bargraph bg
Color color
bg:SetValue(color:RED, 0.5)`;

export const ShowEx = `use Libraries.Robots.Spike.Bargraph
Bargraph bg
Color color
bg:SetValue(color:RED, 0.5)
bg:Show(true)`;

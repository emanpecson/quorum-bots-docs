export const PlayEx = `use Libraries.Robots.Spike.AppSound
AppSound aSound
aSound:Play("Alert")`;

export const Play2Ex = `use Libraries.Robots.Spike.AppSound
AppSound aSound
aSound:Play("Alert", 100, 2, -100)`;

export const SetAttributesEx = `use Libraries.Robots.Spike.AppSound
use Libraries.Robots.Spike.Hub
AppSound aSound
Hub hb
aSound:Play("Campfire Music")
hb:Sleep(1000)
aSound:SetAttributes(100, 2, 100)`;

export const StopEx = `use Libraries.Robots.Spike.AppSound
AppSound aSound
aSound:Play("Bird", 100, 2, -100)
aSound:Stop()`;
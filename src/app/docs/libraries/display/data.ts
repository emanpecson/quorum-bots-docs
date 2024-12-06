export const HideEx = `use Libraries.Robots.Spike.Display
use Libraries.Robots.Spike.Hub
Display display
Hub hb
display:Text("Hi!")
hb:Sleep(1000)
display:Hide()`;

export const ImageEx = `use Libraries.Robots.Spike.Display
Display display
display:Image(display:IMAGE_BEACH)`;

export const ShowEx = `use Libraries.Robots.Spike.Display
Display display
display:Image(display:IMAGE_BEACH)
display:Show(true)`;

export const TextEx = `use Libraries.Robots.Spike.Display
Display display
display:Text("Hi!")`;

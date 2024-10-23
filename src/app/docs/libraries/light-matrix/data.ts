import { Constant } from "@/types/constant";

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

export const constants: Constant[] = [
	{ type: "integer", identifier: "UP", value: "0" },
	{ type: "integer", identifier: "RIGHT", value: "1" },
	{ type: "integer", identifier: "DOWN", value: "2" },
	{ type: "integer", identifier: "LEFT", value: "3" },
	{ type: "integer", identifier: "HEART", value: "1" },
	{ type: "integer", identifier: "HEART_SMALL", value: "2" },
	{ type: "integer", identifier: "HAPPY", value: "3" },
	{ type: "integer", identifier: "SMILE", value: "4" },
	{ type: "integer", identifier: "SAD", value: "5" },
	{ type: "integer", identifier: "CONFUSED", value: "6" },
	{ type: "integer", identifier: "ANGRY", value: "7" },
	{ type: "integer", identifier: "ASLEEP", value: "8" },
	{ type: "integer", identifier: "SURPRISED", value: "9" },
	{ type: "integer", identifier: "SILLY", value: "10" },
	{ type: "integer", identifier: "FABULOUS", value: "11" },
	{ type: "integer", identifier: "MEH", value: "12" },
	{ type: "integer", identifier: "YES", value: "13" },
	{ type: "integer", identifier: "NO", value: "14" },
	{ type: "integer", identifier: "CLOCK12", value: "15" },
	{ type: "integer", identifier: "CLOCK1", value: "16" },
	{ type: "integer", identifier: "CLOCK2", value: "17" },
	{ type: "integer", identifier: "CLOCK3", value: "18" },
	{ type: "integer", identifier: "CLOCK4", value: "19" },
	{ type: "integer", identifier: "CLOCK5", value: "20" },
	{ type: "integer", identifier: "CLOCK6", value: "21" },
	{ type: "integer", identifier: "CLOCK7", value: "22" },
	{ type: "integer", identifier: "CLOCK8", value: "23" },
	{ type: "integer", identifier: "CLOCK9", value: "24" },
	{ type: "integer", identifier: "CLOCK10", value: "25" },
	{ type: "integer", identifier: "CLOCK11", value: "26" },
	{ type: "integer", identifier: "ARROW_N", value: "27" },
	{ type: "integer", identifier: "ARROW_NE", value: "28" },
	{ type: "integer", identifier: "ARROW_E", value: "29" },
	{ type: "integer", identifier: "ARROW_SE", value: "30" },
	{ type: "integer", identifier: "ARROW_S", value: "31" },
	{ type: "integer", identifier: "ARROW_SW", value: "32" },
	{ type: "integer", identifier: "ARROW_W", value: "33" },
	{ type: "integer", identifier: "ARROW_NW", value: "34" },
	{ type: "integer", identifier: "GO_RIGHT", value: "35" },
	{ type: "integer", identifier: "GO_LEFT", value: "36" },
	{ type: "integer", identifier: "GO_UP", value: "37" },
	{ type: "integer", identifier: "GO_DOWN", value: "38" },
	{ type: "integer", identifier: "TRIANGLE", value: "39" },
	{ type: "integer", identifier: "TRIANGLE_LEFT", value: "40" },
	{ type: "integer", identifier: "CHESSBOARD", value: "41" },
	{ type: "integer", identifier: "DIAMOND", value: "42" },
	{ type: "integer", identifier: "DIAMOND_SMALL", value: "43" },
	{ type: "integer", identifier: "SQUARE", value: "44" },
	{ type: "integer", identifier: "SQUARE_SMALL", value: "45" },
	{ type: "integer", identifier: "RABBIT", value: "46" },
	{ type: "integer", identifier: "COW", value: "47" },
	{ type: "integer", identifier: "MUSIC_CROTCHET", value: "48" },
	{ type: "integer", identifier: "MUSIC_QUAVER", value: "49" },
	{ type: "integer", identifier: "MUSIC_QUAVERS", value: "50" },
	{ type: "integer", identifier: "PITCHFORK", value: "51" },
	{ type: "integer", identifier: "XMAS", value: "52" },
	{ type: "integer", identifier: "PACMAN", value: "53" },
	{ type: "integer", identifier: "TARGET", value: "54" },
	{ type: "integer", identifier: "TSHIRT", value: "55" },
	{ type: "integer", identifier: "ROLLERSKATE", value: "56" },
	{ type: "integer", identifier: "DUCK", value: "57" },
	{ type: "integer", identifier: "HOUSE", value: "58" },
	{ type: "integer", identifier: "TORTOISE", value: "59" },
	{ type: "integer", identifier: "BUTTERFLY", value: "60" },
	{ type: "integer", identifier: "STICKFIGURE", value: "61" },
	{ type: "integer", identifier: "GHOST", value: "62" },
	{ type: "integer", identifier: "SWORD", value: "63" },
	{ type: "integer", identifier: "GIRAFFE", value: "64" },
	{ type: "integer", identifier: "SKULL", value: "65" },
	{ type: "integer", identifier: "UMBRELLA", value: "66" },
	{ type: "integer", identifier: "SNAKE", value: "67" },
];

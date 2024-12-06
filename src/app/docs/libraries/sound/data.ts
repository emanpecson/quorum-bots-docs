export const BeepEx = `use Libraries.Robots.Spike.Sound
Sound noise
noise:Beep(440, 500, 100)`;

export const Beep2Ex = `use Libraries.Robots.Spike.Sound
Sound noise
noise:Beep(440, 500, 100, 120, 50, 50, 60, 10, noise:WAVEFORM_SQUARE, noise:DEFAULT)`;

export const StopSoundEx = `use Libraries.Robots.Spike.Sound
Sound noise
noise:Beep(440, 5000, 100)
noise:Stop()`;

export const SetVolumeEx = `use Libraries.Robots.Spike.Sound
use Libraries.Robots.Spike.Hub
Sound noise
Hub hb
noise:Beep(440, 5000, 100)
hb:Sleep(1000)
noise:SetVolume(25)`;

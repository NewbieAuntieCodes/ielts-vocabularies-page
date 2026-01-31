export const ALLOWED_BANDS = ['5.0', '5.5', '6.0', '6.5'];

export const filterAllowedBands = (bands: string[]): string[] => {
  const unique = new Set(bands);
  return ALLOWED_BANDS.filter((band) => unique.has(band));
};

export const formatBandLabel = (band: string): string => {
  return band.endsWith('.0') ? band.slice(0, -2) : band;
};

const ORBITAL_PERIOD_EARTH_YEARS = {
	mercury:	0.2408467,
	venus:		0.61519726,
	earth:		1.0,
	mars:		1.8808158,
	jupiter:	11.862615,
	saturn:		29.447498,
	uranus:		84.016846,
	neptune:	164.79132,
};

const EARTH_YEAR_IN_SECONDS = 31557600;

export const age = (planet, ageInSeconds) => {

	const earthYears = ageInSeconds / EARTH_YEAR_IN_SECONDS;
	const ageOnPlanet = earthYears / ORBITAL_PERIOD_EARTH_YEARS[planet];

	return round(ageOnPlanet);
};

function round(number, places = 2) {  // defaults to 2 decimal places

	const roundingFactor = 10 ** places

	return Math.round(number * roundingFactor) / roundingFactor;  // rounds to 2 decimal places
}
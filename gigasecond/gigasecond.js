const GIGASECOND = 1E9;
const MILLISECOND = 1E-3;
const GIGASECOND_IN_MILLISECOND = GIGASECOND / MILLISECOND;

export const gigasecond = (date) => {
  
    const dateInMilliseconds = date.getTime();

    return new Date(dateInMilliseconds + GIGASECOND_IN_MILLISECOND);
}

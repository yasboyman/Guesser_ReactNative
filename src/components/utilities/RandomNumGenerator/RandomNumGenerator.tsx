export const generateRandomNum = (min: number, max: number, exclude?: number): number => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum === exclude ? generateRandomNum(min, max, exclude) : randomNum
}
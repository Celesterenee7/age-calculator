import {
    Human
} from './../src/human.js';

describe('Human', () => {

    test('should calculate humans age in mercury years only', () => {
        const newHuman = new Human();
        expect(newHuman.ageOnMercury).toEqual(129);
    });
    test('should calculate humans age in venus years only', () => {
        const newHuman = new Human();
        expect(newHuman.ageOnVenus).toEqual(41);
    });
});
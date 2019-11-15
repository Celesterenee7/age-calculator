import {
    Human
} from './../src/human.js';

describe('Human', () => {
    const newHuman = new Human();
    test('should calculate humans age in mercury years only', () => {
        expect(newHuman.ageOnMercury).toEqual(129);
    });
});
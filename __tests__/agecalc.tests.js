import {
    Human
} from './../src/js/human.js';

describe('Human', () => {
    test('should calculate humans age in mercury years', () => {
        let newHuman = new Human(31);
        newHuman.determineAge();
        expect(newHuman.ageOnMercury).toEqual(129.17);
    });
});
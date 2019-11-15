import {
    Human
} from './../src/human.js';


describe('Human', () => {

    test('should calculate humans age in mercury years only', () => {
        let newHuman = new Human(31);
        newHuman.planetAge();
        expect(newHuman.ageOnMercury).toEqual(129);
    });
    test('should calculate humans age in venus years only', () => {
        let newHuman = new Human(31);
        newHuman.planetAge();
        expect(newHuman.ageOnVenus).toEqual(50);
    });
    test('should calculate humans age in mars years only', () => {
        let newHuman = new Human(31);
        newHuman.planetAge();
        expect(newHuman.ageOnMars).toEqual(16);
    });
    test('should calculate humans age in jupiter years only', () => {
        let newHuman = new Human(31);
        newHuman.planetAge();
        expect(newHuman.ageOnJupiter).toEqual(3);
    });
});
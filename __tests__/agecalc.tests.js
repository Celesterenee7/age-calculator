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
    test('should calculate humans age in saturn years only', () => {
        let newHuman = new Human(31);
        newHuman.planetAge();
        expect(newHuman.ageOnSaturn).toEqual(1);
    });
    // test('should calculate life expectancy for each planet', () => {
    //     let newHuman = new Human(31);
    //     expect(newHuman.ageOnMercury).toEqual(129);
    //     expect(newHuman.ageOnVenus).toEqual(129);
    //     expect(newHuman.ageOnMars).toEqual(129);
    //     expect(newHuman.ageOnJupiter).toEqual(129);
    // });
});
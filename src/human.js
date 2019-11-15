export class Human {
  constructor(age) {
    this.age = age;
    // this.lifeSpan = lifeSpan;
  }
  planetAge() {
    this.ageOnMercury = parseFloat((this.age / .24).toFixed(0));
    this.ageOnVenus = parseFloat((this.age / .62).toFixed(0));
    this.ageOnMars = parseFloat((this.age / 1.88).toFixed(0));
  }
}
export class Human {
  constructor(age, shape) {
    this.age = age;
    this.shape = shape;
    this.averageLifeSpan = 71;
  }

  planetAge() {
    this.ageOnMercury = parseFloat((this.age / .24).toFixed(0));
    this.ageOnVenus = parseFloat((this.age / .62).toFixed(0));
    this.ageOnMars = parseFloat((this.age / 1.88).toFixed(0));
    this.ageOnJupiter = parseFloat((this.age / 11.86).toFixed(0));
    this.ageOnSaturn = parseFloat((this.age / 29.46).toFixed(0));
  }

  planetLifeSpan() {
    this.ageOnMercury = parseFloat(71 - 129);
    this.ageOnVenus = parseFloat(71 - 50);
    this.ageOnMars = parseFloat(71 - 16);
    this.ageOnJupiter = parseFloat(71 - 3);
    this.ageOnSaturn = parseFloat(71 - 1);
  }
}
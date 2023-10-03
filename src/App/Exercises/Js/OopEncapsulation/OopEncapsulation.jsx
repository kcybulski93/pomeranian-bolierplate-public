export const OopEncapsulation = () => {
  class Human {
    firstName;
    lastName;
    #secretNumber = 42;
    #hash = 90;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    #giveMeSecretNumber() {
      return this.#secretNumber;
    }

    getHashedSecretNumber() {
      const sn = this.#giveMeSecretNumber();
      return sn * this.#hash;
    }

    checkIfGivenNumberIsSn(num) {
      return this.getHashedSecretNumber() / num === this.#hash;
    }
  }

  const kamil = new Human('Kamil', 'Cybulski');

  console.log(kamil.getHashedSecretNumber());
  console.log(kamil.checkIfGivenNumberIsSn(42));
};

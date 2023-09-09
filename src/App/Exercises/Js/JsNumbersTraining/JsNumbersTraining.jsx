export const JsNumbersTraining = () => {
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    }

    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }

    return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
  }

  function hasEnough(hasEnough) {
    return hasEnough;
  }

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  function changeGradeToText(grade) {
    if (grade > 6 || grade < 1) {
      return 'błąd';
    }
    if (grade === 1) {
      return 'jeden';
    }
    if (grade === 2) {
      return 'dwa';
    }
    if (grade === 3) {
      return 'trzy';
    }
    if (grade === 4) {
      return 'cztery';
    }
    if (grade === 5) {
      return 'pięć';
    }
    if (grade === 6) {
      return 'sześć';
    }
  }
  console.log(changeGradeToText(6));

  return <div>JS Numbers Training</div>;
};

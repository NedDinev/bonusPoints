function bonusPoints([points]) {
  points = Number(points);
  let bonus = 0;
  if (points <= 100) {
    bonus = 5;
  } else if ([points <= 1000]) {
    bonus = 0.2 * points;
  } else {
    bonus = 0.1 * points;
  }

  let additionalBonus = 0;

  if (points % 2 == 0) {
    additionalBonus = 1;
  } else if (points % 10 == 5) {
    additionalBonus = 2;
  }

  let onlyBonus = Math.round((bonus + additionalBonus) * 100) / 100;
  let pointsWithBonus =
    Math.round((bonus + additionalBonus + points) * 100) / 100;

  console.log(onlyBonus);
  console.log(pointsWithBonus);
}

bonusPoints([15875]);

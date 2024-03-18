export const transformVotes = (userVotes: string) => {
  let votes: string;
  let left: string[];
  let middle: string[];
  let right: string[];
  const votesArray = userVotes.split('');
  for (let i = 0; i < votesArray.length; i += 3) {
    /* 1 до 100 */
    if (votesArray.length <= 3) {
      left = votesArray.slice(0, 3);
      votes = left.join('');
    }
    /* 1.000 до 9.999 */
    if (votesArray.length == 4) {
      left = votesArray.slice(0, 1);
      middle = votesArray.slice(1, 4);
      left.push('.');
      votes = left.concat(middle).join('');
    }
    /* 10.000 до 99.999 */
    if (votesArray.length == 5) {
      left = votesArray.slice(0, 2);
      middle = votesArray.slice(2, 5);
      left.push('.');
      votes = left.concat(middle).join('');
    }

    /* 100.000 до 999.999 */
    if (votesArray.length == 6) {
      left = votesArray.slice(0, 3);
      middle = votesArray.slice(3, 6);
      left.push('.');
      votes = left.concat(middle).join('');
    }
    /* 1.000.000 до 9.999.999 */
    if (votesArray.length == 7) {
      left = votesArray.slice(0, 1);
      middle = votesArray.slice(1, 3);
      right = votesArray.slice(3, 6);
      left.push('.');
      middle.push('.');
      votes = left.concat(middle.concat(right)).join('');
    }
    /* 10.000.000 до 99.999.999 */
    if (votesArray.length == 8) {
      left = votesArray.slice(0, 2);
      middle = votesArray.slice(2, 5);
      right = votesArray.slice(5, 8);
      left.push('.');
      middle.push('.');
      votes = left.concat(middle.concat(right)).join('');
    }
    /* 100.000.000 до 999.999.999 */
    if (votesArray.length == 9) {
      left = votesArray.slice(0, 3);
      middle = votesArray.slice(3, 6);
      right = votesArray.slice(6, 9);
      left.push('.');
      middle.push('.');
      votes = left.concat(middle.concat(right)).join('');
    }
  }

  return votes;
};

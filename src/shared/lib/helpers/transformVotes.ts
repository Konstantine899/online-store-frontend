export const transformVotes = (userVotes: string) => {
  let votes: string;
  let left: string[];
  let middle: string[];
  let right: string[];
  const votesArray = userVotes.split('');
  for (let i = 0; i < votesArray.length; i += 3) {
    left = votesArray.slice(0, 3);
    middle = votesArray.slice(3, 6);
    right = votesArray.slice(6, 9);
  }
  if (votesArray.length <= 3) {
    votes = left.join('');
  }
  if (votesArray.length > 3 && votesArray.length <= 6) {
    left.push('.');
    votes = left.concat(middle).join('');
  }
  if (votesArray.length > 6 && votesArray.length <= 9) {
    left.push('.');
    middle.push('.');
    votes = left.concat(middle.concat(right)).join('');
  }
  return votes;
};

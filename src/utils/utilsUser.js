export const getUserAvatar = ({ firstName, lastName }) => [firstName, lastName]
  .map((letter) => letter.charAt(0).toUpperCase())
  .join('');
export const getUserDisplayName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

export const isUserActive = ({ lastActive }) => {
  const secondsSinceActive = (Date.now() - lastActive) / 1000;
  return secondsSinceActive < 15;
};

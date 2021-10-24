export const LANGUAGES = [
    'Javascript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
];

export const getLanguages = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LANGUAGES);
      }, 1000);
    });
  };

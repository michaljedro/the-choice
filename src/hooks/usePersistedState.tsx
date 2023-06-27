import React from 'react';

export enum PersistenceKey {
  MainPagerPage = 'main-pager-page',
  MainPagerOptions = 'main-pager-options',
  MainPagerCriterion = 'main-pager-criterion',
  MainPagerChoices = 'main-pager-choices',
  HomeText = 'home-text',
  QuizChoices = 'quiz-choices',
}

export function usePersistedState<T = unknown>(
  key: PersistenceKey,
  defaultValue: T,
  clearOnUnmount = false,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (!item) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (error) {
      return defaultValue;
    }
  });

  React.useEffect(() => {
    return () => {
      if (clearOnUnmount) {
        localStorage.removeItem(key);
      }
    };
  }, []);

  React.useEffect(() => {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  }, [value, key]);

  return [value, setValue];
}

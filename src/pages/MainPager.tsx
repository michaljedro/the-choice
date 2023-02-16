import React from 'react';
import { Home } from './Home';
import { Result } from './Result';
import { Quiz } from './Quiz';

import { Choice, Option } from '../types';
import { PersistenceKey, usePersistedState } from '../hooks/usePersistedState';
import { combinations } from '../lib/core/combinations';

type Page = 'home' | 'quiz' | 'result';

export function MainPager(): React.ReactElement {
  const [page, setPage] = usePersistedState<Page>(
    PersistenceKey.MainPagerPage,
    'home',
  );
  const [options, setOptions] = usePersistedState<Option[]>(
    PersistenceKey.MainPagerOptions,
    [],
  );
  const [choices, setChoices] = usePersistedState<Choice[]>(
    PersistenceKey.MainPagerChoices,
    [],
  );
  const pairs = React.useMemo(() => combinations(options), [options]);

  const handleQuizFinish = (choices: Choice[]) => {
    setPage('result');
    setChoices(choices);
  };

  const handleStartClick = (options: Option[]) => {
    setOptions(options);
    setPage('quiz');
  };

  const handleHomeClick = () => {
    setPage('home');
  };

  switch (page) {
    case 'home':
      return <Home onStartClick={handleStartClick} />;
    case 'quiz':
      return <Quiz pairs={pairs} onFinish={handleQuizFinish} />;
    case 'result':
      return (
        <Result
          choices={choices}
          options={options}
          onStartOverClick={handleHomeClick}
        />
      );
    default:
      return unreachable(page);
  }
}

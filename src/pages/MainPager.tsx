import React from 'react';
import { Home } from './Home';
import { Result } from './Result';
import { Quiz } from './Quiz';

import { PersistenceKey, usePersistedState } from '@/hooks/usePersistedState';
import { toggleChoice } from '@/lib/core/choices';
import { combinations } from '@/lib/core/combinations';
import { CriterionPage } from '@/pages/CriterionPage';
import { Choice, Option } from '@/types';

type Page = 'home' | 'criterion' | 'quiz' | 'result';

export function MainPager(): React.ReactElement {
  const [page, setPage] = usePersistedState<Page>(
    PersistenceKey.MainPagerPage,
    'home',
  );
  const [criterion, setCriterion] = usePersistedState<string | null>(
    PersistenceKey.MainPagerCriterion,
    null,
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
    setPage('criterion');
  };

  const handleCriterionSubmit = (criterion: string | null) => {
    setCriterion(criterion);
    setPage('quiz');
  };

  const handleToggleChoice = (choiceId: number) => {
    setChoices((prev) => toggleChoice(prev, choiceId));
  };

  const handleHomeClick = () => {
    setPage('home');
  };

  const handleRestartClick = () => {
    setChoices([]);
    setPage('home');
  };

  switch (page) {
    case 'home':
      return <Home onStartClick={handleStartClick} />;
    case 'criterion':
      return <CriterionPage onSubmit={handleCriterionSubmit} />;
    case 'quiz':
      return (
        <Quiz
          criterion={criterion}
          pairs={pairs}
          onFinish={handleQuizFinish}
          onRestartClick={handleRestartClick}
        />
      );
    case 'result':
      return (
        <Result
          criterion={criterion}
          choices={choices}
          options={options}
          onChoiceToggle={handleToggleChoice}
          onStartOverClick={handleHomeClick}
        />
      );
    default:
      return unreachable(page);
  }
}

import React from 'react';

const allModifierKeys = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'] as const;

type AllModifierKeys = typeof allModifierKeys[number];

export type ModifierKey = keyof Pick<KeyboardEvent, AllModifierKeys>;

export function useKey(
  key: string,
  callback: (event: KeyboardEvent) => void,
  modifierKeys: ModifierKey[] = [],
) {
  const matches = (event: KeyboardEvent) => {
    const isPressingRequiredOnlyModifierKeys = allModifierKeys.every(
      (modifierKey) =>
        modifierKeys.includes(modifierKey) === event[modifierKey],
    );
    const isPressingKey = key.toLowerCase() == event.key.toLowerCase();
    const isNotRepeatedPress = !event.repeat;
    return (
      isPressingRequiredOnlyModifierKeys && isPressingKey && isNotRepeatedPress
    );
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (matches(event)) {
      event.preventDefault();
      callback(event);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [key, callback, ...modifierKeys]);
}

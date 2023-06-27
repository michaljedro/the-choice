import { useCallback } from 'react';

export function useGenerateId() {
  let id = 0;
  return useCallback(() => ++id, []);
}

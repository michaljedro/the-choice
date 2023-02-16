export default {
  '*.(js|cjs|ts|tsx)': 'npm run lint:fix',
  '**/*': 'npm run format:fix',
  '*.css': 'npm run lint-style:fix',
};

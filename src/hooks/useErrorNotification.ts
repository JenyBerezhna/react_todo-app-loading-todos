import { useState } from 'react';

export const useErrorNotification = () => {
  const [error, setError] = useState('');

  const showError = (message: string) => setError(message);
  const hideError = () => setError('');

  return {
    error,
    showError,
    hideError,
    isVisible: !!error,
  };
};

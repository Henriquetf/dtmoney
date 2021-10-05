import { useCallback, useState } from 'react';

export function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return { isModalOpen, open, close };
}

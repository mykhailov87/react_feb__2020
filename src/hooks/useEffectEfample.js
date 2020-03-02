import { useEffect } from 'react';

export function useEffectExample() {
  // useEffect(() => {}, []);

  // Функция, переданная в useEffect, будет запущена после того,
  // как рендер будет зафиксирован на экране

  useEffect(() => {
    // Подписка на событие типа addEventListener
    return () => {
      // Отписка от события removeEventListener
    };
  }, []);
}

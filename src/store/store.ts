import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // 나중에 슬라이스들 추가
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

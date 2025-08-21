import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectState {
  projectSelection: string;
  managementSelection: string;
}

const initialState: SelectState = {
  projectSelection: 'SENSDES-RND',
  managementSelection: 'SRS Management',
};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setProjectSelection: (state, action: PayloadAction<string>) => {
      state.projectSelection = action.payload;
      // 프로젝트 선택이 바뀌면 관리 선택을 기본값으로 리셋
      state.managementSelection = 'SRS Management';
    },
    setManagementSelection: (state, action: PayloadAction<string>) => {
      state.managementSelection = action.payload;
    },
  },
});

export const { setProjectSelection, setManagementSelection } = selectSlice.actions;
export default selectSlice.reducer;

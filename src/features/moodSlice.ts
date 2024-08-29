import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoodEntry {
  intensity: number;
  timestamp: string;
}

interface MoodState {
  happyLog: MoodEntry[];
  sadLog: MoodEntry[];
}

const initialState: MoodState = {
  happyLog: [],
  sadLog: [],
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    logHappy: (state, action: PayloadAction<number>) => {
      state.happyLog.push({ intensity: action.payload, timestamp: new Date().toISOString() });
    },
    logSad: (state, action: PayloadAction<number>) => {
      state.sadLog.push({ intensity: action.payload, timestamp: new Date().toISOString() });
    },
    clearLogs: (state) => {
      state.happyLog = [];
      state.sadLog = [];
    },
  },
});

export const { logHappy, logSad, clearLogs } = moodSlice.actions;

export default moodSlice.reducer;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { logHappy, logSad, clearLogs } from '../features/moodSlice';

const MoodTracker: React.FC = () => {
  const dispatch = useDispatch();
  const happyLog = useSelector((state: RootState) => state.mood.happyLog);
  const sadLog = useSelector((state: RootState) => state.mood.sadLog);

  const [happyInput, setHappyInput] = useState(0);
  const [sadInput, setSadInput] = useState(0);

  return (
    <div className="p-4">
      <div className="mb-2 bg-orange-600 text-white p-2">
        {happyLog.map((entry, index) => (
          <div key={index}>
            Happiness Intensity: {entry.intensity}, when: {entry.timestamp}
          </div>
        ))}
      </div>
      <div className="mb-4 bg-blue-600 text-white p-2">
        {sadLog.map((entry, index) => (
          <div key={index}>
            Sadness Intensity: {entry.intensity}, when: {entry.timestamp}
          </div>
        ))}
      </div>

      <div className="flex items-center mb-2">
        <label htmlFor="happy-input" className="mr-2">Are you happy?</label>
        <input
          id="happy-input"
          type="number"
          value={happyInput}
          onChange={(e) => setHappyInput(parseInt(e.target.value))}
          className="w-12 mr-2 p-1 border border-gray-300 rounded"
        />
        <button
          onClick={() => {
            dispatch(logHappy(happyInput));
            setHappyInput(0); 
          }}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded"
        >
          Yes
        </button>
      </div>

      <div className="flex items-center mb-4">
        <label htmlFor="sad-input" className="mr-2">Are you sad?</label>
        <input
          id="sad-input"
          type="number"
          value={sadInput}
          onChange={(e) => setSadInput(parseInt(e.target.value))}
          className="w-12 mr-2 p-1 border border-gray-300 rounded"
        />
        <button
          onClick={() => {
            dispatch(logSad(sadInput));
            setSadInput(0); 
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          Yes
        </button>
      </div>

      <button
        onClick={() => dispatch(clearLogs())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
      >
        Clear
      </button>
    </div>
  );
};

export default MoodTracker;

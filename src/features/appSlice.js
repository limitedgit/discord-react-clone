import  {createSlice}  from '@reduxjs/toolkit';

const initialState = {
  channelID:null,
  channelName: null,
};



export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelID = action.payload.channelID;
      state.channelName = action.payload.channelName;
    },

  },
});

export const {setChannelInfo} = appSlice.actions;

export const selectChannelID = (state) => state.app.channelID;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;

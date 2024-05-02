import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    address: null
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;  // Atualiza somente o profile, mantendo address como está
    },
    clearUserProfile: (state) => {
      state.profile = null;
      // Considerar também se deve ou não limpar o address aqui
    },
    setUserAddress: (state, action) => {
      state.address = action.payload;
    },
    clearUserAddress: (state) => {
      state.address = null;
    }
  },
});

export const { setUserProfile, clearUserProfile, setUserAddress, clearUserAddress } = userSlice.actions;
export default userSlice.reducer;


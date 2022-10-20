import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cardService from './cardService'

const initialState = {
  cards: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new card
export const createCard = createAsyncThunk(
  'cards/create',
  async (cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await cardService.createCard(cardData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user card
export const getCards = createAsyncThunk(
  'cards/getCards',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await cardService.getCards(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create new card
export const updateCard = createAsyncThunk(
  'cards/update',
  async (id, cardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await cardService.updateCard(id, cardData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get card by id
export const getCard = createAsyncThunk(
  'cards/getCard',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await cardService.getCard(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user card
export const deleteCard = createAsyncThunk(
  'cards/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await cardService.deleteCard(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cards.push(action.payload)
      })
      .addCase(createCard.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCards.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cards = action.payload
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateCard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cards.push(action.payload)
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCard.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cards = action.payload
      })
      .addCase(getCard.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cards = state.cards.filter(
          (card) => card._id !== action.payload.id
        )
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = cardSlice.actions
export default cardSlice.reducer

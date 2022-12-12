/**
 * helperExtraReducers
 * @param {import("@reduxjs/toolkit").ActionReducerMapBuilder} builder
 * @param {import("@reduxjs/toolkit").AsyncThunk<null, null, {}>} action
 * @param {string[]} keys
 */
export const helperExtraReducers = (
  builder,
  action,
  [loadingKey, errorKey],
) => {
  builder.addCase(action.pending, state => {
    state[loadingKey] = true;
  });
  builder.addCase(action.fulfilled, state => {
    state[loadingKey] = false;
  });
  builder.addCase(action.rejected, (state, action) => {
    state[loadingKey] = false;
    state[errorKey] = action.error.message;
  });
};

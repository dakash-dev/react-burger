import { createAsyncThunk } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=12f80588";
import {
  loginUserRequest,
  setTokens,
  logoutUserRequest,
  clearTokens,
  getUserRequest,
  registerUserRequest,
  updateUserRequest
} from "/src/utils/burger-api.ts";
import { setUser, setAuthChecked } from "/src/services/auth/slice.ts";
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (form, { rejectWithValue }) => {
    try {
      const data = await updateUserRequest(form);
      return data.user;
    } catch (err) {
      const customError = err;
      if (customError.statusCode === 401 || customError.statusCode === 403 || customError.message === "jwt expired") {
        clearTokens();
      }
      return rejectWithValue(
        customError.message || "Ошибка обновления данных"
      );
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, { rejectWithValue }) => {
    try {
      const data = await registerUserRequest(form);
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err) {
      const customError = err;
      return rejectWithValue(
        customError.message || "Ошибка регистрации"
      );
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (form, { rejectWithValue }) => {
    try {
      const data = await loginUserRequest(form);
      setTokens(data.accessToken, data.refreshToken);
      return data.user;
    } catch (err) {
      const customError = err;
      return rejectWithValue(
        customError.message || "Ошибка авторизации"
      );
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutUserRequest();
      clearTokens();
      return data;
    } catch (err) {
      const customError = err;
      return rejectWithValue(
        customError.message || "Ошибка при выходе из системы"
      );
    }
  }
);
export const checkUserAuth = createAsyncThunk(
  "auth/checkUser",
  async (_, { dispatch }) => {
    try {
      if (localStorage.getItem("accessToken")) {
        const data = await getUserRequest();
        if (data && data.success) {
          dispatch(setUser(data.user));
        }
      }
    } catch {
      clearTokens();
      dispatch(setUser(null));
    } finally {
      dispatch(setAuthChecked(true));
    }
  }
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQge1xuICBsb2dpblVzZXJSZXF1ZXN0LFxuICBzZXRUb2tlbnMsXG4gIGxvZ291dFVzZXJSZXF1ZXN0LFxuICBjbGVhclRva2VucyxcbiAgZ2V0VXNlclJlcXVlc3QsXG4gIHJlZ2lzdGVyVXNlclJlcXVlc3QsXG4gIHVwZGF0ZVVzZXJSZXF1ZXN0LFxufSBmcm9tICdAL3V0aWxzL2J1cmdlci1hcGknO1xuXG5pbXBvcnQgeyBzZXRVc2VyLCBzZXRBdXRoQ2hlY2tlZCB9IGZyb20gJy4vc2xpY2UnO1xuXG5pbXBvcnQgdHlwZSB7IFRCYXNlUmVzcG9uc2UsIFRVc2VyIH0gZnJvbSAnQC91dGlscy9idXJnZXItYXBpJztcbmltcG9ydCB0eXBlIHsgVEN1c3RvbUVycm9yIH0gZnJvbSAnQC91dGlscy9jaGVjay1yZXNwb25zZSc7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gY3JlYXRlQXN5bmNUaHVuazxUVXNlciwgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXG4gICdhdXRoL3VwZGF0ZVVzZXInLFxuICBhc3luYyAoZm9ybSwgeyByZWplY3RXaXRoVmFsdWUgfSk6IFByb21pc2U8VFVzZXI+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHVwZGF0ZVVzZXJSZXF1ZXN0KGZvcm0pO1xuICAgICAgcmV0dXJuIGRhdGEudXNlcjtcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9yID0gZXJyIGFzIFRDdXN0b21FcnJvcjtcbiAgICAgIGlmIChcbiAgICAgICAgY3VzdG9tRXJyb3Iuc3RhdHVzQ29kZSA9PT0gNDAxIHx8XG4gICAgICAgIGN1c3RvbUVycm9yLnN0YXR1c0NvZGUgPT09IDQwMyB8fFxuICAgICAgICBjdXN0b21FcnJvci5tZXNzYWdlID09PSAnand0IGV4cGlyZWQnXG4gICAgICApIHtcbiAgICAgICAgY2xlYXJUb2tlbnMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoXG4gICAgICAgIGN1c3RvbUVycm9yLm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQvtCx0L3QvtCy0LvQtdC90LjRjyDQtNCw0L3QvdGL0YUnXG4gICAgICApIGFzIHVua25vd24gYXMgVFVzZXI7XG4gICAgfVxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gY3JlYXRlQXN5bmNUaHVuazxUVXNlciwgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXG4gICdhdXRoL3JlZ2lzdGVyJyxcbiAgYXN5bmMgKGZvcm0sIHsgcmVqZWN0V2l0aFZhbHVlIH0pOiBQcm9taXNlPFRVc2VyPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZWdpc3RlclVzZXJSZXF1ZXN0KGZvcm0pO1xuICAgICAgc2V0VG9rZW5zKGRhdGEuYWNjZXNzVG9rZW4sIGRhdGEucmVmcmVzaFRva2VuKTtcbiAgICAgIHJldHVybiBkYXRhLnVzZXI7XG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICBjb25zdCBjdXN0b21FcnJvciA9IGVyciBhcyBUQ3VzdG9tRXJyb3I7XG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKFxuICAgICAgICBjdXN0b21FcnJvci5tZXNzYWdlIHx8ICfQntGI0LjQsdC60LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuCdcbiAgICAgICkgYXMgdW5rbm93biBhcyBUVXNlcjtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBjcmVhdGVBc3luY1RodW5rPFRVc2VyLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihcbiAgJ2F1dGgvbG9naW4nLFxuICBhc3luYyAoZm9ybSwgeyByZWplY3RXaXRoVmFsdWUgfSk6IFByb21pc2U8VFVzZXI+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvZ2luVXNlclJlcXVlc3QoZm9ybSk7XG4gICAgICBzZXRUb2tlbnMoZGF0YS5hY2Nlc3NUb2tlbiwgZGF0YS5yZWZyZXNoVG9rZW4pO1xuICAgICAgcmV0dXJuIGRhdGEudXNlcjtcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9yID0gZXJyIGFzIFRDdXN0b21FcnJvcjtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoXG4gICAgICAgIGN1c3RvbUVycm9yLm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4J1xuICAgICAgKSBhcyB1bmtub3duIGFzIFRVc2VyO1xuICAgIH1cbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSBjcmVhdGVBc3luY1RodW5rPFRCYXNlUmVzcG9uc2UsIHZvaWQ+KFxuICAnYXV0aC9sb2dvdXQnLFxuICBhc3luYyAoXywgeyByZWplY3RXaXRoVmFsdWUgfSk6IFByb21pc2U8VEJhc2VSZXNwb25zZT4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgbG9nb3V0VXNlclJlcXVlc3QoKTtcbiAgICAgIGNsZWFyVG9rZW5zKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9yID0gZXJyIGFzIFRDdXN0b21FcnJvcjtcbiAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoXG4gICAgICAgIGN1c3RvbUVycm9yLm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0LLRi9GF0L7QtNC1INC40Lcg0YHQuNGB0YLQtdC80YsnXG4gICAgICApIGFzIHVua25vd24gYXMgVEJhc2VSZXNwb25zZTtcbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJBdXRoID0gY3JlYXRlQXN5bmNUaHVuazx2b2lkLCB2b2lkPihcbiAgJ2F1dGgvY2hlY2tVc2VyJyxcbiAgYXN5bmMgKF8sIHsgZGlzcGF0Y2ggfSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFVzZXJSZXF1ZXN0KCk7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoZGF0YS51c2VyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIGNsZWFyVG9rZW5zKCk7XG4gICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZGlzcGF0Y2goc2V0QXV0aENoZWNrZWQodHJ1ZSkpO1xuICAgIH1cbiAgfVxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyx3QkFBd0I7QUFFakM7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUVQLFNBQVMsU0FBUyxzQkFBc0I7QUFLakMsYUFBTSxhQUFhO0FBQUEsRUFDeEI7QUFBQSxFQUNBLE9BQU8sTUFBTSxFQUFFLGdCQUFnQixNQUFzQjtBQUNuRCxRQUFJO0FBQ0YsWUFBTSxPQUFPLE1BQU0sa0JBQWtCLElBQUk7QUFDekMsYUFBTyxLQUFLO0FBQUEsSUFDZCxTQUFTLEtBQWM7QUFDckIsWUFBTSxjQUFjO0FBQ3BCLFVBQ0UsWUFBWSxlQUFlLE9BQzNCLFlBQVksZUFBZSxPQUMzQixZQUFZLFlBQVksZUFDeEI7QUFDQSxvQkFBWTtBQUFBLE1BQ2Q7QUFDQSxhQUFPO0FBQUEsUUFDTCxZQUFZLFdBQVc7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxhQUFNLGVBQWU7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsT0FBTyxNQUFNLEVBQUUsZ0JBQWdCLE1BQXNCO0FBQ25ELFFBQUk7QUFDRixZQUFNLE9BQU8sTUFBTSxvQkFBb0IsSUFBSTtBQUMzQyxnQkFBVSxLQUFLLGFBQWEsS0FBSyxZQUFZO0FBQzdDLGFBQU8sS0FBSztBQUFBLElBQ2QsU0FBUyxLQUFjO0FBQ3JCLFlBQU0sY0FBYztBQUNwQixhQUFPO0FBQUEsUUFDTCxZQUFZLFdBQVc7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxhQUFNLFlBQVk7QUFBQSxFQUN2QjtBQUFBLEVBQ0EsT0FBTyxNQUFNLEVBQUUsZ0JBQWdCLE1BQXNCO0FBQ25ELFFBQUk7QUFDRixZQUFNLE9BQU8sTUFBTSxpQkFBaUIsSUFBSTtBQUN4QyxnQkFBVSxLQUFLLGFBQWEsS0FBSyxZQUFZO0FBQzdDLGFBQU8sS0FBSztBQUFBLElBQ2QsU0FBUyxLQUFjO0FBQ3JCLFlBQU0sY0FBYztBQUNwQixhQUFPO0FBQUEsUUFDTCxZQUFZLFdBQVc7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFTyxhQUFNLGFBQWE7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsT0FBTyxHQUFHLEVBQUUsZ0JBQWdCLE1BQThCO0FBQ3hELFFBQUk7QUFDRixZQUFNLE9BQU8sTUFBTSxrQkFBa0I7QUFDckMsa0JBQVk7QUFDWixhQUFPO0FBQUEsSUFDVCxTQUFTLEtBQWM7QUFDckIsWUFBTSxjQUFjO0FBQ3BCLGFBQU87QUFBQSxRQUNMLFlBQVksV0FBVztBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLGFBQU0sZ0JBQWdCO0FBQUEsRUFDM0I7QUFBQSxFQUNBLE9BQU8sR0FBRyxFQUFFLFNBQVMsTUFBcUI7QUFDeEMsUUFBSTtBQUNGLFVBQUksYUFBYSxRQUFRLGFBQWEsR0FBRztBQUN2QyxjQUFNLE9BQU8sTUFBTSxlQUFlO0FBQ2xDLFlBQUksUUFBUSxLQUFLLFNBQVM7QUFDeEIsbUJBQVMsUUFBUSxLQUFLLElBQUksQ0FBQztBQUFBLFFBQzdCO0FBQUEsTUFDRjtBQUFBLElBQ0YsUUFBUTtBQUNOLGtCQUFZO0FBQ1osZUFBUyxRQUFRLElBQUksQ0FBQztBQUFBLElBQ3hCLFVBQUU7QUFDQSxlQUFTLGVBQWUsSUFBSSxDQUFDO0FBQUEsSUFDL0I7QUFBQSxFQUNGO0FBQ0Y7IiwibmFtZXMiOltdfQ==
import produce from 'immer';
import { lightTheme } from '~/themes/theme';

const INITIAL_STATE = { theme: 'light', toggleTheme: lightTheme };

export default function theme(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@theme/TOGGLE_SWITCHER': {
        draft.theme = action.payload.theme;
        draft.toggleTheme = action.payload.toggleTheme;
        break;
      }
      default:
    }
  });
}

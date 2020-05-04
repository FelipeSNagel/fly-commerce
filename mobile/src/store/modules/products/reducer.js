import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  item: [],
  loading: true,
};

export default function products(state = INITIAL_STATE, action) {

  switch (action.type) {

    case '@products/FETCH_DATA_SUCCESS':
      return produce(state, draft => {
        const { payload } = action;
        draft.data = payload.data;
        draft.loading = payload.loading;
      });

    case '@products/FETCH_DATA_FAILED':
      return produce(state, draft => {
        const { payload } = action;
        draft.loading = payload.loading;
      });

    case '@products/FETCH_ITEM_SUCCESS':
      return produce(state, draft => {

        const { payload } = action;

        draft.data = draft.data.map((element) => {

          if (element.id == payload.id) {

            draft.item = { ...element, ...payload };
            return { ...element, ...payload };

          } else {

            return { ...element };

          }

        })

      });

    default:
      return state;
  }
}

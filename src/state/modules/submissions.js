import { handleActions, createAction } from 'redux-actions';
import { apiGet } from '../action/apiRequest';
import { GATEWAY } from '../../data/Injectables';

const PAGE_SIZE = 10;

// Actions
const NAMESPACE = 'submissions';
const SUBMISSIONS_ENDPOINT = '/submissionsall';

const FETCH_SUBMISSIONS = `${NAMESPACE}/FETCH_SUBMISSIONS`;
const SET_DATA = `${NAMESPACE}/SET_DATA`;

// Reducer
const initialState = {
  data: [],
};

const submissionsReducer = handleActions(
  {
    [SET_DATA]: (state, { payload: data }) => ({ ...state, data }),
  },
  initialState,
);

export default submissionsReducer;

// Action creators
export const setData = createAction(SET_DATA);

// Thunks
export const fetchSubmissions = () => dispatch => {
  return dispatch(apiGet(FETCH_SUBMISSIONS, GATEWAY, SUBMISSIONS_ENDPOINT)).payload.then(
    response => {
      dispatch(setData(response.data));
    },
  );
};

// Selectors for clientside filtering, ordering and paginating
export const getData = (submissions, searchParams) => {
  return submissions
    .sort((a, b) => {
      const dateA = new Date(a.Date);
      const dateB = new Date(b.Date);
      return searchParams.get('sort') === 'ASC' ? dateA - dateB : dateB - dateA;
    })
    .filter(submission => {
      const q = searchParams.get('q').toLowerCase();

      if (!q || q === 'null') {
        return true;
      }
      return submission.Date.includes(q) || submission.Address.toLowerCase().includes(q);
    });
};

export const getSubmissions = state => {
  const searchParams = new URLSearchParams(state.router.location.search);
  const firstSearchParams = new URLSearchParams(state.router.location.search);
  const prevSearchParams = new URLSearchParams(state.router.location.search);
  const nextSearchParams = new URLSearchParams(state.router.location.search);
  const lastSearchParams = new URLSearchParams(state.router.location.search);

  const page = parseInt(searchParams.get('page')) || 1;
  const data = getData(state[NAMESPACE].data, searchParams);

  const total_count = data.length;
  const page_count = Math.ceil(total_count / PAGE_SIZE);

  firstSearchParams.set('page', 1);
  prevSearchParams.set('page', page - 1);
  nextSearchParams.set('page', page + 1);
  lastSearchParams.set('page', page_count);

  return {
    page,
    per_page: PAGE_SIZE,
    page_count,
    total_count,
    links: {
      first: `?${firstSearchParams.toString()}`,
      previous: page === 1 ? null : `?${prevSearchParams.toString()}`,
      self: `?${searchParams.toString()}`,
      next: page === page_count ? null : `?${nextSearchParams.toString()}`,
      last: `?${lastSearchParams.toString()}`,
    },
    data: data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
  };
};

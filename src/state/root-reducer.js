import actions from './actions';
import produce from 'immer';

export default (state, action) => {

    switch (action.type) {
        case actions.HYDRATE_VIDEO_DATA:
            return produce(state, draft => {
                draft.player.videos = action.payload
            });
        case actions.SELECT_VIDEO:
            return produce(state, draft => {
                draft.player.videoSelected = action.payload
            });
      default:
        console.error(`No reducer for action type ${action.type} found.`);
    }
  }

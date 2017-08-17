import moment from 'moment'

//INITIAL STATE
const initialState = moment(new Date()).format('YYYYMMDD')

//ACTION TYPES

const GOT_NEXT_DAY = 'GOT_NEXT_DAY';
const GOT_PREVIOUS_DAY = 'GOT_PREVIOUS_DAY'

//ACTION CREATORS

export const gotNextDay = () => ({ type: GOT_NEXT_DAY });
export const gotPreviousDay = () => ({ type: GOT_PREVIOUS_DAY });

//THUNK CREATORS


// REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_NEXT_DAY:
      return moment(state).add(1, "day").format("YYYYMMDD");
    case GOT_PREVIOUS_DAY:
      return moment(state).subtract(1, "day").format("YYYYMMDD");
    default:
      return state;
  }
}

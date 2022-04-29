const initialState = {
  Data: [],
};

// const HotelBookingDetails = (state = initialState, action) => {
//   const {type, payload} = action;
//   switch (type) {
//     case 'SHOW_DATA':
//       return {...state, Data: [...payload]};
//     default:
//       return {...state};
//   }
// };

// export default HotelBookingDetails;

const HotelBookingDetails = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SHOW_DATA':
      return {...state, Data: [...state.Data, ...payload]};
    default:
      return {...state};
  }
};

export default HotelBookingDetails;

export const getDayInfoSelector = state => state.day.dayInfo; //////??????????????????
export const getProductsDaySummary = state => state?.day?.daySummary;
export const getEatenProducts = state => state?.day?.eatenProducts;

export const getDate = state => state?.day?.daySummary?.date;

export const getDateId = state => state?.day?.daySummary?.dateId;
// export const getDateId = state => state?.auth?.user?.userId;

// export const getDateId = state => console.dir(state);

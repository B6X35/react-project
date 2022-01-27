export const getDayInfoSelector = state => state.day.dayInfo;
export const getProductsDaySummary = state => state?.day?.dayInfo?.daySummary;
export const getEatenProducts = state => state?.day?.dayInfo?.eatenProducts;

export const getDateId = state => state?.day?.dayInfo?.daySummary?.id;

// export const getDateId = state => console.dir(state);

export const dashboardHandler = async () => {
  // Asynchronous code where you, e. g. fetch data from your database
  // console.log('сработка хендлера при отисовке данных');
  const res = await new Promise((res) => res('данные из запроса'));
  // console.log(res);
  return { message: 'Hello World' };
};

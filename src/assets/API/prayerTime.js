export const timeNow = new Date();
export async function getPrayerTimes() {
  const response = await fetch(
    `https://api.aladhan.com/v1/timingsByCity/${timeNow.getDate()}-${
      timeNow.getMonth() + 1
    }-${timeNow.getFullYear()}?city=Cairo&country=Egypt&method=8`,
  );

  const data = await response.json();

  return data.data.timings;
}

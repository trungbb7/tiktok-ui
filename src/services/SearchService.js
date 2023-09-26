async function searchService(input) {
  const url = `https://www.tiktok.com/api/search/general/preview/?aid=1988&app_language=vi&app_name=tiktok_web&browser_language=vi-VN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&device_id=7248603869680797185&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&keyword=${encodeURIComponent(
    input
  )}&os=windows&priority_region=&referer=&region=VN&screen_height=864&screen_width=1536&tz_name=Asia/Bangkok&webcast_language=vi-VN`;
  let result = [];
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      result = res.sug_list;
    })
    .catch((err) => {
      console.error(err);
    });

  return result;
}

export default searchService;

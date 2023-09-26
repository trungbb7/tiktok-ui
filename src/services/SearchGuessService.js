async function searchGuessService() {
  let result = [];
  await fetch(
    'https://www.tiktok.com/api/search/suggest/guide/?aid=1988&app_language=vi-VN&app_name=tiktok_web&browser_language=vi-VN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F116.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7271412510182917650&device_platform=web_pc&focus_state=true&from_group_id=7270918749278997765&from_page=fyp&history_len=2&history_list_v2=%25255B%25255D&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=&referer=&region=VN&req_source=web_blank_page&screen_height=864&screen_width=1536&tz_name=Asia%2FBangkok&webcast_language=vi-VN'
  )
    .then((res) => res.json())
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      result = [];
      console.error(err);
    });

  return result;
}

export default searchGuessService;

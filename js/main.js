import { scroll, delay, scrollPlaylist, parsePlaylist, saveToFile } from '../core_js/export_vk_playlist_to_file.js';

(async () => {
  // Выполнение основной логики
  await scrollPlaylist();
  const list = parsePlaylist();
  saveToFile('vk-playlist.txt', list.join('\n'));
})();



var playlist = {
  SOAD: 'disorder',
  Coldplay: 'clocks',
  Loggins: 'danger zone'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
 
  return playlist;
}
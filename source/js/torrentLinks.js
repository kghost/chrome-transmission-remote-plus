// array of regular expressions that dictate what is a valid torrent download url
var TORRENT_LINKS = [
	/^magnet:/i,
	/\.torrent$/i,
	/torrents\.php\?action=download/i,
	/\?.*info_hash=/i,
	/bt-chat\.com.*download/i,
	/torrentreactor\.net.*download/i,
	/vertor\.com.*download/i,
	/seedpeer\.com.*download/i,
	/torrentzap\.com.*download/i,
	/limetorrents\.com.*download/i,
	/h33t\.com.*download/i,
	/ahashare\.com.*download/i,
	/1337x\.org.*download/i,
	/bitenova\.nl.*download/i,
	/bibliotik\.org.*download/i,
	/demonoid\.me.*download\//i,
	/alivetorrents\.com\/dl\//i,
	/newtorrents\.info\/down\.php/i,
	/mininova\.org\/get/i,
	/kickasstorrents\.com\/torrents/i
];

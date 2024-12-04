function openYouTubeVideo(videoId) {
    const videoContainer = document.getElementById('videoContainer');
    const youtubePlayer = document.getElementById('youtubePlayer');

    // Charger l'URL de la vidéo
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}`;
    videoContainer.style.display = 'block';
    videoContainer.style.width = '1px';
    // youtubePlayer.style.width = '1000%'
}
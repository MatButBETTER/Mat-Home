  <!-- Background music -->
  <audio id="bg-music" loop>
   <source src="path/to/coolauramoozig.ogg" type="audio/ogg">
  </audio>

  <script>
    const music = document.getElementById("bg-music");

    document.addEventListener("click", () => {
      music.play();
    }, { once: true });

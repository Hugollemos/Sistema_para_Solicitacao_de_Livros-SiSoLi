function starTime(duration, display) {
  var timer = duration, minutes, seconds;

  setInterval(function () {

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
      document.getElementById("vinculo").disabled = true;
      document.getElementById("autor").disabled = true;
      document.getElementById("issn").disabled = true;
      document.getElementById("editora").disabled = true;
      document.getElementById("titulo").disabled = true;
      document.getElementById("edicao").disabled = true;
      document.getElementById("ano").disabled = true;
    }
  }, 1000);

}
window.onload = function () {
  var duration = 60 * 60;
  var display = document.querySelector("#timer");

  starTime(duration, display);
}
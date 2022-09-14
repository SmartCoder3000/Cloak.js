function main() {
  var config = null;
  var button = document.querySelector(".button");
  button.addEventListener("click", (e) => {
    if (config==null) config = { url:'https://google.com/' };
    var cloaker = new TabCloak(config);
    cloaker.main();
  });

  var input = document.querySelector("input");
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      var url = e.target.value.trim();
      if (!(url.startsWith("https://")||url.startsWith("http://"))) {
        url = location.protocol + url;
      }
      config = {
        url: e.target.value
      };
    };
  });
}

window.onload = () => {
  main();
}

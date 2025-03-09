var
  $id = document.getElementById.bind(document);

function getParameter(key) {
  var parameter_list = new URLSearchParams(window.location.search);

  return parameter_list.get(key);
}

document.addEventListener("DOMContentLoaded", function() {
  var
    param = getParameter("id"),
    display_string = null;

  switch (param) {
    case "dogecoin":
      display_string = "&quot;Dogecoin 3D Live Wallpaper (Google Play)&quot;";
      break;

    case "bitcoin":
      display_string = "&quot;Bitcoin 3D Live Wallpaper (Google Play)&quot;";
      break;

    case "crypto":
      display_string = "&quot;Crypto 3D Live Wallpaper (Google Play)&quot;";
      break;

    case "fantasy-dice":
      display_string = "&quot;Fantasy Dice 3D Live Wallpaper (Google Play)&quot;";
      break;

    case "lucky-cat":
      display_string = "&quot;Lucky Cat 3D Live Wallpaper (Google Play)&quot;";
      break;

    case "coronavirus":
      display_string = "&quot;Coronavirus 3D Live Wallpaper (Google Play)&quot;";
      break;
  }

  if (display_string) {
    $id("app_name_I").innerHTML = display_string;
    $id("app_name_II").innerHTML = display_string;
  }
});
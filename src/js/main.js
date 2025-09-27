async function loadComponents(id, file) {
  try {
    const response = await fetch(`src/components/${file}`);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (e) {
    console.error("Error" + file, e);
  }
}

loadComponents("header", "header.html");
loadComponents("hero", "hero.html");
loadComponents("benefit", "benefit.html");

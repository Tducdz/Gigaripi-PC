const components = [
  { id: "header", file: "header.html" },
  { id: "hero", file: "hero.html" },
  { id: "benefit", file: "benefit.html" },
  { id: "value-1", file: "value-1.html" },
  { id: "value-2", file: "value-2.html" },
  { id: "feature", file: "feature.html" },
  { id: "functions", file: "functions.html" },
  { id: "tutorial", file: "tutorial.html" },
  { id: "contact", file: "contact.html" },
  { id: "footer", file: "footer.html" },
];

async function loadComponents({ id, file }) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`Không tìm thấy phần tử ${id}`);
    return;
  }
  try {
    const res = await fetch(`src/components/${file}`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`${file}: ${res.status} ${res.statusText}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(`Lỗi tải ${file}:`, err);
    el.innerHTML = "<!-- Load failed -->";
  }
}

async function loadAll() {
  await Promise.all(components.map(loadComponents));
  document.dispatchEvent(new CustomEvent("components:ready"));
}

loadAll();

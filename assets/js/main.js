async function loadMarkdown(filePath) {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    document.getElementById("content").innerHTML = marked.parse(text);
  } catch (error) {
    document.getElementById("content").innerHTML = "Error loading content.";
    console.error(error);
  }
}

// For Home page
if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
  loadMarkdown("/content/home.md");
}


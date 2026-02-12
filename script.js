const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Remove articles for sorting
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '');
}

// Sort ignoring articles
bands.sort((a, b) =>
  stripArticle(a).localeCompare(stripArticle(b))
);

// Render using innerHTML (important)
document.getElementById('band').innerHTML =
  bands.map(band => `<li>${band}</li>`).join('');

// decorativeGourdSeason.js
function isDecorativeGourdSeason() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 8, 20); // September 20th
  const end = new Date(now.getFullYear(), 10, 21); // November 21st
  return now >= start && now <= end;
}

module.exports = { isDecorativeGourdSeason };

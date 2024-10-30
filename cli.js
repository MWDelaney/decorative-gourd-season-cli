#!/usr/bin/env node

const { isDecorativeGourdSeason } = require('./decorativeGourdSeason');

if (isDecorativeGourdSeason()) {
  console.log('🎃 It is decorative gourd season! 🎃');
  // Log the author in italics and orange
  console.log('\x1b[33m\x1b[3m%s\x1b[0m', 'Read the original article by Colin Nissan: https://www.mcsweeneys.net/articles/its-decorative-gourd-season-motherfuckers');
} else {
  console.log('It is not decorative gourd season.');
}

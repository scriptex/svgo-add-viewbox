const { resolve } = require('path');
const { existsSync, readFileSync } = require('fs');

const tape = require('tape');
const { parse } = require('svg-parser');

tape('Has viewBox attribute', async t => {
	const file = resolve(__dirname, 'output', 'test.svg');
	const svg = readFileSync(file, 'utf-8');
	const parsed = parse(svg);

	const fileExists = existsSync(resolve(__dirname, file));

	// @ts-ignore
	const hasViewBox = !!parsed.children[0].properties.viewBox;

	t.ok(fileExists, 'File exists');
	t.ok(hasViewBox, 'Has viewBox attribute');
	t.end();
});

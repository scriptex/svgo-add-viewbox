import tape from 'tape';
import { parse } from 'svg-parser';
import { optimize, loadConfig } from 'svgo';

import { resolve } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';

tape('Has viewBox attribute', async t => {
	const input = resolve('test', 'input', 'test.svg');
	const output = resolve('test', 'output', 'test.svg');
	const inputSVG = readFileSync(input, 'utf-8');
	const outputSVG = readFileSync(output, 'utf-8');

	const config = await loadConfig(resolve('test', 'svgo.config.mjs'));
	const optimized = optimize(inputSVG, config).data;
	const parsed = parse(optimized);
	const rootNode = /** @type {svgParser.ElementNode} */ (parsed.children[0]);

	t.ok(existsSync(input), 'Input file exists.');
	t.ok(existsSync(output), 'Output file exists.');
	t.equals(optimized, outputSVG, 'The parsed input file and saved output files match.');
	t.ok(!!rootNode?.properties?.viewBox, 'Has viewBox attribute.');

	t.end();
});

tape('Preserves existing viewBox attribute', async t => {
	const input = resolve('test', 'input', 'test-preserve.svg');
	const output = resolve('test', 'output', 'test-preserve.svg');
	const inputSVG = readFileSync(input, 'utf-8');
	const outputSVG = readFileSync(output, 'utf-8');

	const config = await loadConfig(resolve('test', 'svgo.config.mjs'));
	const optimized = optimize(inputSVG, config).data;
	const parsedInput = parse(inputSVG);
	const parsedOutput = parse(optimized);
	const rootNodeInput = /** @type {svgParser.ElementNode} */ (parsedInput.children[0]);
	const rootNodeOutput = /** @type {svgParser.ElementNode} */ (parsedOutput.children[0]);

	t.ok(existsSync(input), 'Input file exists.');
	t.ok(existsSync(output), 'Output file exists.');
	t.equals(optimized, outputSVG, 'The parsed input file and saved output files match.');
	t.equals(
		rootNodeInput?.properties?.viewBox,
		rootNodeOutput?.properties?.viewBox,
		'The viewBox attribute was not changed.'
	);
	t.ok(!!rootNodeInput?.properties?.viewBox, 'Has viewBox attribute.');
});

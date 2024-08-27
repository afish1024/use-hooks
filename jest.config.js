const path = require('path');
module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	// transform: {
	// 	'^.+\\.tsx?$': 'ts-jest'
	// },
	// roots: [path.join(__dirname, 'tests-e2e')],
	roots: ["src"],
	testMatch: ['**/*.test.{ts,tsx}']
};

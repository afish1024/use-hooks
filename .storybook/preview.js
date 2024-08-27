export const parameters = {
	layout: 'fullscreen',
	options: {
		storySort: {
			/**
			 * 排序：order: [], sortSort: Function
			 * https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
			 * @param {*} a 
			 * @param {*} b 
			 * @returns 
			 */
			// order: ['usePortal', 'useAnimation'],
			sortSort: (a, b) => {
				return a[1].kind === b[1].kind 
					? 0 
					: a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
			}
		}
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date&/,
		},
		expanded: true
	},
};

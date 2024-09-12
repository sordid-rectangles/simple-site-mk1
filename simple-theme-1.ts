import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const simple: CustomThemeConfig = {
	name: 'simple-theme-1',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		'--theme-font-family-heading': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '24px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': 'var(--color-tertiary-900)',
		'--on-tertiary': 'var(--color-primary-500)',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #F0F0EA
		'--color-primary-50': '253 253 252', // #fdfdfc
		'--color-primary-100': '252 252 251', // #fcfcfb
		'--color-primary-200': '251 251 250', // #fbfbfa
		'--color-primary-300': '249 249 247', // #f9f9f7
		'--color-primary-400': '245 245 240', // #f5f5f0
		'--color-primary-500': '240 240 234', // #F0F0EA
		'--color-primary-600': '216 216 211', // #d8d8d3
		'--color-primary-700': '180 180 176', // #b4b4b0
		'--color-primary-800': '144 144 140', // #90908c
		'--color-primary-900': '118 118 115', // #767673
		// secondary | #889589
		'--color-secondary-50': '237 239 237', // #edefed
		'--color-secondary-100': '231 234 231', // #e7eae7
		'--color-secondary-200': '225 229 226', // #e1e5e2
		'--color-secondary-300': '207 213 208', // #cfd5d0
		'--color-secondary-400': '172 181 172', // #acb5ac
		'--color-secondary-500': '136 149 137', // #889589
		'--color-secondary-600': '122 134 123', // #7a867b
		'--color-secondary-700': '102 112 103', // #667067
		'--color-secondary-800': '82 89 82', // #525952
		'--color-secondary-900': '67 73 67', // #434943
		// tertiary | #283227
		'--color-tertiary-50': '223 224 223', // #dfe0df
		'--color-tertiary-100': '212 214 212', // #d4d6d4
		'--color-tertiary-200': '201 204 201', // #c9ccc9
		'--color-tertiary-300': '169 173 169', // #a9ada9
		'--color-tertiary-400': '105 112 104', // #697068
		'--color-tertiary-500': '40 50 39', // #283227
		'--color-tertiary-600': '36 45 35', // #242d23
		'--color-tertiary-700': '30 38 29', // #1e261d
		'--color-tertiary-800': '24 30 23', // #181e17
		'--color-tertiary-900': '20 25 19', // #141913
		// success | #649578
		'--color-success-50': '232 239 235', // #e8efeb
		'--color-success-100': '224 234 228', // #e0eae4
		'--color-success-200': '216 229 221', // #d8e5dd
		'--color-success-300': '193 213 201', // #c1d5c9
		'--color-success-400': '147 181 161', // #93b5a1
		'--color-success-500': '100 149 120', // #649578
		'--color-success-600': '90 134 108', // #5a866c
		'--color-success-700': '75 112 90', // #4b705a
		'--color-success-800': '60 89 72', // #3c5948
		'--color-success-900': '49 73 59', // #31493b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// // surface | #F0F0EA
		// "--color-surface-50": "253 253 252", // #fdfdfc
		// "--color-surface-100": "252 252 251", // #fcfcfb
		// "--color-surface-200": "251 251 250", // #fbfbfa
		// "--color-surface-300": "249 249 247", // #f9f9f7
		// "--color-surface-400": "245 245 240", // #f5f5f0
		// "--color-surface-500": "240 240 234", // #F0F0EA
		// "--color-surface-600": "216 216 211", // #d8d8d3
		// "--color-surface-700": "180 180 176", // #b4b4b0
		// "--color-surface-800": "144 144 140", // #90908c
		// "--color-surface-900": "118 118 115", // #767673

		// surface | #F1E0C5
		'--color-surface-50': '253 250 246', // #fdfaf6
		'--color-surface-100': '252 249 243', // #fcf9f3
		'--color-surface-200': '252 247 241', // #fcf7f1
		'--color-surface-300': '249 243 232', // #f9f3e8
		'--color-surface-400': '245 233 214', // #f5e9d6
		'--color-surface-500': '241 224 197', // #F1E0C5
		'--color-surface-600': '217 202 177', // #d9cab1
		'--color-surface-700': '181 168 148', // #b5a894
		'--color-surface-800': '145 134 118', // #918676
		'--color-surface-900': '118 110 97' // #766e61
	}
};

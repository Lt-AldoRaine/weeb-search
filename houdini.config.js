/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema.graphql',
	watchSchema: {
    url: 'https://graphql.anilist.co'
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;

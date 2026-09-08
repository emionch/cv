import yaml from 'js-yaml';
import type { PageLoad } from './$types';
import resumeYaml from '../../../../resume.yml?raw';

export const prerender = true;

export const load: PageLoad = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const resume = (yaml.load(resumeYaml) as any) || {};
	return {
		awards: resume.awards || [],
		certificates: resume.certificates || []
	};
};

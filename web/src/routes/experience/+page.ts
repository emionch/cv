import yaml from 'js-yaml';
import type { PageLoad } from './$types';
import resumeYaml from '../../../../resume.yml?raw';
import additionalData from '../../../static/data/additional-data.json';

export const prerender = true;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 2016-03 -> Mar 2016; anything else (like "Present") is passed through
const formatDate = (date: string) => {
	if (!/^\d{4}-\d{2}$/.test(date)) {
		return date;
	}
	const [year, month] = date.split('-');
	return `${months[parseInt(month) - 1]} ${year}`;
};

const formatForCompare = (str: string) => {
	if (!str) {
		return '';
	}
	return str.toLowerCase().replace(/[^a-z0-9]/gi, '');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeJobData = (cvData: any[], websiteData: any[]) => {
	const formattedWebsiteData = websiteData.map((job) => ({
		...job,
		formattedCompany: formatForCompare(job.company)
	}));

	const combinedData = cvData.map((cvJob) => {
		const formattedCvName = formatForCompare(cvJob.name);
		const matchingJob = formattedWebsiteData.find(
			(webJob) => webJob.formattedCompany === formattedCvName
		);
		if (matchingJob) {
			return {
				company: cvJob.name,
				companyUrl: matchingJob.companyUrl,
				companyLogo: matchingJob.companyLogo,
				position: cvJob.position,
				startDate: cvJob.startDate,
				endDate: cvJob.endDate,
				// resume.yml is the source of truth for dates: several roles can share one company
				datesWorked: `${formatDate(cvJob.startDate)} - ${formatDate(cvJob.endDate)}`,
				responsibilities: matchingJob.responsibilities,
				projectType: matchingJob.projectType,
				projects: matchingJob.projects,
				technologies: matchingJob.technologies,
				highlights: cvJob.highlights
			};
		}

		return {
			company: cvJob.name,
			datesWorked: `${formatDate(cvJob.startDate)} - ${formatDate(cvJob.endDate)}`,
			...cvJob
		};
	});

	const combinedCompanyNames = combinedData.map((job) => formatForCompare(job.company));

	const additionalWebsiteJobs = formattedWebsiteData
		.filter((webJob) => !combinedCompanyNames.includes(webJob.formattedCompany))
		.map((webJob) => ({
			company: webJob.company,
			companyUrl: webJob.companyUrl,
			companyLogo: webJob.companyLogo,
			position: webJob.jobTitle,
			datesWorked: webJob.datesWorked,
			responsibilities: webJob.responsibilities,
			projectType: webJob.projectType,
			projects: webJob.projects,
			technologies: webJob.technologies
		}));

	return [...combinedData, ...additionalWebsiteJobs];
};

export const load: PageLoad = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const cvData = ((yaml.load(resumeYaml) as any) || {}).work;
	const combinedJobData = mergeJobData(cvData, additionalData.workExperience);

	return {
		combinedJobData
	};
};

export type TopicContent = {
	title: string;
	content: string;
};

export type Topic = {
	id: number;
	title: string;
	content: TopicContent[];
};

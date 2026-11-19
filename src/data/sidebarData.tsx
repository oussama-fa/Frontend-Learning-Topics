import type { Topic } from "./types";
import { jsTopic } from "./jsTopics";
import { tsTopic } from "./tsTopics";
import { reactTopic } from "./reactTopics";
import { nextTopic } from "./nextTopics";

export type { Topic, TopicContent } from "./types";

export const sidebarData: Topic[] = [
    jsTopic,
    tsTopic,
    reactTopic,
    nextTopic,
];

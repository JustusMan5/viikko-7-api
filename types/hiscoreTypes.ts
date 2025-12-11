export type Skill = {
    id: number;
    name: string;
    level: number;
    xp: number;
}

export type hiscoresResponse = {
    name: string;
    skills: Skill[];
}
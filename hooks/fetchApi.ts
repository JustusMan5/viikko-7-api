import { Skill, hiscoresResponse } from "../types/hiscoreTypes";
import Constants from 'expo-constants';

const base = Constants.expoConfig?.extra?.API_BASE_URL;

export async function FetchHiscores(username: string): Promise<hiscoresResponse> {
    const response = await fetch(`${base}${username}`);
    if (!response.ok) {
        throw new Error('Failed to fetch hiscores');
    }
    const data = (await response.json()) as {
        name: string;
        skills: {
            id: number;
            name: string;
            level: number;
            xp: number;
        }[];
    };

    const skills: Skill[] = data.skills.map(skill => ({
        id: skill.id,
        name: skill.name,
        level: skill.level,
        xp: skill.xp
    }));
    
    return {
        name: data.name,
        skills: skills
    };
}
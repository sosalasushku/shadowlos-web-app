export interface Mode {
    id: 'global' | 'convenient' | 'flexible';
    title: string;
    description: string;
}

export interface Platform {
    id: string;
    name: string;
    availableModes: Mode['id'][];
}

export const modes: Mode[] = [
    {
        id: 'global',
        title: '🌎 Глобальный',
        description: 'Весь трафик идет через VPN'
    },
    {
        id: 'convenient',
        title: '👌🏻 Удобный',
        description: 'Автоматическое переключение VPN'
    },
    {
        id: 'flexible',
        title: '⚙️ Гибкий',
        description: 'Выборочное использование VPN'
    }
];

export const platforms: Platform[] = [
    {
        id: 'windows',
        name: 'Windows',
        availableModes: ['global', 'convenient', 'flexible']
    },
    {
        id: 'macos',
        name: 'MacOS',
        availableModes: ['global', 'convenient', 'flexible']
    },
    {
        id: 'ios',
        name: 'iOS',
        availableModes: ['global', 'convenient', 'flexible']
    },
    {
        id: 'android',
        name: 'Android',
        availableModes: ['global', 'convenient', 'flexible']
    },
    {
        id: 'linux',
        name: 'Linux',
        availableModes: ['global', 'convenient', 'flexible']
    },
    {
        id: 'androidtv',
        name: 'AndroidTV',
        availableModes: ['global'] // только глобальный режим
    },
    {
        id: 'appletv',
        name: 'AppleTV',
        availableModes: ['global'] // только глобальный режим
    },
    {
        id: 'yandextv',
        name: 'YandexTV',
        availableModes: ['global'] // только глобальный режим
    }
]; 
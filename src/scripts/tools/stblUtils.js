export const EnglishData = {
    name: 'English',
    nativeName: 'English',
    emoji: 'ðºð¸',
    stblCode: '00'
}

export const Languages = [
    {
        name: 'Chinese, Simplified',
        nativeName: 'ç®ä½ä¸­æ',
        emoji: 'ð¨ð³',
        stblCode: '01'
    },
    {
        name: 'Chinese, Traditional',
        nativeName: 'ç¹é«ä¸­æ',
        emoji: 'ð¨ð³',
        stblCode: '02'
    },
    {
        name: `Czech`,
        nativeName: `ÄeÅ¡tina`,
        emoji: 'ð¨ð¿',
        stblCode: '03'
    },
    {
        name: 'Danish',
        nativeName: 'Dansk',
        emoji: 'ð©ð°',
        stblCode: '04'
    },
    {
        name: 'Dutch',
        nativeName: 'Nederlands',
        emoji: 'ð³ð±',
        stblCode: '05'
    },
    EnglishData,
    {
        name: 'Finnish',
        nativeName: 'Suomi',
        emoji: 'ð«ð®',
        stblCode: '06'
    },
    {
        name: `French`,
        nativeName: `FranÃ§ais`,
        emoji: 'ð«ð·',
        stblCode: '07'
    },
    {
        name: `German`,
        nativeName: `Deutsch`,
        emoji: 'ð©ðª',
        stblCode: '08'
    },
    {
        name: `Italian`,
        nativeName: `Italiano`,
        emoji: 'ð®ð¹',
        stblCode: '0B'
    },
    {
        name: `Japanese`,
        nativeName: `æ¥æ¬èª`,
        emoji: 'ð¯ðµ',
        stblCode: '0C'
    },
    {
        name: `Korean`,
        nativeName: `íêµ­ì´`,
        emoji: 'ð°ð·',
        stblCode: '0D'
    },
    {
        name: `Norwegian`,
        nativeName: `Norsk`,
        emoji: 'ð³ð´',
        stblCode: '0E'
    },
    {
        name: `Polish`,
        nativeName: `Polski`,
        emoji: 'ðµð±',
        stblCode: '0F'
    },
    {
        name: `Portuguese`,
        nativeName: `PortuguÃªs`,
        emoji: 'ð§ð·',
        stblCode: '11'
    },
    {
        name: `Russian`,
        nativeName: `Ð ÑÑÑÐºÐ¸Ð¹`,
        emoji: 'ð·ðº',
        stblCode: '12'
    },
    {
        name: `Spanish`,
        nativeName: `EspaÃ±ol`,
        emoji: 'ðªð¸',
        stblCode: '13'
    },
    {
        name: 'Swedish',
        nativeName: 'Svenska',
        emoji: 'ð¸ðª',
        stblCode: '15'
    }
];


export function getTGI(stblName) {
    const {t, g, i} = /(?<t>[a-fA-F\d]{8})[_!]?(?<g>[a-fA-F\d]{8})[_!]?(?<i>[a-fA-F\d]{16})/.exec(stblName).groups;
    return {t, g, i};
}


export function getLocale(instanceId) {
    const localeCode = instanceId.substr(0, 2);
    return Languages.find(language => language.stblCode === localeCode);
}

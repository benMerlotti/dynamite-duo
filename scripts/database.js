export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Thunder Lord",
            power: "Sonic Boom"
        },
        {
            id: 2,
            name: "Chronogusto",
            power: "The Winds of Time"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
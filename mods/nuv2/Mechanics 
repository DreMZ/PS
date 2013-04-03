        "waterpulse": {
                num: 352,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to one adjacent or non-adjacent target with a 10% chance to confuse it.",
                shortDesc: "20% chance to confuse the target.",
                id: "waterpulse",
                name: "Water Pulse",
                pp: 20,
                priority: 0,
                secondary: {
                        chance: 20,
                        volatileStatus: 'confusion'
                },
                target: "any",
                type: "Water"
        },
        
        
        "submission": {
                num: 66,
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 10% chance to flinch. If the target lost HP, the user takes recoil damage equal to 33% that HP, rounded half up, but not less than 1HP. Makes contact.",
                shortDesc: "Has 33% recoil. 10% chance to flinch.",
                id: "submission",
                isViable: true,
                name: "Submission",
                pp: 25,
                priority: 0,
                isContact: true,
                recoil: [33,100],
                secondary: {
                        chance: 10,
                        volatileStatus: 'flinch'
                },
                target: "normal",
                type: "Fighting"
        },
        
        
        "lunardance": {
                num: 461,
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "Raises the user's Special Attack and Speed by 1 stage.",
                shortDesc: "Boosts the user's Special Attack and Speed by 1.",
                id: "lunardance",
                isViable: true,
                name: "Lunar Dance",
                pp: 10,
                priority: 0,
                isSnatchable: true,
                boosts: {
                        spa: 1,
                        spe: 1
                },
                secondary: false,
                target: "self",
                type: "Psychic"
        },
        
        
        "airslash": {
                num: 403,
                accuracy: 95,
                basePower: 90,
                category: "Special",
                desc: "Deals damage to one adjacent or non-adjacent target with a 30% chance to flinch it.",
                shortDesc: "30% chance to flinch the target.",
                id: "airslash",
                isViable: true,
                name: "Air Slash",
                pp: 20,
                priority: 0,
                secondary: {
                        chance: 30,
                        volatileStatus: 'flinch'
                },
                target: "any",
                type: "Flying"
        },
  
        "leafguard": {
                desc: "If this Pokemon is active while Sunny Day is in effect, it recovers from poison, paralysis, burn, sleep and freeze at the end of the turn.",
                shortDesc: "This Pokemon has its status cured at the end of each turn if Sunny Day is active.",
                onResidualOrder: 5,
                onResidualSubOrder: 1,
                onResidual: function(pokemon) {
                        if (pokemon.status && this.isWeather('sunnyday')) {
                                this.debug('leafguard');
                                pokemon.cureStatus();
                        }
                },
                id: "leafguard",
                name: "Leaf Guard",
                rating: 2,
                num: 102
        },
        
        
        "reckless": {
                desc: "When this Pokemon uses an attack that causes recoil damage, or an attack that has a chance to cause recoil damage such as Jump Kick and Hi Jump Kick, the attacks's power receives a 50% boost.",
                shortDesc: "This Pokemon's attacks with recoil or crash damage do 1.5x damage; not Struggle.",
                onBasePower: function(basePower, attacker, defender, move) {
                        if (move.recoil || move.hasCustomRecoil) {
                                this.debug('Reckless boost');
                                return basePower * 15/10;
                        }
                },
                id: "reckless",
                name: "Reckless",
                rating: 3,
                num: 120
        },
        
        
        "telepathy": {
                desc: "When a Pokemon with Telepathy faints another Pokemon, its Special Attack rises by one stage.",
                shortDesc: "This Pokemon's Special Attack is boosted by 1 if it attacks and faints another Pokemon.",
                onSourceFaint: function(target, source, effect) {
                        if (effect && effect.effectType === 'Move') {
                                this.boost({spa:1}, source);
                        }
                },
                id: "telepathy",
                name: "Telepathy",
                rating: 4,
                num: 140
        },

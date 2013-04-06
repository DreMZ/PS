exports.BattleMovedex = {

stealthrock: {
        inherit: true,
        effect: {
            // this is a side condition
            onStart: function(side) {
                this.add('-sidestart',side,'move: Stealth Rock');
            },
            onSwitchIn: function(pokemon) {
                var typeMod = this.getEffectiveness('Rock', pokemon);
                var factor = 8;
                if (typeMod == 1) factor = 6;
                if (typeMod >= 2) factor = 4;
                if (typeMod == -1) factor = 16;
                if (typeMod <= -2) factor = 12;
                        //if (typeMod == 1) factor = 4;
                        //if (typeMod >= 2) factor = 2;
                        //if (typeMod == -1) factor = 16;
                        //if (typeMod <= -2) factor = 32;
                var damage = this.damage(pokemon.maxhp/factor);
            }
        }
    },

 shadowball: {
        inherit: true,
        basePower: 90,
          secondary: {
            chance: 10,
            boosts: {
            spd: -1
        }
  },
  "fissure": {
        num: 90,
        accuracy: 90,
        basePower: 140,
        category: "Physical",
        desc: "Deals damage to one adjacent target and lowers the user's Attack by 2 stages.",
        shortDesc: "Lowers the user's Atk by 2.",
        id: "fissure",
        name: "Fissure",
        pp: 5,
        priority: 0,
        self: {
        boosts: {
        atk: -2
        }
    },
    secondary: false,
    target: "normal",
    type: "Ground"
  },
  focusblast: {
        inherit: true,
        accuracy: 85,
        secondary: false
  },
    "lunardance": {
        num: 461,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. Fails if the user is the last unfainted Pokemon in its party.",
        shortDesc: "User faints. Replacement is fully healed, with PP.",
        id: "lunardance",
        isViable: true,
        name: "Lunar Dance",
        pp: 20,
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
    poisonjab: {
        inherit: true,
        basePower: 40,
        priority: 1,
        secondary: {
          chance: 10
        }
  },
  shadowpunch: {
          inherit: true,
          basePower: 75
  },
  ironhead: {
          inherit: true,
          basePower: 90,
          secondary: {
                chance: 10,
                volatileStatus: 'flinch'
          }
  },
        "venoshock": {
                num: 474,
                accuracy: 100,
                basePower: 85,
                category: "Special",
                desc: "Deals damage to one adjacent target. Often causes paralysis.",
                shortDesc: "Deals damage with 30% to paralyze foe.",
                id: "venoshock",
                name: "Venoshock",
                pp: 10,
                priority: 0,
                secondary: {
                        chance: 30,
                        Status: 'par'
                }
                target: "normal",
                type: "Poison"
        },
  sleeppowder: {
          inherit: true,
          accuracy: 80
  },
  hypnosis: {
          inherit: true,
          accuracy: 80
  },
          "blackhole": {
                num: -100,
                accuracy: 90,
                basePower: 140,
                category: "Special",
                desc: "Deals damage to one adjacent target and lowers the user's Special Attack by 2 stages.",
                shortDesc: "Lowers the user's Sp. Atk by 2.",
                id: "blackhole",
                isViable: true,
                name: "Black Hole",
                pp: 5,
                priority: 0,
                self: {
                        boosts: {
                                spa: -2
                        }
                },
                secondary: false,
                target: "normal",
                type: "Dark"
        },
          "gammastrike": {
                num: -101,
                accuracy: 90,
                basePower: 140,
                category: "Physical",
                desc: "Deals damage to one adjacent target and lowers the user's Attack by 2 stages.",
                shortDesc: "Lowers the user's Atk by 2.",
                id: "blackhole",
                isViable: true,
                name: "Black Hole",
                pp: 5,
                priority: 0,
                self: {
                        boosts: {
                                atk: -2
                        }
                },
                secondary: {
                        chance: 20,
                        Status: 'tox'
                target: "normal",
                type: "Poison"
        },
        "shieldbash": {
                num: -102,
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                defensiveCategory: "Physical",
                desc: "Deals damage to one adjacent target based on Defense instead of Attack.",
                shortDesc: "Damages based on Defense, not Atk.",
                id: "shieldbash",
                isViable: true,
                name: "Shield Bash",
                pp: 10,
                priority: 0,
                secondary: false,
                target: "normal",
                type: "Steel"
        },
    "lockon": {
        num: 199,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "Boosts Special Attack and Accuracy.",
        shortDesc: "Boosts SpA and Acc.",
        id: "lockon",
        isViable: true,
        name: "Lock-On",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          spa: 1,
          accuracy: 1
        },
        secondary: false,
        target: "self",
        type: "Normal"
  },
     "howl": {
        num: 336,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "Boosts Attack, Special Attack and Speed.",
        shortDesc: "Boosts Atk, SpA and Spe.",
        id: "howl",
        isViable: true,
        name: "Howl",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          atk: 1,
          spa: 1,
          spe: 1
        },
        secondary: false,
        target: "self",
        type: "Dark"
  },
     "sharpen": {
        num: 159,
        accuracy: true,
        basePower: 0,
        category: "Status",
        desc: "Boosts Attack by three stages.",
        shortDesc: "Boosts Atk by 3 stages.",
        id: "sharpen",
        isViable: true,
        name: "Sharpen",
        pp: 20,
        priority: 0,
        isSnatchable: true,
        boosts: {
          atk: 3
        },
        secondary: false,
        target: "self",
        type: "Steel"
  },
   flameburst: {
        inherit: true,
        basePower: 40,
        priority: 1,
        secondary: false,
        }
  },
  poisontail: {
          inherit: true,
          basePower: 95
  },
  stoneedge: {
          inherit: true,
          accuracy: 90,
          critRatio: 1
  },
  hex: {
          inherit: true,
          basePower: 60
  },
          "rage": {
                num: 99,
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "Deals damage to one adjacent target with a 50% chance to raise the user's Attack by 1 stage.",
                shortDesc: "50% chance to boost the user's Atk by 1.",
                id: "rage",
                isViable: true,
                name: "Rage",
                pp: 15,
                priority: 0,
                secondary: {
                        chance: 50,
                        self: {
                        boosts: {
                                atk: 1
                                }
                        }
                },
                target: "normal",
                type: "Normal"
        },
 }; 

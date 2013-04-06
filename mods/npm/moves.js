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
        basePower: 90
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
    lunardance: {
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
          chance: 10%
        }
  },
  


exports.BattleAbilities = {
  "healer": {
          desc: "Heals 1\/25 HP each turn.",
        shortDesc: "Heals 1\/25 HP each turn.",
        id: "healer",
        name: "Healer",
        onResidualOrder: 5,
        onResidualSubOrder: 1,
        onResidual: function(pokemon) {
          this.heal(pokemon.maxhp/25);
        },
        rating: 0,
        num: 131
  },
  "arcticrush": {
              desc: "If this Pokemon is active while Hail is in effect, its speed is temporarily increased by 50%. The Pokemon is also immune to Hail damage",
              shortDesc: "If Hail is active, this Pokemon's Speed is 1.5x. Immunity to Hail",
              onImmunity: function(type, pokemon) {
              if (type === 'hail') return false;
              },
              onModifySpe: function(spe, pokemon) {
              if (this.isWeather('hail')) {
              return spe * 1.5;
              }
        },
        id: "arcticrush",
        name: "Arctic Rush",
        rating: 2,
        num: -100
  },
  "swiftswim": {
        desc: "If this Pokemon is active while Rain Dance is in effect, its speed is temporarily increased by 50%.",
        shortDesc: "If Rain Dance is active, this Pokemon's Speed is 1.5x.",
        onModifySpe: function(spe, pokemon) {
          if (this.isWeather('raindance')) {
            return spe * 1.5;
            }
        },
        id: "swiftswim",
        name: "Swift Swim",
        rating: 2,
        num: 33
  },
  "chlorophyll": {
        desc: "If this Pokemon is active while Sunny Day is in effect, its speed is temporarily increased by 50%.",
        shortDesc: "If Sunny Day is active, this Pokemon's Speed is 1.5x.",
        onModifySpe: function(spe) {
          if (this.isWeather('sunnyday')) {
            return spe * 1.5;
            }
        },
        id: "chlorophyll",
        name: "Chlorophyll",
        rating: 2,
        num: 34
  },
  "sandrush": {
        desc: "If this Pokemon is active while Sandstorm is in effect, its speed is temporarily increased by 50%. The Pokemon is also immune to Sandstorm damage",
        shortDesc: "If Sandstorm is active, this Pokemon's Speed is 1.5x. Immunity to Sandstorm",
        onModifySpe: function(spe, pokemon) {
          if (this.isWeather('sandstorm')) {
            return spe * 1.5;
            }
        },
        onImmunity: function(type, pokemon) {
          if (type === 'sandstorm') return false;
        },
        id: "sandrush",
        name: "Sand Rush",
        rating: 2,
        num: 146
  },
  "lightmetal": {
        inherit: true,
        desc: "The user's speed is increased by 20%, and the user's weight is halved. The weight loss decreases the damage taken from Low Kick and Grass Knot, and also lowers user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
        shortDesc: "This Pokemon's speed is increased by 20%, and weight is halved.",
        onModifySpe: function(spe) {
          return spe * 1.2;
          }
  },
    "heavymetal": {
        inherit: true,
        desc: "The user's defense is increased by 20%, and the user's weight is doubled. The weight gain increases the damage given from Heavy Slam and Heat Crash, and also lowers user's base power of Heavy Slam and Heat Crash, due these moves being calculated by the target and user's weight.",
        shortDesc: "This Pokemon's defense is increased by 20%, and weight is doubled.",
        onModifyDef: function(def) {
          return def * 1.2;
          }
  }, 
  "wonderguard": {
        desc: "This Pokemon only receives damage from attacks belonging to types that cause Super Effective to this Pokemon. The user is also immune to Sandstorm, Hail, and all entry hazards. Wonder Guard cannot be Skill Swapped nor Role Played. Trace, however, does copy Wonder Guard.",
        shortDesc: "This Pokemon can only be damaged by super effective moves and is immune to some types of indirect damage.",
        onDamagePriority: 10,
        onDamage: function(damage, target, source, effect) {
          if (effect && (effect.id === 'stealthrock' || effect.id === 'spikes')) {
          return false;
          }
          if (effect.effectType !== 'Move') return;
          if (effect.type === '???' || effect.id === 'Struggle') return;
          this.debug('Wonder Guard immunity: '+effect.id);
          if (this.getEffectiveness(effect.type, target) <= 0) {
            this.add('-activate',target,'ability: Wonder Guard');
            return null;
            }
        },
        onSubDamage: function(damage, target, source, effect) {
          if (effect.effectType !== 'Move') return;
          if (target.negateImmunity[effect.type]) return;
          this.debug('Wonder Guard immunity: '+effect.id);
          if (this.getEffectiveness(effect.type, target) <= 0) {
            this.add('-activate',target,'ability: Wonder Guard');
            return null;
            }
        },
        onImmunity: function(type, pokemon) {
          if (type === 'sandstorm' || type === 'hail') return false;
        },
        id: "wonderguard",
        name: "Wonder Guard",
        rating: 5,
        num: 25
  },
  "zenmode": {
        desc: "When Darmanitan enters the battle, it will enter Zen Mode. This ability only works on Darmanitan, even if it is copied by Role Play, Entrainment, or swapped with Skill Swap.",
        shortDesc: "If this Pokemon is Darmanitan, it changes to Zen Mode.",
        onStart: function(pokemon) {
          if (pokemon.template.speciesid==='darmanitan' && pokemon.transformInto('Darmanitan-Zen')) {
          pokemon.transformed = false;
          this.add('-formechange', pokemon, 'Darmanitan-Zen');
          this.add('-message', 'Zen Mode triggered! (placeholder)');
            } else {
            return false;
            }
        },
        id: "zenmode",
        name: "Zen Mode",
        rating: 3,
        num: 161
  },
};
  "solarpower": {
        desc: "If this Pokemon is active while Sunny Day is in effect, its Special Attack temporarily receives a 30% boost.",
        shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.3x.",
        onModifySpA: function(spa, pokemon) {
          if (this.isWeather('sunnyday')) {
            return spa * 1.3;
            }
        },
        id: "solarpower",
        name: "Solar Power",
        rating: 1.5,
        num: 94
  },
    "snowcloak": {
        desc: "If this Pokemon is active while Hail is in effect, its Special Attack temporarily receives a 30% boost. ",
        shortDesc: "If Hail is active, this Pokemon's Sp. Atk is 1.3x.",
        onModifySpA: function(spa, pokemon) {
          if (this.isWeather('hail')) {
            return spa * 1.3;
            }
        },
        id: "snowcloak",
        name: "Snow Cloak",
        rating: 1.5,
        num: 81
  },
  "waterveil": {
        desc: "If this Pokemon is active while Rain Dance is in effect, its Special Attack temporarily receives a 30% boost.",
        shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.3x.",
        onModifySpA: function(spa, pokemon) {
          if (this.isWeather('raindance')) {
            return spa * 1.3;
            }
        },
        id: "waterveil",
        name: "Water Veil",
        rating: 1.5,
        num: 41
  },
  "sandforce": {
        desc: "If this Pokemon is active while Sandstorm is in effect, its Attack temporarily receives a 30% boost.",
        shortDesc: "If Sandstorm is active, this Pokemon's Atk is 1.3x.",
        onModifyAtk: function(atk, pokemon) {
          if (this.isWeather('sandstorm')) {
            return atk * 1.3;
            }
        },
        id: "sandforce",
        name: "Sand Force",
        rating: 1.5,
        num: 159
  },
  "solidify": {
        desc: "While this Pokemon is active, its Defense increases by one stage at the end of every turn; the six stage maximum for stat boosts is still in effect.",
        shortDesc: "This Pokemon's Defense is boosted by 1 at the end of each full turn on the field.",
        onResidualOrder: 26,
        onResidualSubOrder: 1,
        onResidual: function(pokemon) {
          if (pokemon.activeTurns) {
          this.boost({def:1});
          }
        },
        id: "solidify",
        name: "Solidify",
        rating: 4.5,
        num: -101
  },
  "filter": {
        desc: "This Pokemon receives one-half reduced damage from Super Effective attacks.",
        shortDesc: "This Pokemon receives one-half damage from super effective attacks.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (this.getEffectiveness(move.type, defender) > 0) {
            this.debug('Filter neutralize');
            return basePower * 1/2;
          }
        },
        id: "filter",
        name: "Filter",
        rating: 3,
        num: 111
  },
  "solidrock": {
        desc: "This Pokemon receives one-half reduced damage from Super Effective attacks.",
        shortDesc: "This Pokemon receives 1/2 damage from super effective attacks.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (this.getEffectiveness(move.type, defender) > 0) {
            this.debug('Solid Rock neutralize');
            return basePower * 1/2;
            }
        },
        id: "solidrock",
        name: "Solid Rock",
        rating: 3,
        num: 116
  },
  "gravotonize": {
        desc: "When this Pokemon enters the battlefield, it causes a 5-turn Gravity.",
        shortDesc: "On switch-in, this Pokemon summons Gravity for 5 turns.",
        onStart: function(source) {
          this.setWeather('gravity');
          this.weatherData.duration = 5;
        },
        id: "gravotonize",
        name: "Gravotonize",
        rating: 5,
        num: -102
  },
  "trickster": {
        desc: "When this Pokemon enters the battlefield, it causes a 5-turn Trick Room.",
        shortDesc: "On switch-in, this Pokemon summons Trick Room for 5 turns.",
        onStart: function(source) {
          this.setWeather('trickroom');
          this.weatherData.duration = 5;
        },
        id: "trickster",
        name: "Trickster",
        rating: 5,
        num: -103
  },
  "ancientwind": {
        desc: "When this Pokemon enters the battlefield, it causes a 4-turn Tailwind.",
        shortDesc: "On switch-in, this Pokemon summons Tailwind for 4 turns.",
        onStart: function(source) {
          this.setWeather('tailwind');
          this.weatherData.duration = 4;
        },
        id: "ancientwind",
        name: "Ancient Wind",
        rating: 5,
        num: -104
  },
  "dauntless": {
        desc: "When a Pokemon with Dauntless faints another Pokemon, its Special Attack rises by one stage.",
        shortDesc: "This Pokemon's Special Attack is boosted by 1 if it attacks and faints another Pokemon.",
        onSourceFaint: function(target, source, effect) {
          if (effect && effect.effectType === 'Move') {
            this.boost({spa:1}, source);
            }
        },
        id: "dauntless",
        name: "Dauntless",
        rating: 4,
        num: -105
  },
  "adrenaline": {
        desc: "When a Pokemon with Adrenaline faints another Pokemon, its Speed rises by one stage.",
        shortDesc: "This Pokemon's Speed is boosted by 1 if it attacks and faints another Pokemon.",
        onSourceFaint: function(target, source, effect) {
          if (effect && effect.effectType === 'Move') {
            this.boost({spe:1}, source);
            }
        },
        id: "adrenaline",
        name: "Adrenaline",
        rating: 4,
        num: -106
  },
  "purepower": {
        desc: "This Pokemon's Special Attack stat is doubled. Therefore, if this Pokemon's Special Attack stat on the status screen is 200, it effectively has an Attack stat of 400; which is then subject to the full range of stat boosts and reductions.",
        shortDesc: "This Pokemon's Special Attack is doubled.",
        onModifySpA: function(spa) {
        return spa * 2;
        },
        id: "purepower",
        name: "Pure Power",
        rating: 5,
        num: 74
  },
  "caution": {
        desc: "If this Pokemon switches into an opponent with equal Offenses or higher Attack than Special Attack, this Pokemon's Defense receives a 50% boost. If this Pokemon switches into an opponent with higher Special Attack than ATtack, this Pokemon's Special Defense receive a 50% boost.",
        shortDesc: "On switch-in, Defense or Sp. Def is boosted by 1 based on the foes' weaker Offense.",
        onStart: function (pokemon) {
          var foeactive = pokemon.side.foe.active;
          var totalatk = 0;
          var totalspa = 0;
          for (var i=0; i<foeactive.length; i++) {
          if (!foeactive[i] || foeactive[i].fainted) continue;
        totalatk += foeactive[i].getStat('atk');
        totalspa += foeactive[i].getStat('spa');
        }
          if (totalatk && totalatk >= totalspa) {
          this.boost({spd:1});
          } else if (totalspa) {
          this.boost({def:1});
          }
        },
        id: "caution",
        name: "Caution",
        rating: 4,
        num: -107
  },
  "icebody": {
        desc: "If active while Hail is in effect, this Pokemon recovers one-twelfth of its max HP after each turn. If a non-Ice-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Hail.",
        shortDesc: "If Hail is active, this Pokemon heals 1/12 of its max HP each turn; immunity to Hail.",
        onWeather: function(target, source, effect) {
          if (effect.id === 'hail') {
          this.heal(target.maxhp/12);
          }
        },
        onImmunity: function(type, pokemon) {
        if (type === 'hail') return false;
        },
        id: "icebody",
        name: "Ice Body",
        rating: 3,
        num: 115
  },
    "sandveil": {
        desc: "If active while Snadstorm is in effect, this Pokemon recovers one-twelfth of its max HP after each turn. If a non-Rock, Ground, or Steel-type Pokemon receives this ability through Skill Swap, Role Play or the Trace ability, it will not take damage from Sandstorm.",
        shortDesc: "If Sadnstorm is active, this Pokemon heals 1/12 of its max HP each turn; immunity to Sandstorm.",
        onWeather: function(target, source, effect) {
          if (effect.id === 'sandstorm') {
          this.heal(target.maxhp/12);
          }
        },
        onImmunity: function(type, pokemon) {
        if (type === 'sandstorm') return false;
        },
        id: "sandveil",
        name: "Sand Veil",
        rating: 3,
        num: 115
  },
  "raindish": {
        desc: "If active while Rain Dance is in effect, this Pokemon recovers one-twelfth of its max HP after each turn.",
        shortDesc: "If Rain Dance is active, this Pokemon heals 1/12 of its max HP each turn.",
        onWeather: function(target, source, effect) {
          if (effect.id === 'raindance') {
          this.heal(target.maxhp/12);
          }
        },
        id: "raindish",
        name: "Rain Dish",
        rating: 3,
        num: 115
  },
  "illuminate": {
        desc: "Raises this Pokemon's (and it's allies') accuracy by 20% (multiplied).",
        shortDesc: "This Pokemon's and its allies' moves have their accuracy boosted to 1.2x.",
        onAllyModifyMove: function(move) {
          if (typeof move.accuracy === 'number') {
          move.accuracy *= 1.2;
          }
        },
        id: "illuminate",
        name: "Illuminate",
        rating: 2,
        num: 35
  },
  "marvelscale": {
        desc: "Doubles damage given when at maximum HP.",
        shortDesc: "If this Pokemon is at full HP, it deals double damage with attacks.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (attacker.hp >= attacker.maxhp) {
            this.debug('Marvel Scale boost');
           onModifySpA: function(spa) {
        return spa * 2;
           onModifyAtk: function(atk) {
        return atk * 2;
            }
        },
        id: "marvelscale",
        name: "Marvel Scale",
        rating: 4,
        num: 63
  },
  "machscale": {
        desc: "Doubles speed when at maximum HP.",
        shortDesc: "If this Pokemon is at full HP, it has doubled speed.",
        onSourceBasePower: function(basePower, attacker, defender, move) {
          if (attacker.hp >= attacker.maxhp) {
            this.debug('Mach Scale boost');
            onModifySpe: function(spe) {
        return spe * 2;
            }
        },
        id: "marvelscale",
        name: "Marvel Scale",
        rating: 4,
        num: -108
  },
  "tempest": {
        desc: "When this Pokemon enters the field, Water and Flying-type opponents cannot switch out nor flee the battle unless they are holding Shed Shell or use the attacks U-Turn or Baton Pass.",
        shortDesc: "Prevents Water and Flying-type foes from switching out normally.",
        onFoeModifyPokemon: function(pokemon) {
          if (pokemon.hasType('Water')) {
          if (pokemon.hasType('Water')) {
          pokemon.trapped = true;
          }
        },
        id: "tempest",
        name: "Tempest",
        rating: 5,
        num: -109
  },

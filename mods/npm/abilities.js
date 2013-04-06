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
        num: 165
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

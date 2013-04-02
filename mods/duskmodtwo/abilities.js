exports.BattleAbilities = {
	"bigpecks": {
		inherit: true,
		onBoost: function(boost) {
			if (boost['def'] && boost['def'] < 0) {
				boost['def'] *= -1;
			}
		}
	},
	"colorchange": {
		desc: "This Pokemon's secondary type changes according to it's most powerful attack.",
		shortDesc: "This Pokemon's secondary type changes according to it's most powerful attack.",
		onStart: function(pokemon) {
			var move = this.getMove(pokemon.moveset[0].move);
			if (pokemon.types[0] != move.type) {
				pokemon.types[1] = move.type;
				this.add('-message', pokemon.name+' changed its color!');
			}
		},
		id: "colorchange",
		name: "Color Change",
		rating: 4,
		num: 16
	},
	"healer": {
		desc: "Heals 1\/16 HP each turn.",
		shortDesc: "Heals 1\/16 HP each turn.",
		id: "healer",
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			this.heal(pokemon.maxhp/16);
		},
		rating: 0,
		num: 131
	},
	"hustle": {
		desc: "This Pokemon's Attack receives a 50% boost but it takes 20% more damage from attacks.",
		shortDesc: "This Pokemon's Attack is 1.5x and it takes 20% more incoming damage.",
		onModifyAtk: function(atk) {
			return atk * 1.5;
		},
		onSourceBasePower: function(basePower, attacker, defender, move) {
			return basePower * 1.2;
		},
		id: "hustle",
		name: "Hustle",
		rating: 3,
		num: 55
	},
	"justified": {
		desc: "When a Pokemon with Justified is hit with a Dark-type attack, its attack is increased by one level, and the move itself has no effect. If hit by a multi-hit attack like Beat Up, it will increase attack by one stage for each hit. The only Dark-type move that will not activate Sap Sipper is Aromatherapy.",
		shortDesc: "This Pokemon's Attack is boosted by 1 if hit by any Dark move; Dark immunity.",
		onTryHit: function(target, source, move) {
			if (target !== source && move.type === 'Dark') {
				this.boost({atk:1});
				return null;
			}
		},
		id: "justified",
		name: "Justified",
		rating: 2,
		num: 154
	},
	"mummy": {
		inherit: true,
		onResidual: function(pokemon) {
			if (!pokemon.hasType('Ghost')) {
				this.damage(pokemon.maxhp/16);
			}
		}
	},
	"pickup": {
		desc: "Removes hazards on switch-in.",
        shortDesc: "Removes hazards on switch-in.",
		onStart: function(pokemon) {
			var sideConditions = {spikes:1, toxicspikes:1, stealthrock:1};
			for (var i in sideConditions) {
				if (pokemon.hp && pokemon.side.removeSideCondition(i)) {
					this.add('-message', pokemon.name+' picked up the hazards from the battlefield!');
		},
		id: "pickup",
		name: "Pickup",
		rating: 0,
		num: 53
	},
	"snowcloak": {
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
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 2,
		num: 81
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
	}
};

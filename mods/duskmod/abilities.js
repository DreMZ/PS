exports.BattleAbilities = {
	"heatproof": {
		inherit: true,
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Heatproof weaken');
				return basePower / 4;
			}
		}
	},
	"mummy": {
		inherit: true,
		onResidual: function(pokemon) {
			if (!pokemon.hasType('Ghost')) {
				this.damage(pokemon.maxhp/8);
			}
		}
	},
	"turboblaze": {
		desc: "When this Pokemon becomes active, it nullifies the abilities of opposing active Pokemon that hinder this Pokemon's attacks. These abilities include Battle Armor, Clear Body, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Heatproof, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Lightningrod, Limber, Magma Armor, Marvel Scale, Motor Drive, Oblivious, Own Tempo, Sand Veil, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke and Wonder Guard.",
		shortDesc: "This Pokemon's moves ignore the target's Ability if it could modify the effectiveness.",
		onImmunity: function(type, pokemon) {
			if (type === 'Fire') {
				this.boost({spe:1});
				return null;
			}
		},
		id: "turboblaze",
		name: "Turboblaze",
		rating: 3,
		num: 163
	},
	"teravolt": {
		desc: "When this Pokemon becomes active, it nullifies the abilities of opposing active Pokemon that hinder this Pokemon's attacks. These abilities include Battle Armor, Clear Body, Damp, Dry Skin, Filter, Flash Fire, Flower Gift, Heatproof, Hyper Cutter, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Lightningrod, Limber, Magma Armor, Marvel Scale, Motor Drive, Oblivious, Own Tempo, Sand Veil, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Tangled Feet, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Veil, White Smoke and Wonder Guard.",
		shortDesc: "This Pokemon's moves ignore the target's Ability if it could modify the effectiveness.",
		onImmunity: function(type, pokemon) {
			if (type === 'Electric') {
				this.boost({atk:1});
				return null;
			}
		},
		id: "teravolt",
		name: "Teravolt",
		rating: 3,
		num: 164
	},
	"healer": {
		desc: "Has a 30% chance of curing an adjacent ally's status ailment at the end of each turn in Double and Triple Battles.",
		shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
		id: "healer",
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			this.heal(clampIntRange(pokemon.maxhp/25, 1));
		},
		rating: 0,
		num: 131
	},
	"snowcloak": {
		desc: "If active while Hail is in effect, this Pokemon's Evasion receives a 20% boost; if this Pokemon has a typing that would normally take damage from Hail, this Pokemon is also immune to Hail's damage.",
		shortDesc: "If Hail is active, this Pokemon's evasion is 1.25x; immunity to Hail.",
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		onModifyStats: function(stats, pokemon) {
			if (this.isWeather('hail')) {
				stats.spe *= 1.5;
			}
		},
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 2,
		num: 81
	},
	"swiftswim": {
		inherit: true,
		onModifyStats: function(stats, pokemon) {
			if (this.isWeather('raindance')) {
				stats.spe *= 1.5;
			}
		}
	},
	"chlorophyll": {
		inherit: true,
		onModifyStats: function(stats, pokemon) {
			if (this.isWeather('sunnyday')) {
				stats.spe *= 1.5;
			}
		}
	},
	"sandrush": {
		inherit: true,
		onModifyStats: function(stats, pokemon) {
			if (this.isWeather('sandstorm')) {
				stats.spe *= 1.5;
			}
		}
	},
	"leafguard": {
		desc: "If this Pokemon is active while Sunny Day is in effect, it cannot become poisoned, burned, paralyzed or put to sleep (other than user-induced Rest). Leaf Guard does not heal status effects that existed before Sunny Day came into effect.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.isWeather('sunnyday')) {
				this.debug('Leaf Guard weaken');
				return basePower*2/3;
			}
		},
		id: "leafguard",
		name: "Leaf Guard",
		rating: 3,
		num: 102
	},
	"flowergift": {
		desc: "If this Pokemon is active while Sunny Day is in effect, its Attack and Special Defense stats (as well as its partner's stats in double battles) receive a 50% boost.",
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
		onWeather: function(target, source, effect) {
			if (effect.id === 'sunnyday') {
				this.heal(target.maxhp/16);
			}
		},
		id: "flowergift",
		name: "Flower Gift",
		rating: 3,
		num: 122
	},
	"angerpoint": {
		desc: "If this Pokemon, or its Substitute, is struck by a Critical Hit, its Attack is boosted to six stages.",
		shortDesc: "If this Pokemon (not a Substitute) is hit by a critical hit, its Attack is boosted by 12.",
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.category === "Physical" && attacker.hp <= attacker.maxhp/2) {
				this.debug('Anger Point boost');
				return basePower * 1.5;
			}
		},
		id: "angerpoint",
		name: "Anger Point",
		rating: 2,
		num: 83
	},
	"cloudnine": {
		inherit: true,
		onStart: function(pokemon) {
			this.setWeather('');
		}
	},
	"magmaarmor": {
		inherit: true,
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Water') {
				this.debug('Magma Armor weaken');
				return basePower / 2;
			}
		},
	},
	"toxicboost": {
		desc: "When the user is poisoned, its Attack stat is raised by 50%.",
		shortDesc: "When this Pokemon is poisoned, its physical attacks do 1.5x damage.",
		onModifyStats: function(stats, pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				stats.def *= 1.3,
				stats.spd *= 1.3;
			}
		},
		onDamage: function(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				return false;
			}
		},
		id: "toxicboost",
		name: "Toxic Boost",
		rating: 3,
		num: 137
	},
	"wonderskin": {
		desc: "This Pokemon cannot be put to sleep, burned, poisoned, or paralyzed; this includes both opponent-induced statuses as well as user-induced statuses.",
		shortDesc: "This Pokemon cannot be statused. Gaining this Ability while inflicted cures it.",
		onUpdate: function(pokemon) {
			if (pokemon.status === 'slp' || pokemon.status === 'brn' || pokemon.status === 'psn' || pokemon.status === 'tox' || pokemon.status === 'par') {
				pokemon.cureStatus();
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'slp' || type === 'brn' || type === 'psn' || type === 'tox' || type === 'par') return false;
		},
		id: "wonderskin",
		name: "Wonder Skin",
		rating: 1,
		num: 147
	},
	"oblivious": {//REWORK: This pokemon's stats cannot be lowered.
		desc: "This pokemon's stats cannot be lowered.",
		shortDesc: "This pokemon's stats cannot be lowered.",
		onBoost: function(boost) {
			for (var i in boost) {
				if (boost[i] < 0)
				boost[i] = 0;
			}
		},
		id: "oblivious",
		name: "Oblivious",
		rating: 0.5,
		num: 12
	},
	"battlearmor": {//REWORK: Resisted hits do 2/3 damage
		desc: "Not very effective hits do two thirds damage to this pokemon.",
		shortDesc: "Resisted hits do 2/3 damage to this pokemon.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) < 0) {
				this.debug('Battle Armor Weaken');
				return basePower*2/3;
			}
		},
		id: "battlearmor",
		name: "Battle Armor",
		rating: 1,
		num: 4
	},
	"shellarmor": {//REWORK: Resisted hits do 2/3 damage
		desc: "Not very effective hits do two thirds damage to this pokemon.",
		shortDesc: "Resisted hits do 2/3 damage to this pokemon.",
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) < 0) {
				this.debug('Shell Armor Weaken');
				return basePower*2/3;
			}
		},
		id: "shellarmor",
		name: "Shell Armor",
		rating: 1,
		num: 75
	},
	"poisontouch": {//50% chance to badly poison
		desc: "The contact-based attacks from a Pokemon with Poison Touch have a 30% chance of poisoning the target.",
		shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
		onModifyMove: function(move) {
			if (!move || !move.isContact) return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 50,
				status: 'tox'
			});
		},
		id: "poisontouch",
		name: "Poison Touch",
		rating: 2,
		num: 143
	},
	"defeatist": {//cuts defenses rather than offenses
		inherit: true,
		onModifyStats: function(stats, pokemon) {
			if (pokemon.hp < pokemon.maxhp/2) {
				stats.def /= 2;
				stats.spd /= 2;
			}
		},
		onResidual: function(pokemon) {
			pokemon.update();
		},
		id: "defeatist",
		name: "Defeatist",
		rating: -1,
		num: 129
	},
	"tangledfeet": {//confusion boosts speed, cannot hit self
		desc: "When this Pokemon is confused, its opponent's attacks have a 50% chance of missing.",
		shortDesc: "This Pokemon's evasion is doubled as long as it is confused.",
		onModifyStats: function(stats, pokemon) {
			if (pokemon.volatiles['confusion']) {
				stats.spe *= 1.5;
			}
		}
	},
	"synchronize": {//now works with sleep.
		inherit: true,
		onAfterSetStatus: function(status, target, source) {
			if (!source || source === target) return;
			source.trySetStatus(status);
		}
	},
	"infiltrator": {
		inherit: true,
		onModifyMove: function(move) {
			move.breaksProtect = true;
		}
	},	
};

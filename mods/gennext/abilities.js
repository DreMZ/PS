exports.BattleAbilities = {
	"drizzle": {
		inherit: true,
		onStart: function(source) {
			this.setWeather('raindance', source, null);
		}
	},
	"drought": {
		inherit: true,
		onStart: function(source) {
			this.setWeather('sunnyday', source, null);
		}
	},
	"snowwarning": {
		inherit: true,
		onStart: function(source) {
			this.setWeather('hail', source, null);
		}
	},
	"sandstream": {
		inherit: true,
		onStart: function(source) {
			this.setWeather('sandstorm', source, null);
		}
	},
	"forecast": {
		inherit: true,
		onModifyMove: function(move) {
			if (move.weather) {
				var weather = move.weather;
				move.weather = null;
				move.onHit = function(target, source) {
					this.setWeather(weather, source, this.getAbility('forecast'));
					this.weatherData.duration = 0;
				};
				move.target = 'self';
			}
		}
	},
	"thickfat": {
		inherit:true,
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire' || move.type === 'Fighting') {
				this.debug('Thick Fat weaken');
				return basePower / 2;
			}
		}
	},
	"marvelscale": {
		inherit:true,
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		}
	},
	"snowcloak": {
		inherit: true,
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		onSourceBasePower: function(basePower) {
			if (this.isWeather('hail')) {
				return basePower * 3/4;
			}
			return basePower * 7/8;
		},
		onAccuracy: function() {}
	},
	"sandveil": {
		inherit: true,
		onImmunity: function(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onSourceBasePower: function(basePower) {
			if (this.isWeather('sandstorm')) {
				return basePower * 4/5;
			}
		},
		onAccuracy: function() {}
	},
	"waterveil": {
		inherit: true,
		onSourceBasePower: function(basePower) {
			if (this.isWeather('raindance')) {
				return basePower * 4/5;
			}
		}
	},
	"icebody": {
		inherit: true,
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		onResidual: function(target, source, effect) {
			this.heal(target.maxhp/16);
		},
		onAfterDamage: function(damage, target, source, move) {
			if (move && move.isContact && this.isWeather('hail')) {
				if (this.random(10) < 3) {
					source.trySetStatus('frz', target, move);
				}
			}
		},
		onWeather: function() {}
	},
	"flowergift": {
		inherit: true,
		onModifyMove: function(move) {
			if (move.id === 'sunnyday') {
				var weather = move.weather;
				move.weather = null;
				move.onHit = function(target, source) {
					this.setWeather(weather, source, this.getAbility('flowergift'));
					this.weatherData.duration = 0;
				};
				move.target = 'self';
				move.sideCondition = 'flowergift';
			}
		},
		onModifyStats: function(stats, pokemon) {
			if (this.isWeather('sunnyday')) {
				if (pokemon.isActive && pokemon.speciesid === 'cherrim' && this.effectData.forme !== 'Sunshine') {
					this.effectData.forme = 'Sunshine';
					this.add('-formechange', pokemon, 'Cherrim-Sunshine');
					this.add('-message', pokemon.name+' transformed! (placeholder)');
					this.boost({spd:1});
				}
			} else if (pokemon.isActive && pokemon.speciesid === 'cherrim' && this.effectData.forme) {
				delete this.effectData.forme;
				this.add('-formechange', pokemon, 'Cherrim');
				this.add('-message', pokemon.name+' transformed! (placeholder)');
			}
		},
		effect: {
			onSwitchInPriority: 1,
			onSwitchIn: function(target) {
				if (!target.fainted) {
					this.boost({spd:1}, target, target, this.getAbility('flowergift'));
				}
				target.side.removeSideCondition('flowergift');
			}
		}
	},
	"slowstart": {
		inherit: true,
		effect: {
			duration: 2,
			onStart: function(target) {
				this.add('-start', target, 'Slow Start');
			},
			onModifyStats: function(stats) {
				stats.atk /= 2;
				stats.spe /= 2;
			},
			onEnd: function(target) {
				this.add('-end', target, 'Slow Start');
			}
		}
	},
	"compoundeyes": {
		desc: "The accuracy of this Pokemon's moves receives a 60% increase; for example, a 50% accurate move becomes 80% accurate.",
		shortDesc: "This Pokemon's moves have their Accuracy boosted to 1.6x.",
		onModifyMove: function(move) {
			if (typeof move.accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			move.accuracy *= 1.6;
		},
		id: "compoundeyes",
		name: "Compoundeyes",
		rating: 3.5,
		num: 14
	},
	"solidrock": {
		inherit: true,
		onFoeBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) > 0) {
				this.debug('Solid Rock neutralize');
				return basePower * 1/2;
			}
		}
	},
	"filter": {
		inherit: true,
		onFoeBasePower: function(basePower, attacker, defender, move) {
			if (this.getEffectiveness(move.type, defender) > 0) {
				this.debug('Solid Rock neutralize');
				return basePower * 1/2;
			}
		}
	},
	"reckless": {
		inherit: true,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil || attacker.item === 'lifeorb') {
				this.debug('Reckless boost');
				return basePower * 12/10;
			}
		}
	},
	"clearbody": {
		inherit: true,
		onBoost: function(boost, target, source) {
			for (var i in boost) {
				if (boost[i] < 0) {
					delete boost[i];
					this.add("-message", target.name+"'s stats were not lowered! (placeholder)");
				}
			}
		}
	},
	"rockhead": {
		inherit: true,
		onModifyMove: function(move) {
			delete move.recoil;
		},
		onDamage: function(damage, target, source, effect) {
			if (effect && effect.id === 'lifeorb') return false;
		}
	},
	"download": {
		inherit: true,
		onStart: function (pokemon) {
			if (pokemon.template.id === 'genesect') {
				if (!pokemon.getItem().onDrive) return;
			}
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i=0; i<foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].stats.def;
				totalspd += foeactive[i].stats.spd;
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa:1});
			} else if (totalspd) {
				this.boost({atk:1});
			}
		}
	},
	"victorystar": {
		inherit: true,
		onAllyModifyMove: function(move) {
			if (typeof move.accuracy === 'number') {
				move.accuracy *= 1.5;
			}
		}
	},
	"shellarmor": {
		inherit: true,
		onDamage: function(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				damage -= target.maxhp/8;
				if (damage < 0) damage = 0;
				return damage;
			}
		},
		onHit: function(target, source, move) {
			if (move.id === 'shellsmash') {
				target.setAbility('');
			}
		}
	},
	"battlearmor": {
		inherit: true,
		onDamage: function(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				damage -= target.maxhp/8;
				if (damage < 0) damage = 0;
				return damage;
			}
		}
	},
	"weakarmor": {
		onDamage: function(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				damage -= target.maxhp/8;
				if (damage < 0) damage = 0;
				target.setAbility('');
				this.boost({spe: 1});
				return damage;
			}
		},
		onAfterDamage: function() {}
	},
	"magmaarmor": {
		inherit: true,
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		onDamage: function(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				damage -= target.maxhp/8;
				if (damage < 0) damage = 0;
				if (effect.type === 'Ice' || effect.type === 'Water') {
					this.add('-activate', target, 'ability: Magma Armor');
					target.setAbility('battlearmor');
					damage = 0;
				}
				return damage;
			}
		}
	},
	"multiscale": {
		inherit: true,
		onSourceBasePower: function(basePower, attacker, defender, move) {
			if (defender.hp >= defender.maxhp) {
				this.debug('Multiscale weaken');
				return basePower*2/3;
			}
		}
	},
	"ironfist": {
		inherit: true,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.isPunchAttack) {
				return basePower * 13/10;
			}
		}
	},
	"stench": {
		inherit: true,
		onModifyMove: function(move) {
			if (move.category !== "Status") {
				this.debug('Adding Stench flinch');
				if (!move.secondaries) move.secondaries = [];
				for (var i=0; i<move.secondaries.length; i++) {
					if (move.secondaries[i].volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 40,
					volatileStatus: 'flinch'
				});
			}
		}
	},
	"aftermath": {
		inherit: true,
		onFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move' && source) {
				this.damage(source.maxhp/3, source, target);
			}
		}
	},
	"cursedbody": {
		desc: "When this Pokemon faints, attacker is Cursed.",
		shortDesc: "When this Pokemon faints, attacker is Cursed.",
		onFaint: function(target, source, effect) {
			if (effect && effect.effectType === 'Move' && source) {
				source.addVolatile('curse');
			}
		},
		id: "cursedbody",
		name: "Cursed Body",
		rating: 3,
		num: 130
	},
	"gluttony": {
		inherit: true,
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual: function(pokemon) {
			if (!pokemon.gluttonyFlag && !pokemon.item && this.getItem(pokemon.lastItem).isBerry) {
				pokemon.gluttonyFlag = true;
				pokemon.setItem(pokemon.lastItem);
				this.add("-item", pokemon, pokemon.item, '[from] ability: Gluttony');
			}
		}
	},
	"guts": {
		inherit: true,
		onDamage: function(damage, attacker, defender, effect) {
			if (effect && (effect.id === 'brn' || effect.id === 'psn' || effect.id === 'tox')) {
				return damage / 2;
			}
		}
	},
	"quickfeet": {
		inherit: true,
		onDamage: function(damage, attacker, defender, effect) {
			if (effect && (effect.id === 'brn' || effect.id === 'psn' || effect.id === 'tox')) {
				return damage / 2;
			}
		}
	},
	"toxicboost": {
		inherit: true,
		onDamage: function(damage, attacker, defender, effect) {
			if (effect && (effect.id === 'psn' || effect.id === 'tox')) {
				return damage / 2;
			}
		}
	},
	"truant": {
		onModifyMove: function(move, pokemon) {
			if (!move.self) move.self = {};
			if (!move.self.volatileStatus) move.self.volatileStatus = 'truant';
		},
		effect: {
			duration: 2,
			onStart: function(pokemon) {
				this.add('-start', pokemon, 'Truant');
			},
			onBeforeMove: function(pokemon, target, move) {
				if (pokemon.removeVolatile('truant')) {
					this.add('cant', pokemon, 'ability: Truant');
					pokemon.movedThisTurn = true;
					this.heal(pokemon.maxhp/3);
					return false;
				}
			}
		}
	},
	"flareboost": {
		inherit: true,
		onDamage: function(damage, defender, attacker, effect) {
			if (effect && (effect.id === 'brn')) {
				return damage / 2;
			}
		}
	},
	"telepathy": {
		inherit: true,
		onStart: function(target) {
			this.add('-start', target, 'move: Imprison');
		},
		onFoeModifyPokemon: function(pokemon) {
			var foeMoves = this.effectData.source.moveset;
			for (var f=0; f<foeMoves.length; f++) {
				pokemon.disabledMoves[foeMoves[f].id] = true;
			}
		},
		onFoeBeforeMove: function(attacker, defender, move) {
			if (attacker.disabledMoves[move.id]) {
				this.add('cant', attacker, 'move: Imprison', move);
				return false;
			}
		}
	},
	"justified": {
		inherit: true,
		onBasePowerPriority: 100,
		onBasePower: function(power, attacker, defender) {
			if (power > 100 && !defender.hasType('Dark')) {
				this.debug('capping base power at 100');
				return 100;
			}
		}
	}
};

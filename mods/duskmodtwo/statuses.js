function clampIntRange(num, min, max) {
	num = Math.floor(num);
	if (num < min) num = min;
	if (typeof max !== 'undefined' && num > max) num = max;
	return num;
}
exports.BattleStatuses = {
	slp: {
		effectType: 'Status',
		onStart: function(target) {
			this.add('-status', target, 'slp');
			// 3 turns
			this.effectData.startTime = 3;
			this.effectData.time = this.effectData.startTime;
		},
		onResidualOrder: 9,
		onResidual: function(pokemon) {
			pokemon.statusData.time--;
			if (pokemon.statusData.time > 0) this.add('-message', pokemon.name+' is still in a deep sleep!');
			else this.add('-message', pokemon.name+' is starting to wake up!');
		},
		onBeforeMovePriority: 2,
		onBeforeMove: function(pokemon, target, move) {
			if (pokemon.statusData.time <= 0) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon.id, 'slp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		}
	},
	raindance: {
		inherit: true,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('rain water boost');
				return basePower * 1.3;
			}
			if (move.type === 'Fire') {
				this.debug('rain fire suppress');
				return basePower * .7;
			}
		}
	},
	sunnyday: {
		inherit: true,
		onBasePower: function(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return basePower * 1.3;
			}
			if (move.type === 'Water') {
				this.debug('Sunny Day water suppress');
				return basePower * .7;
			}
		}
	},
	hail: {
		inherit: true,
		onModifyStats: function(stats, pokemon) {
			if (pokemon.hasType('Ice')) {
				stats.def *= 3/2;
			}
		}
	},
	partiallytrapped: { //grip claw no longer increases the amount of turns
		inherit: true,
		durationCallback: function(target, source) {
			return this.random(5,7);
		}
	},
	lockedmove: {
		inherit: true,
		durationCallback: function() {
			return 3;
		}
	}
};

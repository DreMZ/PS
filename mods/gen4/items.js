exports.BattleItems = {
	"custapberry": {
		id: "custapberry",
		name: "Custap Berry",
		spritenum: 86,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost"
		},
		onBeforeTurn: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'Gluttony')) {
				var decision = this.willMove(pokemon);
				if (!decision) return;
				this.addQueue({
					choice: 'event',
					event: 'Custap',
					priority: decision.priority + .1,
					pokemon: decision.pokemon,
					move: decision.move,
					target: decision.target
				});
			}
		},
		onCustap: function(pokemon) {
			var decision = this.willMove(pokemon);
			this.debug('custap decision: '+decision);
			if (decision) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			var decision = this.willMove(pokemon);
			this.debug('custap eaten: '+decision);
			if (decision) {
				this.cancelDecision(pokemon);
				this.add('r-custap '+pokemon.id);
				this.runDecision(decision);
			}
		},
		desc: "Activates at 25% HP. Next move used goes first. One-time use."
	},
	"mentalherb": {
		id: "mentalherb",
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
			effect: function(pokemon) {
				pokemon.removeVolatile('attract');
			}
		},
		onUpdate: function(pokemon) {
			if (pokemon.volatiles.attract && pokemon.useItem()) {
				pokemon.removeVolatile('attract');
			}
		},
		desc: "Cures infatuation. One-time use."
	},
	"metronome": {
		inherit: true,
		effect: {
			onBasePower: function(basePower, pokemon, target, move) {
				if (pokemon.item !== 'metronome') {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (!this.effectData.move || this.effectData.move !== move.id) {
					this.effectData.move = move.id;
					this.effectData.numConsecutive = 0;
				} else if (this.effectData.numConsecutive < 10) {
					this.effectData.numConsecutive++;
				}
				return basePower * (1+(this.effectData.numConsecutive/10));
			}
		}
	}
};

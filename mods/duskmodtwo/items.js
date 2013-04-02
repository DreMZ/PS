exports.BattleItems = {				
	"silkscarf": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Normal')
				return basePower * 1.3;
		}
	},
	"flameplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Fire')
				return basePower * 1.3;
		}
	},
	"fistplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Fighting')
				return basePower * 1.3;
		}
	},
	"splashplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Water')
				return basePower * 1.3;
		}
	},
	"meadowplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Grass')
				return basePower * 1.3;
		}
	},
	"toxicplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Poison')
				return basePower * 1.3;
		}
	},
	"zapplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Electric')
				return basePower * 1.3;
		}
	},
	"earthplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Ground')
				return basePower * 1.3;
		}
	},
	"mindplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Psychic')
				return basePower * 1.3;
		}
	},
	"stoneplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Rock')
				return basePower * 1.3;
		}
	},
	"icicleplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Ice')
				return basePower * 1.3;
		}
	},
	"insectplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Bug')
				return basePower * 1.3;
		}
	},
	"dracoplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Dragon')
				return basePower * 1.3;
		}
	},
	"spookyplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Ghost')
				return basePower * 1.3;
		}
	},
	"dreadplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Dark')
				return basePower * 1.3;
		}
	},
	"ironplate": {
		inherit: true,
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Steel')
				return basePower * 1.3;
		}
	},
	"shellbell": { //moar heals
		inherit: true,
		onAfterMoveSelf: function(source, target) {
			if (source.lastDamage > 0) {
				this.heal(source.lastDamage/5, source);
			}
		},
		desc: "Heals holder 1\/5 of damage dealt."
	},
	"sitrusberry": { //moar heals
		inherit: true,
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/3);
		},
		desc: "Restores 1/3 max HP when at 50% HP or less. One-time use."
	},
	"liechiberry": { //Works at 1/3 instead of 1/4
		inherit: true,
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/3 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		desc: "Raises Attack by one stage when at 1/3 HP or less. One-time use."
	},
	"salacberry": { //Works at 1/3 instead of 1/4
		inherit: true,
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/3 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		desc: "Raises Speed by one stage when at 1/3 HP or less. One-time use."
	},
	"petayaberry": { //Works at 1/3 instead of 1/4
		inherit: true,
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/3 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		desc: "Raises Special Attack by one stage when at 1/3 HP or less. One-time use."
	},
	"blacksludge": { //poisons stuff a lot
		id: "blacksludge",
		name: "Black Sludge",
		spritenum: 34,
		fling: {
			basePower: 30
		},
		onModifyMove: function(move) {
			if (move.category !== "Status" && move.type === "Poison") {
				if (!move.secondaries) move.secondaries = [];
				move.secondaries.push({
					chance: 100,
					status: 'psn'
				});
			}
		},
		desc: "The holder's Poison-type attacks will always poison the target."
	},
	"redcard": { //works even if user dies
		inherit: true,
		onAfterMoveSecondary: function(target, source, move) {
			if (source && source !== target && source.hp && move && move.category !== 'Status') {
				if (target.useItem(source)) {
					if (this.runEvent('DragOut', source, target, move)) {
						this.dragIn(source.side, source.position);
					}
				}
			}
		}
	},
	"ejectbutton": { //heals 25% of the user's health after ejection
		inherit: true,
		onAfterMoveSecondary: function(target, source, move) {
			if (source && source !== target && target.hp && move && move.category !== 'Status') {
				if (target.useItem()) {
					this.heal(target.maxhp/4);
					target.switchFlag = true;
				}
			}
		},
		desc: "When the holder is hit, it immediately switches out and regains 25% of it's max health. One-time use."
	},
	"gripclaw": { //traps enemies with 25% or less hp
		inherit: true,
		onFoeModifyPokemon: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4) {
				pokemon.trapped = true;
				this.debug('Grip Claw trap');
			}
		},
		desc: "Prevents the opposing pokemon from switching out if they have 25% or less health."
	},
	"focusband": {
		id: "focusband",
		name: "Focus Band",
		spritenum: 150,
		fling: {
			basePower: 10
		},
		onSourceBasePower: function(basePower, user, target, move) {
			this.debug('-15% reduction');
			return basePower * 0.85;
		},
		desc: "Reduces all damage taken from attacks by 15%."
	},
	"quickpowder": {
		id: "quickpowder",
		name: "Quick Powder",
		spritenum: 374,
		fling: {
			basePower: 10
		},
		onModifySpe: function(spe) {
			return spe * 1.1;
		},
		desc: "Boosts Speed by 10%."
	},
	"nevermeltice": {
		id: "nevermeltice",
		name: "NeverMeltIce",
		spritenum: 305,
		fling: {
			basePower: 30
		},
		onWeather: function(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp/16);
			}
		},
		onImmunity: function(type, pokemon) {
			if (type === 'hail') return false;
		},
		desc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
	},
	"widelens": {
		inherit: true,
		onModifyMove: function(move) {
			if (typeof move.accuracy === 'number') {
				move.accuracy *= 1.3;
			}
		},
		desc: "Raises accuracy 30%."
	},
	"zoomlens": {
		inherit: true,
		onModifyMove: function(move, user, target) {
			if (typeof move.accuracy === 'number' && !this.willMove(target)) {
				this.debug('Zoom Lens boosting accuracy');
				move.accuracy *= 1.5;
			}
		},
		desc: "Raises accuracy by 50% if the holder moves after the target."
	}
};

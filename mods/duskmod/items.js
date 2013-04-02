exports.BattleItems = {
	"jabocaberry": {
		inherit: true,
		isUnreleased: false
	},
	"custapberry": {
		inherit: true,
		isUnreleased: false
	},
	"rowapberry": {
		inherit: true,
		isUnreleased: false
	},
	"oddincense": {
		id: "oddincense",
		name: "Odd Incense",
		spritenum: 312,
		fling: {
			basePower: 10
		},
		onStart: function(pokemon) {
			if (pokemon.template.num === 555)
			{
				if (pokemon.transformInto('Darmanitan-Zen')) {
					this.add('-formechange', pokemon, 'Darmanitan-Zen');
					this.add('-message', 'Zen Mode triggered! (placeholder)');
				}
				else {
					return false;
				}
			}
		},
		onResidual: function(pokemon) {
			if (pokemon.template.num === 555) {
				this.heal(clampIntRange(pokemon.maxhp/16, 1));
			}
		},
		onTakeItem: function(item, pokemon, source) {
			if ((source && source.template.num === 555) || pokemon.template.num === 555) {
				return false;
			}
		},
		desc: "Raises power of Psychic-type moves 20%. Allows breeding of Mime Jr."
	},
    "icyrock": {
            id: "icyrock",
            name: "Icy Rock",
            spritenum: 221,
            fling: {
                    basePower: 40
            },
            onStart: function(pokemon) {
                    if (pokemon.template.species === 'Articuno') {
                            this.setWeather('hail');
                            this.weatherData.duration = 3;
                    }
            },
            desc: "Hail lasts 8 turns."
    },
    "heatrock": {
            id: "heatrock",
            name: "Heat Rock",
            spritenum: 193,
            fling: {
                    basePower: 60
            },
            onStart: function(pokemon) {
                    if (pokemon.template.species === 'Moltres') {
                            this.setWeather('sunnyday');
                            this.weatherData.duration = 3;
                    }
            },
            desc: "Sunny Day lasts 8 turns."
    },
    "damprock": {
            id: "damprock",
            name: "Damp Rock",
            spritenum: 88,
            fling: {
                    basePower: 60
            },
            onStart: function(pokemon) {
                    if (pokemon.template.species === 'Zapdos') {
                            this.setWeather('raindance');
                            this.weatherData.duration = 3;
                    }
            },
            desc: "Rain Dance lasts 8 turns."
	},
    "smoothrock": {
            id: "smoothrock",
            name: "Smooth Rock",
            spritenum: 453,
            fling: {
                    basePower: 10
            },
            desc: "Makes sandstorm last 8 turns."
    }
};

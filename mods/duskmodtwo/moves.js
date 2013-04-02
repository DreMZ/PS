exports.BattleMovedex = {
//-----------------------------------------------------------------------------------------------
//The freeze status was removed from the game entirely and replaced by flinch
//-----------------------------------------------------------------------------------------------
    icebeam: {
        inherit: true,
        secondary: {
            chance: 10,
            volatileStatus: 'flinch'
        }
    },
    icefang: {
        inherit: true,
        secondary: {
            chance: 20,
            volatileStatus: 'flinch'
        }
    },
    icepunch: {
        inherit: true,
        secondary: {
            chance: 10,
            volatileStatus: 'flinch'
        }
    },
    powdersnow: {
        inherit: true,
        secondary: {
            chance: 10,
            volatileStatus: 'flinch'
        }
    },
    blizzard: {
        inherit: true,
        secondary: {
            chance: 10,
            volatileStatus: 'flinch'
        }
    },
    triattack: {
        inherit: true,
        secondary: {
            chance: 20,
            onHit: function(target, source) {
                var result = this.random(3);
                if (result===0) {
                    target.trySetStatus('brn', source);
                } else if (result===1) {
                    target.trySetStatus('par', source);
                } else {
                    target.trySetStatus('tox', source);
                }
            }
        }
    },
//-----------------------------------------------------------------------------------------------
//Nerfs to dumb/overused moves
//-----------------------------------------------------------------------------------------------
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
    closecombat: {
        inherit: true,
        basePower: 110
    },
    scald: {
        inherit: true,
        basePower: 65,
    },
//-----------------------------------------------------------------------------------------------
//Some types don't have good enough moves to compete with other insanely good types.
//-----------------------------------------------------------------------------------------------
    nightdaze: {
        inherit: true,
        basePower: 95,
        accuracy: 100,
        secondary: {
            chance: 10
        }
    },
    shadowclaw: {
        inherit: true,
		secondary: {
			chance: 50,
			boosts: {
				def: -1
			}
		}
    },
    shadowball: {
        inherit: true,
        basePower: 95
    },
    seedflare: {
        inherit: true,
        accuracy: 100
    },
    airslash: {
        inherit: true,
        accuracy: 100
    },
//-----------------------------------------------------------------------------------------------
//OHKO moves make for nice empty slots.
//-----------------------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------------
//95 accuracy is bullshit
//-----------------------------------------------------------------------------------------------
	"toxic": {
		inherit: true,
		accuracy: 100
	},
	"willowisp": {
		inherit: true,
		accuracy: 100
	},
	"leechseed": {
		inherit: true,
		accuracy: 100
	},
	"firefang": {
		inherit: true,
		accuracy: 100
	},
	"icefang": {
		inherit: true,
		accuracy: 100
	},
	"thunderfang": {
		inherit: true,
		accuracy: 100
	},
	"icywind": {
		inherit: true,
		accuracy: 100
	},
	"metalclaw": {
		inherit: true,
		accuracy: 100
	},
	"drillrun": {
		inherit: true,
		accuracy: 100,
		basePower: 85
	},
//-----------------------------------------------------------------------------------------------
//Other buffs and tweaks
//-----------------------------------------------------------------------------------------------
	"toxicspikes": {
		inherit: true,
		effect: {
			// this is a side condition
			onStart: function(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers = 1;
			},
			onRestart: function(side) {
				if (this.effectData.layers < 2) {
					this.add('-sidestart', side, 'move: Toxic Spikes');
					this.effectData.layers++;
				}
			},
			onSwitchIn: function(pokemon) {
				if (!pokemon.runImmunity('Ground')) return;
				if (!pokemon.runImmunity('Poison')) return;
				if (pokemon.ability === 'Wonder Guard') return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] '+pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (this.effectData.layers >= 2) {
					pokemon.trySetStatus('tox');
				} else {
					pokemon.trySetStatus('psn');
				}
			}
		}
	},
	relicsong: {
		inherit: true,
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
					spa: 1
				}
			}
		}
	},
	darkvoid: {
        inherit: true,
		desc: "Use 1/4 of your hp to put the target to sleep.",
		shortDesc: "Use 1/4 of your hp to put the target to sleep.",
		self: {
			onHit: function(source) {
				this.directDamage(source.maxhp/4);
			}
		},
		target: "Normal"
	},
    doublehit: {
        inherit: true,
        basePower: 45
    },
    explosion: {
        inherit: true,
        basePower: 180,
        willCrit: true
    },
    selfdestruct: {
        inherit: true,
        basePower: 130,
        willCrit: true
    },
    focusblast: {
        inherit: true,
        accuracy: 85,
		self: {
			boosts: {
				spa: -1
			}
		}
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
    megahorn: {
        inherit: true,
        accuracy: 100
    },
	petaldance: {
        inherit: true,
        secondary: {
            chance: 50,
			self: {
				boosts: {
					spe: 1
				}
			}
        }
	},
	poisonjab: {
		inherit: true,
		basePower: 40,
		priority: 1,
		secondary: {
			chance: 0
		}
	},
	swagger: {
		inherit: true,
		boosts: {
			atk: 1,
			def: -1
		},
	},
	triplekick: {
		num: 167,
		accuracy: 75,
		basePower: 15,
		basePowerCallback: function(pokemon) {
			pokemon.addVolatile('triplekick');
			return 10 * pokemon.volatiles['triplekick'].hit + 5;
		},
		category: "Physical",
		desc: "Deals damage to one adjacent target and hits three times. The base power increases to 20 for the second hit and 30 for the third. If any of the hits misses the target, the attack ends. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. Makes contact.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
		id: "triplekick",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		isContact: true,
		multihit: [3,3],
		effect: {
			duration: 1,
			onStart: function() {
				this.effectData.hit = 1;
			},
			onRestart: function() {
				this.effectData.hit++;
			}
		},
        secondary: {
            chance: 50,
			boosts: {
				def: -1
			}
        },
		target: "normal",
		type: "Fighting"
	},
	thrash: {
        inherit: true,
        secondary: {
            chance: 50,
			self: {
				boosts: {
					atk: 1
				}
			}
        }
	}
};
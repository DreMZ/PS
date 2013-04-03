exports.BattleMovedex = {
//-----------------------------------------------------------------------------------------------
//Misc changes
//-----------------------------------------------------------------------------------------------
        "shellsmash": {
                inherit: true,
                boosts: {
                        atk: 2,
                        spa: 2,
                        spe: 2,
                        def: -1,
                        spd: -1
                },
                onModifyMove: function(move, user) {
                        if (user.ability === 'shellarmor') {
                                move.boosts = {
                                        spa: 1,
                                        atk: 1,
                                        spe: 2,
                                };
                        }
                }
        },
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
//Various nerfed moves
//-----------------------------------------------------------------------------------------------
        thunder: {
                inherit: true,
                secondary: {
                        chance: 10
                }
        },
        hurricane: {
                inherit: true,
                secondary: {
                        chance: 0
                }
        },
        darkvoid: {
                inherit: true,
                target: "foes"
        },
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
                                if (typeMod == 1) factor = 4;
                                if (typeMod >= 2) factor = 4;
                                if (typeMod == -1) factor = 16;
                                if (typeMod <= -2) factor = 32;
                                var damage = this.damage(pokemon.maxhp/factor);
                        }
                }
        },
//-----------------------------------------------------------------------------------------------
//More good critting moves
//-----------------------------------------------------------------------------------------------
        explosion: {
                inherit: true,
                basePower: 200,
                willCrit: true
        },
        selfdestruct: {
                inherit: true,
                basePower: 125,
                willCrit: true
        },
        twineedle: {
                num: 41,
                accuracy: 100,
                basePower: 20,
                willCrit: true,
                category: "Physical",
                desc: "Deals damage to one adjacent target and hits twice, with each hit having a 20% chance to poison it. If the first hit breaks the target's Substitute, it will take damage for the second hit.",
                shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
                id: "twineedle",
                name: "Twineedle",
                pp: 20,
                priority: 0,
                multihit: [2,2],
                secondary: {
                        chance: 20,
                        status: 'psn'
                },
                target: "normal",
                type: "Bug"
        },
        drillrun: {
                inherit: true,
                basePower: 40,
                accuracy: 90,
                willCrit: true
        },
        frostbreath: {
                inherit: true,
                power: 50,
                accuracy: 100
        },
        stormthrow: {
                inherit: true,
                power: 50,
                accuracy: 100
        },
        nightslash: {
                inherit: true,
                power: 50,
                willCrit: true
        },
//-----------------------------------------------------------------------------------------------
//Various buffs
//-----------------------------------------------------------------------------------------------
        bulldoze: {
                num: 523,
                accuracy: 100,
                basePower: 80,
                category: "Physical",
                desc: "Deals damage to all adjacent Pokemon with a 100% chance to lower their Speed by 1 stage each.",
                shortDesc: "100% chance to lower adjacent Pkmn Speed by 1.",
                id: "bulldoze",
                name: "Bulldoze",
                pp: 20,
                priority: 0,
                secondary: {
                        chance: 50,
                        boosts: {
                                spe: -1
                        }
                },
                target: "adjacent",
                type: "Ground"
        },
        crosspoison: {
                inherit: true,
                basePower: 90
        },
        razorshell: {
                inherit: true,
                basePower: 100,
                accuracy: 85
        },
        glaciate: {
                inherit: true,
                basePower: 100,
                accuracy: 100,
                secondary: {
                        chance: 50,
                        boosts: {
                                spe: -1
                        }
                }
        },
        heatwave: {
                inherit: true,
                basePower: 90,
                accuracy: 100,
                secondary: {
                        chance: 0
                },
                basePowerCallback: function() {
                        if (this.isWeather('sunnyday')) {
                                return 120;
                        }
                        return 90;
                }
        },
        poisontail: {
                inherit: true,
                basePower: 95
        },
        xscissor: {
                inherit: true,
                basePower: 90
        },
        rockslide: {
                inherit: true,
                basePower: 80,
                accuracy: 100
        },
        stoneedge: {
                inherit: true,
                accuracy: 85
        },
        hammerarm: {
                inherit: true,
                secondary: {
                        chance: 20,
                        boosts: {
                                spe: -1
                        }
                }
        },
        toxic: {
                inherit: true,
                accuracy: 100
        },
        willowisp: {
                inherit: true,
                accuracy: 100
        },
        acidspray: {
                inherit: true,
                target: "adjacent",
                power: 70
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
        honeclaws: {
                inherit: true,
                boosts: {
                        atk: 1,
                        accuracy: 2
                }
        },
        shadowpunch: {
                inherit: true,
                basePower: 85
        },
        wildcharge: {
                inherit: true,
                basePower: 100,
        },
        nightdaze: {
                inherit: true,
                basePower: 90,
                accuracy: 100,
                secondary: {
                        chance: 20,
                        boosts: {
                                accuracy: -1
                        }
                }
        },
        meditate: {
                inherit: true,
                boosts: {
                        atk: 1,
                        spd: 1
                }
        },
//-----------------------------------------------------------------------------------------------
//Massively changed moves that are pretty much new ones
//-----------------------------------------------------------------------------------------------
        "lockon": {
                num: 199,
                accuracy: true,
                basePower: 0,
                category: "Status",
                desc: "On the following turn, one adjacent target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. Fails if the user tries to use this move again during effect.",
                shortDesc: "User's next move will not miss the target.",
                id: "lockon",
                name: "Lock-On",
                pp: 5,
                priority: 0,
                self: {
                        boosts: {
                                spa: 1,
                                accuracy: 1
                        }
                },
                secondary: false,
                target: "self",
                type: "Normal"
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
        rage: {
                inherit: true,
                basePower: 100,
                onHit: function(target, source) {
                        source.addVolatile('confusion');
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
        skyattack: {
                num: 143,
                accuracy: 90,
                basePower: 100,
                category: "Physical",
                desc: "Deals damage to one adjacent or non-adjacent target with a 30% chance to flinch it and a higher chance for a critical hit. This attack charges on the first turn and strikes on the second. The user cannot make a move between turns. If the user is holding a Power Herb, the move completes in one turn.",
                shortDesc: "Charges, then hits turn 2. 30% flinch. High crit.",
                id: "skyattack",
                name: "Sky Attack",
                pp: 15,
                isViable: true,
                priority: 0,
                isTwoTurnMove: false,
                isContact: true,
                secondary: {
                        chance: 20,
                        boosts: {
                                def: -1
                        }
                },
                target: "any",
                type: "Flying"
        },
        electroweb: {
                inherit: true,
                accuracy: 85,
                basePower: 70,
                secondary: {
                        chance: 100,
                        status: 'par'
                }
        },
        payday: {
                inherit: true,
                basePower: 25,
                multihit: [2,5]
        },
        barrage: {
                inherit: true,
                basePower: 25,
                type: "Fighting",
                multihit: [2,5]
        },
        doubleslap: {
                inherit: true,
                basePower: 40,
                type: "Fighting",
                multihit: [2,2]
        },
		"hydrocannon": {
				num: 308,
				accuracy: 100,
				basePower: 150,
				category: "Special",
				desc: "Deals damage to one adjacent target. If this move is successful, the user must recharge on the following turn and cannot make a move.",
				shortDesc: "User cannot move next turn.",
				id: "hydrocannon",
				name: "Hydro Cannon",
				pp: 20,
                priority: -3,
                beforeTurnCallback: function(pokemon) {
                        pokemon.addVolatile('hydrocannon');
						this.add('-message', pokemon.name+" is focusing it's aim!");
                },
                beforeMoveCallback: function(pokemon) {
                        if (!pokemon.removeVolatile('hydrocannon')) {
                                return false;
                        }
                        if (pokemon.lastAttackedBy && pokemon.lastAttackedBy.damage && pokemon.lastAttackedBy.thisTurn) {
                                this.add('cant', pokemon, 'flinch', 'Hydro Cannon');
                                return true;
                        }
                },
                effect: {
                        duration: 1,
                        onStart: function(pokemon) {
                                this.add('-singleturn', pokemon, 'move: Hydro Cannon');
                        }
                },
				secondary: false,
				target: "normal",
				type: "Water"
		},
        "blastburn": {
                inherit: true,
                accuracy: 100,
                basePower: 60,
                pp: 5,
                willCrit: true,
                selfdestruct: true,
                secondary: {
                        chance: 100,
                        status: 'brn'
                },
                target: "allAdjacent",
                self: false
        },
        "frenzyplant": {
                inherit: true,
                accuracy: 80,
                basePower: 100,
                category: "Physical",
                pp: 5,
                volatileStatus: 'partiallytrapped',
                self: false
        },
        "triplekick": {
                inherit: true,
                basePowerCallback: function(pokemon) {
                        pokemon.addVolatile('triplekick');
                        return 5 + (10 * pokemon.volatiles['triplekick'].hit);
                },
                accuracy: 100
        },
        "dualchop": {
                inherit: true,
                accuracy: 100
        },
        "bonerush": {
                inherit: true,
                accuracy: 100
        },
        "feint": {
                inherit: true,
                basePower: 65
        },
        "spikecannon": {
                num: 131,
                accuracy: 80,
                basePower: 60,
                category: "Physical",
                desc: "Deals damage to one adjacent target and hits two to five times. Has a 35% chance to hit two or three times, and a 15% chance to hit four or five times. If one of the hits breaks the target's Substitute, it will take damage for the remaining hits. If the user has the Ability Skill Link, this move will always hit five times.",
                shortDesc: "Hits 2-5 times in one turn.",
                id: "spikecannon",
                name: "Spike Cannon",
                pp: 15,
                priority: 0,
                secondary: false,
                sideCondition: 'spikes',
                target: "normal",
                type: "Ground"
        },
        "gastroacid": {
                inherit: true,
                basePower: 50,
                category: "Special",
                isBounceable: false
        },
        "naturepower": {
                inherit: true,
                basePower: 80,
                accuracy: 100,
                priority: 0,
                category: "Physical",
                target: "normal",
                type: "Ground",
                onHit: false,
                onModifyMove: function(move, source, target) {
                        if (source.hasType('Grass')) {
                            move.basePower = 100;
                            }
				}
        },
        "electroweb": {
                inherit: true,
                target: "normal",
        },
        "leechseed": {
                inherit: true,
                accuracy: 100,
        }
};

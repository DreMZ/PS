    exports.BattleMovedex = {    
        "waterpulse": {
              inherit: true,
                basePower: 80
        }
    },
        
        "submission": {
              inherit: true,
                accuracy: 100,
                basePower: 120,
                category: "Physical",
                secondary: {
                        chance: 10,
                        volatileStatus: 'flinch'
        }
    },
        
        "lunardance": {
              inherit: true,
                accuracy: true,
                basePower: 0,
                isViable: true,
                boosts: {
                        spa: 1,
                        spe: 1
                },
                secondary: false,
                target: "self",
                type: "Psychic"
        }
    },
        
        
        "airslash": {
              inherit: true,
                basePower: 90,
        }
    };
    
  exports.BattleAbilities = {
        "leafguard": {
               inherit: true,
                onResidualOrder: 5,
                onResidualSubOrder: 1,
                onResidual: function(pokemon) {
                        if (pokemon.status && this.isWeather('sunnyday')) {
                                this.debug('leafguard');
                                pokemon.cureStatus();
        }
    },
        
        
        "reckless": {
              inherit: true,
                onBasePower: function(basePower, attacker, defender, move) {
                        if (move.recoil || move.hasCustomRecoil) {
                                this.debug('Reckless boost');
                                return basePower * 15/10;
        }
    },
        
        
        "telepathy": {
              inherit: true,
                onSourceFaint: function(target, source, effect) {
                        if (effect && effect.effectType === 'Move') {
                                this.boost({spa:1}, source);
        }
    };

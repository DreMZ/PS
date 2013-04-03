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
    
 

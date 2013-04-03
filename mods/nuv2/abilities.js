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
    },
};

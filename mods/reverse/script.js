exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			
                        var adjustment = 0;
                        
                        var adjustment = this.data.Pokedex[i].baseStats.hp;
			this.data.Pokedex[i].baseStats.hp = (150 - adjustment);
                        if (this.data.Pokedex[i].baseStats.hp <= 10) {
				this.data.Pokedex[i].baseStats.hp = 10;
			}
			var adjustment = this.data.Pokedex[i].baseStats.atk;
			this.data.Pokedex[i].baseStats.atk = (150 - adjustment);
                        if (this.data.Pokedex[i].baseStats.atk <= 10) {
				this.data.Pokedex[i].baseStats.atk = 10;
			}
			var adjustment = this.data.Pokedex[i].baseStats.def;
			this.data.Pokedex[i].baseStats.def = (150 - adjustment);
                        if (this.data.Pokedex[i].baseStats.def <= 10) {
				this.data.Pokedex[i].baseStats.def = 10;
			}
			var adjustment = this.data.Pokedex[i].baseStats.spa;
			this.data.Pokedex[i].baseStats.spa = (150 - adjustment);
                        if (this.data.Pokedex[i].baseStats.spa <= 10) {
				this.data.Pokedex[i].baseStats.spa = 10;
			}
			var adjustment = this.data.Pokedex[i].baseStats.spd;
			this.data.Pokedex[i].baseStats.spd = (150 - adjustment);
                        if (this.data.Pokedex[i].baseStats.spd <= 10) {
				this.data.Pokedex[i].baseStats.spd = 10;
			}
			var adjustment = this.data.Pokedex[i].baseStats.spe;
			this.data.Pokedex[i].baseStats.spe = (150 - adjustment);
                        if (this.data.Pokedex[i].baseStats.spe <= 10) {
				this.data.Pokedex[i].baseStats.spe = 10;
			}
		}
	}
};

exports.BattleScripts = {
  init: function() {
		for (var i in this.data.Pokedex) {
			

			this.data.Pokedex[i].baseStats.hp = (150-this.data.Pokedex[i].baseStats.hp);
                        if (this.data.Pokedex[i].baseStats.hp <= 10) {
				this.data.Pokedex[i].baseStats.hp = 10;
			}
			this.data.Pokedex[i].baseStats.atk = (150-this.data.Pokedex[i].baseStats.atk);
                        if (this.data.Pokedex[i].baseStats.atk <= 10) {
				this.data.Pokedex[i].baseStats.atk = 10;
			}
			this.data.Pokedex[i].baseStats.def = (150-this.data.Pokedex[i].baseStats.def);
                        if (this.data.Pokedex[i].baseStats.def <= 10) {
				this.data.Pokedex[i].baseStats.def = 10;
			}
			this.data.Pokedex[i].baseStats.spa = (150-this.data.Pokedex[i].baseStats.spa);
                        if (this.data.Pokedex[i].baseStats.spa <= 10) {
				this.data.Pokedex[i].baseStats.spa = 10;
			}
			this.data.Pokedex[i].baseStats.spd = (150-this.data.Pokedex[i].baseStats.spd);
                        if (this.data.Pokedex[i].baseStats.spd <= 10) {
				this.data.Pokedex[i].baseStats.spd = 10;
			}
			this.data.Pokedex[i].baseStats.spe = (150-this.data.Pokedex[i].baseStats.spe);
                        if (this.data.Pokedex[i].baseStats.spe <= 10) {
				this.data.Pokedex[i].baseStats.spe = 10;
			}
		}
	}
};

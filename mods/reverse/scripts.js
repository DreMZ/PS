exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			
			var oldhp = this.data.Pokedex[i].baseStats.hp;
			var oldatk = this.data.Pokedex[i].baseStats.atk;
			var olddef = this.data.Pokedex[i].baseStats.def;
			var oldspa = this.data.Pokedex[i].baseStats.spa;
			var oldspd = this.data.Pokedex[i].baseStats.spd;
			var oldspe = this.data.Pokedex[i].baseStats.spe;
			
			
			this.data.Pokedex[i].baseStats.hp = (150 - oldhp);
			this.data.Pokedex[i].baseStats.atk = (150 - oldatk);
			this.data.Pokedex[i].baseStats.def = (150 - olddef);
			this.data.Pokedex[i].baseStats.spa = (150 - oldspa);
			this.data.Pokedex[i].baseStats.spd = (150 - oldspd);
			this.data.Pokedex[i].baseStats.spe = (150 - oldspe);
                        
                        
                        if (oldhp > 140) ;{
				this.data.Pokedex[i].baseStats.hp = 10;
			}
                        if (oldatk > 140) ;{
				this.data.Pokedex[i].baseStats.atk = 10;
			}
                        if (olddef > 140) ;{
				this.data.Pokedex[i].baseStats.def = 10;
			}
                        if (oldspa > 140) ;{
				this.data.Pokedex[i].baseStats.spa = 10;
			}
                        if (oldspd > 140) ;{
				this.data.Pokedex[i].baseStats.spd = 10;
			}
                        if (oldspe > 140) ;{
				this.data.Pokedex[i].baseStats.spe = 10;
			}
		}
	}
};

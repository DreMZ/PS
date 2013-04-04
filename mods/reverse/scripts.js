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
                        
                        
                        /*if (oldhp > 140) ;
			this.data.Pokedex[i].baseStats.hp = 10;
                        if (oldatk > 140) ;
			this.data.Pokedex[i].baseStats.atk = 10;
                        if (olddef > 140) ;
			this.data.Pokedex[i].baseStats.def = 10;
			if (oldspa > 140) ;
			this.data.Pokedex[i].baseStats.spa = 10;
			if (oldspd > 140) ;
			this.data.Pokedex[i].baseStats.spd = 10;
                        if (oldspe > 140) ;
			this.data.Pokedex[i].baseStats.spe = 10;*/
		}
	}
		this.data.Pokedex[40].baseStats.hp = (10);
	        
	        this.data.Pokedex[91].baseStats.def = (10);
	        
	        this.data.Pokedex[95].baseStats.def = (10);
	        
	        this.data.Pokedex[113].baseStats.hp = (10);
	        
	        this.data.Pokedex[143].baseStats.hp = (10);
	        
	        this.data.Pokedex[150].baseStats.spa = (10);
	        
	        this.data.Pokedex[202].baseStats.hp = (10);
	        
	        this.data.Pokedex[205].baseStats.def = (10);
	        
	        this.data.Pokedex[208].baseStats.def = (10);
	        
	        this.data.Pokedex[213].baseStats.def = (10);
	        this.data.Pokedex[213].baseStats.spd = (10);
	        
	        this.data.Pokedex[226].baseStats.spd = (10);
	        
	        this.data.Pokedex[227].baseStats.def = (10);
	        
	        this.data.Pokedex[242].baseStats.hp = (10);
	        
	        this.data.Pokedex[249].baseStats.spd = (10);
	        
	        this.data.Pokedex[250].baseStats.spd = (10);
	        
	        this.data.Pokedex[289].baseStats.hp = (10);
	        this.data.Pokedex[289].baseStats.atk= (10);
	        
	        this.data.Pokedex[291].baseStats.spe = (10);
	        
	        this.data.Pokedex[297].baseStats.hp = (10);
	        
	        this.data.Pokedex[305].baseStats.def = (10);
	        
	        this.data.Pokedex[306].baseStats.def = (10);
	        
	        this.data.Pokedex[321].baseStats.hp = (10);
	        
	        this.data.Pokedex[324].baseStats.def = (10);
	        
	        this.data.Pokedex[377].baseStats.def = (10);
	        
	        this.data.Pokedex[378].baseStats.spd = (10);
	        
	        this.data.Pokedex[379].baseStats.def = (10);
	        this.data.Pokedex[379].baseStats.spd = (10);
	        
	        this.data.Pokedex[382].baseStats.spa = (10);
	        
	        this.data.Pokedex[383].baseStats.atk = (10);
	        
	        this.data.Pokedex[384].baseStats.atk = (10);
	        this.data.Pokedex[384].baseStats.spa = (10);
	        
	        this.data.Pokedex[409].baseStats.atk = (10);
	        
	        this.data.Pokedex[411].baseStats.def = (10);
	        
	        this.data.Pokedex[426].baseStats.hp = (10);
	        
	        this.data.Pokedex[464].baseStats.atk = (10);
	        
	        this.data.Pokedex[476].baseStats.def = (10);
	        this.data.Pokedex[476].baseStats.spd = (10);
	        
	        this.data.Pokedex[483].baseStats.spa = (10);
	        
	        this.data.Pokedex[484].baseStats.spa = (10);
	        
	        this.data.Pokedex[486].baseStats.atk = (10);
	        
	        this.data.Pokedex[487].baseStats.hp = (10);
	        
	        this.data.Pokedex[534].baseStats.atk = (10);
	        
	        this.data.Pokedex[555].baseStats.atk = (10);
	        
	        this.data.Pokedex[563].baseStats.def = (10);
	        
	        this.data.Pokedex[594].baseStats.hp = (10);
	        
	        this.data.Pokedex[609].baseStats.spa = (10);
	        
	        this.data.Pokedex[612].baseStats.atk = (10);
	        
	        this.data.Pokedex[617].baseStats.spe = (10);
	        
	        this.data.Pokedex[643].baseStats.spa = (10);
	        
	        this.data.Pokedex[644].baseStats.atk = (10);
};

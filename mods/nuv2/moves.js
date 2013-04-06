    exports.BattleMovedex = {    
        "waterpulse": {
              inherit: true,
                basePower: 80
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
   
        "airslash": {
              inherit: true,
                basePower: 90,
    },
    "psyshock": {
		num: 473,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		defensiveCategory: "Physical",
		desc: "Deals damage to one adjacent target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
		id: "psyshock",
		isViable: true,
		name: "Psyshock",
		pp: 10,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Psychic"
	},
};  
 

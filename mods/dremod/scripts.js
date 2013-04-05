exports.BattleScripts = {
	init: function() {
		/*
		Skip any movepools of pre-evolutions, unless they
		contain exclusive moves (such as spearow's sonicboom)
		
		this.data.Pokedex.cherrimsunshine.types = ['Grass', 'Fire'];
		this.data.Learnsets.azumarill.learnset.bellydrum = ['5L100'];
		this.data.Pokedex.venusaur.abilities['1'] = 'Leaf Guard';
		*/
		
		this.data.Learnsets.bulbasaur.learnset.naturepower = ['5L29'];
		this.data.Learnsets.bulbasaur.learnset.powerwhip = ['5L41'];
		
		this.data.Learnsets.ivysaur.learnset.naturepower = ['5L33'];
		this.data.Learnsets.ivysaur.learnset.powerwhip = ['5L49'];
		this.data.Learnsets.ivysaur.learnset.leafstorm = ['5L53'];
		
		this.data.Learnsets.venusaur.learnset.ancientpower = ['5L0'];
		this.data.Learnsets.venusaur.learnset.naturepower = ['5L33'];
		this.data.Learnsets.venusaur.learnset.powerwhip = ['5L49'];
		this.data.Learnsets.venusaur.learnset.leafstorm = ['5L63'];
		this.data.Learnsets.venusaur.learnset.sludgewave = ['5M'];
		
		this.data.Learnsets.charmander.learnset.bellydrum = ['5L50'];
		
		this.data.Learnsets.charmeleon.learnset.bellydrum = ['5L61'];
		
		this.data.Learnsets.charizard.learnset.crunch = ['5L0'];
		this.data.Learnsets.charizard.learnset.dragonpulse = ['5L41'];
		this.data.Learnsets.charizard.learnset.dragondance = ['5L56'];
		this.data.Learnsets.charizard.learnset.inferno = ['5L61'];
		this.data.Learnsets.charizard.learnset.outrage = ['5L66'];
		this.data.Learnsets.charizard.learnset.bellydrum = ['5L83'];
		this.data.Learnsets.charizard.learnset.hurricane = ['5M'];
		
		this.data.Learnsets.squirtle.learnset.zenheadbutt = ['5L31'];
		this.data.Learnsets.squirtle.learnset.waterspout = ['5L43'];
		this.data.Learnsets.squirtle.learnset.shellsmash = ['5L46'];
		
		this.data.Learnsets.wartortle.learnset.aquajet = ['5L16'];
		this.data.Learnsets.wartortle.learnset.zenheadbutt = ['5L36'];
		this.data.Learnsets.wartortle.learnset.waterspout = ['5L52'];
		this.data.Learnsets.wartortle.learnset.shellsmash = ['5L56'];
		
		this.data.Learnsets.blastoise.learnset.zapcannon = ['5L0'];
		this.data.Learnsets.blastoise.learnset.aquajet = ['5L16'];
		this.data.Learnsets.blastoise.learnset.zenheadbutt = ['5L39'];
		this.data.Learnsets.blastoise.learnset.waterspout = ['5L67'];
		this.data.Learnsets.blastoise.learnset.shellsmash = ['5L74'];
		
		this.data.Learnsets.caterpie.learnset.bugbite = ['5L0'];
		this.data.Learnsets.caterpie.learnset.strugglebug = ['5L0'];
		this.data.Learnsets.caterpie.learnset.electroweb = ['5L6'];
		
		this.data.Learnsets.butterfree.learnset.strugglebug = ['5L0'];
		this.data.Learnsets.butterfree.learnset.aircutter = ['5L10'];
		this.data.Learnsets.butterfree.learnset.gigadrain = ['5L26'];
		this.data.Learnsets.butterfree.learnset.airslash = ['5L32'];
		this.data.Learnsets.butterfree.learnset.batonpass = ['5L38'];
		this.data.Learnsets.butterfree.learnset.hurricane = ['5L50','5M'];
		
		this.data.Learnsets.weedle.learnset.bugbite = ['5L0'];
		this.data.Learnsets.weedle.learnset.strugglebug = ['5L0'];
		this.data.Learnsets.weedle.learnset.poisontail = ['5L6'];
		
		this.data.Learnsets.beedrill.learnset.bugbite = ['5L0'];
		this.data.Learnsets.beedrill.learnset.crosspoison = ['5L10'];
		this.data.Learnsets.beedrill.learnset.rage = ['5L26'];
		this.data.Learnsets.beedrill.learnset.xscissor = ['5L19'];
		this.data.Learnsets.beedrill.learnset.megahorn = ['5L43'];
		this.data.Learnsets.beedrill.learnset.batonpass = ['5L46'];
		this.data.Learnsets.beedrill.learnset.bugbuzz = ['5M'];
		
	//pidgey moves
		
	//pidgeotto moves
		
		this.data.Learnsets.pidgeot.learnset.superpower = ['5L0'];
		this.data.Learnsets.pidgeot.learnset.tackle = ['5L0'];
		this.data.Learnsets.pidgeot.learnset.sandattack = ['5L5'];
		this.data.Learnsets.pidgeot.learnset.gust = ['5L7'];
		this.data.Learnsets.pidgeot.learnset.quickattack = ['5L9'];
		this.data.Learnsets.pidgeot.learnset.wingattack = ['5L11'];
		this.data.Learnsets.pidgeot.learnset.whirlwind = ['5L13'];
		this.data.Learnsets.pidgeot.learnset.twister = ['5L15'];
		this.data.Learnsets.pidgeot.learnset.featherdance = ['5L17'];
		this.data.Learnsets.pidgeot.learnset.faintattack = ['5L20'];
		this.data.Learnsets.pidgeot.learnset.agility = ['5L23'];
		this.data.Learnsets.pidgeot.learnset.steelwing = ['5L26'];
		this.data.Learnsets.pidgeot.learnset.roost = ['5L29'];
		this.data.Learnsets.pidgeot.learnset.airslash = ['5L32'];
		this.data.Learnsets.pidgeot.learnset.bravebird = ['5L35'];
		this.data.Learnsets.pidgeot.learnset.mirrormove = ['5L40'];
		this.data.Learnsets.pidgeot.learnset.thrash = ['5L45'];
		this.data.Learnsets.pidgeot.learnset.hurricane = ['5L50'];
		this.data.Learnsets.pidgeot.learnset.doubleedge = ['5L55'];
		
	//rattata moves
		
		this.data.Learnsets.raticate.learnset.bite = ['5L0'];
		this.data.Learnsets.raticate.learnset.flamewheel = ['5L10'];
		this.data.Learnsets.raticate.learnset.swordsdance = ['5L20'];
		this.data.Learnsets.raticate.learnset.firefang = ['5L20'];
		this.data.Learnsets.raticate.learnset.thunderfang = ['5L20'];
		this.data.Learnsets.raticate.learnset.icefang = ['5L20'];
		this.data.Learnsets.raticate.learnset.reversal = ['5L44'];
		this.data.Learnsets.raticate.learnset.endeavor = ['5L49'];
		this.data.Learnsets.raticate.learnset.mefirst = ['5L54'];
		this.data.Learnsets.raticate.learnset.finalgambit = ['5L59'];
		this.data.Learnsets.raticate.learnset.honeclaws = ['5M'];
		this.data.Learnsets.raticate.learnset.suckerpunch = ['5M'];
		
		this.data.Learnsets.spearow.learnset.sonicboom = ['5L0'];
		this.data.Learnsets.spearow.learnset.pursuit = ['5L0'];
		this.data.Learnsets.spearow.learnset.steelwing = ['5L13'];
		
		this.data.Learnsets.fearow.learnset.pursuit = ['5L0'];
		this.data.Learnsets.fearow.learnset.steelwing = ['5L13'];
		
		this.data.Learnsets.ekans.learnset.poisontail = ['5L22'];
		
		this.data.Learnsets.arbok.learnset.poisontail = ['5L23'];
		
		this.data.Learnsets.pichu.learnset.wish = ['5L23'];
		this.data.Learnsets.pichu.learnset.sing = ['5L28'];
		this.data.Learnsets.pichu.learnset.petaldance = ['5L33'];
		this.data.Learnsets.pichu.learnset.dizzypunch = ['5L38'];
		this.data.Learnsets.pichu.learnset.surf = ['5M'];
		
		this.data.Learnsets.pikachu.learnset.charge = ['5L32'];
		this.data.Learnsets.pikachu.learnset.volttackle = ['5L54'];
		this.data.Learnsets.pikachu.learnset.surf = ['5M'];
		
		this.data.Learnsets.raichu.learnset.volttackle = ['5L54'];
		this.data.Learnsets.raichu.learnset.surf = ['5M'];
		
		this.data.Learnsets.sandshrew.learnset.nightslash = ['5L26'];
		this.data.Learnsets.sandshrew.learnset.superfang = ['5L50'];
		
		this.data.Learnsets.sandslash.learnset.nightslash = ['5L26'];
		this.data.Learnsets.sandslash.learnset.superfang = ['5L50'];
		
		this.data.Learnsets.nidoranf.learnset.moonlight = ['5L0'];
		this.data.Learnsets.nidoranf.learnset.sweetkiss = ['5L11'];
		this.data.Learnsets.nidoranf.learnset.lovelykiss = ['5L16'];
		this.data.Learnsets.nidoranf.learnset.superfang = ['5L28'];
		
		this.data.Learnsets.nidorina.learnset.superfang = ['5L31'];
		
		this.data.Learnsets.nidoranm.learnset.moonlight = ['5L0'];
		this.data.Learnsets.nidoranm.learnset.sweetkiss = ['5L11'];
		this.data.Learnsets.nidoranm.learnset.lovelykiss = ['5L16'];
		this.data.Learnsets.nidoranm.learnset.superfang = ['5L28'];
		
		this.data.Learnsets.nidorino.learnset.superfang = ['5L31'];
		
		for (var i in this.data.FormatsData) {
			//this.data.FormatsData[i].dreamWorldRelease = false;
			//if (i == 'mew' || i == 'chikorita' || i == 'bayleef' || i == 'meganium' || i == 'celebi' || i == 'jirachi' || i == 'jellicent' || i == 'braviary') {
				this.data.FormatsData[i].dreamWorldRelease = true;
			//}
		}
	}
};

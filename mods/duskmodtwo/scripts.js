exports.BattleScripts = {
    init: function() {
        for (var i in this.data.FormatsData)
            this.data.FormatsData[i].dreamWorldRelease = true;
        for (var i in this.data.Learnsets) {
            delete this.data.Learnsets[i].fissure;
		}
///////////////////////////////////////////////////////////////////////////////////////////////
// Uber
///////////////////////////////////////////////////////////////////////////////////////////////
		this.data.Pokedex.blaziken.abilities['DW'] = 'Reckless';
		this.data.Learnsets.blaziken.learnset.batonpass = ['5L0'];
		
		delete this.data.Learnsets.darkrai.learnset.nastyplot;
		delete this.data.Learnsets.darkrai.learnset.focusblast;
		
		delete this.data.Learnsets.genesect.learnset.uturn;
		delete this.data.Learnsets.genesect.learnset.rockpolish;
		
		delete this.data.Learnsets.excadrill.learnset.rapidspin;
		
		this.data.Pokedex.thundurus.abilities['0'] = 'Inner Focus';
		
		this.data.Pokedex.tornadustherian.abilities['0'] = 'Natural Cure';
///////////////////////////////////////////////////////////////////////////////////////////////
// Overused
///////////////////////////////////////////////////////////////////////////////////////////////
		this.data.Learnsets.blissey.learnset.wish = ['5L0'];
		this.data.Learnsets.blissey.learnset.aromatherapy = ['5L0'];
		this.data.Learnsets.blissey.learnset.seismictoss = ['5L0'];
		
		this.data.Learnsets.dugtrio.learnset.fissure = ['5L0'];
		
		delete this.data.Learnsets.gible.learnset.dualchop;
		delete this.data.Learnsets.gabite.learnset.dualchop;
		delete this.data.Learnsets.garchomp.learnset.dualchop;
		
		this.data.Learnsets.haxorus.learnset.firefang = ['5L0'];
		this.data.Learnsets.haxorus.learnset.icefang = ['5L0'];
		this.data.Learnsets.haxorus.learnset.thunderfang = ['5L0'];
		
		this.data.Learnsets.hippowdon.learnset.fissure = ['5L0'];
		
		this.data.Pokedex.mamoswine.abilities['1'] = 'Ice Body';
		
		this.data.Pokedex.metagross.abilities['1'] = 'Iron Fist';
		
		this.data.Learnsets.reuniclus.learnset.aurasphere = ['5L0'];
		this.data.Learnsets.reuniclus.learnset.thunderbolt = ['5L0'];
		this.data.Learnsets.reuniclus.learnset.icebeam = ['5L0'];
///////////////////////////////////////////////////////////////////////////////////////////////
// Borderline
///////////////////////////////////////////////////////////////////////////////////////////////
		this.data.Learnsets.chansey.learnset.wish = ['5L0'];
		this.data.Learnsets.chansey.learnset.aromatherapy = ['5L0'];
		this.data.Learnsets.chansey.learnset.seismictoss = ['5L0'];
		
		this.data.Pokedex.gothitelle.types = ["Dark","Psychic"];
		this.data.Learnsets.gothitelle.learnset.nightdaze = ['5L0'];
		
		this.data.Pokedex.kyurem.abilities['1'] = 'Snow Warning';
		
		this.data.Learnsets.staraptor.learnset.extremespeed = ['5L0'];
		
		this.data.Learnsets.wobbuffet.learnset.taunt = ['5L0'];
		this.data.Learnsets.wobbuffet.learnset.roar = ['5L0'];
///////////////////////////////////////////////////////////////////////////////////////////////
// Underused
///////////////////////////////////////////////////////////////////////////////////////////////
		this.data.Learnsets.ambipom.learnset.suckerpunch = ['5L0'];
		this.data.Learnsets.ambipom.learnset.bulletseed = ['5L0'];
		this.data.Learnsets.ambipom.learnset.tailslap = ['5L0'];
		this.data.Learnsets.ambipom.learnset.swordsdance = ['5L0'];
		this.data.Learnsets.ambipom.learnset.quickattack = ['5L0'];
		
		this.data.Learnsets.arcanine.learnset.swordsdance = ['5L0'];
		
		this.data.Pokedex.azelf.abilities['1'] = 'Mold Breaker';
		
		this.data.Pokedex.azumarill.types = ["Water","Normal"];
		this.data.Learnsets.azumarill.learnset.bellydrum = ['5L0'];
		this.data.Learnsets.azumarill.learnset.fakeout = ['5L0'];
		this.data.Learnsets.azumarill.learnset.quickattack = ['5L0'];
		
		this.data.Pokedex.bisharp.abilities['1'] = 'Moxie';
		
		this.data.Learnsets.blastoise.learnset.slackoff = ['5L0'];
		
		this.data.Learnsets.bronzong.learnset.healbell = ['5L0'];
		this.data.Learnsets.bronzong.learnset.willowisp = ['5L0'];
		
		this.data.Pokedex.chandelure.abilities['DW'] = 'Levitate';
		
		this.data.Pokedex.claydol.abilities['1'] = 'Magic Guard';
		this.data.Learnsets.claydol.learnset.recover = ['5L0'];
		this.data.Learnsets.claydol.learnset.foresight = ['5L0'];
		
		this.data.Pokedex.cobalion.abilities['1'] = 'Heatproof';
		this.data.Learnsets.cobalion.learnset.thunderbolt = ['5L0'];
		this.data.Learnsets.cobalion.learnset.aurasphere = ['5L0'];
		
		this.data.Pokedex.crobat.abilities['1'] = 'Intimidate';
		
		this.data.Learnsets.cofagrigus.learnset.hypnosis = ['5L0'];
		
		this.data.Learnsets.darmanitan.learnset.machpunch = ['5L0'];
		this.data.Learnsets.darmanitan.learnset.wildcharge = ['5L0'];
		this.data.Learnsets.darmanitan.learnset.agility = ['5L0'];
		this.data.Learnsets.darmanitan.learnset.calmmind = ['5L0'];
		this.data.Learnsets.darmanitan.learnset.shadowball = ['5L0'];
		this.data.Learnsets.darmanitan.learnset.morningsun = ['5L0'];
		
		this.data.Pokedex.dusclops.abilities['1'] = 'Levitate';
		
		this.data.Pokedex.empoleon.abilities['DW'] = 'Snow Cloak';
		
		this.data.Pokedex.flygon.abilities['DW'] = 'Sand Rush';
		
		this.data.Learnsets.froslass.learnset.focusblast = ['5L0'];
		
		this.data.Learnsets.heracross.learnset.machpunch = ['5L0'];
		
		this.data.Pokedex.hitmontop.abilities['DW'] = 'No Guard';
		
		this.data.Pokedex.honchkrow.abilities['1'] = 'Guts';
		this.data.Learnsets.honchkrow.learnset.flamewheel = ['5L0'];
		
		this.data.Pokedex.houndoom.abilities['DW'] = 'Adaptability';
		this.data.Learnsets.houndoom.learnset.darkvoid = ['5L0'];
		
		this.data.Learnsets.krookodile.learnset.suckerpunch = ['5L0'];
		
		this.data.Pokedex.machamp.abilities['DW'] = 'Big Pecks';
		this.data.Learnsets.machamp.learnset.machpunch = ['5L0'];
		this.data.Learnsets.machamp.learnset.circlethrow = ['5L0'];
		
		this.data.Learnsets.meloetta.learnset.lunardance = ['5L0'];
		
		this.data.Pokedex.mew.abilities['0'] = 'Levitate';
		
		this.data.Pokedex.mienshao.abilities['0'] = 'Scrappy';
		this.data.Learnsets.mienshao.learnset.shadowclaw = ['5L0'];
		
		this.data.Pokedex.milotic.abilities['1'] = 'Multiscale';
		
		this.data.Pokedex.mismagius.abilities['1'] = 'Soundproof';
		
		this.data.Pokedex.nidoking.abilities['DW'] = 'Guts';
		this.data.Learnsets.nidoking.learnset.dragondance = ['5L0'];
		
		this.data.Learnsets.porygonz.learnset.fireblast = ['5L0'];
		this.data.Learnsets.porygonz.learnset.flamethrower = ['5L0'];
		this.data.Learnsets.porygonz.learnset.overheat = ['5L0'];
		this.data.Learnsets.porygonz.learnset.voltswitch = ['5L0'];
		
		this.data.Learnsets.porygon2.learnset.fireblast = ['5L0'];
		this.data.Learnsets.porygon2.learnset.flamethrower = ['5L0'];
		this.data.Learnsets.porygon2.learnset.overheat = ['5L0'];
		this.data.Learnsets.porygon2.learnset.voltswitch = ['5L0'];
		
		this.data.Learnsets.raikou.learnset.psychic = ['5L0'];
		this.data.Learnsets.raikou.learnset.aurasphere = ['5L0'];
		this.data.Learnsets.raikou.learnset.weatherball = ['5L0'];
		this.data.Learnsets.raikou.learnset.extremespeed = ['5L0'];
		
		this.data.Pokedex.registeel.abilities['1'] = 'Analytic';
		this.data.Learnsets.registeel.learnset.taunt = ['5L0'];
		
		this.data.Pokedex.rhyperior.abilities['0'] = 'Mold Breaker';
		this.data.Learnsets.rhyperior.learnset.slackoff = ['5L0'];
		this.data.Learnsets.rhyperior.learnset.bulkup = ['5L0'];
		this.data.Learnsets.rhyperior.learnset.circlethrow = ['5L0'];
		
		this.data.Pokedex.roserade.abilities['0'] = 'Regenerator';
		this.data.Pokedex.roserade.abilities['DW'] = 'Cloud Nine';
		this.data.Learnsets.roserade.learnset.calmmind = ['5L0'];
		this.data.Learnsets.roserade.learnset.taunt = ['5L0'];
		
		this.data.Learnsets.rotomheat.learnset.fireblast = ['5L0'];
		this.data.Learnsets.rotomheat.learnset.flamethrower = ['5L0'];
		this.data.Learnsets.rotomheat.learnset.heatwave = ['5L0'];
		
		this.data.Learnsets.sableye.learnset.moonlight = ['5L0'];
		this.data.Learnsets.sableye.learnset.yawn = ['5L0'];
		this.data.Learnsets.sableye.learnset.thunderwave = ['5L0'];
		
		this.data.Learnsets.scrafty.learnset.suckerpunch = ['5L0'];
		
		this.data.Learnsets.sharpedo.learnset.workup = ['5L0'];
		this.data.Learnsets.sharpedo.learnset.thrash = ['5L0'];
		this.data.Learnsets.sharpedo.learnset.thunderfang = ['5L0'];
		
		this.data.Learnsets.shaymin.learnset.nastyplot = ['5L0'];
		
		this.data.Learnsets.slowbro.learnset.thunderbolt = ['5L0'];
		this.data.Learnsets.slowbro.learnset.thunder = ['5L0'];
		this.data.Learnsets.slowbro.learnset.hypnosis = ['5L0'];
		
		this.data.Learnsets.snorlax.learnset.slackoff = ['5L0'];
		this.data.Learnsets.snorlax.learnset.bounce = ['5L0'];
		
		this.data.Pokedex.suicune.abilities['DW'] = 'Storm Drain';
		this.data.Learnsets.suicune.learnset.wish = ['5L0'];
		this.data.Learnsets.suicune.learnset.airslash = ['5L0'];
		
		this.data.Learnsets.swampert.learnset.slackoff = ['5L0'];
		
		this.data.Learnsets.togekiss.learnset.bravebird = ['5L0'];
		this.data.Learnsets.togekiss.learnset.lunardance = ['5L0'];
		
		this.data.Learnsets.victini.learnset.earthquake = ['5L0'];
		this.data.Learnsets.victini.learnset.calmmind = ['5L0'];
		
		this.data.Pokedex.virizion.abilities['1'] = 'Regenerator';
		this.data.Learnsets.virizion.learnset.aurasphere = ['5L0'];
		
		this.data.Pokedex.weavile.abilities['1'] = 'Technician';
		
		this.data.Learnsets.xatu.learnset.taunt = ['5L0'];
		this.data.Learnsets.xatu.learnset.healbell = ['5L0'];
		this.data.Learnsets.xatu.learnset.hypnosis = ['5L0'];
		
		this.data.Pokedex.yanmega.types = ["Bug","Dragon"];
		this.data.Learnsets.yanmega.learnset.dracometeor = ['5L0'];
		this.data.Learnsets.yanmega.learnset.dragonpulse = ['5L0'];
		this.data.Learnsets.yanmega.learnset.dragontail = ['5L0'];
		this.data.Learnsets.yanmega.learnset.dragonrush = ['5L0'];
		this.data.Learnsets.yanmega.learnset.outrage = ['5L0'];
		this.data.Learnsets.yanmega.learnset.twister = ['5L0'];
		this.data.Learnsets.yanmega.learnset.dragonclaw = ['5L0'];
		delete this.data.Learnsets.yanmega.learnset.uturn;
		
		this.data.Learnsets.zapdos.learnset.airslash = ['5L0'];
		this.data.Learnsets.zapdos.learnset.grassknot = ['5L0'];
		
		this.data.Learnsets.zoroark.learnset.earthquake = ['5L0'];
		this.data.Learnsets.zoroark.learnset.flamewheel = ['5L0'];
		this.data.Learnsets.zoroark.learnset.reversal = ['5L0'];
		this.data.Learnsets.zoroark.learnset.aurasphere = ['5L0'];
		
		
///////////////////////////////////////////////////////////////////////////////////////////////
// Rarelyused
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// Neverused
///////////////////////////////////////////////////////////////////////////////////////////////
		this.data.Learnsets.kecleon.learnset.dragonbreath = ['5L0'];
	}
};

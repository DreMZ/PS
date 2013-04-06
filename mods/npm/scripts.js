exports.BattleScripts = {
    init: function() {
        for (var i in this.data.FormatsData)
            this.data.FormatsData[i].dreamWorldRelease = true;


                this.data.Pokedex.charizard.types = ["Fire","Dragon"];
                this.data.Pokedex.charizard.abilities['DW'] = 'Levitate';
                this.data.Learnsets.charizard.learnset.dracometeor = ['5T'];
                
                this.data.Pokedex.blastoise.abilities['DW'] = 'Water Veil';
                
                this.data.Learnsets.nidoking.learnset.gammastrike = ['5L0'];
                
                this.data.Pokedex.clefable.types = ["Normal","Psychic"];
                this.data.Pokedex.clefable.abilities['0'] = 'Friend Guard';
                this.data.Learnsets.clefable.learnset.lunardance = ['5L0'];
                
                this.data.Learnsets.dugtrio.learnset.fissure = ['5L0'];
                
                this.data.Pokedex.arcanine.abilities['1'] = 'Adrenaline';
                
                this.data.Learnsets.magneton.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.magneton.learnset.zapcannon;
                
                this.data.Pokedex.electrode.abilities['1'] = 'Volt Absorb';
                this.data.Learnsets.electrode.learnset.lockon = ['5L0'];
                
                this.data.Learnsets.muk.learnset.gammastrike = ['5L0'];
                
                this.data.Pokedex.exeggutor.abilities['1'] = 'Trickster';
                
                this.data.Pokedex.weezing.types = ["Poison","Electric"];
                this.data.Learnsets.weezing.learnset.gammastrike = ['5L0'];
                this.data.Learnsets.weezing.learnset.wildcharge = ['5M'];
                this.data.Learnsets.weezing.learnset.lockon = ['5L0'];
                
                this.data.Pokedex.chansey.abilities['1'] = 'Friend Guard';
                
                this.data.Pokedex.jynx.abilities['0'] = 'Caution';
                
                this.data.Learnsets.aerodactyl.learnset.bravebird = ['5L0'];
                
                this.data.Pokedex.dragonair.types = ["Dragon","Water"];
                this.data.Learnsets.dragonair.learnset.coil = ['5L0'];
                
                this.data.Learnsets.dragonite.learnset.coil = ['5L0'];
                
                this.data.Pokedex.mewtwo.abilities['0'] = 'Dauntless';
                
                this.data.Learnsets.typhlosion.learnset.flameburst = ['5L0'];
                
                this.data.Learnsets.ampharos.learnset.tailglow = ['5L0'];
                
                this.data.Learnsets.qwilfish.learnset.gammastrike = ['5L0'];
                this.data.Learnsets.qwilfish.learnset.poisontail = ['5L0'];
                
                this.data.Pokedex.piloswine.abilities['0'] = 'Arctic Rush';
                
                this.data.Pokedex.skarmory.abilities['0'] = 'Ancient Wind';
                
                this.data.Pokedex.mantine.abilities['DW'] = 'Storm Drain';
                
                this.data.Learnsets.houndoom.learnset.howl = ['5L0'];
                
                this.data.Pokedex.kingdra.abilities['DW'] = 'Water Veil';
                
                this.data.Learnsets.porygon2.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.porygon2.learnset.zapcannon;
                
                this.data.Pokedex.blissey.abilities['1'] = 'Friend Guard';
                
                this.data.Pokedex.blaziken.abilities['DW'] = 'Adrenaline';
                
                this.data.Learnsets.swampert.learnset.fissure = ['5L0'];
                
                this.data.Pokedex.gardevoir.abilities['0'] = 'Caution';
                this.data.Pokedex.gardevoir.abilities['DW'] = 'Justified';
                
                this.data.Learnsets.manectric.learnset.howl = ['5L0'];
                this.data.Learnsets.manectric.learnset.flameburst = ['5L0'];
                
                this.data.Pokedex.cacturne.abilities['0'] = 'Sand Rush';
                this.data.Learnsets.cacturne.learnset.sharpen = ['5L0'];
                
                this.data.Pokedex.wailord.abilities['0'] = 'Hydration';
                
                this.data.Pokedex.claydol.abilities['0'] = 'Magic Guard';
                this.data.Pokedex.claydol.abilities['DW'] = 'Caution';
                this.data.Learnsets.claydol.learnset.lockon = ['5L0'];
                
                this.data.Pokedex.milotic.abilities['0'] = 'Multiscale';
                
                this.data.Learnsets.absol.learnset.howl = ['5L0'];
                
                this.data.Pokedex.metagross.abilities['1'] = 'Light Metal';
                this.data.Pokedex.metagross.abilities['DW'] = 'Gravotonize';
                
                this.data.Learnsets.regice.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.regice.learnset.zapcannon;
                
                this.data.Pokedex.regirock.abilities['DW'] = 'Sand Veil';
                this.data.Learnsets.regirock.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.regirock.learnset.zapcannon = ['5L0'];
                
                this.data.Pokedex.registeel.abilities['DW'] = 'Heavy Metal';
                this.data.Learnsets.registeel.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.registeel.learnset.zapcannon;
                this.data.Learnsets.registeel.learnset.heavyslam = ['5L0'];
                
                this.data.Learnsets.latias.learnset.lunardance = ['5L0'];
                
                this.data.Learnsets.latios.learnset.lunardance = ['5L0'];
                
                this.data.Learnsets.infernape.learnset.flameburst = ['5L0'];
                
                this.data.Pokedex.luxray.types = ["Electric","Dark"];
                this.data.Learnsets.luxray.learnset.howl = ['5L0'];
                
                this.data.Pokedex.bastiodon.types = ["Steel"];
                this.data.Learnsets.bastiodon.learnset.shieldbash = ['5L0'];
                
                this.data.Pokedex.drifblim.abilities['0'] = 'Tempest';
                
                this.data.Learnsets.honchkrow.learnset.blackhole = ['5L0'];
                
                this.data.Pokedex.spiritomb.abilities['DW'] = 'Trickster';
                this.data.Learnsets.spiritomb.learnset.blackhole = ['5L0'];
                
                this.data.Pokedex.garchomp.abilities['DW'] = 'Mach Scale';
                
                this.data.Pokedex.hippowdon.abilities['DW'] = 'Sand Veil';
                this.data.Learnsets.hippowdon.learnset.fissure = ['5L0'];
                
                this.data.Learnsets.toxicroak.learnset.gammastrike = ['5L0'];
                
                this.data.Pokedex.lumineon.types = ["Water","Flying"];
                this.data.Learnsets.lumineon.learnset.hurricane = ['5L0'];
                this.data.Learnsets.lumineon.learnset.airslash = ['5L0'];
                
                this.data.Learnsets.magnezone.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.magnezone.learnset.zapcannon;
                
                this.data.Pokedex.weavile.abilities['0'] = 'Technician';
                
                this.data.Learnsets.magmortar.learnset.flameburst = ['5L0'];
                
                this.data.Pokedex.electivire.types = ["Electric","Fighting"];
                this.data.Learnsets.electivire.learnset.submission = ['5L0'];
                this.data.Learnsets.electivire.learnset.drainpunch = ['5T'];
                
                this.data.Learnsets.togekiss.learnset.lunardance = ['5L0'];
                
                this.data.Pokedex.yanmega.types = ["Bug","Dragon"];
                this.data.Pokedex.yanmega.abilities['1'] = 'Compoundeyes';
                this.data.Learnsets.yanmega.learnset.dracometeor = ['5T'];
                this.data.Learnsets.yanmega.learnset.dragonpulse = ['5T'];
                delete this.data.Learnsets.yanmega.learnset.hypnosis;
                
                this.data.Pokedex.glaceon.abilities['0'] = 'Arctic Rush';
                
                this.data.Pokedex.mamoswine.abilities['0'] = 'Arctic Rush';
                
                this.data.Learnsets.porygonz.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.porygonz.learnset.zapcannon;
                
                this.data.Pokedex.gallade.abilities['0'] = 'Caution';
                this.data.Pokedex.gallade.abilities['1'] = 'Trace';
                this.data.Learnsets.gallade.learnset.shieldbash = ['5L0'];
                
                this.data.Pokedex.dusknoir.types = ["Ghost","Fighting"];
                this.data.Pokedex.dusknoir.abilities['0'] = 'Iron Fist';
                this.data.Learnsets.dusknoir.learnset.drainpunch = ['5T'];
                this.data.Learnsets.dusknoir.learnset.superpower = ['5T'];
                this.data.Learnsets.dusknoir.learnset.moonlight = ['5L0'];
                
                this.data.Pokedex.serperior.types = ["Grass","Dragon"];
                this.data.Learnsets.serperior.learnset.dracometeor = ['5T'];
                
                this.data.Pokedex.emboar.types = ["Fire","Dark"];
                this.data.Learnsets.emboar.learnset.crunch = ['5L0'];
                this.data.Learnsets.emboar.learnset.suckerpunch = ['5L0'];
                
                this.data.Pokedex.musharna.types = ["Psychic","Ghost"];
                this.data.Pokedex.musharna.abilities['1'] = 'Caution';
                this.data.Learnsets.musharna.learnset.lunardance = ['5L0'];
                
                this.data.Learnsets.conkeldurr.learnset.pillarsmash = ['5L0'];
                
                this.data.Pokedex.darmanitan.types = ["Fire","Fighting"];
                this.data.Pokedex.darmanitan.abilities['1'] = 'Reckless';
                this.data.Learnsets.darmanitan.learnset.submission = ['5L0'];
                
                this.data.Pokedex.sigilyph.abilities['0'] = 'Ancient Wind';
                
                this.data.Pokedex.cofagrigus.types = ["Ghost","Steel"];
                this.data.Learnsets.cofagrigus.learnset.flashcannon = ['5M'];
                
                this.data.Pokedex.gothitelle.types = ["Psychic","Dark"];
                
                this.data.Pokedex.reuniclus.abilities['0'] = 'Gravotonize';
                
                this.data.Pokedex.zoroark.types = ["Dark","Ghost"];
                this.data.Pokedex.zoroark.abilities['DW'] = 'Dauntless';
                
                this.data.Pokedex.swanna.abilities['0'] = 'Water Veil';
                
                this.data.Pokedex.vanilluxe.abilities['1'] = 'Snow Warning';
                
                this.data.Learnsets.escavalier.learnset.drillrun = ['5T'];
                this.data.Learnsets.escavalier.learnset.sharpen = ['5L0'];
                
                this.data.Learnsets.amoonguss.learnset.shieldbash = ['5L0'];
                this.data.Learnsets.amoonguss.learnset.leechseed = ['5L0'];
                
                this.data.Pokedex.beheeyem.types = ["Psychic","Electric"];
                this.data.Pokedex.beheeyem.abilities['0'] = 'Levitate';
                this.data.Pokedex.beheeyem.abilities['1'] = 'Dauntless';
                this.data.Learnsets.beheeyem.learnset.thunder = ['5M'];
                this.data.Learnsets.beheeyem.learnset.lunardance = ['5L0'];
                
                this.data.Pokedex.beartic.types = ["Ice","Fighting"];
                this.data.Pokedex.beartic.abilities['0'] = 'Arctic Rush';
                this.data.Learnsets.beartic.learnset.drainpunch = ['5T'];
                
                this.data.Pokedex.cryogonal.types = ["Ice","Steel"];
                
                this.data.Pokedex.druddigon.types = ["Dragon","Rock"];
                this.data.Pokedex.druddigon.abilities['0'] = 'Mach Scale';
                this.data.Pokedex.druddigon.abilities['1'] = 'Solidify';
                this.data.Pokedex.druddigon.abilities['DW'] = 'Marvel Scale';
                this.data.Learnsets.druddigon.learnset.stoneedge = ['5M'];
                this.data.Learnsets.druddigon.learnset.rockslide = ['5M'];
                
                this.data.Learnsets.bisharp.learnset.sharpen = ['5L0'];
                
                this.data.Learnsets.hydreigon.learnset.blackhole = ['5L0'];
                
                this.data.Pokedex.tornadustherian.abilities['0'] = 'Tempest';
                
                delete this.data.Learnsets.thundurus.learnset.nastyplot;
                delete this.data.Learnsets.thundurus.learnset.swagger;
                
                delete this.data.Learnsets.thundurustherian.learnset.nastyplot;
                delete this.data.Learnsets.thundurustherian.learnset.swagger;
                
                this.data.Pokedex.kyurem.abilities['0'] = 'Arctic Rush';
                
                this.data.Learnsets.kyuremblack.learnset.icepunch = ['5T'];
                this.data.Learnsets.kyuremblack.learnset.thunderpunch = ['5T'];
                this.data.Learnsets.kyuremblack.learnset.iceshard = ['5L0'];
                
                this.data.Pokedex.genesect.abilities['0'] = 'Compoundeyes';
                this.data.Learnsets.genesect.learnset.lockon = ['5L0'];
                delete this.data.Learnsets.genesect.learnset.zapcannon;
        }
};
                
                

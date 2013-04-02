exports.BattleScripts = {
        init: function() {
                for (var i in this.data.FormatsData)
                        this.data.FormatsData[i].dreamWorldRelease = true;
                
				//HOW DOES ADD THE MOVEZ?!?!:
                //this.data.Learnsets.[SPECIES].learnset.[MOVE] = ['method of learning'];
				
                //['5L100'] - GEN 5 LEVEL 100
                //['5L0'] - GEN 5 KNOWN AT BIRTH
                //['5M'] - GEN 5 TM or HM
                //['5T'] - GEN 5 TUTOR
                //['5E'] - GEN 5 EGG
                //fomat for deleting moves: delete this.data.Learnsets.[SPECIES].learnset.[MOVE];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//KANTO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                this.data.Learnsets.charizard.learnset.dracometeor = ['5T'];
                this.data.Learnsets.charizard.learnset.extremespeed = ['5L50'];
                
                this.data.Learnsets.blastoise.learnset.lockon = ['5L0'];
				this.data.Learnsets.blastoise.learnset.stealthrock = ['5L0'];
                
                this.data.Learnsets.butterfree.learnset.hurricane = ['5L60'];
                this.data.Learnsets.butterfree.learnset.thunderbolt = ['5M'];
                this.data.Learnsets.butterfree.learnset.thunder = ['5M'];
                this.data.Learnsets.butterfree.learnset.icebeam = ['5M'];
                this.data.Learnsets.butterfree.learnset.blizzard = ['5M'];
                this.data.Learnsets.butterfree.learnset.batonpass = ['5L55'];
                
                this.data.Learnsets.pidgeot.learnset.honeclaws = ['5L25'];
                this.data.Learnsets.pidgeot.learnset.thrash = ['5L65'];

				this.data.Learnsets.raticate.learnset.fakeout = ['5L0'];
				this.data.Learnsets.raticate.learnset.firefang = ['5L0'];
				this.data.Learnsets.raticate.learnset.thunderfang = ['5L0'];
				this.data.Learnsets.raticate.learnset.icefang = ['5L0'];
				this.data.Learnsets.raticate.learnset.crunch = ['5L0'];
				this.data.Learnsets.raticate.learnset.lowsweep = ['5L0'];
				
                this.data.Learnsets.arbok.learnset.dracometeor = ['5T'];
                this.data.Learnsets.arbok.learnset.dragondance = ['5L48'];
                this.data.Learnsets.arbok.learnset.outrage = ['5T'];
                this.data.Learnsets.arbok.learnset.dragonrush = ['5L35'];
                this.data.Learnsets.arbok.learnset.dragonpulse = ['5M'];
                
                this.data.Learnsets.raichu.learnset.swordsdance = ['5M'];
                this.data.Learnsets.raichu.learnset.weatherball = ['5L65'];
				this.data.Learnsets.raichu.learnset.extremespeed = ['5L0'];
				
				this.data.Learnsets.sandslash.learnset.drillrun = ['5L0'];
				this.data.Learnsets.sandslash.learnset.spikes = ['5L0'];
				this.data.Learnsets.sandslash.learnset.headsmash = ['5L0'];
                
                this.data.Learnsets.nidoqueen.learnset.psychic = ['5M'];
                this.data.Learnsets.nidoqueen.learnset.paleowave = ['5L40'];
                this.data.Learnsets.nidoqueen.learnset.calmmind = ['5M;'];
                this.data.Learnsets.nidoqueen.learnset.slackoff = ['5L59']
                
                this.data.Learnsets.nidoking.learnset.bulkup = ['5M'];
                this.data.Learnsets.nidoking.learnset.poisontail = ['5L56'];
                this.data.Learnsets.nidoking.learnset.ironhead = ['5L72'];
                this.data.Learnsets.nidoking.learnset.slackoff = ['5L59'];
                this.data.Learnsets.nidoking.learnset.iciclecrash = ['5L49'];
                this.data.Learnsets.nidoking.learnset.dragondance = ['5L60'];
                
				this.data.Learnsets.clefable.learnset.painsplit= ['5L0'];
				this.data.Learnsets.clefable.learnset.softboiled= ['5L0'];
				this.data.Learnsets.clefable.learnset.healpulse= ['5L0'];
				
                this.data.Learnsets.ninetales.learnset.recover = ['5L78'];
				
				this.data.Learnsets.wigglytuff.learnset.recover = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.aromatherapy = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.painsplit = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.knockoff = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.lovelykiss = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.torment = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.encore = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.whirlwind = ['5L0'];
				this.data.Learnsets.wigglytuff.learnset.roar = ['5L0'];
                
                this.data.Learnsets.vileplume.learnset.weatherball = ['5L30'];
                delete this.data.Learnsets.vileplume.learnset.aromatherapy;
                this.data.Learnsets.vileplume.learnset.growth = ['5L27'];
                this.data.Learnsets.vileplume.learnset.leafstorm = ['5L67'];
                this.data.Learnsets.vileplume.learnset.lunardance = ['5L77'];
                
                this.data.Learnsets.bellossom.learnset.wish = ['5L45'];
                this.data.Learnsets.bellossom.learnset.aromatherapy = ['5L29'];
                this.data.Learnsets.bellossom.learnset.reflect = ['5M'];
                this.data.Learnsets.bellossom.learnset.lightscreen = ['5M'];
                this.data.Learnsets.bellossom.learnset.disable = ['5L52'];
                this.data.Learnsets.bellossom.learnset.encore= ['5L45'];
                
                this.data.Learnsets.parasect.learnset.fling = ['5L0'];
                this.data.Learnsets.parasect.learnset.synthesis = ['5L10'];
                this.data.Learnsets.parasect.learnset.taunt = ['5L20'];
                this.data.Learnsets.parasect.learnset.wildcharge = ['5L30'];
                this.data.Learnsets.parasect.learnset.hornleech = ['5L40'];
				this.data.Learnsets.parasect.learnset.naturepower = ['5L0'];
				this.data.Learnsets.parasect.learnset.poisonjab = ['5L0'];
                
                this.data.Learnsets.dugtrio.learnset.wildcharge = ['5L30'];
                
                this.data.Learnsets.persian.learnset.encore = ['5L30'];
                this.data.Learnsets.persian.learnset.snarl = ['5L45'];
                
                this.data.Learnsets.golduck.learnset.reflect
                this.data.Learnsets.golduck.learnset.cosmicpower = ['5L45'];
                this.data.Learnsets.golduck.learnset.thunderbolt = ['5M'];
                this.data.Learnsets.golduck.learnset.shadowball = ['5M'];
                this.data.Learnsets.golduck.learnset.shadowclaw = ['5M'];
                
                this.data.Learnsets.primeape.learnset.jumkick = ['5L45'];
                this.data.Learnsets.primeape.learnset.hijumpkick = ['5L45'];
                this.data.Learnsets.primeape.learnset.machpunch= ['5L45'];
				delete this.data.Learnsets.primeape.learnset.meditate;
                
                delete this.data.Learnsets.poliwag.learnset.bellydrum;
				
                delete this.data.Learnsets.poliwhirl.learnset.bellydrum;
				
                delete this.data.Learnsets.poliwrath.learnset.bellydrum;
                this.data.Learnsets.poliwrath.learnset.closecombat = ['5L40'];
                this.data.Learnsets.poliwrath.learnset.machpunch = ['5L30'];
                this.data.Learnsets.poliwrath.learnset.aquajet = ['5L0'];
				this.data.Learnsets.poliwrath.learnset.stormthrow = ['5L0'];
				this.data.Learnsets.poliwrath.learnset.circlethrow = ['5L0'];
                
                delete this.data.Learnsets.politoed.learnset.bellydrum;
                
                this.data.Learnsets.alakazam.learnset.thunderbolt = ['5M'];
                this.data.Learnsets.alakazam.learnset.icebeam = ['5M'];
				                
                this.data.Learnsets.machamp.learnset.circlethrow = ['5L0'];
                
                this.data.Learnsets.victreebel.learnset.agility = ['5L50']; 
                
                this.data.Learnsets.tentacruel.learnset.thunderwave = ['5M'];
                
                this.data.Learnsets.golem.learnset.rapidspin = ['5L0'];
                this.data.Learnsets.golem.learnset.icepunch = ['5L0'];
                
                this.data.Learnsets.rapidash.learnset.workup = ['5M'];
                this.data.Learnsets.rapidash.learnset.batonpass = ['5L20'];
                
                this.data.Learnsets.slowbro.learnset.healbell= ['5L50'];
                this.data.Learnsets.slowbro.learnset.haze = ['5L0'];
                this.data.Learnsets.slowbro.learnset.storedpower = ['5L0'];
                
                this.data.Learnsets.slowking.learnset.storedpower = ['5L28'];
                this.data.Learnsets.slowking.learnset.batonpass= ['5L93'];
                this.data.Learnsets.slowking.learnset.wish = ['5L26'];
                
                this.data.Learnsets.magnezone.learnset.autotomize = ['5L22'];
                
                this.data.Learnsets.dodrio.learnset.closecombat= ['5L92'];
                
				this.data.Learnsets.dewgong.learnset.recover = ['5L0'];
				this.data.Learnsets.dewgong.learnset.uturn = ['5L0'];
				
                this.data.Learnsets.muk.learnset.bulkup = ['5M'];
                this.data.Learnsets.muk.learnset.slackoff = ['5L0'];
				
				delete this.data.Learnsets.cloyster.learnset.spikecannon;
                
                this.data.Learnsets.cloyster.learnset.stealthrock = ['5T'];
                
                this.data.Learnsets.steelix.learnset.coil = ['5M'];
                this.data.Learnsets.steelix.learnset.headsmash = ['5L70'];
                
                this.data.Learnsets.gengar.learnset.nastyplot = ['5L29'];
				
				this.data.Learnsets.hypno.learnset.darkvoid = ['5L0'];
				this.data.Learnsets.hypno.learnset.recover = ['5L0'];
				this.data.Learnsets.hypno.learnset.vacuumwave = ['5L0'];
				this.data.Learnsets.hypno.learnset.aurasphere = ['5L0'];
                
                this.data.Learnsets.kingler.learnset.shellsmash = ['5L43'];
                
                this.data.Learnsets.electrode.learnset.paleowave = ['5L43'];
                this.data.Learnsets.electrode.learnset.flamethrower = ['5M'];
                this.data.Learnsets.electrode.learnset.overheat = ['5M']
                this.data.Learnsets.electrode.learnset.focusblast = ['5M']
                
                this.data.Learnsets.exeggutor.learnset.rockblast = ['5L0'];
                this.data.Learnsets.exeggutor.learnset.growth = ['5L33'];
                this.data.Learnsets.exeggutor.learnset.calmmind = ['5L0'];
                
                this.data.Learnsets.marowak.learnset.headsmash = ['5L58'];
                
                this.data.Learnsets.lickilicky.learnset.doubleedge = ['5L45'];
                this.data.Learnsets.lickilicky.learnset.wish = ['5L15'];
                this.data.Learnsets.lickilicky.learnset.healbell = ['5L50'];
                
                this.data.Learnsets.weezing.learnset.icebeam = ['5M'];
                this.data.Learnsets.weezing.learnset.toxicspikes= ['5L0'];
				
                this.data.Learnsets.rhyperior.learnset.dragondance = ['5L40'];
                this.data.Learnsets.rhyperior.learnset.hornleech = ['5L0'];
                this.data.Learnsets.rhyperior.learnset.headsmash = ['5L80'];
                
                this.data.Learnsets.blissey.learnset.batonpass = ['5L0'];
                this.data.Learnsets.blissey.learnset.wish = ['5L50'];
                this.data.Learnsets.blissey.learnset.hypervoice = ['5L80'];
                
                this.data.Learnsets.tangrowth.learnset.curse = ['5L20'];
                this.data.Learnsets.tangrowth.learnset.earthquake = ['5L20'];
                this.data.Learnsets.tangrowth.learnset.hornleech = ['5L20'];
                this.data.Learnsets.tangrowth.learnset.circlethrow = ['5L20'];
                
                this.data.Learnsets.kangaskhan.learnset.wish = ['5L20'];
                this.data.Learnsets.kangaskhan.learnset.crunch = ['5L35'];
                
                this.data.Learnsets.seaking.learnset.hornleech = ['5L20'];
                this.data.Learnsets.seaking.learnset.swordsdance = ['5M'];
                this.data.Learnsets.seaking.learnset.hornleech = ['5L55'];
                this.data.Learnsets.seaking.learnset.aquajet = ['5L0'];
				
                this.data.Learnsets.starmie.learnset.shadowball = ['5M'];
                this.data.Learnsets.starmie.learnset.calmmind = ['5M'];
                
                this.data.Learnsets.scizor.learnset.hammerarm = ['5L56'];
                
				this.data.Learnsets.scyther.learnset.acrobatics = ['5L0'];
				this.data.Learnsets.scyther.learnset.fakeout = ['5L0'];
				
                this.data.Learnsets.jynx.learnset.weatherball = ['5L45'];
                this.data.Learnsets.jynx.learnset.glaciate = ['5L72'];
                
                this.data.Learnsets.electivire.learnset.agility = ['5L43'];
                this.data.Learnsets.electivire.learnset.fusionbolt = ['5L46'];
                this.data.Learnsets.electivire.learnset.batonpass = ['5L56'];
                this.data.Learnsets.electivire.learnset.drainpunch = ['5L25'];
                this.data.Learnsets.electivire.learnset.bulkup = ['5L26'];
                this.data.Learnsets.electivire.learnset.suckerpunch = ['5L43'];
                
                this.data.Learnsets.magmortar.learnset.fusionflare = ['5L100'];
                this.data.Learnsets.magmortar.learnset.eruption = ['5L90'];
                this.data.Learnsets.magmortar.learnset.magmastorm = ['5L80'];
                this.data.Learnsets.magmortar.learnset.nastyplot = ['5L70'];
                
                this.data.Learnsets.pinsir.learnset.poisonjab = ['5L30'];
                this.data.Learnsets.pinsir.learnset.suckerpunch = ['5L40'];
                this.data.Learnsets.pinsir.learnset.nightslash = ['5L60'];
                this.data.Learnsets.pinsir.learnset.bulkup = ['5M'];
                delete this.data.Learnsets.pinsir.learnset.closecombat;
                
                this.data.Learnsets.tauros.learnset.headsmash = ['5L54'];
				
                this.data.Learnsets.gyarados.learnset.skyattack = ['5L73'];
                
                this.data.Learnsets.lapras.learnset.wish = ['5L0'];
                this.data.Learnsets.lapras.learnset.superpower = ['5T'];
                this.data.Learnsets.lapras.learnset.haze = ['5L0'];
                this.data.Learnsets.lapras.learnset.glaciate = ['5L50'];
                this.data.Learnsets.lapras.learnset.recover = ['5L50'];
                this.data.Learnsets.lapras.learnset.aquajet = ['5L20'];
				this.data.Learnsets.lapras.learnset.hornleech = ['5L0'];
				this.data.Learnsets.lapras.learnset.iciclecrash = ['5L0'];
                
                this.data.Learnsets.vaporeon.learnset.dragontail = ['5M'];
                
                this.data.Learnsets.jolteon.learnset.electroball = ['5L27'];
                this.data.Learnsets.jolteon.learnset.paleowave = ['5L30'];
                
                this.data.Learnsets.flareon.learnset.flareblitz = ['5L33'];
                this.data.Learnsets.flareon.learnset.uturn = ['5M'];
                this.data.Learnsets.flareon.learnset.stoneedge = ['5M'];
                this.data.Learnsets.flareon.learnset.rockslide = ['5M'];
                this.data.Learnsets.flareon.learnset.swordsdance = ['5M'];
                this.data.Learnsets.flareon.learnset.dragondance = ['5L40'];
                this.data.Learnsets.flareon.learnset.wildcharge = ['5L45'];
				
                this.data.Learnsets.umbreon.learnset.darkvoid = ['5L60'];
				
                this.data.Learnsets.espeon.learnset.recover = ['5L60'];
                this.data.Learnsets.espeon.learnset.aurasphere = ['5L50'];
				
                this.data.Learnsets.leafeon.learnset.growth = ['5L60'];
                this.data.Learnsets.leafeon.learnset.earthpower = ['5TS'];
				this.data.Learnsets.leafeon.learnset.naturepower = ['5L0'];
				
                this.data.Learnsets.glaceon.learnset.glaciate = ['5L50'];
                this.data.Learnsets.glaceon.learnset.iciclecrash = ['5L60'];
                
                this.data.Learnsets.porygon2.learnset.flamethrower = ['5M'];
                this.data.Learnsets.porygon2.learnset.fireblast = ['5M'];
                
                this.data.Learnsets.porygonz.learnset.flamethrower = ['5M'];
                this.data.Learnsets.porygonz.learnset.fireblast = ['5M'];
                
				delete this.data.Learnsets.omastar.learnset.spikecannon;
                this.data.Learnsets.omastar.learnset.paleowave = ['5L40'];
				
                this.data.Learnsets.aerodactyl.learnset.headsmash = ['5L80'];
                
                this.data.Learnsets.snorlax.learnset.slackoff = ['5L50'];
                this.data.Learnsets.snorlax.learnset.bounce = ['5T']
                this.data.Learnsets.snorlax.learnset.hammerarm = ['5L42'];
                
                this.data.Learnsets.dragonite.learnset.healbell = ['5T'];
                this.data.Learnsets.dragonite.learnset.acrobatics = ['5L50'];
                this.data.Learnsets.dragonite.learnset.skyattack = ['5L34'];
                
                delete this.data.Learnsets.articuno.learnset.hurricane;
                this.data.Learnsets.articuno.learnset.glaciate = ['5L90'];
                this.data.Learnsets.articuno.learnset.lunardance = ['5L50'];
                this.data.Learnsets.articuno.learnset.thunderbolt = ['5M'];
                this.data.Learnsets.articuno.learnset.calmmind = ['5M'];
                
                this.data.Learnsets.zapdos.learnset.hurricane = ['5L90'];
                
                delete this.data.Learnsets.moltres.learnset.hurricane;
                this.data.Learnsets.moltres.learnset.magmastorm = ['5L80'];
                this.data.Learnsets.moltres.learnset.eruption = ['5L90'];
				
                this.data.Learnsets.mew.learnset.psystrike = ['5L90'];
                
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//UNOVA
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////				
				
				this.data.Learnsets.victini.learnset.boltstrike = ['5L0'];
				this.data.Learnsets.victini.learnset.blueflare = ['5L0'];
				this.data.Learnsets.victini.learnset.glaciate = ['5L0'];
				this.data.Learnsets.victini.learnset.vacuumwave = ['5L0'];
                
                this.data.Learnsets.serperior.learnset.earthquake = ['5M'];
                this.data.Learnsets.serperior.learnset.toxicspikes = ['5L54'];
                this.data.Learnsets.serperior.learnset.earthpower= ['5L54'];
                
                this.data.Learnsets.emboar.learnset.forcepalm = ['5L35'];
                this.data.Learnsets.emboar.learnset.drainpunch = ['5L45'];
                this.data.Learnsets.emboar.learnset.machpunch = ['5L0'];
                
                this.data.Learnsets.samurott.learnset.shellsmash = ['5L75'];
				
				this.data.Learnsets.watchog.learnset.fakeout = ['5L0'];
				this.data.Learnsets.watchog.learnset.uturn = ['5L0'];
				this.data.Learnsets.watchog.learnset.punishment = ['5L0'];
				this.data.Learnsets.watchog.learnset.snatch = ['5L0'];
				this.data.Learnsets.watchog.learnset.memento = ['5L0'];
				this.data.Learnsets.watchog.learnset.healingwish = ['5L0'];
				this.data.Learnsets.watchog.learnset.doubleedge = ['5L0'];
				this.data.Learnsets.watchog.learnset.darkpulse = ['5L0'];
				this.data.Learnsets.watchog.learnset.darkvoid = ['5L0'];
				this.data.Learnsets.watchog.learnset.suckerpunch = ['5L0'];
				
				this.data.Learnsets.stoutland.learnset.flamecharge = ['5L0'];
				this.data.Learnsets.stoutland.learnset.swordsdance = ['5L0'];
				
				this.data.Learnsets.liepard.learnset.disable = ['5L0'];
				this.data.Learnsets.liepard.learnset.batonpass = ['5L0'];
				this.data.Learnsets.liepard.learnset.workup = ['5L0'];
				this.data.Learnsets.liepard.learnset.agility = ['5L0'];
				this.data.Learnsets.liepard.learnset.moonlight = ['5L0'];
                
				this.data.Learnsets.simisage.learnset.bulkup = ['5L0'];
				this.data.Learnsets.simisage.learnset.growth = ['5L0'];
				this.data.Learnsets.simisage.learnset.glare = ['5L0'];
				this.data.Learnsets.simisage.learnset.taunt = ['5L0'];

				this.data.Learnsets.simisear.learnset.thunderbolt = ['5L0'];
				this.data.Learnsets.simisear.learnset.calmmind = ['5L0'];
				this.data.Learnsets.simisear.learnset.morningsun = ['5L0'];
				
				this.data.Learnsets.simipour.learnset.slackoff = ['5L0'];
				this.data.Learnsets.simipour.learnset.encore = ['5L0'];
				this.data.Learnsets.simipour.learnset.healbell = ['5L0'];
				this.data.Learnsets.simipour.learnset.lightscreen = ['5L0'];
				this.data.Learnsets.simipour.learnset.reflect = ['5L0'];
				this.data.Learnsets.simipour.learnset.haze = ['5L0'];
				
                this.data.Learnsets.musharna.learnset.willowisp = ['5L50'];
                this.data.Learnsets.musharna.learnset.recover = ['5L62'];
                
				this.data.Learnsets.zebstrika.learnset.flareblitz = ['5L0'];
				this.data.Learnsets.zebstrika.learnset.doubleedge = ['5L0'];
				this.data.Learnsets.zebstrika.learnset.jumpkick = ['5L0'];
				this.data.Learnsets.zebstrika.learnset.weatherball = ['5L0'];

				this.data.Learnsets.gigalith.learnset.spikecannon = ['5L0'];
				
                this.data.Learnsets.excadrill.learnset.superpower = ['5T'];
                
                this.data.Learnsets.conkeldurr.learnset.suckerpunch = ['5L60'];
                
                this.data.Learnsets.seismitoad.learnset.slackoff = ['5L0'];
                this.data.Learnsets.seismitoad.learnset.waterfall = ['5M'];
				
                this.data.Learnsets.throh.learnset.meditate = ['5L0'];
                this.data.Learnsets.throh.learnset.machpunch = ['5L0'];
                this.data.Learnsets.throh.learnset.slackoff = ['5L55'];
				
                this.data.Learnsets.sawk.learnset.hijumpkick = ['5L60'];
                
                this.data.Learnsets.scolipede.learnset.rapidspin = ['5L0'];
                this.data.Learnsets.scolipede.learnset.taunt = ['5T'];
                this.data.Learnsets.scolipede.learnset.trick = ['5T'];
				this.data.Learnsets.scolipede.learnset.spikecannon = ['5L0'];
				
				this.data.Learnsets.leavanny.learnset.hornleech = ['5L0'];
				this.data.Learnsets.leavanny.learnset.suckerpunch = ['5L0'];
				this.data.Learnsets.leavanny.learnset.sleeppowder = ['5L0'];
				this.data.Learnsets.leavanny.learnset.quiverdance = ['5L0'];
				this.data.Learnsets.leavanny.learnset.earthpower = ['5L0'];
				this.data.Learnsets.leavanny.learnset.naturepower = ['5L0'];
				this.data.Learnsets.leavanny.learnset.petaldance = ['5L0'];
				this.data.Learnsets.leavanny.learnset.twineedle = ['5L0'];
				
                this.data.Learnsets.lilligant.learnset.earthpower = ['5L0'];
                
                this.data.Learnsets.krookodile.learnset.dragondance = ['5L65'];
                
				this.data.Learnsets.darmanitan.learnset.calmmind = ['5L0'];
				this.data.Learnsets.darmanitan.learnset.shadowball = ['5L0'];
                this.data.Learnsets.darmanitan.learnset.wildcharge = ['5M'];
                
                this.data.Learnsets.scrafty.learnset.suckerpunch = ['5E'];
                
                this.data.Learnsets.sigilyph.learnset.aurasphere = ['5L0'];
                delete this.data.Learnsets.sigilyph.learnset.gust;
                
                this.data.Learnsets.cofagrigus.learnset.hypnosis = ['5L0'];
                
                this.data.Learnsets.carracosta.learnset.dragonpulse = ['5T'];
                this.data.Learnsets.carracosta.learnset.drainpunch = ['5L50'];
                this.data.Learnsets.carracosta.learnset.focusblast = ['5T'];
                this.data.Learnsets.carracosta.learnset.iciclecrash = ['5L100'];
                
                delete this.data.Learnsets.archeops.learnset.earthquake;
                delete this.data.Learnsets.archeops.learnset.bulldoze;
                delete this.data.Learnsets.archen.learnset.earthquake;
                delete this.data.Learnsets.archen.learnset.bulldoze;
				
                this.data.Learnsets.garbodor.learnset.snatch = ['5L0'];
				this.data.Learnsets.garbodor.learnset.gastroacid = ['5L0'];
				this.data.Learnsets.garbodor.learnset.poisonjab = ['5L0'];
				this.data.Learnsets.garbodor.learnset.spikecannon = ['5L0'];
				this.data.Learnsets.garbodor.learnset.suckerpunch = ['5L0'];

                this.data.Learnsets.zoroark.learnset.trick = ['5T'];
                this.data.Learnsets.zoroark.learnset.fireblast = ['5M'];
                this.data.Learnsets.zoroark.learnset.aurasphere = ['5L65'];
                
                this.data.Learnsets.cinccino.learnset.barrage = ['5L45'];
				
				this.data.Learnsets.reuniclus.learnset.aurasphere = ['5L0'];
				
				this.data.Learnsets.vanilluxe.learnset.chargebeam = ['5L0'];
				this.data.Learnsets.vanilluxe.learnset.recover = ['5L0'];
				this.data.Learnsets.vanilluxe.learnset.thunderbolt = ['5L0'];
				this.data.Learnsets.vanilluxe.learnset.haze = ['5L0'];
				this.data.Learnsets.vanilluxe.learnset.nastyplot = ['5L0'];
				
                this.data.Learnsets.sawsbuck.learnset.hijumpkick = ['5L48'];
                this.data.Learnsets.sawsbuck.learnset.extremespeed = ['5L70'];
                
                this.data.Learnsets.escavalier.learnset.superpower = ['5T'];
                this.data.Learnsets.escavalier.learnset.drillrun = ['5T'];
                this.data.Learnsets.escavalier.learnset.stoneedge = ['5L60'];
                this.data.Learnsets.escavalier.learnset.bulletpunch = ['5L0'];
				
                this.data.Learnsets.amoonguss.learnset.leechseed = ['5L0'];
                
				this.data.Learnsets.jellicent.learnset.perishsong = ['5L0'];
				
                this.data.Learnsets.alomomola.learnset.amnesia = ['5L20'];
                this.data.Learnsets.alomomola.learnset.batonpass = ['5L30'];
                this.data.Learnsets.alomomola.learnset.reflect = ['5L35'];
                this.data.Learnsets.alomomola.learnset.lightscreen = ['5L35'];
                this.data.Learnsets.alomomola.learnset.recover = ['5L65'];
                
                this.data.Learnsets.galvantula.learnset.batonpass = ['5L43'];
                
                this.data.Learnsets.ferrothorn.learnset.spikecannon = ['5L0'];
                
                this.data.Learnsets.klinklang.learnset.bulldoze = ['5M'];
                this.data.Learnsets.klinklang.learnset.earthquake = ['5M'];
                
                this.data.Learnsets.eelektross.learnset.agility = ['5M'];
                this.data.Learnsets.eelektross.learnset.swordsdance = ['5M'];
                this.data.Learnsets.eelektross.learnset.dragondance = ['5L0'];
				this.data.Learnsets.eelektross.learnset.extremespeed = ['5L0'];
                
                delete this.data.Learnsets.litwick.learnset.calmmind;
                delete this.data.Learnsets.litwick.learnset.trick;
                delete this.data.Learnsets.lampent.learnset.calmmind;
                delete this.data.Learnsets.lampent.learnset.trick;
                delete this.data.Learnsets.chandelure.learnset.calmmind;
                delete this.data.Learnsets.chandelure.learnset.trick;
                
                this.data.Learnsets.beartic.learnset.iceshard = ['5L0'];
                this.data.Learnsets.beartic.learnset.closecombat = ['5L0'];
                
                this.data.Learnsets.accelgor.learnset.stealthrock = ['5T'];
                this.data.Learnsets.accelgor.learnset.spikes = ['5L62'];
                this.data.Learnsets.accelgor.learnset.selfdestruct = ['5L60'];
                
                this.data.Learnsets.mienshao.learnset.doubleslap = ['5L40'];
                this.data.Learnsets.mienshao.learnset.icywind = ['5L35'];
                
				this.data.Learnsets.druddigon.learnset.dynamicpunch = ['5L0'];
				this.data.Learnsets.druddigon.learnset.yawn = ['5L0'];
				this.data.Learnsets.druddigon.learnset.roost = ['5L0'];
				this.data.Learnsets.druddigon.learnset.circlethrow = ['5L0'];
				this.data.Learnsets.druddigon.learnset.drainpunch = ['5L0'];
				this.data.Learnsets.druddigon.learnset.dragonrush = ['5L0'];
				
                this.data.Learnsets.golurk.learnset.bulkup = ['5L38'];
                this.data.Learnsets.golurk.learnset.painsplit = ['5L48'];
                
                this.data.Learnsets.durant.learnset.bulldoze = ['5M'];
                this.data.Learnsets.durant.learnset.icefang = ['5L0'];
                this.data.Learnsets.durant.learnset.headsmash = ['5L58'];
				
                delete this.data.Learnsets.mandibuzz.learnset.gust;
				
                delete this.data.Learnsets.volcarona.learnset.gust;
                
                this.data.Learnsets.cobalion.learnset.wildcharge = ['5M'];
                this.data.Learnsets.cobalion.learnset.thunderbolt = ['5M'];
                this.data.Learnsets.cobalion.learnset.aurasphere = ['5L59'];
                
                this.data.Learnsets.terrakion.learnset.aurasphere = ['5L59'];
                
                this.data.Learnsets.virizion.learnset.aurasphere = ['5L59'];
				
                delete this.data.Learnsets.landorus.learnset.explosion;
                this.data.Learnsets.landorus.learnset.selfdestruct = ['5L85'];
                
                this.data.Learnsets.keldeo.learnset.shadowball = ['5M'];
                this.data.Learnsets.keldeo.learnset.aurasphere = ['5L59'];
                this.data.Learnsets.keldeo.learnset.icebeam = ['5M'];
                
                this.data.Learnsets.meloetta.learnset.machpunch = ['5L0'];
                this.data.Learnsets.meloetta.learnset.lunardance = ['5L30'];
                this.data.Learnsets.meloetta.learnset.vacuumwave = ['5L20'];
                
                delete this.data.Learnsets.genesect.learnset.explosion;//genesect still gets selfdestruct at lv 77 normally
				delete this.data.Learnsets.genesect.learnset.thunder;
				delete this.data.Learnsets.genesect.learnset.rockpolish;
		}
};

var dict = ['Bowden',
   'Bukósisak',
   'Csavarhúzó',
   'Durrdefekt',
   'Egyirányú utca',
   'Első lámpa',
   'Folyadékpótlás',
   'Gyalogátkelőhely',
   'Hasra esik',
   'Hátsó lámpa',
   'Hegyi kerékpár',
   'Jobbkézszabály',
   'Kerékpártároló',
   'Kerékpárút',
   'Kilométeróra',
   'Királydinnye',
   'Körforgalom',
   'Kulacstartó',
   'Küllő',
   'Lakat',
   'Láncolaj',
   'Lassú defekt',
   'Láthatósági mellény',
   'Ledobja a láncot',
   'Macskaszem',
   'Pótgumi',
   'Satufék',
   'Sebességváltó',
   'Széldzseki',
   'Szelepsapka',
   'Szerelőkészlet',
   'Tárcsafák',
   'Tour de France',
   'Tricikli',
   'Verseny kerékpár',
   'függönykarnis',
   'szobainas',
   'gyökérkezelés',
   'nagyothalló készülék',
   'érintésvédelem ',
   'gyerekzár ',
   'vesepecsenye ',
   'kulturális sokk ',
   'munkásosztály ',
   'gondolatolvasás ',
   'számmisztika ',
   'kenyérpirító ',
   'családfa ',
   'kutatócsoport ',
   'szervkereskedelem',
   'Krémes élvezet',
   'bankósbarát',
   'kankósbarát',
   'baszkurál',
   'azmiaz',
   'Fürgettyű',
   'lófinghalála',
   'moderátor',
   'filézett halfilé',
   'pürésített lábgomba',
   'PENÉSZES FITYMAGÖRCS',
   'HAGYMAPOR',
   'SZENRJÁNOSKENYÉRLISZT',
   'GUARGUMI',
   'SAVANYÚSÁGOT SZABÁLYZÓ ANYAG',
   'TEJBEPAPI',
   'BAKFITTY',
   'szecskaavató',
   'agrobiológia',
   'agráregyetem',
   'agrárforradalom',
   'agrárintervenció',
   'agráripar',
   'agrárkapitalizmus',
   'agrárkérdés',
   'agrármérnök',
   'agrárolló',
   'agrárország',
   'agrárprogram',
   'agrárproletár',
   'agrárpártv',
   'agrárreform',
   'agrárszektor',
   'agrárszocializmus',
   'agrártermelés',
   'acélnemesítő',
   'acélparipa',
   'acélrugó',
   'acélszalag',
   'acélszerkezet',
   'acélszínű',
   'acélszívű',
   'acélszürke',
   'bankadósság',
   'bankalap',
   'bankautomata',
   'bankbetét',
   'bankelnök',
   'bankfedezet',
   'bankfiók',
   'bankfiú',
   'bankhitel',
   'bankhivatalnok',
   'bankház',
   'bankigazgató',
   'bankjegy',
   'bankjegycsomó',
   'bankjegyforgalom',
   'bankjegyhamisítás',
   'bankjegykiadó',
   'balettmester',
   'balettpatkány',
   'balettszoknya',
   'balettszám',
   'balettzene',
   'balfasz',
   'balfedezet',
   'balfogás',
   'balfácán',
   'balhiedelem',
   'balhit',
   'balhátvéd',
   'baljóslatú',
   'balkezes',
   'zabdara', 'zabhegyezés', 'zabkása', 'zabliszt', 'zabpehely', 'zabszem', 'zajhatás', 'zajmentes', 'zajszigetelés', 'zajszint', 'zamatanyag', 'zebracápa', 'zenebarát', 'zenehallgatás', 'zenekar', 'zenekedvelő', 'zenekritikus', 'zenetanár',
   'zenetanító', 'zenetudomány', 'zenetudós', 'zongorajáték', 'zongoraművész', 'zongoraóra', 'zsebkendő', 'zsebkés', 'zsebkönyv', 'zseblámpa', 'zsebnaptár', 'zsebpénz', 'zsebszótár', 'zsebtolvaj', 'zsebóra', 'zsibvásár', 'zsibáru',
   'zsidóbarát', 'zsidócseresznye', 'zsidócsillag', 'zsidógyűlölet', 'zsidókérdés', 'zsidómentes', 'zsidónegyed', 'zsidótörvény', 'zsidóverés', 'zsidóüldözés', 'zsindelytető', 'zsiványbecsület', 'zsoltároskönyv', 'zsákfalu', 'zsákutca',
   'zsírdaganat', 'zsírdús', 'zsírfolt', 'zsírkő', 'zsírmentes', 'zsírsav', 'zsírsejt', 'zsírsertés', 'zsírszegény', 'zsírszövet', 'zsírtartalmú', 'zsúpfedél', 'zsűrielnök', 'zsűritag', 'zugevő', 'zugfirkász', 'zugivó', 'zugkereskedelem',
   'zugárus', 'zugírász', 'zugügyvéd', 'zuhanyfüggöny', 'zuhanyfürdő', 'zálogjegy', 'zálogjog', 'záporeső', 'záptojás', 'zárjegy', 'zárszerkezet', 'zárszámadás', 'záróizom', 'zárójel', 'zárójelentés', 'zárómérleg', 'záróra', 'záróvizsga',
   'zászlóalj', 'zászlóaljparancsnok', 'zászlóanya', 'zászlóavatás', 'zászlóbontás', 'zászlódísz', 'zászlóerdő', 'zászlójelzés', 'zászlórúd', 'zászlósbor', 'zászlóshajó', 'zászlóshal', 'zászlótartó', 'zászlótenger', 'zászlóvivő',
   'zérusosztó', 'zökkenőmentes', 'zöldasztal', 'zöldbab', 'zöldbabfőzelék', 'zöldborsó', 'zöldfülű', 'zöldterület', 'zöldvendéglő', 'zöldövezet',
   'rabbilincs', 'rablóbanda', 'rablóbecsület', 'rablócápa', 'rablógazdálkodás', 'rablógyilkos', 'rablóhal', 'rablóháború', 'rablólovag', 'rablótámadás', 'rablóvezér', 'rabszolgamunka', 'radarjel', 'ragasztóanyag', 'ragasztószer',
   'ragtapasz', 'rajparancsnok', 'rajzkészlet', 'raklap', 'rakpart', 'raktár', 'raktárjegy', 'rangfokozat', 'rangidős', 'rangjelzés', 'reaktorbiztonság', 'redshift', 'regényíró', 'rejtekhely', 'rejtjel', 'rekeszizom', 'reklámanyag',
   'reklámköltség', 'reklámmenedzser', 'relativitáselmélet', 'rendellenes', 'rendfokozat', 'rendház', 'rendjel', 'rendszer', 'rendszergazda', 'rendszertan', 'rendszerváltás', 'rendszám', 'rendszámtábla', 'rendzavarás', 'rendőr',
   'rendőrautó', 'rendőrfelügyelő', 'rendőrkapitányság', 'rendőrnő', 'reptér', 'repüléstan', 'repülőakadémia', 'repülőakna', 'repülőalakulat', 'repülőbaleset', 'repülőbemutató', 'repülőbenzin', 'repülőbizottság', 'repülőbomba',
   'repülőbravúr', 'repülőbrigád', 'repülőcsapat', 'repülőemlékmű', 'repülőerőd', 'repülőezred', 'repülőfedélzet', 'repülőfegyverzet', 'repülőflotta', 'repülőforgalom', 'repülőfutam', 'repülőgyík', 'repülőgép', 'repülőgép-anyahajó',
   'repülőgép-szerelő', 'repülőgépcsarnok', 'repülőgépcsavar', 'repülőgépgyár', 'repülőgépgyártás', 'repülőgéphordozó', 'repülőgépipar', 'repülőgépmodell', 'repülőgépmotor', 'repülőgéprabló', 'repülőgéproncs', 'repülőgépszín',
   'repülőgéptípus', 'repülőgéptörzs', 'repülőgépzúgás', 'repülőhadosztály', 'repülőhal', 'repülőhangár', 'repülőhártya', 'repülőhíd', 'repülőhőstett', 'repülőiskola', 'repülőizom', 'repülőjegy', 'repülőjárat', 'repülőkatasztrófa',
   'repülőkiképzés', 'repülőkikötő', 'repülőkutya', 'repülőkötelék', 'repülőmodell', 'repülőmotor', 'repülőmérnök', 'repülőnap', 'repülőosztály', 'repülőparancsnok', 'repülőpark', 'repülőposta', 'repülőraj', 'repülőrajt', 'repülőruha',
   'repülősebesség', 'repülősport', 'repülőszakértő', 'repülőszerencsétlenség', 'repülőszázad', 'repülőtiszt', 'repülőtámadás', 'repülőtámaszpont', 'repülőtávolság', 'repülőtér', 'repülőutazás', 'repülővizsga', 'repülőváltás',
   'repülőállomás', 'repülőút', 'retúrjegy', 'rezesbanda', 'rezgésszám', 'riadójelzés', 'riadókészültség', 'riasztólövés', 'riasztórendszer', 'riasztószínezet', 'rizsbehozatal', 'rizsfelfújt', 'rizsfogyasztás', 'rizsföld', 'rizskeményítő',
   'rizskása', 'rizsleves', 'rizsmag', 'rizspor', 'rizspálinka', 'rizsszalma', 'rizsszem', 'rizstermés', 'rizsültetvény', 'robbanóanyag', 'robbanófej', 'robbanómotor', 'robbanószerkezet', 'robotember', 'robotgép', 'robotmegváltás',
   'robotmunka', 'robotpilóta', 'robotrepülőgép', 'rockegyüttes', 'rohamoldó', 'rokonszenv', 'romhalmaz', 'romkocsma', 'rosszakarat', 'rosszindulatú', 'rosszkedvű', 'rosszmájú', 'rosszullét', 'rostgazdag', 'rostnövény', 'rovarcsípés',
   'rovarevő', 'rovarirtó', 'rovarirtószer', 'rovartan', 'rozscipó', 'rozsdamentes', 'rozsdaszín', 'rozsföld', 'rozskalász', 'rozspálinka', 'ruggyanta', 'ruhaakasztó', 'ruhaanyag', 'ruhatár', 'ruhásszekrény', 'rácsháló', 'rádióadás',
   'rádióadó', 'rádióbemondó', 'rádiócsillagászat', 'rádióhullám', 'rádiójel', 'rádiójáték', 'rádiókészülék',
   'cementágyú', 'centiméter', 'ceremóniamester', 'ceruzabél', 'ceruzahegyező', 'ceruzarajz', 'cetcápa', 'cethal', 'cetvadászat', 'cibereleves', 'cigarettadoboz', 'cigarettapapír', 'cigarettatárca', 'cigányasszony', 'cigánybanda',
   'cigányhal', 'cigánykerék', 'cigánylány', 'cigányprímás', 'cigánysor', 'cigányzene', 'cigányzenekar', 'cipőméret', 'cipősarok', 'cipőtalp', 'cirillábécé', 'citromalma', 'citromcápa', 'civilszervezet', 'ciántartalmú', 'combcsont',
   'combtörés', 'csalihal', 'családalapítás', 'családanya', 'családapa', 'családfenntartó', 'családfő', 'családgondozás', 'családirtás', 'családjog', 'családlátogatás', 'családmodell', 'családnév', 'családregény', 'családtag',
   'családtervezés', 'családvédelem', 'családépítő', 'csapadékdús', 'csapadékmennyiség', 'csapadékszegény', 'csapatbajnokság', 'csapatjáték', 'csapatkapitány', 'csapatparancsnok', 'csapatsport', 'csapattiszt', 'csapattitkár', 'csapatvezető',
   'csapatzászló', 'csaposlegény', 'csapágy', 'csapóajtó', 'csatahajó', 'csatarend', 'csatatér', 'csatornafedél', 'csatornahálózat', 'csatornamunkás', 'csatornanyílás', 'csatornarendszer', 'csatornaépítés', 'csavaralátét', 'csavaranya',
   'csavaremelő', 'csavarfej', 'csavargőzös', 'csavarház', 'csavarhúzó', 'csavarirón', 'csavarkerék', 'csavarkulcs', 'csavarmenet', 'csavarmenetvágó', 'csavarmikrométer', 'csavarorsó', 'csavarszorító', 'csavarvonal', 'csavarvágó',
   'csavarárú', 'csecsemőhalandóság', 'csecsemőkor', 'csecsemőmirigy', 'csecsszopó', 'Csehország', 'csekkfüzet', 'csekkszámla', 'cselekvőképes', 'csemegebor', 'csemegekukorica', 'csempészbanda', 'csempészáru', 'csendháborítás', 'csendőr',
   'csendőrnyomozó', 'csendőrtiszt', 'csengőhang', 'cseppentőüveg', 'cseppfolyós', 'cseppkő', 'cseppkőbarlang', 'csepűrágó', 'cseranyag', 'csereakció', 'csereanyag', 'cserebogár', 'cserebélyeg', 'cserekereskedelem', 'cseresznyebefőtt',
   'cseresznyefa', 'cseresznyemag', 'cseresznyepiros', 'cseresznyepálinka', 'cserépedény', 'cserépkályha', 'cseréptál', 'cserépáru', 'csigalépcső', 'csigasor', 'csigolyatörés', 'csikóhal', 'csillagboltozat', 'csillagcsavarhúzó',
   'csillagfény', 'csillagfürt', 'csillaggomba', 'csillaggyümölcs', 'csillaghatszög', 'csillaghullás', 'csillagjegy', 'csillagjós', 'csillagjóslás', 'csillagkép', 'csillagköd', 'csillagközi', 'csillagrendszer', 'csillagsokszög',
   'csillagtérkép', 'csillagtök', 'csillagállat', 'csillagánizs', 'csillagének', 'csillámpala', 'csirkefogó', 'csirkepaprikás', 'csiszolóanyag', 'csodabogyó', 'csodabogár', 'csodacsapat', 'csodadoktor', 'csodadolog', 'csodaerő',
   'csodafegyver', 'csodafutó', 'csodagyerek', 'csodagyermek', 'csodahegedű', 'csodahit', 'csodakapus', 'csodalény', 'csodaló', 'csodamód', 'csodaország', 'csodapók', 'csodarabbi', 'csodaszarvas', 'csodaszer', 'csodaszép', 'csodatett',
   'csodatevő', 'csodatétel', 'csodatölcsér', 'csodatükör', 'csodavárás', 'csodaállat', 'csokoládébarna', 'csokornyakkendő', 'csomagológép', 'csomagolóipar', 'csomagtartó', 'csonthártya', 'csonthártyagyulladás', 'csontleves',
   'csontlágyulás', 'csontrendszer', 'csontrepedés', 'csontritkulás', 'csonttár', 'csonttörés',
   'dackorszak', 'dacszövetség', 'daganatképződés', 'dagasztógép', 'dajkacápa', 'daljáték', 'dallamkincs', 'daloskönyv', 'daloskör', 'dandárparancsnok', 'dandárparancsnokság', 'darabdeszka', 'darabjegyzék', 'darabszám', 'deciméter',
   'derékfájás', 'derékméret', 'derékszög', 'derékzsába', 'derítőfürdő', 'derítőszer', 'derűlátás', 'desszertbor', 'deszkaajtó', 'deszkaalkotmány', 'deszkaborítás', 'deszkaburkolat', 'deszkabélés', 'deszkabódé', 'deszkadarab', 'deszkafal',
   'deszkajárda', 'deszkakabin', 'deszkakapu', 'deszkakeret', 'deszkakerítés', 'deszkakoporsó', 'deszkalap', 'deszkaláda', 'deszkamellű', 'deszkamennyezet', 'deszkapad', 'deszkapadló', 'deszkapalló', 'deszkapalánk', 'deszkapolc',
   'deszkaszál', 'deszkavágó', 'deszkaállvány', 'diadalkapu', 'dinamóméter', 'dinnyeföld', 'dinnyetermés', 'diszkoszvetés', 'disznóhús', 'divatbemutató', 'divathölgy', 'divatkirály', 'divattervezés', 'diákigazolvány', 'diáknaptár',
   'diáknyelv', 'diákotthon', 'diákszálló', 'diáktüntetés', 'diófa', 'diófaszín', 'dióhéj', 'diótörő', 'dobbantódeszka', 'dobfelszerelés', 'dobhártya', 'dobtár', 'dobókocka', 'dohányfüst', 'dokkmunkás', 'doktornő', 'dokumentumfilm',
   'dolgozószoba', 'dombvidék', 'doppingszer', 'drogfogyasztás', 'drogfüggőség', 'drágakő', 'drótakadály', 'drótháló', 'drótkefe', 'drótkerítés', 'drótkötél', 'drótkötélpálya', 'drótposta', 'dugáru', 'dugódíj', 'dunyhahuzat', 'dzsungelharc',
   'dámszarvas', 'dámvad', 'délebéd', 'délelőtt', 'délkelet', 'délkör', 'délnyugat', 'délután', 'dézsmabúza', 'dézsmagabona', 'díjlovaglás', 'díjmentes', 'díjosztály', 'díjszabás', 'díjugratás', 'díszdoboz', 'díszdoktor', 'díszebéd',
   'díszelőadás', 'díszfa', 'díszfelvonulás', 'díszhely', 'díszjelvény', 'díszkapu', 'díszkiadás', 'díszlakoma', 'díszletfestő', 'díszlettervezés', 'díszpolgár', 'díszpéldány', 'díszspárga', 'díszszázad', 'dísztag', 'díszvacsora',
   'díszvendég', 'díszőrség', 'dízelmotor', 'döntéshozatal', 'döntéshozás', 'döntőbíró', 'dúcsejt', 'dúsgazdag', 'dühkitörés', 'dühroham', 'dülmirigy', 'dülmirigygyulladás', 'dűlőföld', 'E', 'ebadó', 'ebihal', 'ebédhordó', 'ebédidő',
   'ebédjegy', 'ebédkoszt', 'ebédlő', 'ebédlőasztal', 'ebédlőszekrény', 'ebédlőterem', 'ebédosztás', 'ebédszünet', 'ecetsav', 'egyeduralkodó', 'egyedüllét', 'egyemeletes', 'egyenletrendszer', 'egyenlőségjel', 'egyetemváros', 'egyezer',
   'egyfelvonásos', 'egyfülű', 'egyhangú', 'egyházközség', 'egyházmegye', 'egyhónapos', 'egyidejű', 'egyirányú', 'egyjegyű', 'egykarú', 'egykedvű', 'egykezű', 'egylaki', 'egylábú', 'egymillió', 'egymás', 'egynapos', 'egyoldalú', 'egypetéjű',
   'egypártrendszer', 'egypólusú', 'egypúpú', 'egyrészes', 'egysejtű', 'egysoros', 'egyszarvú', 'egyszemű', 'egyszeregy', 'egyszikű', 'egyszobás', 'egyszáz', 'egyszínű', 'egyszólamú', 'egyszótagú', 'egységfront', 'egységár', 'egysínű',
   'egytálétel',
   'faanyag', 'faarc', 'faburkolat', 'facipő', 'facsavar', 'fadarab', 'faggyúcsomó', 'faggyúmirigy', 'fagyasztóberendezés', 'fagyasztógép', 'fagyasztóláda', 'fagyasztópult', 'fagyasztószekrény', 'fagyasztótasak', 'fagyhullám', 'fagypont',
   'fagyzug', 'fagyálló', 'fagyáspont', 'fahasáb', 'faház', 'faiskola', 'fajalma', 'fajgazdag', 'fajhő', 'fajmeghatározás', 'fajsúly', 'fajtaváltozat', 'fajtiszta', 'fajélesztő', 'fakereskedelem', 'fakeret', 'fakéreg', 'falcsont', 'falevél',
   'falfestmény', 'falinaptár', 'falióra', 'falmászás', 'falmászó', 'falsík', 'falubika', 'faluszája', 'falutérkép', 'faláb', 'faló', 'falósejt', 'famentes', 'fametszet', 'fanevelés', 'fantáziadús', 'fantáziaszegény', 'farkasalma',
   'farkaskutya', 'farkaséhség', 'farkasétvágy', 'farkcsont', 'farzseb', 'fasor', 'faszfej', 'faszén', 'fatermelés', 'fatorlasz', 'fattyúág', 'fatuskó', 'fatönk', 'fatörzs', 'favastagságú', 'favágó', 'fazekasagyag', 'fazekaskorong',
   'fazekasáru', 'fazonmunka', 'fazsindely', 'faág', 'faágy', 'faépítmény', 'fedélköz', 'fedélzetmester', 'fedélzetpáncél', 'fedőcím', 'fedőfesték', 'fedőnév', 'fedőszerv', 'fegyház', 'fegyverbarátság', 'fegyverolaj', 'fegyverropogás',
   'fegyverszünet', 'fegyvertár', 'fegyőr', 'fehérbor', 'fehérjedús', 'fehérnemű', 'fehérnép', 'Fehéroroszország', 'fehérítőszer', 'fejadag', 'fejadó', 'fejbólintás', 'fejbőr', 'fejdísz', 'fejedelemasszony', 'fejenállás', 'fejesugrás',
   'fejfa', 'fejfedő', 'fejfájás', 'fejgerenda', 'fejgyám', 'fejhallgató', 'fejhang', 'fejkendő', 'fejkötő', 'fejléc', 'fejlődéstörténet', 'fejmosás', 'fejoldal', 'fejsajt', 'fejszámolás', 'fejtető', 'fejtámla', 'fejtörés', 'fejtörő',
   'fejvadász', 'fejék', 'feketekereskedelem', 'feketekávé', 'feketelista', 'feketemunka', 'feketepiac', 'feketerigó', 'feketeszén', 'fekvőhely', 'feladatkör', 'felbontóképesség', 'felebarát', 'felelősségbiztosítás', 'feleséggyilkos',
   'felfogóképesség', 'felhang', 'felhőkarcoló', 'felhőszakadás', 'felkarcsont', 'felkiáltójel', 'fellebbvitel', 'felnőttkor', 'felnőttoktatás', 'felségjel', 'felségterület', 'felségvizek', 'felsőruha', 'felsőszorb', 'felvevőképes',
   'felvonóakna', 'felügyelőbizottság', 'felülnézet', 'fenyőerdő', 'fenyőfa', 'fenyőillat', 'fenyőliget', 'fenyőtoboz', 'fenékdeszka', 'fenéksúly', 'fenőkő', 'fertőtlenítőszer', 'festőanyag', 'feszmérő', 'feszítőrúd', 'feszítővas',
   'feszültségkiegyenlítő', 'feszültségmérő', 'feszültségteremtő', 'fiatalasszony', 'filmarc', 'filmcsillag', 'filmművészet', 'filmrendező', 'filmszalag', 'filmszínész', 'Finnország', 'finommechanika', 'fizetésemelés', 'fizetésképtelen',
   'fizetőeszköz', 'fizetőképes', 'fizikakönyv', 'fizikaszertár', 'fizikatanár', 'fiókintézet', 'fiókvállalat', 'Flanzy-eljárás', 'flottabázis', 'flottafelvonulás', 'flottatámaszpont', 'flottatüntetés', 'focilabda', 'fodrásznő',
   'fogadjisten', 'fogadócsarnok',
   'tagdíj', 'tagdíjfizetés', 'tagdíjhátralék', 'tagország', 'takarmánygabona', 'takarmányrozs', 'takarékbetét', 'takarékbetétkönyv', 'takarékbélyeg', 'takarékkönyv', 'takarékpersely', 'takarékpénztár', 'takaréktűzhely', 'takonypóc',
   'talajbiológia', 'talajfajta', 'talajfizika', 'talajhőmérséklet', 'talajjavítás', 'talajművelés', 'talajnem', 'talajtan', 'talajviszonyok', 'talajvíz', 'talpfa', 'talpraesett', 'találkozik', 'találékony', 'tananyag', 'tandíj',
   'tandíjmentes', 'tankakadály', 'tankcsapda', 'tankhajó', 'tankönyv', 'tanszer', 'tantárgy', 'tanulság', 'tanulóbicikli', 'tanulókör', 'tanulónap', 'tanyaközpont', 'tanácsadás', 'tanácskozás', 'tanácsköztársaság', 'tanár', 'tanárnő',
   'tanítás', 'tanítónő', 'tanóra', 'tanúhegy', 'tapadóképesség', 'tapadószerv', 'tapasztalat', 'tapintat', 'tapintatlan', 'tapintásérzék', 'taposómalom', 'tapsvihar', 'tapétaajtó', 'tarackbúza', 'tarifaszövetség', 'tartalom',
   'tartalomjegyzék', 'tartalékalap', 'tartalékcsapat', 'tartalékjátékos', 'tartalékvilágítás', 'tartályhajó', 'tartálykocsi', 'tavaszbúza', 'taxisofőr', 'taxiállomás', 'teherautó', 'teherbírás', 'teherfeladás', 'teherfelvonó',
   'teherforgalom', 'teherfuvar', 'tehergépkocsi', 'tehergőzös', 'teherhajó', 'teherhordó', 'teherjármű', 'teherkocsi', 'tehermentes', 'teherpróba', 'teherpályaudvar', 'teherszállítás', 'tehertaxi', 'tehertétel', 'teherviselés',
   'tehervonat', 'tehervontatás', 'teheráru', 'tejberizs', 'tejcsarnok', 'tejcsokoládé', 'tejesasszony', 'tejmirigy', 'tejszínhab', 'tejszövetkezet', 'Tejút', 'Tejútrendszer', 'tejútrendszer', 'teknősbéka', 'teknősbékapáncél',
   'telefonbeszélgetés', 'telefonkönyv', 'telefonközpont', 'telefonszolgáltatás', 'telefonszám', 'telekadó', 'telekkönyv', 'településgyűrű', 'televényföld', 'telihold', 'telivér', 'teljhatalom', 'teltkarcsú', 'telér', 'templomhajó',
   'templomtorony', 'tengelycsapágy', 'tengelyhatalom', 'tengelynyomás', 'tengelytörés', 'tengernagy', 'tengerpart', 'tengerszem', 'tengerszoros', 'tengerzár', 'tengeráramlás', 'tengerészgyalogság', 'tengeröböl', 'teniszlabda',
   'tenyérjóslás', 'tenyészanyag', 'tenyészbika', 'tenyészcsődör', 'tenyészhal', 'tenyészkan', 'tenyészló', 'tenyészállat', 'terepakadály', 'terepasztal', 'terepjáró', 'terhességmegszakítás', 'termelőmunka', 'termeszvár', 'termométer',
   'termálfürdő', 'termékmegjelenítés', 'természetbúvár', 'természetfeletti', 'természetjárás', 'természetkutató', 'termőföld', 'termőhely', 'termőlevél', 'termőterület', 'tervgazdaság', 'tervosztály', 'tervszám', 'területfejlesztés',
   'testalkat', 'testbeszéd', 'testedzés', 'testgyakorlás', 'testhőmérséklet', 'testmagasság', 'testméret', 'testnevelés', 'testsúly', 'testtartás', 'testtömeg', 'testvér', 'testvérgyilkos', 'testvérgyilkosság', 'testvérharc',
   'testvérháború', 'testvérközség', 'testvérnép', 'testvérpárt', 'testvérviszály', 'testvérüzem', 'testőr', 'tetszhalott', 'tetszésnyilvánítás', 'tetterő', 'tetterős', 'tetthely', 'tettvágy', 'tetőablak', 'tetőcserép', 'tetőfedés',
   'tetőfedő', 'tetőpala', 'tetőpont', 'tetőterasz',
   'kabalababa', 'kabinetiroda', 'kabinetkérdés', 'kabátbélés', 'kabátgallér', 'kabátgomb', 'kabátszárny', 'kabátujj', 'kabátzseb', 'kacsakagyló', 'kacsapecsenye', 'kacsasült', 'kacsatojás', 'kacsaúsztató', 'kacskaringós', 'kajszibarack',
   'kakaskukorékolás', 'kakasszó', 'kakastaréj', 'kakastoll', 'kakasviadal', 'kakasüllő', 'kakasülő', 'kakaóbab', 'kakaópor', 'kakukkfű', 'kalapdoboz', 'kalapkúra', 'kalapszalon', 'kalapácsvetés', 'kalapácsütés', 'kalóriaszegény',
   'kalózhajó', 'kamaraszínház', 'kamarazene', 'kamarazenekar', 'kamatadó', 'kamatemelés', 'kamatjövedelem', 'kamatláb', 'kamatmentes', 'kamatszámítás', 'kamatteher', 'kamatuzsora', 'kamatveszteség', 'kamatösszeg', 'kamillatea',
   'kanárimadár', 'kappanhang', 'kapuajtó', 'kapualj', 'kapubejárat', 'kapubejáró', 'kapubolt', 'kapuboltozat', 'kapubálvány', 'kapucsengő', 'kapucédula', 'kapuerőd', 'kapufa', 'kapufélfa', 'kapuháló', 'kapuhíd', 'kapukilincs',
   'kapukirúgás', 'kapukulcs', 'kapumélyedés', 'kapunyitás', 'kapunyitó', 'kapuoszlop', 'kapupénz', 'kapuslakás', 'kapuszárny', 'kapuszín', 'kaputelefon', 'kapuvonal', 'kapuváros', 'kapuvédő', 'kapuzárás', 'kapuügyelet', 'kapuőr',
   'kapuőrség', 'karbantart', 'karbidlámpa', 'karbolsav', 'kardcsapás', 'karddöfés', 'kardhal', 'kardmarkolat', 'kardnyelő', 'kardvívás', 'kardántengely', 'kardél', 'karfa', 'karhatalom', 'karhossz', 'karhosszúságú', 'karikacsapás',
   'karizom', 'karkulcs', 'karkötő', 'karmazsinpiros', 'karmester', 'karosszék', 'karperec', 'karszalag', 'kartámasz', 'kartörés', 'karvastagságú', 'karácsonyfa', 'karácsonyfadísz', 'karének', 'karóbab', 'karóra', 'katicabogár',
   'katonabakancs', 'katonakönyv', 'katonaló', 'kavicsbánya', 'kavicságyú', 'kebelbarát', 'kecskebak', 'kecskebogyó', 'kecskebéka', 'kecskedarázs', 'kecskeduda', 'kecskefűz', 'kecskegida', 'kecskeköröm', 'kecskepásztor', 'kecskeruta',
   'kecskerágó', 'kecskerím', 'kecskeszakáll', 'kecsketej', 'kecsketömlő', 'kecsketúró', 'kefehaj', 'kefekötő', 'kegydíj', 'kegyelemdöfés', 'kegyszer', 'kegyvesztett', 'kelléktár', 'keltetőgép', 'keltetőállomás', 'keményfa', 'keményfejű',
   'keményfém', 'keményszívű', 'keményszívűség', 'keményítődús', 'kenderkötél', 'kengyelvas', 'kenyéradag', 'kenyéradó', 'kenyérbél', 'kenyérdagasztás', 'kenyérdarabka', 'kenyérellátás', 'kenyérfa', 'kenyérfejadag', 'kenyérgabona',
   'kenyérgalacsin', 'kenyérgomba', 'kenyérgombóc', 'kenyérgond', 'kenyérgyár', 'kenyérhiány', 'kenyérhéj', 'kenyéririgység', 'kenyérjegy', 'kenyérkereset', 'kenyérkereső', 'kenyérkosár', 'kenyérkérdés', 'kenyérkés', 'kenyérlepény',
   'kenyérleső', 'kenyérliszt', 'kenyérmag', 'kenyérmorzsa', 'kenyérnekvaló', 'kenyérpirítás', 'kenyérpirító', 'kenyérpusztító', 'kenyérszalonna', 'kenyérszegés', 'kenyérszelet', 'kenyérszeletke', 'kenyérsütés', 'kenyértészta',
   'kenyértörés', 'kenyérvágó', 'kenyérzsák', 'kenőszappan', 'kerecsensólyom', 'kerekasztal', 'kerekesszék', 'keresetképes',
   'japáncseresznye', 'javasasszony', 'javítóintézet', 'Jeges-tenger', 'jegesmedve', 'jegybank', 'jegyellenőr', 'jegyespár', 'jegygyűrű', 'jegypénztár', 'jegyrendszer', 'jegyzettömb', 'jegyzőkönyv', 'jelenkor', 'jelenlét',
   'jelentésváltozás', 'jelkép', 'jellemvonás', 'jelmez', 'jelmondat', 'jelnyelv', 'jelrendszer', 'jelszó', 'jelzálogjog', 'jelzálogteher', 'jelzőberendezés', 'jelzőcsengő', 'jelzőcédula', 'jelzőfény', 'jelzőharang', 'jelzőkaró',
   'jelzőkészülék', 'jelzőlámpa', 'jelzőrakéta', 'jelzőtűz', 'jelzőzászló', 'jelzőágyú', 'jelöltlista', 'jobboldali', 'jobbágyteher', 'jogbiztonság', 'jogfosztás', 'joghallgató', 'jogkör', 'jogrendszer', 'jogszabály', 'jogszabálygyűjtemény',
   'jogállam', 'jonatánalma', 'juhakol', 'juharfa', 'juhbőr', 'juhhús', 'juhlegelő', 'juhnyáj', 'juhsajt', 'juhállomány', 'juhászbojtár', 'juhászkutya', 'juhászlegény', 'jutalomjáték', 'jármű', 'járművezető', 'járomcsont', 'járulékhang',
   'járókelő', 'játszótér', 'játékasztal', 'játékautó', 'játékbaba', 'játékbank', 'játékbarlang', 'játékbolt', 'játékcsiga', 'játékdal', 'játékdélután', 'játékengedély', 'játékfelfogás', 'játékfilm', 'játékgolyó', 'játékgyártás', 'játékhét',
   'játékidő', 'játékipar', 'játékkard', 'játékkaszinó', 'játékkatona', 'játékkereskedés', 'játékklub', 'játékkocka', 'játékkártya', 'játékmenet', 'játékmester', 'játékmodor', 'játékmozdony', 'játékmód', 'játékpénz', 'játékszabály',
   'játékszenvedély', 'játékszer', 'játékszergyár', 'játékszín', 'játéktechnika', 'játékterem', 'játéktilalom', 'játéktér', 'játékvasút', 'játékvezető', 'játékárú', 'játékösztön', 'jégbor', 'jégcsap', 'jégdugó', 'jégeső', 'jéghegy',
   'jéghideg', 'jéghoki', 'jégkorszak', 'jégkunyhó', 'jégképződés', 'jégkéreg', 'jégláda', 'jégmadár', 'jégmentes', 'jégmező', 'jégpálya', 'jégpáncél', 'jégsaláta', 'jégsport', 'jégszekrény', 'jégtorlasz', 'jégtábla', 'jégtörő', 'jégverem',
   'jégverés', 'jégvirág', 'jégvitorlás', 'jégvitorlázás', 'jégzajlás', 'jóakarat', 'jóhiszemű', 'jóindulat', 'jókedvű', 'jólelkű', 'jóleső', 'jólét', 'jósnő', 'jószágigazgató', 'jószívű', 'jótett', 'jótevő', 'jótáll', 'jótétemény',
   'jóérzésű', 'jövedelemadó', 'jövevényszó', 'K', 'kabalababa', 'kabinetiroda', 'kabinetkérdés', 'kabátbélés', 'kabátgallér', 'kabátgomb', 'kabátszárny', 'kabátujj', 'kabátzseb', 'kacsakagyló', 'kacsapecsenye', 'kacsasült', 'kacsatojás',
   'kacsaúsztató', 'kacskaringós', 'kajszibarack', 'kakaskukorékolás', 'kakasszó', 'kakastaréj', 'kakastoll', 'kakasviadal', 'kakasüllő', 'kakasülő', 'kakaóbab', 'kakaópor', 'kakukkfű', 'kalapdoboz', 'kalapkúra', 'kalapszalon',
   'kalapácsvetés', 'kalapácsütés', 'kalóriaszegény', 'kalózhajó', 'kamaraszínház', 'kamarazene', 'kamarazenekar', 'kamatadó', 'kamatemelés', 'kamatjövedelem', 'kamatláb', 'kamatmentes', 'kamatszámítás', 'kamatteher', 'kamatuzsora'
];

function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomWord() {
   return dict[getRandomArbitrary(0, dict.length)];
}

function getTextForTime(time) {
   var perc = Math.floor(time / 60) + '',
      masodperc = time % 60 + '';
   perc = perc.length === 1 ? '0' + perc : perc;
   masodperc = masodperc.length === 1 ? '0' + masodperc : masodperc;
   return perc + ":" + masodperc;
}

function startTime(time) {

}

$(document).ready(function() {

   var groupSlider = new Slider('input.slider', {
      value: 2,
      min: 2,
      max: 5,
      tooltip: 'always'
   });

   groupSlider.on('change', function () {
      console.log(arguments);
   });

   var szo = $("#szo"),
      ido = $('#ido'),
      IDO = 2 * 60,
      visszaszamlalas = IDO,
      interval,
      val_szo,
      meg, ind;

   $('#indit').click(function() {
      visszaszamlalas = IDO;
      val_szo = getRandomWord();
      clearInterval(interval);
      clearTimeout(meg);

      szo.text(val_szo);
      ido.text(getTextForTime(visszaszamlalas));

      ind = setTimeout(function() {
         szo.text("");
         interval = setInterval(function() {
            if (visszaszamlalas <= 0) {
               clearInterval(interval);
               return;
            }
            visszaszamlalas--;
            ido.text(getTextForTime(visszaszamlalas));
         }, 1000);
      }, 5000);

      meg = setTimeout(function() {
         szo.text(val_szo);
      }, 2 * IDO * 1000);

   });

   $('#megallit').click(function() {
      clearTimeout(ind);
      visszaszamlalas = IDO;
      clearInterval(interval);
      clearTimeout(meg);
      szo.text(val_szo);
      ido.text(getTextForTime(0));

   });
});

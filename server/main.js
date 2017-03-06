import { Meteor } from 'meteor/meteor';
import { Cities } from '../imports/collections/cities';
import { Categories } from '../imports/collections/categories';
import { Users } from '../imports/collections/users';
import { Brands } from '../imports/collections/brands';
import { Annonces } from '../imports/collections/annonces';
import _ from 'lodash';
import { address } from 'faker';
//import {Cloudinary} from 'cloudinary';


Cloudinary.config({
  cloud_name: 'annoncio',
  api_key: '835847979639349',
  api_secret: '3VNVBVYVn50v1Pe0dvyhrsPjD9U'
});

Meteor.startup(() => {
  // code to run on server at startup

 smtp = {
    username: 'ayoub.sinchi@gmail.com',   // eg: server@gentlenode.com
    password: '3afritto',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
  process.env.MONGO_URL='mongodb://sinchi:3afritto@ds021650.mlab.com:21650/annoncio';

  // Cities Datas
  const citiesNumber = Cities.find({}).count();
  console.log(citiesNumber);
  if(!citiesNumber){
    var cities = [{name:"Casablanca"},{name:"Grand Casablanca"},{name:"Fes"},{name:"Fès-Boulemane"},{name:"Salé"},{name:"Rabat-Salé-Zemmour-Zaer"},{name:"Marrakesh"},{name:"Marrakesh-Tensift-El Haouz"},{name:"Tangier"},{name:"Tanger Assila"},{name:"Tangier-Tetouan"},{name:"Rabat"},{name:"Meknes"},{name:"Meknès"},{name:"Meknès-Tafilalet"},{name:"Oujda"},{name:"Oujda Angad"},{name:"Oriental"},{name:"Kenitra"},{name:"Gharb-Chrarda-Béni Hssen"},{name:"Agadir"},{name:"Agadir Ida ou tanane"},{name:"Souss-Massa-Drâa"},{name:"Tétouan"},{name:"Tetuan"},{name:"Safi"},{name:"Doukkala-Abda"},{name:"Temara"},{name:"Skhirat temara"},{name:"Inzegan"},{name:"Inzegan Aït melloul"},{name:"Mohammedia"},{name:"Laâyoune"},{name:"Layoune"},{name:"Laâyoune-Boujdour-Sakia El Hamra"},{name:"Khouribga"},{name:"Chaouia-Ouardigha"},{name:"Beni Mellal"},{name:"Tadla-Azilal"},{name:"Jdida"},{name:"Taza"},{name:"Taza-Al Hoceima-Taounate"},{name:"Aït Melloul"},{name:"Nador"},{name:"Settat"},{name:"Ksar El Kbir"},{name:"Larache"},{name:"Khemisset"},{name:"Guelmim"},{name:"Guelmim-Es Semara"},{name:"Berrechid"},{name:"Wad Zam"},{name:"Fkih Ben Saleh"},{name:"Taourirt"},{name:"Berkane"},{name:"Sidi Slimane"},{name:"Errachidia"},{name:"Sidi Kacem"},{name:"Khenifra"},{name:"Tifelt"},{name:"Essaouira"},{name:"Taroudant"},{name:"El Kelaa des Sraghna"},{name:"Kelaat Sraghna"},{name:"Oulad Teima"},{name:"Youssoufia"},{name:"Sefrou"},{name:"Ben Guerir"},{name:"Tan-Tan"},{name:"Ouazzane"},{name:"Guercif"},{name:"Dakhla"},{name:"ouad eddahab"},{name:"Oued Ed-Dahab-Lagouira"},{name:"Hoceima"},{name:"Al Hoceima"},{name:"Fnideq"},{name:"Ouarzazate"},{name:"Tiznit"},{name:"Suq Sebt Oulad Nama"},{name:"Azrou"},{name:"Ifrane"},{name:"Lahraouyine"},{name:"Mediouna"},{name:"Ben Slimane"},{name:"Bensliman"},{name:"Midelt"},{name:"Jerada"},{name:"Jrada"},{name:"Skhirat"},{name:"Souk Larbaa"},{name:"Aïn Harrouda"},{name:"Boujad"},{name:"Kasbat Tadla"},{name:"Sidi Bennour"},{name:"Martil"},{name:"Lqliâa"},{name:"Cape Bojador"},{name:"Boujdor"},{name:"Azemmour"},{name:"M'diq"},{name:"Tinghir"},{name:"Al Aaroui"},{name:"Chefchaouen"},{name:"Chefchawn"},{name:"M'Rirt"},{name:"Zagora"},{name:"El Aioun Sidi Mellouk"},{name:"Lamkansa"},{name:"Nouaceur"},{name:"Smara"},{name:"Esmara"},{name:"Taounate"},{name:"Bin An"},{name:"Sidi Yahya El Gharb"},{name:"Zaio"},{name:"Amalou Ighriben"},{name:"Asilah"},{name:"Azilal"},{name:"Mechra Bel Ksiri"},{name:"El Hajeb"},{name:"El hajeb"},{name:"Bouznika"},{name:"Imzouren"},{name:"Tahla"},{name:"BouiZazarene Ihaddadene"},{name:"Aïn El Aouda"},{name:"Bouarfa"},{name:"Figuig"},{name:"Arfoud"},{name:"Demnate"},{name:"Sidi Slimane Echcharraa"},{name:"Zawiyat cheikh"},{name:"Ain Taoujdate"},{name:"Echemmaia"},{name:"Aourir"},{name:"Sabaa Aiyoun"},{name:"Oulad Ayad"},{name:"Ben Ahmed"},{name:"Tabounte"},{name:"Jorf El Melha"},{name:"Missour"},{name:"Boulman"},{name:"Laattaouia"},{name:"Er-Rich"},{name:"Segangan"},{name:"Rissani"},{name:"Sidi Taibi"},{name:"Sidi Ifni"},{name:"Ait Ourir"},{name:"Al hawz"},{name:"Ahfir"},{name:"El Ksiba"},{name:"El Gara"},{name:"Drarga"},{name:"Imintanoute"},{name:"Chichaoua"},{name:"Goulmima"},{name:"Karia Ba Mohamed"},{name:"Mehdya"},{name:"El Borouj"},{name:"Bouhdila"},{name:"Bni Bouayach"},{name:"Oulad Berhil"},{name:"Jmaat Shaim"},{name:"Bir Jdid"},{name:"Tata"},{name:"Boujniba"},{name:"Temsia"},{name:"Kelat Megnouna"},{name:"Sebt Gzoula"},{name:"Outat El Haj"},{name:"Imouzzer Kandar"},{name:"Ain Bni Mathar"},{name:"Bouskoura"},{name:"Agourai"},{name:"Midar"},{name:"Lalla Mimouna"},{name:"Ribat El Kheir"},{name:"Moulay Driss Zerhoun"},{name:"Boumia"},{name:"Tamallalt"},{name:"Rommani"},{name:"Jorf"},{name:"Ifran"},{name:"Bouizakarn"},{name:"Oulad Mbarek"},{name:"Afourar"},{name:"Zmamra"},{name:"Aït Ishaq"},{name:"Tit Mellil"},{name:"Assa"},{name:"Assa zag"},{name:"Bhalil"},{name:"Targuist"},{name:"Beni Yakhlef"},{name:"El Menzel"},{name:"Aguelmous"},{name:"Sid L'Mokhtar"},{name:"Boumalne Dades"},{name:"Farkhana"},{name:"Oulad Abbou"},{name:"Amizmiz"},{name:"Al Haouz"},{name:"Boulanouare"},{name:"Ben Taieb"},{name:"Ouled Frej"},{name:"Driouch"},{name:"Deroua"},{name:"Hattane"},{name:"El Marsa"},{name:"Tamanar"},{name:"Ait Iaaza"},{name:"Sidi Allal El Bahraoui"},{name:"Khmisset"},{name:"Dar Ould Zidouh"},{name:"Sid Zouine"},{name:"Boudnib"},{name:"Foum Zguid"},{name:"Tissa"},{name:"Jaadar"},{name:"Oulmes"},{name:"Bouknadel"},{name:"Sale"},{name:"Harhoura"},{name:"El Guerdan"},{name:"Selouane"},{name:"Maaziz"},{name:"Oulad M'Rah"},{name:"Loudaya"},{name:"Massa"},{name:"Chtouka Aït Baha"},{name:"Aklim"},{name:"Ouaouizert"},{name:"Bni Drar"},{name:"El Kbab"},{name:"Oued Amlil"},{name:"Sidi Rahel Chatai"},{name:"Guigou"},{name:"Agdz"},{name:"Khnichet"},{name:"Karia"},{name:"Sidi Ahmed"},{name:"Zag"},{name:"Oulad Yaich"},{name:"Tinjdad"},{name:"Ouad Laou"},{name:"Tighassaline"},{name:"Tounfit"},{name:"Bni Tadjite"},{name:"Bouanane"},{name:"Oulad Hriz Sahel"},{name:"Talsint"},{name:"Taghjijt"},{name:"Boulemane"},{name:"Zirara"},{name:"Taouima"},{name:"Tahannaout"},{name:"Bradia"},{name:"Moulay Abdallah"},{name:"Sidi Rahal"},{name:"Tameslouht"},{name:"Aghbala"},{name:"El Ouatia"},{name:"Tendrara"},{name:"Taznakht"},{name:"Fam El Hisn"},{name:"Akka"},{name:"Dar Gueddari"},{name:"Itzer"},{name:"Taliouine"},{name:"Oualidia"},{name:"Aoulouz"},{name:"Moulay Bousselham"},{name:"Tarfaya"},{name:"Ghafsai"},{name:"Foum Jamaa"},{name:"Ain Leuh"},{name:"Moulay Bouazza"},{name:"Kariat Arkmane"},{name:"Kehf Nsour"},{name:"Sidi Bou Othmane"},{name:"Oulad Tayeb"},{name:"Had Kourt"},{name:"Bab Berrad"},{name:"Loulad"},{name:"Zaida"},{name:"Tafrawt"},{name:"Khemis Sahel"},{name:"Aït Baha"},{name:"Biougra"},{name:"Dar Bni Karrich"},{name:"El Hanchane"},{name:"Sidi Jaber"},{name:"Irherm"},{name:"Debdou"},{name:"Ras Kebdana"},{name:"Laaounate"},{name:"Hadj Kaddour"},{name:"Skhour Rhamna"},{name:"Bzou"},{name:"Ain Cheggag"},{name:"Bouderbala"},{name:"Sidi Smaïl"},{name:"Oulad Zbair"},{name:"Bni Chiker"},{name:"Lakhsas"},{name:"Talmest"},{name:"Aknoul"},{name:"Tiztoutine"},{name:"Bab Taza"},{name:"Imouzzer Marmoucha"},{name:"Gourrama"},{name:"Ajdir"},{name:"Mhaya"},{name:"Oulad Ghadbane"},{name:"Zrarda"},{name:"Zoumi"},{name:"Ain Karma"},{name:"Thar Essouk"},{name:"Lagouira"},{name:"Aousserd"},{name:"Ras El Ain"},{name:"Sidi Ali Ben Hamdouche"},{name:"Sebt Jahjouh"},{name:"Tiddas"},{name:"Zaouiat Bougrin"},{name:"Tafersit"},{name:"Touissit"},{name:"Saïdia"},{name:"Lalla Takerkoust"},{name:"Skhinate"},{name:"Moulay Brahim"},{name:"Soualem"},{name:"Gueznaia"},{name:"Tanger-Assilah"},{name:"Moulay Yacoub"},{name:"Moulay Yaccoub"},{name:"Sidi Allal Tazi"},{name:"Laakarta"},{name:"Alnif"},{name:"Dar El Kebdani"},{name:"Jebha"},{name:"Ain Erreggada"},{name:"Sidi Addi"},{name:"Skoura"},{name:"Smimou"},{name:"Ain Jemaa"},{name:"Timahdite"},{name:"Ait Daoud"},{name:"Souk El Had"},{name:"Had Bouhssoussen"},{name:"Oulad Said"},{name:"Arbaoua"},{name:"Ain Dorij"},{name:"Madagh"},{name:"Tighza"},{name:"Matmata"},{name:"Kerouna"},{name:"Kassita"},{name:"Bni Hadifa"},{name:"Oued El Heimar"},{name:"Kerrouchen"},{name:"Tainaste"},{name:"Guisser"},{name:"Sidi Boubker"},{name:"Tamassint"},{name:"Assahrij"},{name:"Aghbalou Nssardane"},{name:"Tizi Ouasli"},{name:"Moqrisset"},{name:"Sebt Lamaarif"},{name:"Issaguen"},{name:"Bouguedra"},{name:"Brikcha"},{name:"Ighoud"},{name:"Ajdir, Taza"},{name:"Oulad Amrane"},{name:"Kettara"},{name:"Aoufous"},{name:"Tafetachte"},{name:"Naïma"},{name:"Tnin Sidi Lyamani"},{name:"N'Zalat Bni Amar"},{name:"Ahrara"},{name:"Sidi Abdallah Ghiat"},{name:"Sidi Bouzid"},{name:"Ounagha"}];
    _.each(cities, city => Cities.insert(city));
  }

  Categories._ensureIndex( { parent: 1 } );

  // Categories Datas
  const categoriesNumber = Categories.find({}).count();
  if(!categoriesNumber){
    var categories = [
      { name: "INFORMATIQUE ET MULTIMEDIA" },
      { name: "VEHICULES" },
      { name: "POUR LA MAISON ET JARDIN" },
      { name: "HABILLEMENT ET BIEN ETRE" },
      { name: "LOISIRS ET DIVERTISSEMENT" },
      { name: "IMMOBILIER"},
      { name: "EMPLOI ET SERVICES" },
      { name: "ENTREPRISES" },
      { name: "AUTRES" }
    ];
    var informatique = [{name:"Téléphones"},{name:"Tablettes"},{name:"Ordinateurs portables"},{name:"Ordinateurs de bureau"},{name:"Accessoires informatique et Gadgets"},{name:"Jeux vidéo et Consoles"},{name:"Appareils photo et Caméras"},{name:"Télévisions"},{name:"Image Et Son"}];
    var vehicules = [{name:"Voitures"},{name:"Motos"},{name:"Vélos"},{name:"Véhicules Professionnels"},{name:"Bateaux"},{name:"Pièces et Accessoires pour véhicules"}];
    var maisonJardin = [{name:"Electroménager et Vaisselles"},{name:"Meubles et Décoration"},{name:"Jardin et Outils de bricolage"}];
    var bienEtre = [{name:"Vêtements"},{name:"Chaussures"},{name:"Montres et Bijoux"},{name:"Sacs et Accessoires"},{name:"Vêtements pour enfant et bébé"},{name:"Equipements pour enfant et bébé"},{name:"Produits de beauté"}];
    var sport = [{name:"Sports et Loisirs"},{name:"Animaux"},{name:"Instruments de Musique"},{name:"Art et Collections"},{name:"Voyages et Billetterie"},{name:"Films, Livres, Magazines"}];
    var immobilier = [{name:"Appartements"},{name:"Maisons et Villas"},{name:"Bureaux et Plateaux"},{name:"Magasins, Commerces et Locaux industriels"},{name:"Terrains et Fermes"},{name:"Locations de vacances"},{name:"Colocations"}];
    var emploi = [{name:"Offres d'emploi"},{name:"Demandes d'emploi"},{name:"Stages"},{name:"Services"},{name:"Cours et Formations"}];
    var entreprise = [{name:"Business et Affaires commerciales"},{name:"Matériels Professionnels"},{name:"Stocks et Vente en gros"}];


    _.map(categories, (category) => {

      switch (category.name) {
        case "INFORMATIQUE ET MULTIMEDIA":
          Categories.insert(category);
          _.each(informatique, cat => Categories.insert({ name: cat.name, parent: category.name }));
          break;

          case "VEHICULES":
            Categories.insert(category);
            _.each(vehicules, cat => Categories.insert({ name: cat.name, parent: category.name }));
            break;

            case "POUR LA MAISON ET JARDIN":
              Categories.insert(category);
              _.each(maisonJardin, cat => Categories.insert({ name: cat.name, parent: category.name }));
              break;
        case "HABILLEMENT ET BIEN ETRE":
           Categories.insert(category);
            _.each(bienEtre, cat => Categories.insert({ name: cat.name, parent: category.name }));
          break;

          case "LOISIRS ET DIVERTISSEMENT":
             Categories.insert(category);
              _.each(sport, cat => Categories.insert({ name: cat.name, parent: category.name }));
            break;

            case "IMMOBILIER":
               Categories.insert(category);
                _.each(immobilier, cat => Categories.insert({ name: cat.name, parent: category.name }));
              break;

              case "EMPLOI ET SERVICES":
                 Categories.insert(category);
                  _.each(emploi, cat => Categories.insert({ name: cat.name, parent: category.name }));
                break;
                case "ENTREPRISES":
                   Categories.insert(category);
                    _.each(entreprise, cat => Categories.insert({ name: cat.name, parent: category.name }));
                  break;
                case "AUTRES":
                  Categories.insert(category);
                break;
      }
    });
  }


// Brands Datas
const brandsNumbers = Brands.find({}).count();
if(!brandsNumbers){

  var alpha = [{name:"33"},{name:"75"},{name:"8c"},{name:"145"},{name:"146"},{name:"147"},{name:"155"},{name:"156"},{name:"159"},{name:"164"},{name:"166"},{name:"147 gta"},{name:"Brera"},{name:"Giulietta"},{name:"Gt"},{name:"Gtv"},{name:"Mito"},{name:"Spider"}];
  var aston = [{name:"Amv8"},{name:"DB7"},{name:"DB9"},{name:"DBS"},{name:"Vanquish"},{name:"Vantage"},{name:"Virage"}];
  var audi = [{name:"80"},{name:"90"},{name:"100"},{name:"200"},{name:"A1"},{name:"A2"},{name:"A3"},{name:"A4"},{name:"A5"},{name:"A6"},{name:"A7"},{name:"A8"},{name:"Allroad"},{name:"Coupe"},{name:"Q3"},{name:"Q5"},{name:"Q7"},{name:"R8"},{name:"RS2"},{name:"RS3"},{name:"RS4"},{name:"RS5"},{name:"RS6"},{name:"S2"},{name:"S3"},{name:"S4"},{name:"S5"},{name:"S6"},{name:"S8"},{name:"TT"},{name:"TTS"},{name:"V8"}];
  var bentely = [{name:"Arnage"},{name:"Azure"},{name:"Brooklands"},{name:"Camargue"},{name:"Continental t"},{name:"Continental Flying Spur"},{name:"Continental gt"},{name:"Continental gtc"},{name:"Continental r"},{name:"Continental s"},{name:"Corniche convertible"},{name:"Corniche coupé"},{name:"Continental gt coupé"},{name:"Eight"},{name:"Mulsanne"},{name:"T series"},{name:"Turbo r"}];
  var bmw = [{name:"M"},{name:"M3"},{name:"M4"},{name:"M5"},{name:"M6"},{name:"Serie 1"},{name:"Serie 3"},{name:"Serie 4"},{name:"Serie 5"},{name:"Serie 6"},{name:"Serie 7"},{name:"Serie 8"},{name:"X1"},{name:"X3"},{name:"X4"},{name:"X5"},{name:"X6"},{name:"Z1"},{name:"Z3"},{name:"Z4"},{name:"Z8"}];
  var byd = [{name:"F1"}, {name:"F3"}];
  var cadillac = [{name:"Allante"},{name:"BLS"},{name:"Brougham"},{name:"CTS"},{name:"DeVille"},{name:"DLS"},{name:"DTS"},{name:"Eldorado"},{name:"Escalade"},{name:"Fleetwood"},{name:"Seville"},{name:"SLS"},{name:"SRX"},{name:"STS"},{name:"XLR"}];
  var changhe = [{name:"Ideal"}];
  var chery = [{name:"a1"},{name:"A113"},{name:"a3"},{name:"a5"},{name:"A516"},{name:"Eastar"},{name:"QQ"},{name:"QQ6"},{name:"Tiggo"},{name:"v5"},{name:"V525"}];
  var chevrolet = [{name:"Alero"},{name:"Astro"},{name:"Avalanche"},{name:"Aveo"},{name:"Beretta"},{name:"Blazer"},{name:"Camaro"},{name:"Caprice"},{name:"Captiva"},{name:"Cavalier"},{name:"CMP"},{name:"Corvette"},{name:"Corvette Cabrio"},{name:"CR8"},{name:"Cruze"},{name:"El Camino"},{name:"Epica"},{name:"HHR"},{name:"Lacetti"},{name:"Optra"},{name:"Spark"},{name:"Tahoe"},{name:"Trailblazer"}];
  var chrysler = [{name:"300C"},{name:"300M"},{name:"Grand Voyager"},{name:"Pacifica"},{name:"PT Cruiser"},{name:"Sebring"}];
  var citro = [{name:"Berlingo"},{name:"C1"},{name:"C2"},{name:"C3"},{name:"C3 Picasso"},{name:"C4"},{name:"C4 Aircross"},{name:"C4 Picasso"},{name:"C5"},{name:"C6"},{name:"C8"},{name:"C-Elysée"},{name:"DS3"},{name:"DS4"},{name:"DS5"},{name:"Jumper"},{name:"Jumpy"},{name:"Nemo"},{name:"Xsara Picasso"}];
  var dacia = [{name:"Dokker"},{name:"Duster"},{name:"Lodgy"},{name:"Logan"},{name:"Sandero"}];
  var daewoo = [{name:"Espero"},{name:"Evanda"},{name:"Kalos"},{name:"Korando"},{name:"Lacetti"},{name:"Lanos"},{name:"Matiz"},{name:"Musso"},{name:"Nexia"},{name:"Nubira"},{name:"Rezzo"}];
  var daihatsu = [{name:"Copen"},{name:"Sirion"},{name:"Terios"},{name:"YRV"}];
  var dodge = [{name:"Avenger"}, {name:"Caliber"}];
  var ferrari = [{name:"458"},{name:"488"},{name:"California"},{name:"F40"},{name:"F430"},{name:"Nitro"},{name:"Ram"}];
  var fiat = [{name:"500"},{name:"Albea"},{name:"Bravo"},{name:"Doblo"},{name:"Ducato"},{name:"Linea"},{name:"Palio"},{name:"Panda"},{name:"Pinto"},{name:"Punto"},{name:"Scudo"},{name:"Siena"},{name:"Uno"}];
  var ford = [{name:"C-Max"},{name:"Expedition"},{name:"F150"},{name:"F250"},{name:"F350"},{name:"Fiesta"},{name:"Focus"},{name:"Fusion"},{name:"Galaxy"},{name:"Ka"},{name:"Kuga"},{name:"Mondeo"},{name:"Mustang"},{name:"Ranger"},{name:"S-Max"},{name:"Tourneo"},{name:"Transit"}];
  var foton = [{name: "Forland"}];
  var geely = [{name:"GK-GL"},{name:"GK-GS"},{name:"GK-GT"},{name:"LC"},{name:"MK-GL"},{name:"MK-GS"},{name:"MK-GT"},{name:"Zotye"}];
  var gmc = [{name: "Hover"}, {name:"Yukon"}];
  var honda = [{name:"Accent"},{name:"Accord"},{name:"City"},{name:"Civic"},{name:"CR-V"},{name:"Jazz"},{name:"Legend"},{name:"Odyssey"},{name:"Vigor"}];
  var hummer= [{name:"H2"}, {name:"H3"}];
  var hyundai = [{name:"Accent"},{name:"Atos"},{name:"Atos Prime"},{name:"Azera"},{name:"Coupe"},{name:"Elantra"},{name:"Genesis"},{name:"Grand i10"},{name:"H-1"},{name:"H-100"},{name:"i 10"},{name:"i 20"},{name:"i 30"},{name:"i 40"},{name:"ix 35"},{name:"Matrix"},{name:"Santa Fe"},{name:"Tucson"},{name:"Veracruz"}];
  var infiniti = [{name:"EX35"},{name:"FX35"},{name:"FX50"},{name:"G35"},{name:"G37"}];
  var isuzu = [{name: "D-MAX"}, {name:"Landwind"}, {name:"Trooper"}];
  var iveco = [{name:"Daily"}, {name:"Trakker"}];
  var jaguar = [{name:"S-Type"},{name:"Sovreign"},{name:"X-Type"},{name:"XF"},{name:"XJ"},{name:"XJ6"},{name:"XJ8"},{name:"XK8"},{name:"XKR"}];
  var jeep = [{name:"Cherokee"},{name:"Commander"},{name:"Compass"},{name:"Grand Cherokee"},{name:"Liberty"},{name:"Patriot"},{name:"Wrangler"}];
  var kia = [{name:"Carens"},{name:"C'eed"},{name:"Cerato"},{name:"K2700"},{name:"Mohave"},{name:"Opirus"},{name:"Optima"},{name:"Picanto"},{name:"Rio"},{name:"Sorento"},{name:"Soul"},{name:"Sportage"}];
  var lamborghini = [{name: "Aventador"}, {name:"Gallardo"}, {name:"Huracan"}];
  var lancia = [{name: "Delta"}, {name: "Y"}, {name:"Ypsilon"}];
  var range = [{name:"Defender"},{name:"Freelander"},{name:"Range Rover"},{name:"Range Rover Evoque"},{name:"Range Rover Sport"}];
  var lexus = [{name: "LS"}, {name:"RX"}];
  var lincoln = [{name: "Town Car"}];
  var mahindra = [{name: "Hover"}, {name:"Scorpion"}];
  var man = [{name:"8X4"}, {name:"TGA"}];
  var maserati = [{name:"3200 GT"}, {name:"4200 GT"}, {name:"Quattroporte"}];
  var maseyFerguson = [{name:"440"}];
  var mazda = [{name:"2"},{name:"3"},{name:"5"},{name:"6"},{name:"323"},{name:"BK"},{name:"BT-50"},{name:"CX-9"},{name:"MX-5"},{name:"RX-8"}];
  var mercedes = [{name:"190"},{name:"220"},{name:"250"},{name:"Classe A"},{name:"Classe B"},{name:"Classe C"},{name:"Classe CL"},{name:"Classe CLA"},{name:"Classe CLK"},{name:"Classe CLS"},{name:"Classe E"},{name:"Classe G"},{name:"Classe GL"},{name:"Classe GLA"},{name:"Classe GLC"},{name:"Classe GLE"},{name:"Classe GLS"},{name:"Classe M"},{name:"Classe S"},{name:"Classe SL"},{name:"Classe SLK"},{name:"Classe V"},{name:"Sprinter"},{name:"Viano"},{name:"Vito"}];
  var mini = [{name:"cabrio"},{name:"cooper"},{name:"country man"},{name:"one"}];
  var mitsubitshi = [{name:"canter"},{name:"L200"},{name:"lancer"},{name:"nativa"},{name:"outlander"},{name:"pajero"},{name:"pajero sport"},{name:"pick up"}];
  var nissan = [{name:"350Z"},{name:"370Z"},{name:"Altima"},{name:"Juke"},{name:"Micra"},{name:"Murano"},{name:"Navara"},{name:"Pathfinder"},{name:"Patrol GR"},{name:"Pick up"},{name:"primera"},{name:"Qashqai"},{name:"Rogue"},{name:"Sunny"},{name:"Tiida"},{name:"X-Trail"}];
  var opel = [{name:"Agila"},{name:"Astra"},{name:"Corsa"},{name:"Insignia"},{name:"Meriva"},{name:"Tigra"},{name:"Vectra"},{name:"Zafira"}];
  var peugeot = [{name:"106"},{name:"107"},{name:"205"},{name:"206"},{name:"207"},{name:"208"},{name:"301"},{name:"306"},{name:"307"},{name:"308"},{name:"309"},{name:"404"},{name:"405"},{name:"406"},{name:"407"},{name:"505"},{name:"506"},{name:"507"},{name:"508"},{name:"607"},{name:"2008"},{name:"3008"},{name:"4008"},{name:"5008"},{name:"Bipper"},{name:"Boxer"},{name:"Expert"},{name:"Partner"},{name:"RCZ"},{name:"Tepee"}];
  var pontiac = [{name:"G6"}, {name:"Solstice"}];
  var porshe = [{name:"911 Turbo"},{name:"911 Carrera"},{name:"Boxster"},{name:"Carrera GT"},{name:"Cayenne"},{name:"Cayman"},{name:"Panamera"}];
  var renault = [{name:"19"},{name:"Capture"},{name:"Clio"},{name:"Espace"},{name:"Fluence"},{name:"Grand Espace"},{name:"Kadjar"},{name:"Kangoo"},{name:"Koleos"},{name:"Laguna"},{name:"Latitude"},{name:"Logan"},{name:"Master"},{name:"Megane"},{name:"Midlum"},{name:"Modus"},{name:"R21"},{name:"R4"},{name:"Safrane"},{name:"Scenic"},{name:"Symbol"},{name:"Trafic"},{name:"Twingo"},{name:"Vel Satis"}];
  var rover = [{name:"25"},{name:"45"},{name:"75"},{name:"Mini"},{name:"Serie 100"},{name:"Serie 200"},{name:"Serie 400"},{name:"Serie 600"},{name:"Serie 800"},{name:"SD1"},{name:"Streetwise"}];
  var seat = [{name:"Altea"},{name:"Cordoba"},{name:"Exeo"},{name:"Ibiza"},{name:"Leon"},{name:"Toledo"}];
  var scoda = [{name:"Fabia"},{name:"Octavia"},{name:"Roomster"},{name:"Superb"},{name:"Yeti"}];
  var smart = [{name:"Crossblade"}, {name:"ForTwo"}, {name:"Smart"}];
  var sangyong = [{name:"Actyon"},{name:"Ceo"},{name:"Korando"},{name:"Kyron"},{name:"Rexton"},{name:"Rodius"}];
  var subaru = [{name:"Impreza"}, {name:"Legacy"}, {name:"Tribeca"}];
  var suzuki = [{name:"Alto"},{name:"Carry"},{name:"Celerio"},{name:"Grand Vitara"},{name:"Jimmy"},{name:"Maruti"},{name:"Swift"},{name:"SX4"},{name:"Vitara"}];
  var toyota = [{name:"Auris"},{name:"Avensis"},{name:"Aygo"},{name:"Camry"},{name:"Corolla"},{name:"Corolla verso"},{name:"FJ"},{name:"Hi Ace"},{name:"Hilux"},{name:"Land Cruiser"},{name:"Prado"},{name:"Prius"},{name:"RAV 4"},{name:"Tercel"},{name:"Yaris"},{name:"Yaris Verso"}];
  var volkswagen = [{name:"Amarok"},{name:"Beetle"},{name:"Bora"},{name:"Caddy"},{name:"Caravelle"},{name:"EOS"},{name:"Fox"},{name:"Gol"},{name:"Golf"},{name:"Jetta"},{name:"Passat"},{name:"Phaeton"},{name:"Polo"},{name:"Scirocco"},{name:"Tiguan"},{name:"Touareg"},{name:"Touran"},{name:"Vento"}];
  var volvo = [{name:"C30"},{name:"C70"},{name:"S40"},{name:"S60"},{name:"S80"},{name:"XC60"},{name:"XC70"},{name:"XC90"}];

  var brands = [{name:"Alfa Romeo"},{name:"Aston Martin"},{name:"Audi"},{name:"Bentley"},{name:"BMW"},{name:"BYD"},{name:"Cadillac"},{name:"Changhe"},{name:"Chery"},{name:"Chevrolet"},{name:"Chrysler"},{name:"Citroen"},{name:"Dacia"},{name:"Daewoo"},{name:"Daihatsu"},{name:"Dodge"},{name:"Ferrari"},{name:"Fiat"},{name:"Ford"},{name:"Foton"},{name:"Geely"},{name:"GMC"},{name:"Honda"},{name:"Hummer"},{name:"Hyundai"},{name:"Infiniti"},{name:"Isuzu"},{name:"Iveco"},{name:"Jaguar"},{name:"Jeep"},{name:"Kia"},{name:"Lamborghini"},{name:"lancia"},{name:"Land Rover"},{name:"Lexus"},{name:"Lincoln"},{name:"Mahindra"},{name:"Man"},{name:"Maserati"},{name:"Masey Ferguson"},{name:"Mazda"},{name:"Mercedes-Benz"},{name:"mini"},{name:"Mitsubishi"},{name:"Nissan"},{name:"Opel"},{name:"Peugeot"},{name:"Pontiac"},{name:"Porsche"},{name:"Renault"},{name:"Rover"},{name:"Seat"},{name:"Skoda"},{name:"Smart"},{name:"Ssangyong"},{name:"Subaru"},{name:"Suzuki"},{name:"Toyota"},{name:"UFO"},{name:"Volkswagen"},{name:"Volvo"},{name:"Zotye"},{name:"Autres"}];
  _.each(brands, (brand) => {
    switch (brand.name) {
      case "Alfa Romeo":
        Brands.insert({name: brand.name});
        _.each(alpha, (car) => {
          Brands.insert({name: car.name, parent: brand.name});
        });
        break;
        case "Aston Martin":
          Brands.insert({name: brand.name});
          _.each(aston, (car) => {
            Brands.insert({name: car.name, parent: brand.name});
          });
          break;
          case "Audi":
            Brands.insert({name: brand.name});
            _.each(audi, (car) => {
              Brands.insert({name: car.name, parent: brand.name});
            })
            break;
            case "Bentley":
              Brands.insert({name: brand.name});
              _.each(bentely, (car) => {
                Brands.insert({name: car.name, parent: brand.name});
              })
              break;
              case "BMW":
                Brands.insert({name: brand.name});
                _.each(bmw, (car) => {
                  Brands.insert({name: car.name, parent: brand.name});
                });
                break;
                case "BYD":
                  Brands.insert({name: brand.name});
                  _.each(byd, (car) => {
                    Brands.insert({name: car.name, parent: brand.name});
                  })
                  break;
                  case "Cadillac":
                    Brands.insert({name: brand.name});
                    _.each(cadillac, (car) => {
                      Brands.insert({name: car.name, parent: brand.name});
                    })
                    break;
                    case "Changhe":
                      Brands.insert({name: brand.name});
                      _.each(changhe, (car) => {
                        Brands.insert({name: car.name, parent: brand.name});
                      })
                      break;
                      case "Chery":
                        Brands.insert({name: brand.name});
                        _.each(chery, (car) => {
                          Brands.insert({name: car.name, parent: brand.name});
                        })
                        break;
                        case "Chevrolet":
                          Brands.insert({name: brand.name});
                          _.each(chevrolet, (car) => {
                            Brands.insert({name: car.name, parent: brand.name});
                          })
                          break;
                          case "Chrysler":
                            Brands.insert({name: brand.name});
                            _.each(chrysler, (car) => {
                              Brands.insert({name: car.name, parent: brand.name});
                            })
                            break;
                            case "Citroen":
                              Brands.insert({name: brand.name});
                              _.each(citro, (car) => {
                                Brands.insert({name: car.name, parent: brand.name});
                              })
                              break;
                              case "Dacia":
                                Brands.insert({name: brand.name});
                                _.each(dacia, (car) => {
                                  Brands.insert({name: car.name, parent: brand.name});
                                })
                                break;
                                case "Daewoo":
                                  Brands.insert({name: brand.name});
                                  _.each(daewoo, (car) => {
                                    Brands.insert({name: car.name, parent: brand.name});
                                  })
                                  break;
                                  case "Daihatsu":
                                    Brands.insert({name: brand.name});
                                    _.each(daihatsu, (car) => {
                                      Brands.insert({name: car.name, parent: brand.name});
                                    })
                                    break;
                                    case "Dodge":
                                      Brands.insert({name: brand.name});
                                      _.each(dodge, (car) => {
                                        Brands.insert({name: car.name, parent: brand.name});
                                      })
                                      break;
                                      case "Ferrari":
                                        Brands.insert({name: brand.name});
                                        _.each(ferrari, (car) => {
                                          Brands.insert({name: car.name, parent: brand.name});
                                        })
                                        break;
                                        case "Fiat":
                                          Brands.insert({name: brand.name});
                                          _.each(fiat, (car) => {
                                            Brands.insert({name: car.name, parent: brand.name});
                                          })
                                          break;
                                          case "Ford":
                                            Brands.insert({name: brand.name});
                                            _.each(ford, (car) => {
                                              Brands.insert({name: car.name, parent: brand.name});
                                            })
                                            break;
                                            case "Foton":
                                              Brands.insert({name: brand.name});
                                              _.each(foton, (car) => {
                                                Brands.insert({name: car.name, parent: brand.name});
                                              })
                                              break;
                                              case "Geely":
                                                Brands.insert({name: brand.name});
                                                _.each(geely, (car) => {
                                                  Brands.insert({name: car.name, parent: brand.name});
                                                })
                                                break;
                                                case "GMC":
                                                  Brands.insert({name: brand.name});
                                                  _.each(gmc, (car) => {
                                                    Brands.insert({name: car.name, parent: brand.name});
                                                  })
                                                  break;
                                                  case "Honda":
                                                    Brands.insert({name: brand.name});
                                                    _.each(honda, (car) => {
                                                      Brands.insert({name: car.name, parent: brand.name});
                                                    })
                                                    break;
                                                    case "Hummer":
                                                      Brands.insert({name: brand.name});
                                                      _.each(hummer, (car) => {
                                                        Brands.insert({name: car.name, parent: brand.name});
                                                      })
                                                      break;
                                                      case "Hyundai":
                                                        Brands.insert({name: brand.name});
                                                        _.each(hyundai, (car) => {
                                                          Brands.insert({name: car.name, parent: brand.name});
                                                        })
                                                        break;
                                                        case "Infiniti":
                                                          Brands.insert({name: brand.name});
                                                          _.each(infiniti, (car) => {
                                                            Brands.insert({name: car.name, parent: brand.name});
                                                          })
                                                          break;
                                                          case "Isuzu":
                                                            Brands.insert({name: brand.name});
                                                            _.each(isuzu, (car) => {
                                                              Brands.insert({name: car.name, parent: brand.name});
                                                            })
                                                            break;
                                                            case "Iveco":
                                                              Brands.insert({name: brand.name});
                                                              _.each(iveco, (car) => {
                                                                Brands.insert({name: car.name, parent: brand.name});
                                                              })
                                                              break;
                                                              case "Jaguar":
                                                                Brands.insert({name: brand.name});
                                                                _.each(jaguar, (car) => {
                                                                  Brands.insert({name: car.name, parent: brand.name});
                                                                })
                                                                break;
                                                                case "Jeep":
                                                                  Brands.insert({name: brand.name});
                                                                  _.each(jeep, (car) => {
                                                                    Brands.insert({name: car.name, parent: brand.name});
                                                                  })
                                                                  break;
                                                                  case "Kia":
                                                                    Brands.insert({name: brand.name});
                                                                    _.each(kia, (car) => {
                                                                      Brands.insert({name: car.name, parent: brand.name});
                                                                    })
                                                                    break;
                                                                    case "Lamborghini":
                                                                      Brands.insert({name: brand.name});
                                                                      _.each(lamborghini, (car) => {
                                                                        Brands.insert({name: car.name, parent: brand.name});
                                                                      })
                                                                      break;
                                                                      case "Lancia":
                                                                        Brands.insert({name: brand.name});
                                                                        _.each(lancia, (car) => {
                                                                          Brands.insert({name: car.name, parent: brand.name});
                                                                        })
                                                                        break;
                                                                        case "Land Rover":
                                                                          Brands.insert({name: brand.name});
                                                                          _.each(range, (car) => {
                                                                            Brands.insert({name: car.name, parent: brand.name});
                                                                          })
                                                                          break;
                                                                          case "Lexus":
                                                                            Brands.insert({name: brand.name});
                                                                            _.each(lexus, (car) => {
                                                                              Brands.insert({name: car.name, parent: brand.name});
                                                                            })
                                                                            break;
                                                                            case "Lincoln":
                                                                              Brands.insert({name: brand.name});
                                                                              _.each(lincoln, (car) => {
                                                                                Brands.insert({name: car.name, parent: brand.name});
                                                                              })
                                                                              break;
                                                                              case "Mahindra":
                                                                                Brands.insert({name: brand.name});
                                                                                _.each(mahindra, (car) => {
                                                                                  Brands.insert({name: car.name, parent: brand.name});
                                                                                })
                                                                                break;
                                                                                case "Man":
                                                                                  Brands.insert({name: brand.name});
                                                                                  _.each(man, (car) => {
                                                                                    Brands.insert({name: car.name, parent: brand.name});
                                                                                  })
                                                                                  break;
                                                                                  case "Maserati":
                                                                                    Brands.insert({name: brand.name});
                                                                                    _.each(maserati, (car) => {
                                                                                      Brands.insert({name: car.name, parent: brand.name});
                                                                                    })
                                                                                    break;
                                                                                    case "Masey Ferguson":
                                                                                      Brands.insert({name: brand.name});
                                                                                      _.each(maseyFerguson, (car) => {
                                                                                        Brands.insert({name: car.name, parent: brand.name});
                                                                                      })
                                                                                      break;
                                                                                      case "Mazda":
                                                                                        Brands.insert({name: brand.name});
                                                                                        _.each(mazda, (car) => {
                                                                                          Brands.insert({name: car.name, parent: brand.name});
                                                                                        })
                                                                                        break;
                                                                                        case "Mercedes-Benz":
                                                                                          Brands.insert({name: brand.name});
                                                                                          _.each(mercedes, (car) => {
                                                                                            Brands.insert({name: car.name, parent: brand.name});
                                                                                          })
                                                                                          break;
                                                                                          case "Mini":
                                                                                            Brands.insert({name: brand.name});
                                                                                            _.each(mini, (car) => {
                                                                                              Brands.insert({name: car.name, parent: brand.name});
                                                                                            })
                                                                                            break;
                                                                                            case "Mitsubishi":
                                                                                              Brands.insert({name: brand.name});
                                                                                              _.each(mitsubitshi, (car) => {
                                                                                                Brands.insert({name: car.name, parent: brand.name});
                                                                                              })
                                                                                              break;
                                                                                              case "Nissan":
                                                                                                Brands.insert({name: brand.name});
                                                                                                _.each(nissan, (car) => {
                                                                                                  Brands.insert({name: car.name, parent: brand.name});
                                                                                                })
                                                                                                break;
                                                                                                case "Opel":
                                                                                                  Brands.insert({name: brand.name});
                                                                                                  _.each(opel, (car) => {
                                                                                                    Brands.insert({name: car.name, parent: brand.name});
                                                                                                  })
                                                                                                  break;
                                                                                                  case "Peugeot":
                                                                                                    Brands.insert({name: brand.name});
                                                                                                    _.each(peugeot, (car) => {
                                                                                                      Brands.insert({name: car.name, parent: brand.name});
                                                                                                    })
                                                                                                    break;
                                                                                                    case "Pontiac":
                                                                                                      Brands.insert({name: brand.name});
                                                                                                      _.each(pontiac, (car) => {
                                                                                                        Brands.insert({name: car.name, parent: brand.name});
                                                                                                      })
                                                                                                      break;
                                                                                                      case "Porsche":
                                                                                                        Brands.insert({name: brand.name});
                                                                                                        _.each(porshe, (car) => {
                                                                                                          Brands.insert({name: car.name, parent: brand.name});
                                                                                                        })
                                                                                                        break;
                                                                                                        case "Renault":
                                                                                                          Brands.insert({name: brand.name});
                                                                                                          _.each(renault, (car) => {
                                                                                                            Brands.insert({name: car.name, parent: brand.name});
                                                                                                          })
                                                                                                          break;
                                                                                                          case "Rover":
                                                                                                            Brands.insert({name: brand.name});
                                                                                                            _.each(rover, (car) => {
                                                                                                              Brands.insert({name: car.name, parent: brand.name});
                                                                                                            })
                                                                                                            break;
                                                                                                            case "Seat":
                                                                                                              Brands.insert({name: brand.name});
                                                                                                              _.each(seat, (car) => {
                                                                                                                Brands.insert({name: car.name, parent: brand.name});
                                                                                                              })
                                                                                                              break;
                                                                                                              case "Skoda":
                                                                                                                Brands.insert({name: brand.name});
                                                                                                                _.each(scoda, (car) => {
                                                                                                                  Brands.insert({name: car.name, parent: brand.name});
                                                                                                                })
                                                                                                                break;
                                                                                                                case "Smart":
                                                                                                                  Brands.insert({name: brand.name});
                                                                                                                  _.each(smart, (car) => {
                                                                                                                    Brands.insert({name: car.name, parent: brand.name});
                                                                                                                  })
                                                                                                                  break;
                                                                                                                  case "Ssangyong":
                                                                                                                    Brands.insert({name: brand.name});
                                                                                                                    _.each(sangyong, (car) => {
                                                                                                                      Brands.insert({name: car.name, parent: brand.name});
                                                                                                                    })
                                                                                                                    break;
                                                                                                                    case "Subaru":
                                                                                                                      Brands.insert({name: brand.name});
                                                                                                                      _.each(subaru, (car) => {
                                                                                                                        Brands.insert({name: car.name, parent: brand.name});
                                                                                                                      })
                                                                                                                      break;
                                                                                                                      case "Suzuki":
                                                                                                                        Brands.insert({name: brand.name});
                                                                                                                        _.each(suzuki, (car) => {
                                                                                                                          Brands.insert({name: car.name, parent: brand.name});
                                                                                                                        })
                                                                                                                        break;
                                                                                                                        case "Toyota":
                                                                                                                          Brands.insert({name: brand.name});
                                                                                                                          _.each(toyota, (car) => {
                                                                                                                            Brands.insert({name: car.name, parent: brand.name});
                                                                                                                          })
                                                                                                                          break;
                                                                                                                          case "Volkswagen":
                                                                                                                            Brands.insert({name: brand.name});
                                                                                                                            _.each(volkswagen, (car) => {
                                                                                                                              Brands.insert({name: car.name, parent: brand.name});
                                                                                                                            })
                                                                                                                            break;
                                                                                                                            case "Volvo":
                                                                                                                              Brands.insert({name: brand.name});
                                                                                                                              _.each(maserati, (car) => {
                                                                                                                                Brands.insert({name: car.name, parent: brand.name});
                                                                                                                              })
                                                                                                                              break;
                                                                                                                              case "Autres":
                                                                                                                                Brands.insert({name: brand.name});
                                                                                                                                break;





    }
  });

}

  Meteor.publish('cities', function(){
    return Cities.find({});
  });

  Meteor.publish('users', function(){
    return Meteor.users.find({});
  });

  Meteor.publish('categories', function(){
    return Categories.find({});
  });

  Meteor.publish('brands', function(){
    return Brands.find({});
  });

});

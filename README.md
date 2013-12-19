#Telemark fylkeskommune - webstatistikk#

Dette er websidene som viser litt av webstatistikken vår.

De viser besøksstatistikk for [www.telemark.no] (http://www.telemark.no) i tillegg til trafikk fra ulike sosiale medier, antall følgere på Telemark fylkeskommunes offisielle kontoer og antall medieoppslag om Telemark fylkeskommune.

Siden kan sees på [http://apps.t-fk.no/webstatistikk](http://apps.t-fk.no/webstatistikk)

Løsningen henter data fra et [Google Spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AuRkF_9Dh0R6dHpOLTBjUG9jRThpY3BtZU1pSGg4a0E#gid=6) og visualiserer tallene vha [Google chart] (https://developers.google.com/chart).

##Slik setter du opp din egen kopi##

Nettsidene bruker [AngularJS](http://angularjs.org/), [Bootstrap](http://getbootstrap.com/) og er laget vha [Yeoman](http://yeoman.io/).

For å kunne sette opp egen kopi må du derfor ha installert [Node.js](http://nodejs.org/), [Yeoman](http://yeoman.io/) og [generator-angular](https://github.com/yeoman/generator-angular).

Når dette er på plass kan du klone repoet fra GitHub

```
$ git clone git@github.com:telemark/apps-tfk-webstatistikk.git
```

Gå inn i mappen som er lastet ned og hent nødvendige moduler vha npm og bower

```
$ npm install && bower install
```

For å starte lokal server bruker du grunt

```
$ grunt serve
```

Grunt brukes også til å kjøre testene

```
$ grunt test
```

For å bygge løsningen for distribusjon er kommandoen enkelt og greit

```
$ grunt
```

Alle nødvendige filer pakkes, minimeres og kopieres til en mappe *dist* som du deretter kan servere fra fritt valgt webserver.
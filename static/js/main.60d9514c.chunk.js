(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{19:function(e,a,n){e.exports=n.p+"static/media/pokemonlogo.svg.0bda2da2.png"},26:function(e,a,n){e.exports=n(36)},34:function(e,a,n){},36:function(e,a,n){"use strict";n.r(a);var t=n(3),m=n.n(t),c=n(18),r=n.n(c),o=n(25),l=n(8),s=n(19),i=n.n(s),p=function(){return m.a.createElement("header",{className:"center"},m.a.createElement("img",{src:i.a,alt:""}))},u=n(15),k=n(20),d=n(12);function E(){var e=Object(k.a)(["\nquery pokemons($first: Int!) {\n  pokemons(first: $first) {\n    id\n    name\n    image\n    maxHP\n    maxCP\n    types\n    attacks {\n      special {\n        name\n        damage\n      }\n    }\n  }\n}\n"]);return E=function(){return e},e}var v=n.n(d)()(E());function f(e){var a=e.pokemon;return m.a.createElement("div",{className:"pokemon"},m.a.createElement("div",{className:"pokemon__name"},m.a.createElement("p",null,a.name)),m.a.createElement("div",{className:"pokemon__meta"},m.a.createElement("span",null,"Max HP: ",a.maxHP),m.a.createElement("span",null,"Max CP: ",a.maxCP)),m.a.createElement("div",{className:"pokemon__image"},m.a.createElement("img",{src:a.image,alt:a.name})),m.a.createElement("div",{className:"pokemon__types"},a&&a.types.slice(0,3).map((function(e){return m.a.createElement("span",{key:"".concat(e)},e)}))),m.a.createElement("div",{className:"pokemon__attacks"},a&&a.attacks&&a.attacks.special.slice(0,3).map((function(e){return m.a.createElement("span",{key:"".concat(e.name,"-").concat(e.damage)},e.name)}))))}function g(){var e=Object(u.a)(v,{variables:{first:151}}).data,a=(e=void 0===e?{}:e).pokemons,n=void 0===a?[]:a;return m.a.createElement("div",{className:"container"},n&&n.map((function(e){return m.a.createElement(f,{key:e.id,pokemon:e})})))}n(34);var _=function(){var e=new o.a({uri:"https://graphql-pokemon.now.sh/"});return m.a.createElement("div",null,m.a.createElement(p,null),m.a.createElement(l.a,{client:e},m.a.createElement(g,null)))};r.a.render(m.a.createElement(_,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.60d9514c.chunk.js.map
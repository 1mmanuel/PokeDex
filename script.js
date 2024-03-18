const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonAPI = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const namePokemon = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const spriteContainer = document.getElementById("sprite-container");
const types = document.getElementById("types");

const fetchData = async (nameOrId) => {
  try {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`
    );
    const data = await res.json();
    displayData(data);
  } catch (err) {
    console.log(err);
    alert("Pokémon not found");
  }
};

const displayData = (data) => {
  namePokemon.textContent = data.name.toUpperCase();
  pokemonId.textContent = "#" + data.id;
  hp.textContent = data.stats[0].base_stat;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  specialAttack.textContent = data.stats[3].base_stat;
  specialDefense.textContent = data.stats[4].base_stat;
  speed.textContent = data.stats[5].base_stat;
  weight.textContent = "Weight: " + data.weight;
  height.textContent = "Height: " + data.height;
  spriteContainer.innerHTML = `<img id="sprite" class="pokemonSprite" src=${data.sprites.front_default} alt="img"/>`;

  types.innerHTML = data.types
    .map(
      (type) => `<span class="type ${type.type.name}">${type.type.name}</span>`
    )
    .join("");
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameOrId = searchInput.value.toLowerCase();
  fetchData(nameOrId);
});

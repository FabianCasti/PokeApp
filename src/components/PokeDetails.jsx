import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import pokeball from "../images/pokeball.png";
import Pokelogo from "../images/Pokemon_logo.png";

const PokeDetails = () => {
  const { id } = useParams();
  const [types, setTypes] = useState([
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ]);
  const [color, setColor] = useState([
    "#fae588",
    "#b23a48",
    "#52b69a",
    "#c77dff",
    "#bc6c25",
    "#b07d62",
    "#dde5b6",
    "#efefef",
    "#939190",
    "#ff6000",
    "#ade8f4",
    "#538d22",
    "#9ffff5",
    "#ffc599",
    "#daeef2",
    "#c6c013",
    "#312244",
    "#ffccd5",
  ]);

  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      setPokemon(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div
      className="details"
      style={{
        background: `${
          color[types.indexOf(`${pokemon.types?.[0].type.name}`)]
        }`,
      }}
    >
      <div className="detail">
        <div className="PokemonLogo">
          <img src={Pokelogo} alt="" />
        </div>

        <div className="main">
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
          <ul>
            <li>
              Weigth: <span>{pokemon.weight}</span>
            </li>
            <li>
              Heigth: <span>{pokemon.height}</span>
            </li>
          </ul>
          <h2>{pokemon.name}</h2>
          <span>#{id}</span>
        </div>

        <div className="type">
          <b>Type:</b>
          <ul>
            {pokemon.types?.map((e) => {
              return (
                <li
                  key={e.type.name}
                  style={{ background: `${color[types.indexOf(e.type.name)]}` }}
                >
                  {e.type.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="abilities">
          <b>Abilities:</b>
          <ul>
            {pokemon.abilities?.map((e) => {
              return <li key={e.ability.name}>{e.ability.name}</li>;
            })}
          </ul>
        </div>

        <div className="stateBase">
          <b>State base:</b>
          <div className="ProgressBar">
            <label className="ProgressLabel">
              HP = {pokemon.stats?.[0].base_stat} / 150
            </label>

            <div
              className="ProgressComponent"
              style={{
                width: `${pokemon.stats?.[0].base_stat / 1.5}%`,
              }}
            ></div>
          </div>
          <div className="ProgressBar">
            <label className="ProgressLabel">
              Speed = {pokemon.stats?.[5].base_stat} / 150
            </label>

            <div
              className="ProgressComponent"
              style={{
                width: `${pokemon.stats?.[5].base_stat / 1.5}%`,
              }}
            ></div>
          </div>
          <div className="ProgressBar">
            <label className="ProgressLabel">
              Attack = {pokemon.stats?.[1].base_stat} / 150
            </label>

            <div
              className="ProgressComponent"
              style={{
                width: `${pokemon.stats?.[1].base_stat / 1.5}%`,
              }}
            ></div>
          </div>
          <div className="ProgressBar">
            <label className="ProgressLabel">
              Defense = {pokemon.stats?.[2].base_stat} / 150
            </label>

            <div
              className="ProgressComponent"
              style={{
                width: `${pokemon.stats?.[2].base_stat / 1.5}%`,
              }}
            ></div>
          </div>{" "}
        </div>
      </div>

      <div className="movements">
        <img src={pokeball} className="pokeball" alt="" />
        <b>Movements: </b>
        <ul>
          {pokemon.moves?.map((e) => {
            return <li key={e.move.name}>{e.move.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PokeDetails;

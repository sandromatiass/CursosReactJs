import { useState } from "react";

const useListaTimes = () => {
    const [listaTimes, setListaTimes] = useState([
      {
        nome: "Boston Celtics",
        corPrimaria: "#AE8C64",
        corSecundaria: "#02A85D",
      },
      {
        nome: "Brooklyn Nets",
        corPrimaria: "#000000",
        corSecundaria: "#ffffff",
      },
      {
        nome: "New York Knicks",
        corPrimaria: "#EF6219",
        corSecundaria: "#00399E",
      },
      {
        nome: "Philadelphia 76ers",
        corPrimaria: "#EFEFEF",
        corSecundaria: "#006BB6",
      },
      {
        nome: "Toronto Raptors",
        corPrimaria: "#000000",
        corSecundaria: "#C31741",
      },
      {
        nome: "Chicago Bulls",
        corPrimaria: "#000000",
        corSecundaria: "#C3103E",
      },
      {
        nome: "Cleveland Cavaliers",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Detroit Pistons",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Indiana Pacers",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Milwaukee Bucks",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Atlanta Hawks",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Charlotte Hornets",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Miami Heat",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Orlando Magic",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Washington Wizards",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Denver Nuggets",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Minnesota Timberwolves",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Portland Trail Blazers",
        corPrimaria: "black",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Oklahoma City Thunder",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Utah Jazz",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Golden State Warriors",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Los Angeles Clippers",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Los Angeles Lakers",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Phoenix Suns",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Sacramento Kings",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Dallas Mavericks",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Houston Rockets",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "Memphis Grizzlies",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "New Orleans Pelicans",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
      {
        nome: "San Antonio Spurs",
        corPrimaria: "#F27127",
        corSecundaria: "#184A8C",
      },
    ])
  
    return [listaTimes, setListaTimes];
  
  }
  
  export default useListaTimes;
import { useState } from "react";

const useListaTimes = () => {
    const [listaTimes, setListaTimes] = useState([
      {
        nome: "Boston Celtics",
        corUnica: "#AE8C64",
      },
      {
        nome: "Brooklyn Nets",
        corUnica: "#000000",
      },
      {
        nome: "New York Knicks",
        corUnica: "#EF6219",
      },
      {
        nome: "Philadelphia 76ers",
        corUnica: "#EFEFEF",
      },
      {
        nome: "Toronto Raptors",
        corUnica: "#000000",
      },
      {
        nome: "Chicago Bulls",
        corUnica: "#000000",
      },
      {
        nome: "Cleveland Cavaliers",
        corUnica: "#F27127",
      },
      {
        nome: "Detroit Pistons",
        corUnica: "#F27127",
      },
      {
        nome: "Indiana Pacers",
        corUnica: "#F27127",
      },
      {
        nome: "Milwaukee Bucks",
        corUnica: "#F27127",
      },
      {
        nome: "Atlanta Hawks",
        corUnica: "#F27127",
      },
      {
        nome: "Charlotte Hornets",
        corUnica: "#F27127",
      },
      {
        nome: "Miami Heat",
        corUnica: "#F27127",
      },
      {
        nome: "Orlando Magic",
        corUnica: "#F27127",
      },
      {
        nome: "Washington Wizards",
        corUnica: "#F27127",
      },
      {
        nome: "Denver Nuggets",
        corUnica: "#F27127",
      },
      {
        nome: "Minnesota Timberwolves",
        corUnica: "#F27127",
      },
      {
        nome: "Portland Trail Blazers",
        cUnicaia: "black",
      },
      {
        nome: "Oklahoma City Thunder",
        corUnica: "#F27127",
      },
      {
        nome: "Utah Jazz",
        corUnica: "#F27127",
      },
      {
        nome: "Golden State Warriors",
        corUnica: "#F27127",
      },
      {
        nome: "Los Angeles Clippers",
        corUnica: "#F27127",
      },
      {
        nome: "Los Angeles Lakers",
        corUnica: "#F27127",
      },
      {
        nome: "Phoenix Suns",
        corUnica: "#F27127",
      },
      {
        nome: "Sacramento Kings",
        corUnica: "#F27127",
      },
      {
        nome: "Dallas Mavericks",
        corUnica: "#F27127",
      },
      {
        nome: "Houston Rockets",
        corUnica: "#F27127",
      },
      {
        nome: "Memphis Grizzlies",
        corUnica: "#F27127",
      },
      {
        nome: "New Orleans Pelicans",
        corUnica: "#F27127",
      },
      {
        nome: "San Antonio Spurs",
        corUnica: "#F27127",
      },
    ])
  
    return [listaTimes, setListaTimes];
  
  }
  
  export default useListaTimes;
"use client";

import React, { useState } from "react";
import colorPicker from "../../public/colorpicker.gif";
import Image from "next/image";
import { hexToRgb, hexToHsl } from "@/Utils/utils";
import ThemeBox from "../ThemeBox";

type DatasetType = {
  hex: string;
  rgb: string;
  hsl: string;
};

export default function RandomColorGenerator() {
  const [color, setColor] = useState<DatasetType>({
    hex: localStorage.getItem("joy-mode") === "light" ? "#ffffff" : "#000000",
    rgb: "255, 255, 255",
    hsl: "0, 100%, 100%",
  });

  const mouseOutMap = () => {};

  const clickColor = (data: string) => {
    console.log(data);
    const { r, b, g } = hexToRgb(data);
    const { h, l, s } = hexToHsl(data);
    console.log(`${r}, ${g}, ${b}`);
    setColor({
      hex: data,
      rgb: `${r}, ${g}, ${b}`,
      hsl: `${h}, ${s}%, ${l}%`,
    });
  };

  const mouseOverColor = (color: string) => {
    console.log(color);
  };

  return (
    <ThemeBox
      className={`flex flex-col justify-center items-center max-h-screen min-h-[92.8vh]`}
      style={{ backgroundColor: color.hex }}
    >
      <div
        className="text-center text-4xl font-medium pb-2 underline"
        style={{
          color: `rgba(${color.rgb}, 0.8)`,
          textShadow: `3px 2px #000`,
        }}
      >
        Color Picker
      </div>
      <div
        className="font-extrabold p-2 m-2 rounded-lg space-x-4 flex text-lg"
        style={{ backgroundColor: `rgba(${color.hex}, 0.05)` }}
      >
        <div
          className="rounded p-1"
          style={{
            color: `rgba(${color.rgb}, 0.8)`,
            textShadow: `2px 1px #000`,
          }}
        >
          HEX:
          <span
            className="pl-2 uppercase"
            style={{
              color: `rgba(${color.rgb}, 0.8)`,
              textShadow: `0.5px 1px #000`,
            }}
          >
            {color.hex}
          </span>
        </div>
        <div
          className="rounded p-1"
          style={{
            color: `rgba(${color.rgb}, 0.8)`,
            textShadow: `2px 1px #000`,
          }}
        >
          RGB:
          <span
            className="text-[#3f3844] pl-2"
            style={{
              color: `rgba(${color.rgb}, 0.8)`,
              textShadow: `0.5px 1px #000`,
            }}
          >
            RGB({color.rgb})
          </span>
        </div>
        <div
          className="rounded p-1 whitespace-nowrap"
          style={{
            color: `rgba(${color.rgb}, 0.8)`,
            textShadow: `2px 1px #000`,
          }}
        >
          HSL:
          <span
            className="text-[#3f3844] pl-2"
            style={{
              color: `rgba(${color.rgb}, 0.8)`,
              textShadow: `0.5px 1px #000`,
            }}
          >
            HSL({color.hsl})
          </span>
        </div>
      </div>
      <Image src={colorPicker} alt="Workplace" useMap="#colormap" width="230" />

      <map
        id="colormap"
        name="colormap"
        onMouseOut={mouseOutMap}
        className="cursor-pointer"
      >
        <area
          shape="poly"
          coords="63,0,72,4,72,15,63,19,54,15,54,4"
          onClick={() => clickColor("#003366")}
          onMouseOver={() => mouseOverColor("#003366")}
          alt="#003366"
        />

        <area
          shape="poly"
          coords="81,0,90,4,90,15,81,19,72,15,72,4"
          onClick={() => clickColor("#336699")}
          onMouseOver={() => mouseOverColor("#336699")}
          alt="#336699"
        />

        <area
          shape="poly"
          coords="99,0,108,4,108,15,99,19,90,15,90,4"
          onClick={() => clickColor("#3366CC")}
          onMouseOver={() => mouseOverColor("#3366CC")}
          alt="#3366CC"
        />

        <area
          shape="poly"
          coords="117,0,126,4,126,15,117,19,108,15,108,4"
          onClick={() => clickColor("#003399")}
          onMouseOver={() => mouseOverColor("#003399")}
          alt="#003399"
        />

        <area
          shape="poly"
          coords="135,0,144,4,144,15,135,19,126,15,126,4"
          onClick={() => clickColor("#000099")}
          onMouseOver={() => mouseOverColor("#000099")}
          alt="#000099"
        />
        <area
          shape="poly"
          coords="153,0,162,4,162,15,153,19,144,15,144,4"
          onClick={() => clickColor("#0000CC")}
          onMouseOver={() => mouseOverColor("#0000CC")}
          alt="#0000CC"
        />
        <area
          shape="poly"
          coords="171,0,180,4,180,15,171,19,162,15,162,4"
          onClick={() => clickColor("#000066")}
          onMouseOver={() => mouseOverColor("#000066")}
          alt="#000066"
        />
        <area
          shape="poly"
          coords="54,15,63,19,63,30,54,34,45,30,45,19"
          onClick={() => clickColor("#006666")}
          onMouseOver={() => mouseOverColor("#006666")}
          alt="#006666"
        />
        <area
          shape="poly"
          coords="72,15,81,19,81,30,72,34,63,30,63,19"
          onClick={() => clickColor("#006699")}
          onMouseOver={() => mouseOverColor("#006699")}
          alt="#006699"
        />
        <area
          shape="poly"
          coords="90,15,99,19,99,30,90,34,81,30,81,19"
          onClick={() => clickColor("#0099CC")}
          onMouseOver={() => mouseOverColor("#0099CC")}
          alt="#0099CC"
        />
        <area
          shape="poly"
          coords="108,15,117,19,117,30,108,34,99,30,99,19"
          onClick={() => clickColor("#0066CC")}
          onMouseOver={() => mouseOverColor("#0066CC")}
          alt="#0066CC"
        />
        <area
          shape="poly"
          coords="126,15,135,19,135,30,126,34,117,30,117,19"
          onClick={() => clickColor("#0033CC")}
          onMouseOver={() => mouseOverColor("#0033CC")}
          alt="#0033CC"
        />
        <area
          shape="poly"
          coords="144,15,153,19,153,30,144,34,135,30,135,19"
          onClick={() => clickColor("#0000FF")}
          onMouseOver={() => mouseOverColor("#0000FF")}
          alt="#0000FF"
        />
        <area
          shape="poly"
          coords="162,15,171,19,171,30,162,34,153,30,153,19"
          onClick={() => clickColor("#3333FF")}
          onMouseOver={() => mouseOverColor("#3333FF")}
          alt="#3333FF"
        />
        <area
          shape="poly"
          coords="180,15,189,19,189,30,180,34,171,30,171,19"
          onClick={() => clickColor("#333399")}
          onMouseOver={() => mouseOverColor("#333399")}
          alt="#333399"
        />
        <area
          shape="poly"
          coords="45,30,54,34,54,45,45,49,36,45,36,34"
          onClick={() => clickColor("#669999")}
          onMouseOver={() => mouseOverColor("#669999")}
          alt="#669999"
        />
        <area
          shape="poly"
          coords="63,30,72,34,72,45,63,49,54,45,54,34"
          onClick={() => clickColor("#009999")}
          onMouseOver={() => mouseOverColor("#009999")}
          alt="#009999"
        />
        <area
          shape="poly"
          coords="81,30,90,34,90,45,81,49,72,45,72,34"
          onClick={() => clickColor("#33CCCC")}
          onMouseOver={() => mouseOverColor("#33CCCC")}
          alt="#33CCCC"
        />
        <area
          shape="poly"
          coords="99,30,108,34,108,45,99,49,90,45,90,34"
          onClick={() => clickColor("#00CCFF")}
          onMouseOver={() => mouseOverColor("#00CCFF")}
          alt="#00CCFF"
        />
        <area
          shape="poly"
          coords="117,30,126,34,126,45,117,49,108,45,108,34"
          onClick={() => clickColor("#0099FF")}
          onMouseOver={() => mouseOverColor("#0099FF")}
          alt="#0099FF"
        />
        <area
          shape="poly"
          coords="135,30,144,34,144,45,135,49,126,45,126,34"
          onClick={() => clickColor("#0066FF")}
          onMouseOver={() => mouseOverColor("#0066FF")}
          alt="#0066FF"
        />
        <area
          shape="poly"
          coords="153,30,162,34,162,45,153,49,144,45,144,34"
          onClick={() => clickColor("#3366FF")}
          onMouseOver={() => mouseOverColor("#3366FF")}
          alt="#3366FF"
        />
        <area
          shape="poly"
          coords="171,30,180,34,180,45,171,49,162,45,162,34"
          onClick={() => clickColor("#3333CC")}
          onMouseOver={() => mouseOverColor("#3333CC")}
          alt="#3333CC"
        />
        <area
          shape="poly"
          coords="189,30,198,34,198,45,189,49,180,45,180,34"
          onClick={() => clickColor("#666699")}
          onMouseOver={() => mouseOverColor("#666699")}
          alt="#666699"
        />
        <area
          shape="poly"
          coords="36,45,45,49,45,60,36,64,27,60,27,49"
          onClick={() => clickColor("#339966")}
          onMouseOver={() => mouseOverColor("#339966")}
          alt="#339966"
        />
        <area
          shape="poly"
          coords="54,45,63,49,63,60,54,64,45,60,45,49"
          onClick={() => clickColor("#00CC99")}
          onMouseOver={() => mouseOverColor("#00CC99")}
          alt="#00CC99"
        />
        <area
          shape="poly"
          coords="72,45,81,49,81,60,72,64,63,60,63,49"
          onClick={() => clickColor("#00FFCC")}
          onMouseOver={() => mouseOverColor("#00FFCC")}
          alt="#00FFCC"
        />
        <area
          shape="poly"
          coords="90,45,99,49,99,60,90,64,81,60,81,49"
          onClick={() => clickColor("#00FFFF")}
          onMouseOver={() => mouseOverColor("#00FFFF")}
          alt="#00FFFF"
        />
        <area
          shape="poly"
          coords="108,45,117,49,117,60,108,64,99,60,99,49"
          onClick={() => clickColor("#33CCFF")}
          onMouseOver={() => mouseOverColor("#33CCFF")}
          alt="#33CCFF"
        />
        <area
          shape="poly"
          coords="126,45,135,49,135,60,126,64,117,60,117,49"
          onClick={() => clickColor("#3399FF")}
          onMouseOver={() => mouseOverColor("#3399FF")}
          alt="#3399FF"
        />
        <area
          shape="poly"
          coords="144,45,153,49,153,60,144,64,135,60,135,49"
          onClick={() => clickColor("#6699FF")}
          onMouseOver={() => mouseOverColor("#6699FF")}
          alt="#6699FF"
        />
        <area
          shape="poly"
          coords="162,45,171,49,171,60,162,64,153,60,153,49"
          onClick={() => clickColor("#6666FF")}
          onMouseOver={() => mouseOverColor("#6666FF")}
          alt="#6666FF"
        />
        <area
          shape="poly"
          coords="180,45,189,49,189,60,180,64,171,60,171,49"
          onClick={() => clickColor("#6600FF")}
          onMouseOver={() => mouseOverColor("#6600FF")}
          alt="#6600FF"
        />
        <area
          shape="poly"
          coords="198,45,207,49,207,60,198,64,189,60,189,49"
          onClick={() => clickColor("#6600CC")}
          onMouseOver={() => mouseOverColor("#6600CC")}
          alt="#6600CC"
        />
        <area
          shape="poly"
          coords="27,60,36,64,36,75,27,79,18,75,18,64"
          onClick={() => clickColor("#339933")}
          onMouseOver={() => mouseOverColor("#339933")}
          alt="#339933"
        />
        <area
          shape="poly"
          coords="45,60,54,64,54,75,45,79,36,75,36,64"
          onClick={() => clickColor("#00CC66")}
          onMouseOver={() => mouseOverColor("#00CC66")}
          alt="#00CC66"
        />
        <area
          shape="poly"
          coords="63,60,72,64,72,75,63,79,54,75,54,64"
          onClick={() => clickColor("#00FF99")}
          onMouseOver={() => mouseOverColor("#00FF99")}
          alt="#00FF99"
        />
        <area
          shape="poly"
          coords="81,60,90,64,90,75,81,79,72,75,72,64"
          onClick={() => clickColor("#66FFCC")}
          onMouseOver={() => mouseOverColor("#66FFCC")}
          alt="#66FFCC"
        />
        <area
          shape="poly"
          coords="99,60,108,64,108,75,99,79,90,75,90,64"
          onClick={() => clickColor("#66FFFF")}
          onMouseOver={() => mouseOverColor("#66FFFF")}
          alt="#66FFFF"
        />
        <area
          shape="poly"
          coords="117,60,126,64,126,75,117,79,108,75,108,64"
          onClick={() => clickColor("#66CCFF")}
          onMouseOver={() => mouseOverColor("#66CCFF")}
          alt="#66CCFF"
        />
        <area
          shape="poly"
          coords="135,60,144,64,144,75,135,79,126,75,126,64"
          onClick={() => clickColor("#99CCFF")}
          onMouseOver={() => mouseOverColor("#99CCFF")}
          alt="#99CCFF"
        />
        <area
          shape="poly"
          coords="153,60,162,64,162,75,153,79,144,75,144,64"
          onClick={() => clickColor("#9999FF")}
          onMouseOver={() => mouseOverColor("#9999FF")}
          alt="#9999FF"
        />
        <area
          shape="poly"
          coords="171,60,180,64,180,75,171,79,162,75,162,64"
          onClick={() => clickColor("#9966FF")}
          onMouseOver={() => mouseOverColor("#9966FF")}
          alt="#9966FF"
        />
        <area
          shape="poly"
          coords="189,60,198,64,198,75,189,79,180,75,180,64"
          onClick={() => clickColor("#9933FF")}
          onMouseOver={() => mouseOverColor("#9933FF")}
          alt="#9933FF"
        />
        <area
          shape="poly"
          coords="207,60,216,64,216,75,207,79,198,75,198,64"
          onClick={() => clickColor("#9900FF")}
          onMouseOver={() => mouseOverColor("#9900FF")}
          alt="#9900FF"
        />
        <area
          shape="poly"
          coords="18,75,27,79,27,90,18,94,9,90,9,79"
          onClick={() => clickColor("#006600")}
          onMouseOver={() => mouseOverColor("#006600")}
          alt="#006600"
        />
        <area
          shape="poly"
          coords="36,75,45,79,45,90,36,94,27,90,27,79"
          onClick={() => clickColor("#00CC00")}
          onMouseOver={() => mouseOverColor("#00CC00")}
          alt="#00CC00"
        />
        <area
          shape="poly"
          coords="54,75,63,79,63,90,54,94,45,90,45,79"
          onClick={() => clickColor("#00FF00")}
          onMouseOver={() => mouseOverColor("#00FF00")}
          alt="#00FF00"
        />
        <area
          shape="poly"
          coords="72,75,81,79,81,90,72,94,63,90,63,79"
          onClick={() => clickColor("#66FF99")}
          onMouseOver={() => mouseOverColor("#66FF99")}
          alt="#66FF99"
        />
        <area
          shape="poly"
          coords="90,75,99,79,99,90,90,94,81,90,81,79"
          onClick={() => clickColor("#99FFCC")}
          onMouseOver={() => mouseOverColor("#99FFCC")}
          alt="#99FFCC"
        />
        <area
          shape="poly"
          coords="108,75,117,79,117,90,108,94,99,90,99,79"
          onClick={() => clickColor("#CCFFFF")}
          onMouseOver={() => mouseOverColor("#CCFFFF")}
          alt="#CCFFFF"
        />
        <area
          shape="poly"
          coords="126,75,135,79,135,90,126,94,117,90,117,79"
          onClick={() => clickColor("#CCCCFF")}
          onMouseOver={() => mouseOverColor("#CCCCFF")}
          alt="#CCCCFF"
        />
        <area
          shape="poly"
          coords="144,75,153,79,153,90,144,94,135,90,135,79"
          onClick={() => clickColor("#CC99FF")}
          onMouseOver={() => mouseOverColor("#CC99FF")}
          alt="#CC99FF"
        />
        <area
          shape="poly"
          coords="162,75,171,79,171,90,162,94,153,90,153,79"
          onClick={() => clickColor("#CC66FF")}
          onMouseOver={() => mouseOverColor("#CC66FF")}
          alt="#CC66FF"
        />
        <area
          shape="poly"
          coords="180,75,189,79,189,90,180,94,171,90,171,79"
          onClick={() => clickColor("#CC33FF")}
          onMouseOver={() => mouseOverColor("#CC33FF")}
          alt="#CC33FF"
        />
        <area
          shape="poly"
          coords="198,75,207,79,207,90,198,94,189,90,189,79"
          onClick={() => clickColor("#CC00FF")}
          onMouseOver={() => mouseOverColor("#CC00FF")}
          alt="#CC00FF"
        />
        <area
          shape="poly"
          coords="216,75,225,79,225,90,216,94,207,90,207,79"
          onClick={() => clickColor("#9900CC")}
          onMouseOver={() => mouseOverColor("#9900CC")}
          alt="#9900CC"
        />
        <area
          shape="poly"
          coords="9,90,18,94,18,105,9,109,0,105,0,94"
          onClick={() => clickColor("#003300")}
          onMouseOver={() => mouseOverColor("#003300")}
          alt="#003300"
        />
        <area
          shape="poly"
          coords="27,90,36,94,36,105,27,109,18,105,18,94"
          onClick={() => clickColor("#009933")}
          onMouseOver={() => mouseOverColor("#009933")}
          alt="#009933"
        />
        <area
          shape="poly"
          coords="45,90,54,94,54,105,45,109,36,105,36,94"
          onClick={() => clickColor("#33CC33")}
          onMouseOver={() => mouseOverColor("#33CC33")}
          alt="#33CC33"
        />
        <area
          shape="poly"
          coords="63,90,72,94,72,105,63,109,54,105,54,94"
          onClick={() => clickColor("#66FF66")}
          onMouseOver={() => mouseOverColor("#66FF66")}
          alt="#66FF66"
        />
        <area
          shape="poly"
          coords="81,90,90,94,90,105,81,109,72,105,72,94"
          onClick={() => clickColor("#99FF99")}
          onMouseOver={() => mouseOverColor("#99FF99")}
          alt="#99FF99"
        />
        <area
          shape="poly"
          coords="99,90,108,94,108,105,99,109,90,105,90,94"
          onClick={() => clickColor("#CCFFCC")}
          onMouseOver={() => mouseOverColor("#CCFFCC")}
          alt="#CCFFCC"
        />
        <area
          shape="poly"
          coords="117,90,126,94,126,105,117,109,108,105,108,94"
          onClick={() => clickColor("#FFFFFF")}
          onMouseOver={() => mouseOverColor("#FFFFFF")}
          alt="#FFFFFF"
        />
        <area
          shape="poly"
          coords="135,90,144,94,144,105,135,109,126,105,126,94"
          onClick={() => clickColor("#FFCCFF")}
          onMouseOver={() => mouseOverColor("#FFCCFF")}
          alt="#FFCCFF"
        />
        <area
          shape="poly"
          coords="153,90,162,94,162,105,153,109,144,105,144,94"
          onClick={() => clickColor("#FF99FF")}
          onMouseOver={() => mouseOverColor("#FF99FF")}
          alt="#FF99FF"
        />
        <area
          shape="poly"
          coords="171,90,180,94,180,105,171,109,162,105,162,94"
          onClick={() => clickColor("#FF66FF")}
          onMouseOver={() => mouseOverColor("#FF66FF")}
          alt="#FF66FF"
        />
        <area
          shape="poly"
          coords="189,90,198,94,198,105,189,109,180,105,180,94"
          onClick={() => clickColor("#FF00FF")}
          onMouseOver={() => mouseOverColor("#FF00FF")}
          alt="#FF00FF"
        />
        <area
          shape="poly"
          coords="207,90,216,94,216,105,207,109,198,105,198,94"
          onClick={() => clickColor("#CC00CC")}
          onMouseOver={() => mouseOverColor("#CC00CC")}
          alt="#CC00CC"
        />
        <area
          shape="poly"
          coords="225,90,234,94,234,105,225,109,216,105,216,94"
          onClick={() => clickColor("#660066")}
          onMouseOver={() => mouseOverColor("#660066")}
          alt="#660066"
        />
        <area
          shape="poly"
          coords="18,105,27,109,27,120,18,124,9,120,9,109"
          onClick={() => clickColor("#336600")}
          onMouseOver={() => mouseOverColor("#336600")}
          alt="#336600"
        />
        <area
          shape="poly"
          coords="36,105,45,109,45,120,36,124,27,120,27,109"
          onClick={() => clickColor("#009900")}
          onMouseOver={() => mouseOverColor("#009900")}
          alt="#009900"
        />
        <area
          shape="poly"
          coords="54,105,63,109,63,120,54,124,45,120,45,109"
          onClick={() => clickColor("#66FF33")}
          onMouseOver={() => mouseOverColor("#66FF33")}
          alt="#66FF33"
        />
        <area
          shape="poly"
          coords="72,105,81,109,81,120,72,124,63,120,63,109"
          onClick={() => clickColor("#99FF66")}
          onMouseOver={() => mouseOverColor("#99FF66")}
          alt="#99FF66"
        />
        <area
          shape="poly"
          coords="90,105,99,109,99,120,90,124,81,120,81,109"
          onClick={() => clickColor("#CCFF99")}
          onMouseOver={() => mouseOverColor("#CCFF99")}
          alt="#CCFF99"
        />
        <area
          shape="poly"
          coords="108,105,117,109,117,120,108,124,99,120,99,109"
          onClick={() => clickColor("#FFFFCC")}
          onMouseOver={() => mouseOverColor("#FFFFCC")}
          alt="#FFFFCC"
        />
        <area
          shape="poly"
          coords="126,105,135,109,135,120,126,124,117,120,117,109"
          onClick={() => clickColor("#FFCCCC")}
          onMouseOver={() => mouseOverColor("#FFCCCC")}
          alt="#FFCCCC"
        />
        <area
          shape="poly"
          coords="144,105,153,109,153,120,144,124,135,120,135,109"
          onClick={() => clickColor("#FF99CC")}
          onMouseOver={() => mouseOverColor("#FF99CC")}
          alt="#FF99CC"
        />
        <area
          shape="poly"
          coords="162,105,171,109,171,120,162,124,153,120,153,109"
          onClick={() => clickColor("#FF66CC")}
          onMouseOver={() => mouseOverColor("#FF66CC")}
          alt="#FF66CC"
        />
        <area
          shape="poly"
          coords="180,105,189,109,189,120,180,124,171,120,171,109"
          onClick={() => clickColor("#FF33CC")}
          onMouseOver={() => mouseOverColor("#FF33CC")}
          alt="#FF33CC"
        />
        <area
          shape="poly"
          coords="198,105,207,109,207,120,198,124,189,120,189,109"
          onClick={() => clickColor("#CC0099")}
          onMouseOver={() => mouseOverColor("#CC0099")}
          alt="#CC0099"
        />
        <area
          shape="poly"
          coords="216,105,225,109,225,120,216,124,207,120,207,109"
          onClick={() => clickColor("#993399")}
          onMouseOver={() => mouseOverColor("#993399")}
          alt="#993399"
        />
        <area
          shape="poly"
          coords="27,120,36,124,36,135,27,139,18,135,18,124"
          onClick={() => clickColor("#333300")}
          onMouseOver={() => mouseOverColor("#333300")}
          alt="#333300"
        />
        <area
          shape="poly"
          coords="45,120,54,124,54,135,45,139,36,135,36,124"
          onClick={() => clickColor("#669900")}
          onMouseOver={() => mouseOverColor("#669900")}
          alt="#669900"
        />
        <area
          shape="poly"
          coords="63,120,72,124,72,135,63,139,54,135,54,124"
          onClick={() => clickColor("#99FF33")}
          onMouseOver={() => mouseOverColor("#99FF33")}
          alt="#99FF33"
        />
        <area
          shape="poly"
          coords="81,120,90,124,90,135,81,139,72,135,72,124"
          onClick={() => clickColor("#CCFF66")}
          onMouseOver={() => mouseOverColor("#CCFF66")}
          alt="#CCFF66"
        />
        <area
          shape="poly"
          coords="99,120,108,124,108,135,99,139,90,135,90,124"
          onClick={() => clickColor("#FFFF99")}
          onMouseOver={() => mouseOverColor("#FFFF99")}
          alt="#FFFF99"
        />
        <area
          shape="poly"
          coords="117,120,126,124,126,135,117,139,108,135,108,124"
          onClick={() => clickColor("#FFCC99")}
          onMouseOver={() => mouseOverColor("#FFCC99")}
          alt="#FFCC99"
        />
        <area
          shape="poly"
          coords="135,120,144,124,144,135,135,139,126,135,126,124"
          onClick={() => clickColor("#FF9999")}
          onMouseOver={() => mouseOverColor("#FF9999")}
          alt="#FF9999"
        />
        <area
          shape="poly"
          coords="153,120,162,124,162,135,153,139,144,135,144,124"
          onClick={() => clickColor("#FF6699")}
          onMouseOver={() => mouseOverColor("#FF6699")}
          alt="#FF6699"
        />
        <area
          shape="poly"
          coords="171,120,180,124,180,135,171,139,162,135,162,124"
          onClick={() => clickColor("#FF3399")}
          onMouseOver={() => mouseOverColor("#FF3399")}
          alt="#FF3399"
        />
        <area
          shape="poly"
          coords="189,120,198,124,198,135,189,139,180,135,180,124"
          onClick={() => clickColor("#CC3399")}
          onMouseOver={() => mouseOverColor("#CC3399")}
          alt="#CC3399"
        />
        <area
          shape="poly"
          coords="207,120,216,124,216,135,207,139,198,135,198,124"
          onClick={() => clickColor("#990099")}
          onMouseOver={() => mouseOverColor("#990099")}
          alt="#990099"
        />
        <area
          shape="poly"
          coords="36,135,45,139,45,150,36,154,27,150,27,139"
          onClick={() => clickColor("#666633")}
          onMouseOver={() => mouseOverColor("#666633")}
          alt="#666633"
        />
        <area
          shape="poly"
          coords="54,135,63,139,63,150,54,154,45,150,45,139"
          onClick={() => clickColor("#99CC00")}
          onMouseOver={() => mouseOverColor("#99CC00")}
          alt="#99CC00"
        />
        <area
          shape="poly"
          coords="72,135,81,139,81,150,72,154,63,150,63,139"
          onClick={() => clickColor("#CCFF33")}
          onMouseOver={() => mouseOverColor("#CCFF33")}
          alt="#CCFF33"
        />
        <area
          shape="poly"
          coords="90,135,99,139,99,150,90,154,81,150,81,139"
          onClick={() => clickColor("#FFFF66")}
          onMouseOver={() => mouseOverColor("#FFFF66")}
          alt="#FFFF66"
        />
        <area
          shape="poly"
          coords="108,135,117,139,117,150,108,154,99,150,99,139"
          onClick={() => clickColor("#FFCC66")}
          onMouseOver={() => mouseOverColor("#FFCC66")}
          alt="#FFCC66"
        />
        <area
          shape="poly"
          coords="126,135,135,139,135,150,126,154,117,150,117,139"
          onClick={() => clickColor("#FF9966")}
          onMouseOver={() => mouseOverColor("#FF9966")}
          alt="#FF9966"
        />
        <area
          shape="poly"
          coords="144,135,153,139,153,150,144,154,135,150,135,139"
          onClick={() => clickColor("#FF6666")}
          onMouseOver={() => mouseOverColor("#FF6666")}
          alt="#FF6666"
        />
        <area
          shape="poly"
          coords="162,135,171,139,171,150,162,154,153,150,153,139"
          onClick={() => clickColor("#FF0066")}
          onMouseOver={() => mouseOverColor("#FF0066")}
          alt="#FF0066"
        />
        <area
          shape="poly"
          coords="180,135,189,139,189,150,180,154,171,150,171,139"
          onClick={() => clickColor("#CC6699")}
          onMouseOver={() => mouseOverColor("#CC6699")}
          alt="#CC6699"
        />
        <area
          shape="poly"
          coords="198,135,207,139,207,150,198,154,189,150,189,139"
          onClick={() => clickColor("#993366")}
          onMouseOver={() => mouseOverColor("#993366")}
          alt="#993366"
        />
        <area
          shape="poly"
          coords="45,150,54,154,54,165,45,169,36,165,36,154"
          onClick={() => clickColor("#999966")}
          onMouseOver={() => mouseOverColor("#999966")}
          alt="#999966"
        />
        <area
          shape="poly"
          coords="63,150,72,154,72,165,63,169,54,165,54,154"
          onClick={() => clickColor("#CCCC00")}
          onMouseOver={() => mouseOverColor("#CCCC00")}
          alt="#CCCC00"
        />
        <area
          shape="poly"
          coords="81,150,90,154,90,165,81,169,72,165,72,154"
          onClick={() => clickColor("#FFFF00")}
          onMouseOver={() => mouseOverColor("#FFFF00")}
          alt="#FFFF00"
        />
        <area
          shape="poly"
          coords="99,150,108,154,108,165,99,169,90,165,90,154"
          onClick={() => clickColor("#FFCC00")}
          onMouseOver={() => mouseOverColor("#FFCC00")}
          alt="#FFCC00"
        />
        <area
          shape="poly"
          coords="117,150,126,154,126,165,117,169,108,165,108,154"
          onClick={() => clickColor("#FF9933")}
          onMouseOver={() => mouseOverColor("#FF9933")}
          alt="#FF9933"
        />
        <area
          shape="poly"
          coords="135,150,144,154,144,165,135,169,126,165,126,154"
          onClick={() => clickColor("#FF6600")}
          onMouseOver={() => mouseOverColor("#FF6600")}
          alt="#FF6600"
        />
        <area
          shape="poly"
          coords="153,150,162,154,162,165,153,169,144,165,144,154"
          onClick={() => clickColor("#FF5050")}
          onMouseOver={() => mouseOverColor("#FF5050")}
          alt="#FF5050"
        />
        <area
          shape="poly"
          coords="171,150,180,154,180,165,171,169,162,165,162,154"
          onClick={() => clickColor("#CC0066")}
          onMouseOver={() => mouseOverColor("#CC0066")}
          alt="#CC0066"
        />
        <area
          shape="poly"
          coords="189,150,198,154,198,165,189,169,180,165,180,154"
          onClick={() => clickColor("#660033")}
          onMouseOver={() => mouseOverColor("#660033")}
          alt="#660033"
        />
        <area
          shape="poly"
          coords="54,165,63,169,63,180,54,184,45,180,45,169"
          onClick={() => clickColor("#996633")}
          onMouseOver={() => mouseOverColor("#996633")}
          alt="#996633"
        />
        <area
          shape="poly"
          coords="72,165,81,169,81,180,72,184,63,180,63,169"
          onClick={() => clickColor("#CC9900")}
          onMouseOver={() => mouseOverColor("#CC9900")}
          alt="#CC9900"
        />
        <area
          shape="poly"
          coords="90,165,99,169,99,180,90,184,81,180,81,169"
          onClick={() => clickColor("#FF9900")}
          onMouseOver={() => mouseOverColor("#FF9900")}
          alt="#FF9900"
        />
        <area
          shape="poly"
          coords="108,165,117,169,117,180,108,184,99,180,99,169"
          onClick={() => clickColor("#CC6600")}
          onMouseOver={() => mouseOverColor("#CC6600")}
          alt="#CC6600"
        />
        <area
          shape="poly"
          coords="126,165,135,169,135,180,126,184,117,180,117,169"
          onClick={() => clickColor("#FF3300")}
          onMouseOver={() => mouseOverColor("#FF3300")}
          alt="#FF3300"
        />
        <area
          shape="poly"
          coords="144,165,153,169,153,180,144,184,135,180,135,169"
          onClick={() => clickColor("#FF0000")}
          onMouseOver={() => mouseOverColor("#FF0000")}
          alt="#FF0000"
        />
        <area
          shape="poly"
          coords="162,165,171,169,171,180,162,184,153,180,153,169"
          onClick={() => clickColor("#CC0000")}
          onMouseOver={() => mouseOverColor("#CC0000")}
          alt="#CC0000"
        />
        <area
          shape="poly"
          coords="180,165,189,169,189,180,180,184,171,180,171,169"
          onClick={() => clickColor("#990033")}
          onMouseOver={() => mouseOverColor("#990033")}
          alt="#990033"
        />
        <area
          shape="poly"
          coords="63,180,72,184,72,195,63,199,54,195,54,184"
          onClick={() => clickColor("#663300")}
          onMouseOver={() => mouseOverColor("#663300")}
          alt="#663300"
        />
        <area
          shape="poly"
          coords="81,180,90,184,90,195,81,199,72,195,72,184"
          onClick={() => clickColor("#996600")}
          onMouseOver={() => mouseOverColor("#996600")}
          alt="#996600"
        />
        <area
          shape="poly"
          coords="99,180,108,184,108,195,99,199,90,195,90,184"
          onClick={() => clickColor("#CC3300")}
          onMouseOver={() => mouseOverColor("#CC3300")}
          alt="#CC3300"
        />
        <area
          shape="poly"
          coords="117,180,126,184,126,195,117,199,108,195,108,184"
          onClick={() => clickColor("#993300")}
          onMouseOver={() => mouseOverColor("#993300")}
          alt="#993300"
        />
        <area
          shape="poly"
          coords="135,180,144,184,144,195,135,199,126,195,126,184"
          onClick={() => clickColor("#990000")}
          onMouseOver={() => mouseOverColor("#990000")}
          alt="#990000"
        />
        <area
          shape="poly"
          coords="153,180,162,184,162,195,153,199,144,195,144,184"
          onClick={() => clickColor("#800000")}
          onMouseOver={() => mouseOverColor("#800000")}
          alt="#800000"
        />
        <area
          shape="poly"
          coords="171,180,180,184,180,195,171,199,162,195,162,184"
          onClick={() => clickColor("#993333")}
          onMouseOver={() => mouseOverColor("#993333")}
          alt="#993333"
        />
      </map>
    </ThemeBox>
  );
}

import React, { useMemo } from "react";
import Card from "./Card.js";
import { Link } from "react-router-dom";

export default function Lister({
  Checked1, Checked2, Checked3, Checked4, 
  Checked5, Checked6, Checked7, Checked8, 
  Checked9, Checked10, Checked11, Checked12,
  count, setcount
}) {
  // Optimize count calculation using useMemo
  useMemo(() => {
    let counter = 0;
    for (let no = 0; no <= 12; no++) {
      const op = JSON.parse(localStorage.getItem("Checked" + `${no}`));
      
      if (op != null) {
        const uniqueOp = [...new Set(op)];
        counter += uniqueOp.filter(item => 
          (item != "," && item != "/" && item != '"' && 
           item != "[" && item != "]" && 
           (item < "a" || item > "z") && 
           item != "\\" && item != "+") || 
          uniqueOp.length === 3
        ).length;
      }
    }
    setcount(counter);
  }, []);  

  // Styles extracted to reduce inline style complexity
  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${Math.round((count * 100) / 100)}%`,
    backgroundColor: "#ff9933",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  // Card configurations to reduce repetitive code
  const cardConfigurations = [
    { qno: 23, no: "12", name: "Array and String", ans: Checked12 },
    { qno: 5, no: "1", name: "Greedy", ans: Checked1 },
    { qno: 13, no: "2", name: "Dp", ans: Checked2 },
    { qno: 7, no: "3", name: "Binary search", ans: Checked3 },
    { qno: 5, no: "4", name: "Heaps", ans: Checked4 },
    { qno: 6, no: "5", name: "Recursion", ans: Checked5 },
    { qno: 8, no: "6", name: "Linked List", ans: Checked6 },
    { qno: 8, no: "7", name: "Binary Tree", ans: Checked7 },
    { qno: 6, no: "8", name: "Binary Search Tree", ans: Checked8 },
    { qno: 7, no: "9", name: "Stack and Queue", ans: Checked9 },
    { qno: 6, no: "10", name: "Backtracking", ans: Checked10 },
    { qno: 6, no: "11", name: "Graphs", ans: Checked11 }
  ];

  return (
    <div>
      <h1 className="text-4xl mt-24 flex justify-center">100 Dsa Questions</h1>
      <h3 className="text-4xl mt-3 text-purple-800 align-items-center text-center flex justify-center">
        For Becoming a Better Problem Solver
      </h3>
      
      <div className="lg:ml-52 lg:mr-52 md:ml-52 md:mr-52 ml-24 mr-24" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${count}% `}</span>
        </div>
      </div>

      <div className="flex flex-wrap lg:p-16 md:p-16 lg:m-12 md:m-12 sm:m-4 sm:max-w-sm- mt-12 mb-12 justify-center">
        {cardConfigurations.map((card, index) => (
          <Card
            key={index}
            qno={card.qno}
            no={card.no}
            ans={card.ans}
            Checked={card.ans}
            name={card.name}
          />
        ))}
      </div>
      
      <div className="mb-10">
        <div className="flex justify-center">
          <p className="text-slate-600 font-nunito">Linkedin : &nbsp;</p>
          <Link
            target="_blank"
            className="text-blue-700 font-nunito"
            to="https://www.linkedin.com/in/sanjanasharma14/"
          >
            Sanjana Sharma &nbsp;
          </Link>
          <img
            src="https://th.bing.com/th/id/R.1dde1bbff3a49d9a2d8e3ad315f9f137?rik=hx1P1nWyX7TYaw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fheart-symbol-transparent%2fheart-symbol-transparent-7.png&ehk=tnXY15k5brhD0QZZmipdAq6M64XmIA6XDvtWxc1EXZA%3d&risl=&pid=ImgRaw&r=0"
            className="w-6 h-6"
            alt="Heart"
          />
        </div>
        <div className="flex justify-center">
          Made with Love | &nbsp;
          <img
            className="h-6 w-6"
            src="https://th.bing.com/th/id/R.968421ef5d794eb8cb555bb49dff4acd?rik=uxIlq%2bqiSDLTsA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1061%2f1924%2fproducts%2fStar_Emoji_grande.png%3fv%3d1480481043&ehk=1a3L6akK6vOPWmacDkHduTA1L5brh2me2a3w7ivd%2fHE%3d&risl=&pid=ImgRaw&r=0"
            alt="Star"
          />
          <Link
            target="_blank"
            className="text-sky-600"
            to="https://github.com/sanxzk"
          >
            &nbsp; Github \ sanxzk{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
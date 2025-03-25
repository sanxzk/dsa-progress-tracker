import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lister from "./components/Lister";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import Completer from "./components/Completer";
import {
  arrayq, Backtrackingq, Bsq, Bstq, Btq, 
  dpq, Graphq, greedyq, heapq, llq, 
  recursionq, Sqtq 
} from "./data";

function App() {
  const [mode, setMode] = useState("light");
  const [count, setCount] = useState(0);

  // Dynamically generate checked states
  const [checkedStates, setCheckedStates] = useState({
    "12": [], "1": [], "2": [], "3": [], 
    "4": [], "5": [], "6": [], "7": [], 
    "8": [], "9": [], "10": [], "11": []
  });

  const [progress, setProgress] = useState(0);

  // Route configurations to reduce repetitive code
  const routes = [
    { path: "", component: Lister, name: "Array", no: "12", qlist: arrayq },
    { path: "/Array and string", name: "Array", no: "12", qlist: arrayq },
    { path: "/Greedy", name: "Greedy", no: "1", qlist: greedyq },
    { path: "/Dp", name: "Dp", no: "2", qlist: dpq },
    { path: "/Binary search", name: "Binary Search", no: "3", qlist: Bsq },
    { path: "/Heaps", name: "Heap", no: "4", qlist: heapq },
    { path: "/Recursion", name: "Recursion", no: "5", qlist: recursionq },
    { path: "/Linked list", name: "Linked List", no: "6", qlist: llq },
    { path: "/Binary Tree", name: "Binary Tree", no: "7", qlist: Btq },
    { path: "/Binary Search Tree", name: "Binary Search Tree", no: "8", qlist: Bstq },
    { path: "/Stack and Queue", name: "Stack and Queue", no: "9", qlist: Sqtq },
    { path: "/Backtracking", name: "Backtracking", no: "10", qlist: Backtrackingq },
    { path: "/Graphs", name: "Graphs", no: "11", qlist: Graphq }
  ];

  // Common route render logic
  const renderRoute = (route) => {
    const isMainRoute = route.path === "";
    const Component = isMainRoute ? Lister : Questions;
    
    return (
      <Route
        key={route.path}
        exact
        path={route.path}
        element={
          isMainRoute ? (
            count <= 99 ? (
              <Component
                setprogress={setProgress}
                progress={progress}
                count={count}
                setcount={setCount}
                mode={mode}
                name={route.name}
                {...Object.fromEntries(
                  Object.entries(checkedStates).map(([key, value]) => [`Checked${key}`, value])
                )}
              />
            ) : (
              <Completer />
            )
          ) : (
            <Component
              Checked={checkedStates[route.no]}
              no={route.no}
              setChecked={(newChecked) => 
                setCheckedStates(prev => ({ ...prev, [route.no]: newChecked }))
              }
              mode={mode}
              qlist={route.qlist}
              name={route.name}
            />
          )
        }
      />
    );
  };

  return (
    <Router>
      <Navbar mode={mode} setmode={setMode} />
      <Routes>
        {routes.map(renderRoute)}
      </Routes>
    </Router>
  );
}

export default App;
const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1",}, 
[React.createElement("h1", {}, "this is first heading h1"),
 React.createElement("h2",{},"this is second heading h2")]
 ),
 React.createElement("div", {id:"child2",}, 
 [React.createElement("p", {}, "this is first paragraph"),
  React.createElement("span",{},"this is second span")]
  ),
  React.createElement("div", {id:"child3",}, 
  [React.createElement("li", {}, "this is first list item"),
   React.createElement("li",{},"this is second list item")]
   )]
   )
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

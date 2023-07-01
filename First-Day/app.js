// const parent = React.createElement(
//     "div", 
//     {id: "parent"}, [
//         React.createElement("div", {id: "child"}, [ 
//             React.createElement("h1", {}, "I AM H1 TAG"), 
//             React.createElement("h2", {}, "I AM H2 TAG")
//         ]),
//         React.createElement("div", {id: "child"}, [ 
//             React.createElement("h1", {}, "I AM H1 TAG"), 
//             React.createElement("h2", {}, "I AM H2 TAG")
//         ])
//     ]   
// );


const parent = React.createElement
       ("div", 
       {id: "parent"}, [ React.createElement("div", 
       {id: "child"},
       [React.createElement("h1", {id: "heading1"}, "Hello this is first heading"),
       React.createElement("h2", {id: "heading2"}, "Hello this is first heading")
    ]
    ), React.createElement("div", 
    {id: "child"},
    [React.createElement("h1", {id: "heading3"}, "Hello this is first heading"),
    React.createElement("h2", {id: "heading4"}, "Hello this is first heading")
 ]
 )]
    )



// const heading = React.createElement("h1", { id: "heading"}, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
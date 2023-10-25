// import React from 'react';

// const ListComponent = (props) => {
//   const {data} = props
//     return (
//       <div>
//         <h2>Data Component</h2>
//         <ul>
//           {
//             data.map((el,i)=>(
//               <li key={el.id}>
//                 {el.name}
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     );
//   };

// export default ListComponent

// -------------------removing----------------------------------

// import React, { useState } from "react";

// const ListComponent = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Banana" },
//     { id: 3, name: "Cherry" },
//   ]);

//   const handleRemoveItem = (id) => {
//     const updatedItems = items.filter((item) => item.id !== id);
//     console.log(updatedItems,"--------")
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           <span>{item.name}</span>
//           <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ListComponent;

// -------------------nesting----------------------------------

// import React from "react";

// const ListComponent = () => {
//   const data = [
//     { id: 1, items: ["Apple", "Banana", "Cherry"] },
//     { id: 2, items: ["Dog", "Cat", "Rabbit"] },
//     { id: 3, items: ["Red", "Green", "Blue"] },
//   ];

//   return (
//     <div>
//       {
//         data.map((el1,i)=>(
//           <div key={i}>
//             <h2>Data Group - {i+1}</h2>
//             <ul key={i}>
//               {el1.items.map((el2,i)=>(
//                 <li key={i}>
//                   {el2}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default ListComponent;

// -------------------adding----------------------------------

// import React, { useState } from 'react';

// const ListComponent = () => {
//   const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
//   const [newItem, setNewItem] = useState('');

//   console.log(newItem)

//   const addItem = () => {
//     if (newItem !== '') {
//       setItems([...items, newItem]);
//       setNewItem('');
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// };

// export default ListComponent;

// -------------------searching----------------------------------

// import React, { useState } from 'react';

// const ListComponent = () => {
//   const [items, setItems] = useState([
//     'Apple',
//     'Banana',
//     'Cherry',
//     'Date',
//     'Elderberry'
//   ]);
//   const [query, setQuery] = useState('');

//   const filteredItems = items.filter(
//     (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for items"
//       />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListComponent;

// -------------------sorting----------------------------------

// import React, { useState } from 'react';

// const ListComponent = () => {
//   const [items, setItems] = useState(['Cherry', 'Apple', 'Apcle','Banana', 'Date']);

//   const sortedItems = items.sort();

//   return (
//     <div>
//       <ul>
//         {sortedItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListComponent
// import React,{useEffect,useContext, useState} from 'react';


// // import { Context } from '../../firbase/store/Context';
// // import { PostContext } from '../../firbase/store/PostContext';
// import './ProductDetails.css';
// // import {useHistory} from 'react-router-dom'
// function Posts() {
// // const {firebase}=useContext(Context)
// const [Products, setProducts] = useState([])
// // const {setPostDetails}=useContext(PostContext)
// // const history=useHistory()
// useEffect(() => { 
//   firebase.firestore().collection('product').get().then((snapshot)=>{
//     const allpost=snapshot.docs.map((product)=>{
//       return{
//         ...product.data(),id:product.id
//       }
//     })
//     setProducts(allpost)
//   })

// })

//   return (
//     <div className="postParentDiv">
//       <div className="moreView">
//         <div className="heading">
//           <span>Quick Menu</span>
//           <span>View more</span>
//         </div>
//         <div className="cards">
    
//         </div>
        
//       </div>
//       <div className="recommendations">
//         <div className="heading">
//           <span>Fresh recommendations</span>
//         </div>
//         <div className="cards">
//           {Products.map(product=>{

         
//         return  <div className="card"
//         onClick={()=>{
//           setPostDetails(product)
//           // history.push('/view')
//         }}>
//             <div className="favorite">
            
//             </div>
//             <div className="image">
//               <img src={product.url} alt="" />
//             </div>
//             <div className="content">
//               <p className="rate">&#x20B9; {product.price}</p>
//               <span className="kilometer">{product.category}</span>
//               <p className="name">{product.name}</p>
//             </div>
//             <div className="date">
//               <span>{product.createdAt}</span>
//             </div>
//           </div>
//            })
// }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Posts;
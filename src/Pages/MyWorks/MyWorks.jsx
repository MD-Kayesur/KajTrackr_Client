// import { useContext } from "react";
// import useMyWorks from "../../Hooks/useMyWorks";
// import { AuthContext } from "../../Providers/AuthProvider";
// import Swal from "sweetalert2";

 

// const MyWorks = () => {
// const {user,loding}=useContext(AuthContext)
// const {AllWorks,deleteWork,onlyuser}= useMyWorks()
 
// // console.log(onlyuser?.category)
// console.log(onlyuser)
// // console.log(AllWorks)
// const { bokaya,   date , factory ,  name ,   pay ,  price   }= AllWorks

// if (loding) {
//   return "loding";
// }
 

 
 

// const totalPay = AllWorks.reduce(
//   (acc, curr) => acc + (parseInt(curr.pay) || 0),
//   0
// );
 
// const totalPabo = AllWorks.reduce(
//   (acc, curr) => acc + ((parseInt(curr.price) || 0) - (parseInt(curr.pay) || 0)),
//   0
// );

 



// const handleDelete=(id)=>{
//   deleteWork(id)
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });
//     }
//   });
// }
//     return (
//         //  <>
//         //  {
//         //     user?.email===AllWorks?.userEmaol ?  
            
//             <div>
//             <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Contactor Name</th>  
//         <th>Factory Name</th>
//         <th>Date</th>
//         <th>My Ret</th>
//         <th>Already Pay</th>
//         <th>Bokaya</th>
//         <th>Overtime</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}

//       {
//   AllWorks?.map((mywork, index) => {
//     const Bokaya = mywork?.price - mywork?.pay;
 


 
//     return (
//       <tr key={mywork?._id} className="hover:bg-base-200">
//         <th>{index + 1}</th>
//         <td>{mywork?.name}</td>
//         <td>{mywork?.factory}</td>
//         <td>{mywork?.date}</td>
//         <td>{mywork?.price}</td>
//         <td>{mywork?.pay}</td>
//         <td>{Bokaya}</td> {/* এইখানে ভেরিয়েবল ইউজ করা হলো */}
//         <td>{mywork?.overtime}</td>
//         <td onClick={() => handleDelete(mywork?._id)} className="btn bg-red-300">x</td>
//       </tr>
//     );
//   })
// }
      
     
//     </tbody>


//   </table>
//  <div className="text-center mt-6">
//  <h2 className="text-3xl py-4">Already Pay {totalPay}</h2>
//  <h2 className="text-3xl ">you will get total {totalPabo}</h2>
//  </div>
// </div>
//         </div> 
//         //  :  <></>
//         //  }
         
//         //  </>
       
//     );
// };

// export default MyWorks;


import React from 'react';
import useMyWorks from '../../Hooks/useMyWorks';
import Hajira from '../AddTask/hajira';
import Batona from '../AddTask/Batona';
import Contavtor from '../AddTask/Contavtor';
import Protaction from '../AddTask/Protaction';
import Baton_Worker from './Baton_Worker';
import Contactor_Works from './Contactor_Works';
import Protaction_Worker from './Protaction_Worker';
import Hazira_Worker from './Hazira_Worker';

const MyWorks = () => {


  const {onlyuser}= useMyWorks()
 
// // console.log(onlyuser?.category)
console.log(onlyuser)
  return (
     
       <div>
       {onlyuser?.category === 'hazira' && <Hazira_Worker />}
    {onlyuser?.category === 'baton' && <Baton_Worker />}
    {onlyuser?.category === 'contactor' && <Contactor_Works/>}
    {onlyuser?.category === 'protaction' && <Protaction_Worker/>}
    </div>
  
  );
};

export default MyWorks;
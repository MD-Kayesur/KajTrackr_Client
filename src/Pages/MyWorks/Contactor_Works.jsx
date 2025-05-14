  
import { useContext } from "react";
import useMyWorks from "../../Hooks/useMyWorks";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

 

const Contactor_Works = () => {
const {user,loding}=useContext(AuthContext)
const {AllWorks,deleteWork,onlyuser}= useMyWorks()
 
// console.log(onlyuser?.category)
console.log(onlyuser)
console.log(AllWorks)
const { bokaya,   date , factory ,  name ,   pay ,  price   }= AllWorks

if (loding) {
  return "loding";
}
 

 
 

// const totalPay = AllWorks.reduce(
//   (acc, curr) => acc + (parseInt(curr.pay) || 0),
//   0
// );
 
// const totalPabo = AllWorks.reduce(
//   (acc, curr) => acc + ((parseInt(curr.price) || 0) - (parseInt(curr.pay) || 0)),
//   0
// );

 



const handleDelete=(id)=>{
  deleteWork(id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}
    return (
        //  <>
        //  {
        //     user?.email===AllWorks?.userEmaol ?  
            
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
       
        <th>Date</th>
        <th>Factory Name</th>
        <th>DAy</th>
 <th>Details of Worker</th>
         
        
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
  AllWorks?.map((mywork, index) => {
    // const Bokaya = mywork?.price - mywork?.pay;
 


 
    return (
      <tr key={mywork?._id} className="hover:bg-base-200">
        <th>{index + 1}</th>
        <td>{mywork?.date}</td>
        <td>{mywork?.factory}</td>
        <td>{mywork?.DAy}</td>
        <td>{mywork.DetailsWorker}</td>
        
        <td onClick={() => handleDelete(mywork?._id)} className="btn bg-red-300">x</td>
      </tr>
    );
  })
}
      
     
    </tbody>


  </table>
 {/* <div className="text-center mt-6">
 <h2 className="text-3xl py-4">Already Pay {totalPay}</h2>
 <h2 className="text-3xl ">you will get total {totalPabo}</h2>
 </div> */}
</div>
        </div> 
        //  :  <></>
        //  }
         
        //  </>
       
    );
};

export default Contactor_Works;
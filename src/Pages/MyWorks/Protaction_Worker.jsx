 
import { useContext } from "react";
import useMyWorks from "../../Hooks/useMyWorks";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

 

const Protaction_Worker = () => {
const {user,loding}=useContext(AuthContext)
const {AllWorks,deleteWork,onlyuser}= useMyWorks()
 
// console.log(onlyuser?.category)
console.log(onlyuser)
console.log(AllWorks)
// const { bokaya,   date , factory ,  name ,   pay ,  price   }= AllWorks

if (loding) {
  return "loding";
}
 

 
 

const totalPay = AllWorks.reduce(
  (acc, curr) => acc + (Number(curr.pay) || 0),
  0
);
 

const AllWorksWithTotal = AllWorks.map(work => ({
  ...work,
  totalMoney: Number(work.price) * Number(work.pis) || 0,
}));

const totalearn = AllWorksWithTotal.reduce(
  (acc, curr) => acc + curr.totalMoney,
  0
);
 
// const totalearn = AllWorks.reduce(
//   (acc, curr) => acc + (Number(curr.totalMoney) || 0),
//   0
// );

 console.log(totalearn);



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
       
        <th>contactor Name</th>
        <th>Factory Name</th>
        {/* <th>DAy</th> */}
        <th>Date</th>
        <th>price</th> 
        <th>pis</th>
        <th> today earn</th>
        <th> pay</th>
        {/* <th> Bokaya</th> */}
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
  AllWorks?.map((mywork, index) => {
    const totalMoney = mywork?.price * mywork?.pis
    console.log(totalMoney);
    // const Bokaya = (Number(mywork?.totalMoney) || 0) - (Number(mywork?.pay) || 0);
 

 
    return (
      <tr key={mywork?._id} className="hover:bg-base-200">
        <th>{index + 1}</th>
        <td>{mywork?.name}</td>
        <td>{mywork?.factory}</td>
        <td>{mywork?.date}</td>
        <td>{mywork?.price}</td>
        <td>{mywork?.pis}</td>
        <td>{totalMoney}</td>
        <td>{mywork?.pay}</td>
        {/* <td>{Bokaya}</td>  */}
        <td onClick={() => handleDelete(mywork?._id)} className="btn bg-red-300">x</td>
      </tr>
    );
  })
}
      
     
    </tbody>


  </table>
 <div className="text-center mt-6">
 <h2 className="text-3xl py-4">Already Pay {totalPay}</h2>
 <h2 className="text-3xl ">total earn in this month {totalearn}</h2>
 </div>
</div>
        </div> 
        //  :  <></>
        //  }
         
        //  </>
       
    );
};

export default Protaction_Worker;
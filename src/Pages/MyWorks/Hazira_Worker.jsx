import { useContext } from "react";
import useMyWorks from "../../Hooks/useMyWorks";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Hazira_Worker = () => {
  const { user, loding } = useContext(AuthContext);
  const { AllWorks, deleteWork, onlyuser } = useMyWorks();

  // console.log(onlyuser?.category)
  console.log(onlyuser);
  console.log(AllWorks);
  // const { bokaya,   date , factory ,  name ,   pay ,  price   }= AllWorks

  if (loding) {
    return "loding";
  }

  const totalPay = AllWorks.reduce(
    (acc, curr) => acc + (parseInt(curr.pay) || 0),
    0
  );

  const totalPabo = AllWorks.reduce(
    (acc, curr) => acc + ((parseInt(curr.price) || 0) - (parseInt(curr.pay) || 0)),
    0
  );
  const overtime = AllWorks.reduce(
    (acc, curr) => acc + ((parseInt(curr.overtime) || 0)),
    0
  );
  const takemoney = AllWorks.reduce(
    (acc, curr) => acc + ((parseInt(curr.takemoney) || 0)),
    0
  );

  const handleDelete = (id) => {
    deleteWork(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
              <th>Factory Name</th>
              <th>Contactor Name</th>
              <th>Date</th>
              <th>DAy</th>
              <th>my Rent</th>
              <th>Already Pay</th>
              <th> will get</th>
              <th> Over Time</th>
              <th> take money</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {AllWorks?.map((mywork, index) => {
              const Bokaya = mywork?.price - mywork?.pay;

              return (
                <tr key={mywork?._id} className="hover:bg-base-200">
                  <th>{index + 1}</th>
                  <td>{mywork?.factory}</td>
                  <td>{mywork?.name}</td>
                  <td>{mywork?.date}</td>
                  <td>{mywork?.DAy}</td>
                  <td>{mywork?.price}</td>
                  <td>{mywork?.pay}</td>
                  <td>{Bokaya}</td> {/* এইখানে ভেরিয়েবল ইউজ করা হলো */}
                  <td>{mywork?.overtime}</td>
                  <td>{mywork?.takemoney}</td>
                  <td
                    onClick={() => handleDelete(mywork?._id)}
                    className="btn bg-red-300">
                    x
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-center mt-6">
 <h2 className="text-3xl ">Already Pay : {totalPay} taka</h2>
 <h2 className="text-3xl py-4">  will get total : {totalPabo} taka</h2>
 <hr />
 <h2 className="text-3xl ">   total overtime : {overtime} hour  so total : {overtime*100} taka</h2>
 <h2 className="text-3xl py-4">   alreade take money  : {takemoney} taka</h2>
 {/* <h2 className="text-3xl py-4">    atlast after calculate i will get total  {(totalPabo+(overtime*100)) - (totalPay+takemoney) } taka</h2> */}

 
 </div>
      </div>
    </div>
    //  :  <></>
    //  }

    //  </>
  );
};

export default Hazira_Worker;

import React, { useContext } from "react";
import useMyWorks from "../../Hooks/useMyWorks";
import { AuthContext } from "../../Providers/AuthProvider";
import { data } from "react-router-dom";
import Swal from "sweetalert2";

const Contactor_History = () => {
  const { AllHistory, deleteHistory } = useMyWorks();
  const { user, loding } = useContext(AuthContext);
  //console.log(user);
  //console.log(AllHistory);
  const total = AllHistory.reduce(
    (acc, curr) => acc + (parseInt(curr.price) || 0),
    0
  );

  const newDate = new Date();
  // const onlyDate = newDate.toISOString().split('T')[0];
  const days = newDate.getDate();
  // console.log(days)

  const handleDelete = () => {
    deleteHistory();
    Swal.fire({
      title: " success!",
      icon: "success",
      draggable: true,
    });
  };

  if (loding) {
    return "loding";
  }
  // const sevenDaysAgo = new Date();
  // //console.log(sevenDaysAgo)
  return (
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

            {AllHistory?.map((mywork, index) => {
              // const Bokaya = mywork?.price - mywork?.pay;

              return (
                <tr key={mywork?._id} className="hover:bg-base-200">
                  <th>{index + 1}</th>
                  <td>{mywork?.date}</td>
                  <td>{mywork?.factory}</td>
                  <td>{mywork?.DAy}</td>
                  <td>{mywork.DetailsWorker}</td>

                  
                </tr>
              );
            })}
          </tbody>
        </table>
        {days === 28 || days === 29 || days === 30 || days === 31 ? (
          <div className="   ">
            <h2 className="my-5 py-3 px-3 text-center border">
              You had earned in the previous month = {total} taka
            </h2>
            <button onClick={handleDelete()} className="btn bg-red-300">
              Delete History
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Contactor_History;

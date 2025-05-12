import useMyWorks from "../Hooks/useMyWorks";

 

const AllUsers = () => {
    const {Allusers}=useMyWorks()
    //console.log(Allusers)
    
    return (
        <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>User Img</th>
            <th>User Name</th>
            <th>User Email</th>
           
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
    
          {
            Allusers?.map((user,index)=> <tr className="hover:bg-base-200">
                <th>{index+1}</th>
                <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photourl}
                  alt="" />
              </div>
            </div> 
          </div>
        </td>
                
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.category}</td>
                 
              </tr>)
          }
          
         
        </tbody>
      </table>
    );
};

export default AllUsers;
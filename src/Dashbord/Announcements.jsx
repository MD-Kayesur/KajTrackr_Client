import { useContext } from "react";
import useMyWorks from "../Hooks/useMyWorks";
import { AuthContext } from "../Providers/AuthProvider";

 

const Announcements = () => {
    const {AllAnnounment,deleteAnnunsment}=useMyWorks()
    const {user}=useContext(AuthContext)
    const isAdmin = (user?.email === 'iamadmin@gmail.com')

    return (
        <div className="grid md:grid-cols-4 gap-5 ">
           {
            AllAnnounment.map(announment=> <div className="border-solid border-2 p-5">
                <h2 >  {announment.Announse}</h2>
                {
                    isAdmin ?     <button onClick={()=>deleteAnnunsment(announment._id)} className="btn">Delete</button>:<></>
                }
            
            </div>)
           }
        </div>
    );
};

export default Announcements;
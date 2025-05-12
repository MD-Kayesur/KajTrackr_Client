import useMyWorks from "../Hooks/useMyWorks";

 

const AdminAnnouncements = () => {
    const {addAnnounment}=useMyWorks()


    const HandleAnnounment =(e)=>{
        e.preventDefault()
    //console.log('HandleAnnounment')
    
    const Announse = e.target.textarea.value;
const AnnounseInfo={Announse}
    addAnnounment(AnnounseInfo)
}


    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add Announsment</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={HandleAnnounment} action="">
      
          <textarea name="textarea"   placeholder="Add Anounment" className="textarea textarea-xl"></textarea>
          <button className="btn btn-neutral mt-4">Add Announsment</button>
      
       </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdminAnnouncements;
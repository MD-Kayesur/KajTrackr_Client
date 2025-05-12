// import React, { useContext } from 'react';
// import useMyWorks from '../../Hooks/useMyWorks';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';
// import Swal from 'sweetalert2';

// const AddTask = () => {
// const {user}=useContext(AuthContext)
// const userEmaol = user?.email
// const Navigate = useNavigate()
// const {addWorks,addHistory}=useMyWorks()

// // //console.log(onlyDate);


// // const WorkDate = new Date()
// // const  dates = WorkDate.toISOString().split('T')[0];



// const Submit =(e)=>{
// e.preventDefault()

// const form= e.target
// const name=form.name.value
// const factory=form.factory.value
// const date=form.date.value
// const price=form.price.value
// const pay=form.pay.value
// const overtime=form.overtime.value
//  const addinfo = {name,date,factory,price,pay,userEmaol,overtime,}
 
//  //console.log(addinfo)
//  addWorks(addinfo)
//  Swal.fire({
//          title: " success!",
//          icon: "success",
//          draggable: true,
//        });
//  addHistory(addinfo)
//  Navigate('/myworks')
// }

//     return (


//         <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col  ">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Add Daily Work</h1>
            
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <div className="card-body">
//              <form onSubmit={Submit} action="">
//              <fieldset className="fieldset">
//                 <label className="fieldset-label">name</label>
//                 <input type="name" name='name' className="input" placeholder="Contactor Name" />

//                 <label className="fieldset-label">factory</label>
//                 <input type="factory" name='factory' className="input" placeholder="Factory Name" />
  
                
  
//                 <label className="fieldset-label">price</label>
//                 <input type="price" name='price' className="input" placeholder="$ Price" />
 
//                 <label className="fieldset-label">Date</label>
//                 <input type="date" name='date' className="input" placeholder="$ Date" />
 
  
//                 <label className="fieldset-label">pay</label>
//                 <input type="pay" name='pay' className="input" placeholder="$ Already Pay" />
 
  
//                 <label className="fieldset-label">OverTime</label>
//                 <input type="text" name='overtime' className="input" placeholder="Overtime" />
 
//                 <button className="btn btn-neutral mt-4">add Work</button>
//               </fieldset>
//              </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default AddTask;


import { useEffect, useState } from 'react';
import Hajira from './hajira';
import Batona from './Batona';
import Contavtor from './Contavtor';
import Protaction from './Protaction';
import useMyWorks from '../../Hooks/useMyWorks';

const AddTask = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const {onlyuser}=useMyWorks()
  console.log(onlyuser.category)
  // Load saved category from localStorage on page load
  // useEffect(() => {
  //   const savedCategory = localStorage.getItem('selectedCategory');
  //   if (savedCategory) {
  //     setSelectedCategory(savedCategory);
  //   }
  // }, []);

  // Handle category button click
  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  //   localStorage.setItem('selectedCategory', category); // save to localStorage
  // };

  return (
    // <div className='pt-20'>
    //   <div className='flex items-center justify-center gap-11'>
    //     <button className='btn' onClick={() => handleCategoryClick('hajira')}>Hajira</button>
    //     <button className='btn' onClick={() => handleCategoryClick('batina')}>Batina</button>
    //     <button className='btn' onClick={() => handleCategoryClick('contactor')}>Contactor</button>
    //     <button className='btn' onClick={() => handleCategoryClick('Protaction')}>Protaction</button>
    //   </div>

    //   <h1 className='flex items-center justify-center gap-11 pt-11'>
    //     What's the category you work in? choose your catagory.
    //   </h1>

    //   {/* Show the selected component */}
    //   <div className='pt-10 flex justify-center'>
    //     {selectedCategory === 'hajira' && <Hajira />}
    //     {selectedCategory === 'batina' && <Batona />}
    //     {selectedCategory === 'contactor' && <Contavtor />}
    //     {selectedCategory === 'Protaction' && <Protaction />}
    //   </div>
    // </div>
    <div>
       {onlyuser?.category === 'hazira' && <Hajira />}
    {onlyuser?.category === 'baton' && <Batona />}
    {onlyuser?.category === 'contactor' && <Contavtor/>}
    {onlyuser?.category === 'protaction' && <Protaction/>}
    </div>
  );
};

export default AddTask;

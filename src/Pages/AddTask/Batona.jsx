import React, { useContext, useState } from 'react';
import useMyWorks from '../../Hooks/useMyWorks';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Batona = () => {
  const { user } = useContext(AuthContext);
  const userEmaol = user?.email;
  const Navigate = useNavigate();
  const { addWorks, addHistory } = useMyWorks();

  const [errors, setErrors] = useState({});

  const Submit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const factory = form.factory.value.trim();
    const date = form.date.value.trim();
    const price = form.price.value.trim();
    const pay = form.pay.value.trim();

    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!factory) newErrors.factory = "Factory name is required";
    if (!date) newErrors.date = "Date is required";
    if (!price) newErrors.price = "Price is required";
    if (!pay) newErrors.pay = "Pay is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear errors if valid

    const addinfo = { name, date, factory, price, pay, userEmaol };

    addWorks(addinfo);
    addHistory(addinfo);

    Swal.fire({
      title: "Success!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    Navigate('/myworks');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">You are Batona. Add your work:</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={Submit}>
              <fieldset className="fieldset space-y-4">
                <div>
                  <label className="fieldset-label">Name</label>
                  <input type="text" name="name" className="input w-full" placeholder="Contactor Name" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label className="fieldset-label">Factory</label>
                  <input type="text" name="factory" className="input w-full" placeholder="Factory Name" />
                  {errors.factory && <p className="text-red-500 text-sm">{errors.factory}</p>}
                </div>

                <div>
                  <label className="fieldset-label">Date</label>
                  <input type="date" name="date" className="input w-full" />
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>

                <div>
                  <label className="fieldset-label">Price</label>
                  <input type="number" name="price" className="input w-full" placeholder="$ Price" />
                  {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                </div>

                <div>
                  <label className="fieldset-label">Pay</label>
                  <input type="number" name="pay" className="input w-full" placeholder="$ Already Pay" />
                  {errors.pay && <p className="text-red-500 text-sm">{errors.pay}</p>}
                </div>

                <button className="btn btn-neutral w-full mt-4">Add Work</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batona;

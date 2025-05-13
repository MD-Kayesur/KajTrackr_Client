import React, { useContext, useState } from "react";
import useMyWorks from "../../Hooks/useMyWorks";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Batona = () => {
  const { user } = useContext(AuthContext);
  const userEmaol = user?.email;
  const Navigate = useNavigate();
  const { addWorks, addHistory } = useMyWorks();

  const [errors, setErrors] = useState({});

  const Submit = (e) => {
    e.preventDefault();

    const form = e.target;

    const factory = form.factory.value.trim();
    const date = form.date.value.trim();
    const takemoney = form.takemoney.value.trim();
    const TravelCost = form.TravelCost.value.trim();
    const DAy = form.DAy.value.trim();
    const advance = form.advance.value.trim();
    const Nightbill = form.Nightbill.value.trim();

    const newErrors = {};

    // if (!factory) newErrors.factory = "Factory name is required";
    if (!date) newErrors.date = "Date is required";
    // if (!price) newErrors.price = "Price is required";
    // if (!TravelCost) newErrors.TravelCost = "Travel Cost is required";
    if (!DAy) newErrors.DAy = "DAyis required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear errors if valid

    const addinfo = {
      date,
      factory,
      takemoney,
      TravelCost,
      userEmaol,
      advance,
      DAy,
      Nightbill,
    };

    addWorks(addinfo);
    addHistory(addinfo);

    Swal.fire({
      title: "Success!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });

    Navigate("/myworks");
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
                  <label className="fieldset-label">Factory Name</label>
                  <input
                    type="text"
                    name="factory"
                    className="input w-full"
                    placeholder="Factory Name"
                  />
                  {errors.factory && (
                    <p className="text-red-500 text-sm">{errors.factory}</p>
                  )}
                </div>

                <div>
                  <label className="fieldset-label">Select a day</label>
                  <select name="DAy" className="input w-full">
                    <option value="">Select a day</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                  {errors.DAy && (
                    <p className="text-red-500 text-sm">{errors.DAy}</p>
                  )}
                </div>

                <div>
                  <label className="fieldset-label">Date</label>
                  <input type="date" name="date" className="input w-full" />
                  {errors.date && (
                    <p className="text-red-500 text-sm">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="fieldset-label">Travel Cost</label>
                  <input
                    type="number"
                    name="TravelCost"
                    className="input w-full"
                    placeholder="$ Travel Cost"
                  />
                  {errors.TravelCost && (
                    <p className="text-red-500 text-sm">{errors.TravelCost}</p>
                  )}
                </div>

                <div>
                  <label className="fieldset-label">Night bill</label>
                  <input
                    type="number"
                    name="Nightbill"
                    className="input w-full"
                    placeholder="$ Night bill"
                  />
                  {errors.Nightbill && (
                    <p className="text-red-500 text-sm">{errors.Nightbill}</p>
                  )}
                </div>

                <div>
                  <label className="fieldset-label">take money</label>
                  <input
                    type="number"
                    name="takemoney"
                    className="input w-full"
                    placeholder="$ take money"
                  />
                  {errors.takemoney && (
                    <p className="text-red-500 text-sm">{errors.takemoney}</p>
                  )}
                </div>

                <div>
                  <label className="fieldset-label">advance</label>
                  <input
                    type="number"
                    name="advance"
                    className="input w-full"
                    placeholder="$ advance"
                  />
                  {errors.advance && (
                    <p className="text-red-500 text-sm">{errors.advance}</p>
                  )}
                </div>

                <button className="btn btn-neutral w-full mt-4">
                  Add Work
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batona;

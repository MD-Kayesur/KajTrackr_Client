import React, { useContext, useState } from 'react';
import useMyWorks from '../../Hooks/useMyWorks';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Contavtor = () => {
  const { user } = useContext(AuthContext);
  const userEmaol = user?.email;
  const Navigate = useNavigate();
  const { addWorks, addHistory } = useMyWorks();

  const [errors, setErrors] = useState({});

  const Submit = (e) => {
    e.preventDefault();
    const form = e.target;

    const factory = form.factory.value.trim();
    const date = form.date.value;

    const newErrors = {};
    if (!factory) newErrors.factory = "ফ্যাক্টরির নাম লিখুন";
    if (!date) newErrors.date = "তারিখ দিন";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const addinfo = { date, factory, userEmaol };
    addWorks(addinfo);
    addHistory(addinfo);

    Swal.fire({
      title: "Success!",
      icon: "success",
      confirmButtonText: "ঠিক আছে",
    });

    Navigate('/myworks');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">আপনি কন্ট্রাক্টর, কাজ যোগ করুন</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={Submit}>
              <fieldset className="fieldset space-y-2">
                <label className="fieldset-label">ফ্যাক্টরির নাম</label>
                <input
                  type="text"
                  name="factory"
                  className="input"
                  placeholder="Factory Name"
                />
                {errors.factory && <p className="text-red-500 text-sm">{errors.factory}</p>}

                <label className="fieldset-label">তারিখ</label>
                <input
                  type="date"
                  name="date"
                  className="input"
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

                <button className="btn btn-neutral mt-4" type="submit">Add Work</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contavtor;

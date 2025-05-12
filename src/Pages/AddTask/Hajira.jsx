import Swal from 'sweetalert2';
import useMyWorks from '../../Hooks/useMyWorks';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';

const Hajira = () => {
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
    const date = form.date.value;
    const price = form.price.value;
    const pay = form.pay.value;
    const overtime = form.overtime.value;

    const newErrors = {};
    if (!name) newErrors.name = "নাম দিন";
    if (!factory) newErrors.factory = "ফ্যাক্টরির নাম দিন";
    if (!date) newErrors.date = "তারিখ দিন";
    if (!price) newErrors.price = "মূল্য দিন";
    if (!pay) newErrors.pay = "পেমেন্ট দিন";
     

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const addinfo = {
      name, date, factory, price, pay, userEmaol, overtime,
    };

    addWorks(addinfo);
    addHistory(addinfo);
    Swal.fire({
      title: "Success!",
      icon: "success",
    });
    Navigate('/myworks');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">আপনি হাজিরা, কাজ যোগ করুন</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={Submit}>
              <fieldset className="fieldset space-y-2">
                <label className="fieldset-label">নাম</label>
                <input type="text" name="name" className="input" placeholder="Contactor Name" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <label className="fieldset-label">ফ্যাক্টরির নাম</label>
                <input type="text" name="factory" className="input" placeholder="Factory Name" />
                {errors.factory && <p className="text-red-500 text-sm">{errors.factory}</p>}

                <label className="fieldset-label">মূল্য</label>
                <input type="number" name="price" className="input" placeholder="$ Price" />
                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

                <label className="fieldset-label">তারিখ</label>
                <input type="date" name="date" className="input" />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

                <label className="fieldset-label">পেমেন্ট</label>
                <input type="number" name="pay" className="input" placeholder="$ Already Pay" />
                {errors.pay && <p className="text-red-500 text-sm">{errors.pay}</p>}

                <label className="fieldset-label">ওভারটাইম</label>
                <input type="text" name="overtime" className="input" placeholder="Overtime" />
                 

                <button type="submit" className="btn btn-neutral mt-4">Add Work</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hajira;

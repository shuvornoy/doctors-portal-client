import React, { useEffect, useState } from "react";
import loading from "../../../assets/images/loading.gif";
import "./Doctor.css";
import DoctorsCard from "./DoctorsCard/DoctorsCard";
const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://api-doctors-portal.onrender.com/getallDoctors")
      .then((res) => res.json())
      .then((doctors) => {
        if (doctors) {
          setDoctors(doctors);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mb-5 pb-5">
        <h4 className="text-3xl font-bold text-primary text-center mt-5">Our Doctors</h4>
        <div className=" flex justify-center">
          <div className="row pt-2 flex items-center flex-wrap justify-center gap-14">
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <DoctorsCard key={doctor._id} doctor={doctor} />
              ))
            ) : (
              <div class="col-span-12 md:col-span-12 p-5">
                <div class="p-5 md:w-1/2 mx-auto">
                  <img class="" src={loading} alt="" />
                </div>
              </div>

            )}
          </div>
        </div>
</section>

  );
};

export default Doctor;

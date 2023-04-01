import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const ProfileUser = () => {
  const location = useLocation();
  const { id } = queryString.parse(location.search);
  const [dataProfileUser, setDataProfileUser] = useState({});

  const getDataUserId = async (idUser) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${idUser}`
      );
      setDataProfileUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getDataUserId(id);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-5">
        <main className="profile-page">
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${`https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80`})`,
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="image-Profile"
                          src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-24">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {dataProfileUser?.name}
                    </h3>
                    <p className="text-1xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {dataProfileUser?.username}
                    </p>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {`${dataProfileUser?.address?.city}, ${dataProfileUser?.address?.street}, ${dataProfileUser?.address?.suite}, ${dataProfileUser?.address?.zipcode}`}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      {`${dataProfileUser?.company?.name},${dataProfileUser.company?.bs}`}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-regular fa-phone mr-2 text-lg text-blueGray-400"></i>
                      {dataProfileUser?.phone}
                    </div>

                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-regular fa-globe mr-2 text-lg text-blueGray-400"></i>
                      {dataProfileUser?.website}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptates nisi repellendus ullam obcaecati,
                          recusandae maxime voluptatibus cumque distinctio
                          deleniti, sit maiores tenetur qui accusantium ipsa non
                          vero iure corrupti? Possimus. Laborum aspernatur
                          molestias reprehenderit error enim dolor culpa
                          deserunt quas facilis neque omnis adipisci asperiores
                          harum quae autem in quod laboriosam, totam dolorum
                          molestiae modi consequuntur cupiditate perspiciatis.
                          Repellendus, cumque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* <div className="d-flex justify-center items-center">
        
      </div> */}
    </>
  );
};

export default ProfileUser;

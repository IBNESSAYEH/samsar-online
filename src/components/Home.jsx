import HomeHeader from "./layouts/HomeHeader";
import { LuView } from "react-icons/lu";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      {/* main => housing items section */}
      <main className="container d-flex flex-column  align-items-center  my-5  ">

      {/* about section */}

      <section className="section__about row justify-content-between gap-2 ">

        <h2 className="section__about__header col-12 col-lg-5 fs-1 fw-bold align-self-center lh-base ">
          Discover extraordinary places and embark on unforgettable journeys <br /> 
          <span className="fs-1 fw-bold">Your next adventure starts here.....</span> <br/>
          <div className="btn btn-signin">signin</div>
          <div className="btn btn-signup mx-3 " >signup</div>
          </h2>
        <img src="https://images.pexels.com/photos/8292828/pexels-photo-8292828.jpeg"  className="section__about__img col-lg-6 col-none"></img>
        <img src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"  className="section__about__img col-lg-5 col-none"></img>
        <div className="section__about__informations col-12  col-lg-6 align-self-center lh-lg  ">
        SamsarOnline revolutionizes the way people travel by offering unique accommodations and experiences around the globe. With a mission to connect individuals to unforgettable stays and adventures, SamsarOnline provides a platform where hosts can share their spaces and guests can discover new destinations tailored to their preferences. Whether you're seeking a cozy apartment in the heart of a bustling city or a tranquil retreat in nature, SamsarOnline opens doors to a world of possibilities, fostering connections and creating lasting memories for travelers worldwide.
        </div>

      </section>




        {/*  housing items section */}
        <h3 className="text-center mt-5 ">Find your perfect home away from home</h3>
        <section className="section__card__items row justify-content-center  gap-lg-5 gap-sm-2  mt-5 ">
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
          {/* card items */}
          <div className="section__item">
            <img
              src="https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg"
              alt=""
              className="section__item__img"
            />
            <div className="card-body">
              <h6 className="card-title">Horn, Pays-Bas</h6>
              <p className="card-text ">
                Proposée par Peter <br />
                19–24 mars19–24 mars <br />
                628 € par nuit <br />
                <div>
                  <a className="text-success mt-1">detail...</a>
                </div>
                 
              </p>
            </div>
          </div>
        

        </section>
      </main>

      <Footer/>
    </>
  );
};

export default Home;

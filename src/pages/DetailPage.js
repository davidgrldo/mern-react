import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ItemDetails from "json/itemDetails.json";
import DetailPageTitle from "parts/DetailPageTitle";
import Header from "parts/Header";
import FeaturedImage from "parts/FeaturedImage";
import DetailPageDescrtiption from "parts/DetailPageDescrtiption";
import BookingForm from "parts/BookingForm";
import Category from "parts/Category";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <DetailPageTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></DetailPageTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <DetailPageDescrtiption data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <Category data={ItemDetails.categories} />
        <Testimonial data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

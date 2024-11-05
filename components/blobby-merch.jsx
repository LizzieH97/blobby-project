import SignupForm from "./signup-form";

function BlobbyMerch() {
  const merchItems = [
    {
      title: "Blobby Crocheted Plush Toy",
      link: "https://www.etsy.com/uk/shop/LHCrochetCrochet",
      image: "./images/Screenshot from 2024-10-24 21-31-45.png",
      alt: "crocheted Mr Blobby, pink with yellow spots",
      description:
        "Wow! I wonder who made this! (Hint: it was me it took ages)",
      price: "£13.99",
      stock: "Not currently in stock",
    },
    {
      title: " Mr Blobby T-Shirt",
      link: "https://memejoy.co/products/mr-blobby-homage-t-shirt?variant=34496261128324",
      image: "./images/Screenshot from 2024-10-24 21-33-13.png",
      alt: "crocheted Mr Blobby, pink with yellow spots",
      description: "Wow!! Three different colours!! Grey, White and Black",
      price: "£15.99 (normally £20.99 - be quick!)",
      stock: "In stock",
    },
    {
      title: "Mr Blobby Birthday Card",
      link: "https://www.etsy.com/uk/listing/1201842577/mr-blobby-birthday-card-funny-humour?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mr+blobby&ref=sr_gallery-1-3&sts=1&content_source=9822f5076d056fbe1f2bb0937134976beea3cb29%253A1201842577&organic_search_click=1",
      image: "./images/Screenshot from 2024-09-09 17-49-49.png",
      alt: "Mr Blobby birthday card, reading 'It's your blobby blobby blobby!'",
      description:
        "What could be a better celebration on your birthday than a healthy dose of Mr Blobby!!",
      price: "£2.70",
      stock: "In stock",
    },
    {
      title: "Mr Blobby Scrunchie",
      link: "https://www.etsy.com/uk/listing/1295102066/mr-blobby-inspired-scrunchie-90s-kid?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mr+blobby&ref=sc_gallery-1-6&plkey=e9ea015804a0dbfe45a205a19345a5c182488c8e%3A1295102066",
      image: "./images/Screenshot from 2024-09-09 17-56-33.png",
      alt: "Light pink scrunchie with images of Mr Blobby across",
      description:
        "If you'd like to be more subtle with your Blobby worship, this could be for you!!",
      price: "£5.00",
      stock: "In stock",
    },
    {
      title: "Mr Blobby Necklace and Earrings",
      link: "https://www.etsy.com/uk/listing/1111653667/mr-blobby-jewellery?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mr+blobby&ref=sr_gallery-1-9&content_source=3cfd812baa26aeea492d4032ffc4452f324aed29%253A1111653667&organic_search_click=1",
      image: "./images/Screenshot from 2024-09-09 18-03-46.png",
      alt: "Dangle earrings and necklace with clay models of Mr Blobby, one on each earring and one on the necklace",
      description: "Wow - how incredibly stylish!! I wish I had these.",
      price: "Earrings: £10.00, Necklace: £9.00",
      stock: "In stock",
    },
    {
      title: "Buff Mr Blobby Sticker",
      link: "https://www.etsy.com/uk/listing/1336727318/mr-blobby-buff-sticker-mr-blobby?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mr+blobby&ref=sr_gallery-1-26&content_source=74f42d88d3421fb09762d72e07fd60e8f4deb788%253A1336727318&organic_search_click=1",
      image: "./images/Screenshot from 2024-09-09 18-18-56.png",
      alt: "Sticker of a cartoon Mr Blobby with muscles, posing lying down with his hand on his head",
      description:
        " I don't have anything to say about this one... Jesus Christ.",
      price: "£5.00",
      stock: "In stock",
    },
  ];
  return (
    <>
      <h2 id="merch">Blobby Merchandise</h2>
      <p className="merch-intro">
        Check out some of the items on sale related to Mr Blobby! Just click on
        the images below to visit the associated shops:
      </p>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {merchItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {merchItems.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <span className="merch-grid-item">
                {item.title}
                <a href={item.link} target="_blank">
                  <br />
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="grid-pic"
                    loading="lazy"
                  />
                </a>
                <br />
                {item.description}
                <br />
                {item.price} <br /> {item.stock}
              </span>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <SignupForm />
    </>
  );
}

export default BlobbyMerch;

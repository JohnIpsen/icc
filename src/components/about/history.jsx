import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import main from "../../images/history/hist_main.jpg";
import "../../styles/about.css";

class History extends Component {
  render() {
    const images = [
      {
        original: main,
        thumbnail: main
      },
      {
        original: main,
        thumbnail: main
      },
      {
        original: main,
        thumbnail: main
      }
    ];
    return (
      <div className="color-block">
        <img src={main} alt="history-img" />
        <p>
          The Ipsen family was founded around survivability in agriculture. The
          homesteaded acreage is very rugged and, to think, that our ancestors
          not only settled there on the rocky and steep hillside of the third
          tallest mountain in Bear Lake County, but raised a strong, vibrant
          family that became leaders in the Bear Lake Valley. Don, Mark's
          father, liked to boast that his dad was extremely proud to be the
          owners of the first vehicle in Bear Lake County. Today, with six
          generations planted and the seventh one growing, the Ipsen family
          makes no plans to abort our lifestyle in agriculture. As you can see
          from the video and slideshow, we honor our roots by saying our past is
          one to reflect with admiration while our future will be one to
          experience, and we do so with great anticipation.
        </p>
        <p>
          In the early 1970s, Don Ipsen began his reign as the premier Hereford
          breeder in the Intermountain region. Today, ICC continues to breed
          quality cattle second to none. Angus cattle were introduced in 1998 to
          add another competitive dimension to our operation, and we feel the
          English cattle fit both our needs as well as the needs of our
          customers.
        </p>
        <ImageGallery items={images} />
      </div>
    );
  }
}

export default History;

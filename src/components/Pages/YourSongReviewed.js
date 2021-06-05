import Header from "../Navigation/Header";
import OverallReview from "../OverallReview";
import ReviewedSong from "../ReviewedSong";
import nish from "../../nish.jpg";
import { useEffect, useState } from "react";
import { retrieve_statictotalretrieve } from "../../api/users/reviews/retrieve";
import LoadingSpinner from "../Small/LoadingSpinner";

const comments = [
  {
    comment: "yo what's good",
    timestamp: 40,
    uitimestamp: "0:40",
    photo: nish,
  },
];
const YourSongReviewed = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const res = await retrieve_statictotalretrieve([1]);
    // console.log(res);
    // var tempreview = res.reviews;
    // tempreview.push(JSON.parse(JSON.stringify(res.reviews[0])));
    // tempreview[1].reviewerProfile.id = 4;
    // tempreview[0].reviewerProfile.id = 15;
    // for (var i = 0; i < tempreview[1].comments.length; i++) {
    //   tempreview[1].comments[i].id = 4;
    //   tempreview[0].comments[i].id = 15;
    //   tempreview[1].comments[i].timestamp =
    //     tempreview[0].comments[i].timestamp + 10;
    // }
    // console.log(tempreview);
    setReviews(res.reviews);
    // setReviews(tempreview);
    setLoading(false);
  }, []);
  return loading ? (
    <div>
      <LoadingSpinner />
    </div>
  ) : (
    <div>
      <Header />
      <div style={{ marginLeft: "50px" }}>
        <div style={{ marginBottom: 20 }}>
          <ReviewedSong reviews={reviews} />
        </div>
        {reviews.map((val, ind) => {
          return (
            <div style={{ marginBottom: 20 }}>
              <OverallReview review={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourSongReviewed;

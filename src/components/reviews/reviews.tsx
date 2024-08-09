import { useGetCommentsQuery } from '../../features/apiSlice';
//import { useAppSelector } from '../../store/hooks/hooks';
//import { getComments } from '../../store/slices/userActivity/selectors';
import { OfferType } from '../../types/types';
import Comment from '../comment/comment';
import ReviewForm from '../reviewForm/reviewForm';

type ReviewsType = {
  offer: OfferType;
}

function Reviews({offer} : ReviewsType) : JSX.Element {

  //const comments = useAppSelector(getComments);

  //get comments using rtk-query
  const {data} = useGetCommentsQuery(offer.id);
  const comments = data;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments?.length}</span></h2>
      <ul className="reviews__list">
        {
          comments !== null && comments !== undefined && comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
            />))
        }
      </ul>
      <ReviewForm
        offer={offer}
      />
    </section>
  );
}
export default Reviews;

import { CommentServerType } from '../../types/types';


type CommentComponentType = {
  key: number;
  comment: CommentServerType;
}

function Comment({key, comment} : CommentComponentType) : JSX.Element {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl.replace('https://13.react.pages.academy', 'https://13.react.htmlacademy.pro')} width="54" height="54" alt={comment.user.name} />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}>{comment.rating}</span>
            <span className="visually-hidden">{comment.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{Date()}</time>
      </div>
    </li>
  );
}
export default Comment;

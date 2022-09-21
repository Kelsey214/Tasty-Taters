import React from "react";
import { useDispatch } from "react-redux";
import ImgIconHeart from "../../assets/img/heart.svg";
import AddtoCart from '../../assets/img/image/cart.png';
import { addCart, increaseCart, decreaseCart } from "../../reducks/carts/operations";

const Item = ({ item, selected_count, setShowWriteReview, setShowReviews, setSelectedItemId }) => {
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
  };
  const clickCheckReviews = () => {
    setSelectedItemId(item.id);
    setShowReviews(true);
  };
  const clickWriteReview = () => {
    setSelectedItemId(item.id);
    setShowWriteReview(true);
  };
  return (
    <>
      <div className="item">
        <div className="item-image">
          <img src={item.image} alt="" />
        </div>
        <div className="likes">
          <img src={ImgIconHeart} class="icon-heart" alt="" />
          <div class="count">({item.total_like_count})</div>
        </div>
        <div class="info">
          <div class="name">{item.name}</div>
          <div class="name-bottom">
            <a class="link-button" onClick={() => clickWriteReview(true)}>
              Write Review
            </a>
            <a class="link-button" onClick={() => clickCheckReviews(true)}>
              Check Reviews
            </a>
          </div>
          <div class="info-bottom">
            {selected_count == 0 ? (
             <button class="add" onClick={clickAddCart}>
              <img src={AddtoCart}  alt="" /> Add to cart
            </button>
            ) : (
              <div class="number">
                <span class="minus" onClick={clickMinusCart}>
                  －
                </span>
                <span class="count">{selected_count}</span>
                <span class="plus" onClick={clickPlusCart}>
                  +
                </span>
              </div>
            )}
            <div class="price">${item.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;

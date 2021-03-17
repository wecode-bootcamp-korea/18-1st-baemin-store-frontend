import React, { Component } from 'react';
import OptionArea from './Components/OptionArea';
import './ItemPhotoInfoSec.scss';

class ItemPhotoInfoSec extends Component {
  state = {
    counts: 1,
  };

  IncreaseItem = () => {
    const { counts } = this.state;
    this.setState({
      counts: counts + 1,
    });
  };

  DecreaseItem = () => {
    const { counts } = this.state;
    counts <= 1
      ? this.setState({
          counts: 1,
        })
      : this.setState({ counts: counts - 1 });
  };

  InputItemCounts = e => {
    this.setState({ counts: Number(e.target.value) });
  };

  render() {
    const { InputItemCounts, IncreaseItem, DecreaseItem } = this;
    const { counts } = this.state;
    const { name, img, price, isSale, sale } = this.props;
    return (
      <div className="itemPhotoInfoSec">
        <div className="itemPhotoViewBox">
          <img src={img} alt={`${name}의 이미지`} />
        </div>
        <div className="itemInfoBox">
          <h3>{name}</h3>
          <div className="itemDetailList">
            <dl className="netPrice" style={{ display: !isSale && 'none' }}>
              <dt>정가</dt>
              <dd>
                <del>{price}원</del>
              </dd>
            </dl>
            <dl className="itemPrice">
              <dt>판매가격</dt>
              <dd>
                <strong>{(price * (100 - sale)) / 100}</strong>원
              </dd>
            </dl>
            <dl className="itemDelivery">
              <dt>배송정보</dt>
              <dd>
                <strong>
                  {((price * (100 - sale)) / 100) * counts >= 30000 ? 0 : 2500}
                  원{' '}
                </strong>
                <span>(3만원 이상 구매 시 무료)</span>
                <p>오후 2시 당일배송마감</p>
              </dd>
            </dl>
          </div>
          <OptionArea
            InputItemCounts={InputItemCounts}
            IncreaseItem={IncreaseItem}
            DecreaseItem={DecreaseItem}
            counts={counts}
            price={price}
            sale={sale}
            name={name}
          />
          <div className="itemPriceContainer">
            <dl className="totalAmount">
              <dt>총 합계금액</dt>
              <dd>
                <strong class="totalPrice">
                  {((price * (100 - sale)) / 100) * counts}
                  <b>원</b>
                </strong>
              </dd>
            </dl>
          </div>
          <div className="btnChoiceBox">
            <button
              id="wishBtn"
              onClick={() => alert('찜리스트에 등록되었습니다.')}
            />
            <button id="cartBtn">장바구니</button>
            <button id="orderBtn" onClick={() => alert('구매 완료되었습니다.')}>
              바로 구매
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPhotoInfoSec;

<template>
  <div class="cart">
    <Navigation :home="false" :about="false" :shop="false" :customize="false" :help="false" :contact="false" />
    <loading v-model:active="isLoading" loader="bars" />
    <BuyNow :buyNowVisible="buyNowVisible" v-if="buyNowIsVisible" :getAlertVisible="getAlertVisible"
      :items="selectedItems"></BuyNow>
    <div class="cart-container">
      <div class="cart-items">
        <p v-if="isCartEmpty" class="empty-items">Your cart is empty</p>
        <div v-for="(item, index) in items" :key="index" class="item-wrapper">
          <div class="select-box">
            <button :id="items[index].isSelected ? 'select-box-selected' : ''" @click="itemSelect(index)"></button>
          </div>
          <div class="img-box">
            <img :src="require('../assets/items/' + item.image + '')" alt="">
          </div>
          <div class="content">
            <router-link class="cart-item-link" :to="'/shop/' + item.item_id">
              <p class="name">{{ item.name }}</p>
            </router-link>
            <p class="price">${{ item.price }}</p>
          </div>
          <div class="btns-wrapper">
            <div class="delete">
              <button @click="removeItem(index)">
                <img src="../assets/icons/trash.png" alt="" />
              </button>
            </div>
            <div class="quantity">
              <button :id="
                items[index].itemRemDissable ? 'quantity-btn-dissabled' : ''
              " @click="itemQuanRem(index)">
                <img src="../assets/icons/minus.png" alt="" />
              </button>
              <p>{{ item.qty }}</p>
              <button :id="
                items[index].itemAddDissable ? 'quantity-btn-dissabled' : ''
              " @click="itemQuanAdd(index)">
                <img src="../assets/icons/plus.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isCartEmpty" class="total-box">
        <div class="total-wrapper">
          <h3>Summary</h3>
          <hr />
          <div class="sl-it-sum">
            <input v-model="address" type="text" class="sl-it-sum-item form-control" placeholder="Enter the Address">
          </div>
          <div v-if="selectedItems.length != 0" style="width: 100%; height: 1px; margin-top: 10px; background-color: black;"></div>
          <div class="total">
            <p>Total</p>
            <p>{{ total.toLocaleString() }}</p>
          </div>
          <button @click="placeOrder()" :class="checkoutBtnDissable ? 'total-wrapper-button-dissabled' : ''">
            Checkout ({{ SelectedItemCount }})
          </button>
        </div>
      </div>
    </div>
    <div class="total-box-mobile">
      <div class="total-box-mobile-wrapper">
        <p>Total &nbsp; Rs. {{ total.toLocaleString() }}</p>
        <button @click="placeOrder()" :class="checkoutBtnDissable ? 'total-wrapper-button-dissabled' : ''">
          Checkout ({{ SelectedItemCount }})
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'


export default {
  data() {
    return {
      items: [],
      selectedItems: [],
      total: 0,
      checkoutBtnDissable: true,
      SelectedItemCount: 0,
      isLoading: false,
      isCartEmpty: false,
      alertBoxIsVisible: false,
      buyNowIsVisible: false,
      address: '',
    };
  },


  created() {
    this.loadCartItems();
  },

  methods: {
    buyNowVisible(buyNowStatus) {
      this.buyNowIsVisible = buyNowStatus;
    },

    placeOrder() {
      if (this.address != '') {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Item(s) has been purchased!'
        }).then((result) => {
          if (result) {
            localStorage.removeItem('items');
            window.location.reload();
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your address!'
        })
      }
    },

    loadCartItems() {
      let obj = JSON.parse(localStorage.getItem('items'));

      if (obj !== null) {
        this.isCartEmpty = false;
        for (let i = 0; i < obj.length; i++) {
          this.items.push(obj[i]);
        }
      } else {
        this.isCartEmpty = true;
      }
    },

    removeItem(index) {
      this.items.splice(index, 1);
      localStorage.removeItem('items');
      localStorage.setItem('items', JSON.stringify(this.items))
      window.location.reload();
    },

    itemSelect(index) {
      if (this.items[index].isSelected == false) {
        this.items[index].isSelected = true;
        this.total += this.items[index].price * this.items[index].qty;
        this.SelectedItemCount += 1;
        this.selectedItems.push(this.items[index]);
        // console.log(index)
      } else {
        this.items[index].isSelected = false;
        this.total -= this.items[index].price * this.items[index].qty;
        this.SelectedItemCount -= 1;
        let newIndex = this.selectedItems.findIndex(
          (x) => x.id == this.items[index].id
        );
        // console.log(newIndex)
        this.selectedItems.splice(newIndex, 1);
      }

      if (this.SelectedItemCount == 0) {
        this.checkoutBtnDissable = true;
      } else {
        this.checkoutBtnDissable = false;
      }
    },

    quantityBtnDissable(index) {
      if (parseInt(this.items[index].qty) <= 1) {
        this.items[index].itemRemDissable = true;
      } else {
        this.items[index].itemRemDissable = false;
      }

      if (
        parseInt(this.items[index].qty) >= parseInt(this.items[index].remaining)
      ) {
        this.items[index].itemAddDissable = true;
      } else {
        this.items[index].itemAddDissable = false;
      }
    },

    itemQuanRem(index) {
      if (parseInt(this.items[index].qty) >= 2) {
        this.items[index].qty = parseInt(this.items[index].qty) - 1;
        if (this.items[index].isSelected == true) {
          this.total -= parseInt(this.items[index].price);
        }
      }

      this.quantityBtnDissable(index);
    },

    itemQuanAdd(index) {
      if (
        parseInt(this.items[index].qty) < parseInt(this.items[index].remaining)
      ) {
        this.items[index].qty = parseInt(this.items[index].qty) + 1;
        if (this.items[index].isSelected == true) {
          this.total += parseInt(this.items[index].price);
        }
      }

      this.quantityBtnDissable(index);
    },
  },
};
</script>

<style scoped>
.sl-it-sum {
  display: flex;
  justify-content: space-between;
}

.sl-it-sum-item {
  font-size: 13px;
  margin: 10px 0;
}

.cart-item-link {
  color: black;
  text-decoration: none;
}

.empty-items {
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

.cart {
  min-height: 100vh;
  background-color: rgb(216, 216, 216);
}

.cart-items {
  width: 100%;
  margin-bottom: 100px;
}

.cart-container {
  padding: 20px 50px;
  display: flex;
  /* flex-direction: column; */
}

.item-wrapper {
  width: 100%;
  height: 150px;
  margin: 5px 0;
  background-color: white;
  display: flex;
}

.select-box {
  width: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
}

.select-box button {
  width: 20px;
  height: 20px;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 50%;
  background-color: white;
}

#select-box-selected {
  background-image: url("../assets/icons/select.png");
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
}

.img-box {
  height: 100%;
  min-width: 150px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-box img {
  max-width: 100%;
  max-height: 100%;
}

.content {
  width: 100%;
  padding: 20px;
}

.content .name {
  width: 470px;
  font-weight: bold;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.content .price {
  line-height: 5px;
}

.btns-wrapper {
  width: 100px;
  padding: 20px 20px 0 0;
}

.delete {
  display: flex;
  justify-content: flex-end;
}

.delete button {
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
}

.delete button img {
  max-width: 100%;
  max-height: 100%;
}

.quantity {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.quantity p {
  font-size: 13px;
}

.quantity button {
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantity button img {
  max-width: 50%;
  max-height: 50%;
}

#quantity-btn-dissabled {
  opacity: 0.4;
}

.total-box {
  width: 350px;
  margin: 5px;
  position: relative;
}

.total-wrapper {
  width: 271px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  position: fixed;
}

.total-wrapper h3 {
  text-align: center;
}

.total {
  display: flex;
  justify-content: space-between;
}

.total-wrapper button {
  width: 100%;
  padding: 6px 0;
  border: none;
  background-color: blue;
  color: white;
}

.total-wrapper-button-dissabled {
  opacity: 0.5;
  pointer-events: none;
}

.total-box-mobile {
  width: 100%;
  padding: 10px;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: none;
}

.total-box-mobile-wrapper {
  max-width: 767px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-box-mobile-wrapper p {
  margin-top: 10px;
  font-weight: bold;
}

.total-box-mobile-wrapper button {
  padding: 6px 10px;
  border: none;
  border-radius: 20px;
  background-color: blue;
  color: white;
}

@media only screen and (max-width: 1200px) {
  .cart-container {
    padding: 20px;
  }

  .content .name {
    width: 280px;
  }
}

@media only screen and (max-width: 991px) {
  .total-box {
    display: none;
  }

  .total-box-mobile {
    display: block;
  }

  .content .name {
    width: 420px;
  }
}

@media only screen and (max-width: 767px) {
  .cart-container {
    padding: 20px 10px;
  }

  .item-wrapper {
    height: 100px;
  }

  .select-box {
    padding-left: 2px;
  }

  .img-box {
    min-width: 100px;
  }

  .content {
    padding-left: 2px;
  }

  .content .name {
    width: 250px;
    margin-bottom: 5px;
  }

  .btns-wrapper {
    padding: 5px 2px 0 0;
  }

  .quantity button {
    width: 20px;
    height: 20px;
  }

  .quantity p {
    font-size: 13px;
  }
}

@media only screen and (max-width: 460px) {
  .content .name {
    width: 160px;
  }
}

@media only screen and (max-width: 377px) {
  .content .name {
    width: 100px;
  }
}
</style>

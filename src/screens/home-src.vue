<template>
  <div>
    <div class="home-box row" style="margin: auto">
      <div class="home-left col-lg-8 col-md-6">
        <h1 class="text-left fw-bolder">Find Your Best Tech <br>Gadgets</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC, making it over 2000
          years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source.
        </p>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img class="home-right" src="../assets/offer.png" alt="image" />
      </div>
    </div>

    <div class="item-wall">
      <div class="item-title">
        <h1 class="text-center fw-bolder">Best Selling Products</h1>
      </div>
        <div class="filter">
        <div class="filter-cat">
          <h4>Categories :</h4>
          <button @click="loadAll()" class="filter-src-btn">All</button>
          <button @click="filterComputer()" class="filter-src-btn">Computer</button>
          <button @click="filterMobile()" class="filter-src-btn">Mobile</button>
          <button @click="filterOther()" class="filter-src-btn">Other</button>
        </div>
        <div class="filter-src">
          <h4>Products :</h4>
          <button @click="loadAll()" class="filter-src-btn">All</button>
          <button @click="filterHeadset()" class="filter-src-btn">Headset</button>
          <button @click="filterMouse()" class="filter-src-btn">Mouse</button>
          <button @click="filterCamera()" class="filter-src-btn">Camera</button>
          <button @click="filterSmartwatch()" class="filter-src-btn">Smart Watch</button>
        </div>
      </div>
      <div class="">
        <div class="items-wrapper">
          <div class="row gy-5 gx-5" style="margin: auto">
            <div v-for="(item, index) in displayItems" :key="index"
              class="item-container col-lg-3 col-md-4 col-sm-6 col-6">
              <div class="item-box">
                <button @click="itemSelect(index)" class="item">
                  <img class="item-img" :src="require('../assets/items/' + item.image)" alt="item" />
                  <div class="item-text">
                    <div class="item-name">
                      <h4>{{ item.name }}</h4>
                      <h6>${{ item.price }}</h6>
                    </div>
                    <div>
                      <p>{{ item.text }}</p>
                    </div>
                  </div>
                </button>

                <div class="item-cart">
                  <button @click="test(index)" class="item-cart-btn">
                    {{ item.cart_btn }}
                  </button>
                  <span class="fa fa-star"></span>
                  <h6 class="item-rating">{{ item.rating }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Swal from "sweetalert2";

export default {
  data() {
    return {
      items: [
        { id: "headset1", name: "Headset", price: 40, image: "headset.jpg", text: "Lorem is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "headset", category: "computer", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1},
        { id: "mouse1", name: "Mouse", price: 10, image: "mouse.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "mouse", category: "computer", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "camera1", name: "Camera", price: 250, image: "camera.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "camera", category: "other", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "smart-watch", name: "Smart watch", price: 25, image: "smart-watch.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "watch", category: "other", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },

        { id: "calculator1", name: "Calculator", price: 20, image: "calculator.jpg", text: "Lorem is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "calculator", category: "other", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "headset2", name: "Gaming headset", price: 50, image: "gaming-headset.jpg", text: "Ipsum is simply dummy text of the printing.", cart_btn: "Add to Cart", rating: "5.0", type: "headset", category: "computer", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "keyboard1", name: "Keyboard", price: 15, image: "keyboard.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "keyboard", category: "computer", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "sd-card1", name: "Sd card", price: 10, image: "sd-card.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "sd-card", category: "mobile", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },

        { id: "speaker1", name: "Speaker", price: 20, image: "speaker.jpg", text: "Lorem is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "speaker", category: "computer", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "power-bank1", name: "Power-bank", price: 10, image: "power-bank.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "power-bank", category: "mobile", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "handsfree1", name: "Handsfree", price: 10, image: "handsfree.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "headset", category: "mobile", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 },
        { id: "pendrive1", name: "Pendrive", price: 10, image: "pendrive.jpg", text: "Ipsum is simply dummy text of the printing and typesetting industry.", cart_btn: "Add to Cart", rating: "5.0", type: "pendrive", category: "computer", isSelected: false, itemRemDissable: false, itemAddDissable: false, remaining: 10, qty: 1 }
      ],
      cartItems: [],
      displayItems: [],
    };
  },

  created() {
    this.loadAll();
  },

  methods: {

    loadAll() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        this.displayItems.push(this.items[i]);
      }
    },

    filterCamera() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].type == 'camera') {
          this.displayItems.push(this.items[i])
        }
      }
    },

    filterSmartwatch() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].type == 'watch') {
          this.displayItems.push(this.items[i])
        }
      }
    },

    filterHeadset() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].type == 'headset') {
          this.displayItems.push(this.items[i]);
        }
      }
    },

    filterMouse() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].type == 'mouse') {
          this.displayItems.push(this.items[i])
        }
      }
    },

    filterComputer() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].category == 'computer') {
          this.displayItems.push(this.items[i])
        }
      }
    },

    filterMobile() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].category == 'mobile') {
          this.displayItems.push(this.items[i])
        }
      }
    },

    filterOther() {
      this.displayItems = [];
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].category == 'other') {
          this.displayItems.push(this.items[i])
        }
      }
    },

    test(index) {

      let currentItems = [];

      if (localStorage.getItem("items") !== null) {
        if (localStorage.getItem("items") != '') { 
          currentItems = JSON.parse(localStorage.getItem("items"));
         }
      }

      currentItems.push(this.items[index]);
      console.log(currentItems)
      localStorage.removeItem('items');
      localStorage.setItem('items', JSON.stringify(currentItems));

      Swal.fire({
        title: "Success..!",
        text: "A new item has been added to your Shopping Cart.",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "View Shopping Cart",
        cancelButtonText: "Continune Shopping",
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/cart");
          } else {
            return;
          }
        });
    },

    itemSelect(index) {
      this.$router.push("/item/" + this.items[index].name);
    },
  },
};
</script>

<style>
.item-container {
  display: flex;
  justify-content: center;
}

.filter {
  display: flex;
  width: 85%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid darkgray;
}

.filter-cat {
  margin: 0px 20px;
}

.filter-cat-drop {
  border-radius: 10px;
  height: 30px;
}

.filter-src-btn {
  margin: 0px 10px;
  border-radius: 10px;
}

button:hover .filter-src-btn {
  background-color: #4caf50;
  color: white;
}

.home-box {
  padding: 50px 80px;
  margin: 0px;
}

.home-left {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  background-color: whitesmoke;
}

.home-right {
  max-width: 100%;
  /* max-height: 100%;*/
  background-color: whitesmoke;
}

.item {
  border: none;
  padding: 0;
  margin: 0;
  background-color: whitesmoke;
  text-align: left;
}

.items-wrapper {
  margin: 50px;
}

.item-box {
  background-color: whitesmoke;
  width: 220px;
  height: 380px;
  border-radius: 30px;
}

.item-img {
  width: 200px;
  height: 180px;
  border-radius: 40px;
  margin: 10px;
}

.item-text {
  padding: 10px;
  height: 125px;
  color: black;
}

.item-name {
  display: flex;
  justify-content: space-between;
}

.item-cart {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.item-cart-btn {
  background-color: #2b57dc;
  color: white;
  border: 0px;
  border-radius: 20px;
  height: 30px;
  width: 100px;
}

.item-rating {
  color: black;
}

@media only screen and (max-width: 576px) {
  .item-box {
    width: 150px;
  }

  .item-img {
    width: 130px;
    height: 120px;
  }

  .item-text {
    height: 170px;
  }

  .home-box .row {
    width: 450px;
    margin: auto;
  }

  .home-box {
    padding: 20px 40px;
  }


  .items-wrapper {
    margin: auto;
  }
}

@media only screen and (max-width: ≥768px) {}
</style>

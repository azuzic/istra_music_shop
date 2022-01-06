<template>
  <div>
    <!--==============MENU====================================-->
    <div class="menu grid grid-cols-3 mb-4">
      <div class="menu-item-active">
        <router-link to="djelatnik">
          <img class="arrow ml-2" src="@/assets/arrow_icon.svg">
        </router-link>
        <p>
          <router-link to="djelatnik">
            Povratak
          </router-link>
        </p>
      </div>  
      <div class="menu-item">
      </div>
      <div class="menu-item">
        <p>20.05.2022.</p>
      </div>
    </div>
    <!--==============MENU END================================-->
    <!--==============LIST ===================================-->
    <div class="grid grid-rows-auto gap-2 pl-2 pr-2 pb-16 pt-16"> 
        <div>
            <p><u class="text-20px">Vrsta instrumenta:</u></p>
            <p class="mt-1 text-18px"><b>Gitara</b></p> 
        </div>
        <div>
            <p><u class="text-20px">Proizvođač:</u></p>
            <p class="mt-1 text-18px"><b>Gibson</b></p> 
        </div>  
        <div>
            <p><u class="text-20px">Model:</u></p>
            <p class="mt-1 text-18px"><b>Les Paul</b></p> 
        </div> 
        <div>
            <p><u class="text-20px">Podmodel:</u></p>
            <p class="mt-1 text-18px"><b>Traditional</b></p> 
        </div> 
        <div>
            <hr class="dotted mt-2 mb-2">
        </div>
        <div>
            <p><u class="text-20px">Godina proizvodnje:</u></p>
            <p class="mt-1 text-18px"><b>2002.</b></p> 
        </div> 
        <div>
            <p><u class="text-20px">Vlasnik:</u></p>
            <p class="mt-1 text-18px"><b>2.</b></p> 
        </div> 
        <div>
            <p><u class="text-20px">Stanje:</u></p>
            <p class="mt-1 text-18px"><b>Rabljeno</b></p> 
        </div> 
        <div>
            <hr class="dotted mt-2 mb-2">
        </div>
        <div>
            <p><u class="text-20px">Slike:</u></p>
            <div class="grid grid-rows-2 grid-cols-3 gap-2 mt-2">
                <div class="otkup-div-image flex-none">
                    <p class="otkup-img-text">Gornja prednja</p>
                    <img class="CCard-img img-top-left mx-auto" src="https://picsum.photos/500/500/">
                </div>
                <div class="otkup-div-image flex-none">
                    <p class="otkup-img-text">Gornja stražnja</p>
                    <img class="CCard-img img-top mx-auto" src="https://picsum.photos/500/500/">
                </div>
                <div class="otkup-div-image flex-none">
                    <p class="otkup-img-text">Bočna desna</p>
                    <img class="CCard-img img-top-right mx-auto" src="https://picsum.photos/500/500/">
                </div>
                <div class="otkup-div-image flex-none">
                    <p class="otkup-img-text">Bočna lijeva</p>
                    <img class="CCard-img img-bottom-left mx-auto" src="https://picsum.photos/500/500/">
                </div>
                <div class="otkup-div-image flex-none">
                    <p class="otkup-img-text">Vrat gitare</p>
                    <img class="CCard-img img-bottom mx-auto" src="https://picsum.photos/500/500/">
                </div>
                <div class="otkup-div-image flex-none">
                    <p class="otkup-img-text">Glava gitare</p>
                    <img class="CCard-img img-bottom-right mx-auto" src="https://picsum.photos/500/500/">
                </div>
            </div> 
        </div> 
        <div>
            <p><u class="text-20px">Napomena:</u></p>
            <textarea class="otkup-textarea mt-2">
              Malo oštećenje na stražnjoj strani.
            </textarea>
        </div> 
        <div>
            <hr class="dotted mt-2 mb-2">
        </div>
        <div>
            <p class="text-center mb-2"><b class="text-24px">PODACI O KLIJENTU</b></p>
        </div>
        <div>
            <p><u class="text-20px">Ime i prezime:</u></p>
            <p class="mt-1 text-18px"><b>Ime Prezime</b></p> 
        </div>
        <div>
            <p><u class="text-20px">Email:</u></p>
            <p class="mt-1 text-18px"><b>ime.prezime@gmail.com</b></p> 
        </div>  
        <div>
            <p><u class="text-20px">OIB:</u></p>
            <p class="mt-1 text-18px"><b>12345678910</b></p> 
        </div> 
        <div>
            <p><u class="text-20px">Broj telefona:</u></p>
            <p class="mt-1 text-18px"><b>098-721-5555</b></p> 
        </div> 
        <div>
            <hr class="dotted mt-2 mb-2">
        </div>
        <div>
          <p class="text-left text-18px m-0 p-0 mt-6">Nova predložena cijena:</p>
          <input
            type="text"
            name="oib"
            id="oib"
            v-model="cijena"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          />
          <hr />
        </div>
        <!--==============SPREMI==============================-->
        <div class="place-self-center mt-4" :class="cijena ? 'active' : 'inactive'">
          <CButtonSingle btn="PROMJENI" :btnClickHandler="cijena ? dummy : dummy" />
        </div>
        <!--==============/SPREMI=============================-->
        <!--===================ODBIJ OTKUP====================-->
        <div class="place-self-center mt-8">
          <router-link to="/password-reset">
            <CButtonDecline btn="ODBIJ OTKUP" :btnClickHandler="dummy" />
          </router-link>
        </div>
        <!--================/ODBIJ OTKUP======================-->
        <!--=================PRIHVATI OTKUP===================-->
        <div class="place-self-center mt-4">
          <router-link to="/password-reset">
            <CButtonAccept btn="PRIHVATI OTKUP" :btnClickHandler="dummy" />
          </router-link>
        </div>
        <!--================/PRIHVATI OTKUP===================-->
    </div>
    <!--==============LIST END================================-->
    <!--==============FOOTER==================================-->
    <div class="menu-bottom2 grid grid-cols-1 mt-4">  
      <div class="menu-item text-left mx-auto">
        <img class="money" src="@/assets/money_icon.svg">
        <p class="pl-4 text-24px">
          Predložena cijena: 
          <b class="price">2500 kn</b>
        </p>
      </div>
    </div>
    <!--==============FOOTER END==============================-->
  </div>
</template>

<script>
import CTitle from "@/components/CTitle.vue";
import CButtonSingle from "@/components/CButtonSingle.vue";
import CButtonAccept from "@/components/CButtonAccept.vue";
import CButtonDecline from "@/components/CButtonDecline.vue";
import CCard from "@/components/CCard.vue";

export default {
  name: "Djelatnik",
  components: {
    CTitle,
    CButtonSingle,
    CButtonAccept,
    CButtonDecline,
    CCard,
  },
  data() {
    return {
      cijena: "",
    };
  },
  methods: {
    dummy() {},
  },
};
</script>

<style>
.menu-item-red {
  background-color: #FF7F7F;
}
.menu-item-yellow {
  background-color: #FFF383;
}
.menu-item-green {
  background-color: #6DD277;
}
.menu-item-selected p {
  width: 100%;
  font-weight: bold;
  color: #3F2C28;
}
.arrow {
  width: 26px;
  opacity: 0.75;
  transform: scaleX(-1);
}
.money {
  width: 43px;
  opacity: 0.75;
}
.price {
    color: #FF5252;
}

.otkup-div-image {
  width: 120px;
  overflow: hidden;
}

.otkup-div-image img {
  border-color: #3D3D3F;
  height: 120px;
  border-width: 2px;
}

.img-top-left {
  border-top-left-radius: 9.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
}
.img-top {
  border-radius: 2.5px;
}
.img-top-right {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 9.5px;
  border-bottom-right-radius: 2.5px;
}
.img-bottom-left {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 9.5px;
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
}
.img-bottom {
  border-radius: 2.5px;
}
.img-bottom-right {
  border-top-left-radius: 2.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 2.5px;
  border-bottom-right-radius: 9.5px;
}
.otkup-img-text {
  text-align: center;
  font-size: 16px;
  color: #3F2C28;
}
.otkup-textarea {
  padding: 8px;
  color: #461717;
  font-size: 18px;
  width: 100%;
  border-color: #3D3D3F;
  height: 128px;
  border-width: 2px;
  border-top-left-radius: 9.5px;
  border-bottom-left-radius: 2.5px;
  border-top-right-radius: 9.5px;
  border-bottom-right-radius: 2.5px;
}
</style>
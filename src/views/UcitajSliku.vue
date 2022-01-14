<template>
  <div>
    <div class="CDodavanje-bottom grid grid-cols-1">
      <div class="place-self-center" :class="canUpload ? '' : 'tranparent-75'">
        <CButtonSingle
          btn="PRENESI  "
          :btnClickHandler="canUpload ? savePhoto : dummy"
        />
      </div>
    </div>
    <div class="CDodavanje-top">
      <div class="menu-item6 mx-auto">
        <img v-if="store.theme=='Svijetla'" class="dodavanje-icon" src="@/assets/upload.svg" />
        <img v-if="store.theme=='Tamna Plava'" class="dodavanje-icon" src="@/assets/upload_dark_blue.svg" />
        <img v-if="store.theme=='Tamna Crvena'" class="dodavanje-icon" src="@/assets/upload_dark_red.svg" />
        <p>Molimo odaberite sliku za</p>
        <p>{{ uploadText }}</p>
        <p v-if="pictures.selected != 5 && pictures.selected != 6">
          stranu gitare
        </p>
      </div>
      <div class="menu-bottom-dodavanje grid grid-cols-1 mt-4">
        <div class="menu-item7 mx-auto">
          <img class="photo-icon" src="@/assets/photo_icon.png" />
          <p>Dodajte fotografiju</p>
        </div>
      </div>
      <croppa
        v-model="imageReference"
        auto-sizing
        :placeholder="''"
        :accept="'image/*'"
        :file-size-limit="0"
        :quality="2"
        :zoom-speed="3"
        :disabled="false"
        :disable-drag-and-drop="false"
        :disable-click-to-choose="false"
        :disable-drag-to-move="false"
        :disable-scroll-to-zoom="false"
        :disable-rotation="false"
        :prevent-white-space="true"
        :reverse-scroll-to-zoom="false"
        :show-remove-button="true"
        :remove-button-color="'gray'"
        @new-image="canUpload = true"
        @image-remove="canUpload = false"
      ></croppa>
    </div>
  </div>
</template>
<script>
import CButtonSingle from "@/components/CButtonSingle.vue";
import CWarning from "@/components/CWarning.vue";
import pictures from "@/pictures";
import store from "@/store";
import router from "@/router";
import { storage, ref, uploadBytes, getDownloadURL } from "@/firebase";
export default {
  name: "UcitajSliku",
  data() {
    return {
      imageReference: null,
      canUpload: false,
      store,
      pictures,
      uploadText: "",
      currentPictureObj: null,
    };
  },
  mounted() {
    var picture = pictures.guitarPictures.find(
      (picture) => picture.id === pictures.selected
    );
    this.currentPictureObj = picture;
    this.uploadText = picture.text;
  },
  methods: {
    savePhoto() {
      this.imageReference.generateBlob((blobData) => {
        let imageName =
          "zahtjevi/" + store.currentUser + "/" + Date.now() + ".png";
        const storageRef = ref(storage, imageName);
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, blobData)
          .then((result) => {
            console.log("Image uploaded! ->", result);
            router.go(-1);
            this.currentPictureObj.uploaded = true;
            getDownloadURL(ref(storage, imageName)).then((url) => {
              this.currentPictureObj.url = url;
            });
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
    dummy() {},
  },
  components: {
    CButtonSingle,
    CWarning,
  },
};
</script>
<style>
.CDodavanje-top {
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: var(--StretchLimo__EerieBlack);
  width: 100%;
  height: 72%;
  box-shadow: 0px 4px 4px var(--Transparent25__Transparent75);
}
.CDodavanje-bottom {
  position: absolute;
  align-items: center;
  text-align: center;
  background-color: var(--Snow__DarkToneInk);
  bottom: 0px;
  width: 100%;
  height: 28%;
}
.dodavanje-icon {
  width: 100%;
  height: 123px;
}
.photo-icon {
  height: 28px;
  opacity: 90%;
}
.menu-item6 {
  align-items: center;
  text-align: center;
}
.menu-item6 p:nth-child(2) {
  color: var(--Fresco__KinglyCloud) !important;
  letter-spacing: 0.5px;
  margin-top: 8px;
  font-size: 14px;
}
.menu-item6 p:nth-child(3) {
  color: var(--Fresco__KinglyCloud) !important;
  margin-top: 4px;
  letter-spacing: -1.5px;
  font-size: 24px;
  font-weight: bold;
}
.menu-item6 p:nth-child(4) {
  color: var(--Fresco__KinglyCloud) !important;
  margin-top: 4px;
  letter-spacing: 0px;
  font-size: 22px;
}
.menu-bottom-dodavanje {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: transparent;
}
.menu-item7 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 50px;
  margin-top: 24px;
  border-radius: 32px;
  background-color: var(--FluorescentRed__FrenchWine);
  z-index: 42069;
}
.menu-item7 p {
  color: #000000d0;
  font-size: 18px;
  letter-spacing: -0.5px;
  margin-left: 6px;
  margin-top: 4px;
}

.croppa-container {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  color: transparent;
  height: 100% !important;
  background-color: transparent;
}

.croppa-container svg {
  width: 35px !important;
  height: 35px !important;
  margin-top: 10px;
  margin-right: 10px;
  opacity: 50%;
}
</style>

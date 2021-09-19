<template>
  <div class="body text-center">    
    <h1 class="body_title">
      t_nuxt
    </h1>
    <div class="body_wrapper">
      <span class="body_greetings mb-5">{{greetings}}</span>
      <div v-if="!submitted" class="body_form mt-5">
        <div class="body_form__wrapper text-center">

          <form @submit.stop.prevent="formSend()">
            <div class="form_input mb-4 mx-5">
              <input
                class=""
                type="text"
                id="fio"
                name="name"
                v-model="name"
                placeholder="Ваше Имя и Фамилия"
              >
              <div v-if="$v.name.$invalid && name.length>0" class="error-msg">Введите ФИО</div>
            </div>
            <div class="form_input mb-4 mx-5">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ваш телефон для связи"
                class="mr-1"
                v-model="phone"
                @blur="$v.phone.$touch()"
                >
              <div v-if="$v.phone.$error" class="error-msg">
                <span>Введите телефон</span>
                <small><span class="font-weight-light">(11 символов) </span></small>
              </div>
            </div>
            <div class="form_input mb-4 mx-5">
              <input
                class=""
                type="email"
                id="mail"
                name="email"
                v-model="email"
                @blur="$v.email.$touch()"
                placeholder="Ваш email для связи"
              >
              <div v-if="$v.email.$error" class="error-msg">Введите Email</div>
            </div>
            <div class="form_input mb-4 mx-5">
              <select
                ref="selectedSubject"
                style='width:12.5rem;height:2rem'
                @blur="$v.subject.$touch()"
                v-model="subject"
              >
                <option value="" disabled selected class="d-none" >Выберите тему</option>
                <option
                  v-for="(subject, index) in message_subjects"
                  :key="'subject_'+index"
                >{{ subject }}
                </option>
              </select>
              <div v-if="$v.subject.$error" class="error-msg">Выберите тему</div>
            </div>
            <div class="form_input mb-4 mx-5">
              <textarea
                v-model="message"
                placeholder="Ваше сообщение"
                >
              </textarea>
              <div v-if="$v.message.$invalid && message.length>0" class="error-msg">Введите сообщение</div>
            </div>
            <div class="form_input mb-4 mx-5">
              <input
                type="file"
                name="user_file"
                multiple
                @change="preLoadFile"
              >
            </div>
            <div class="form_submit">
              <button
                  :disabled="$v.$invalid"
                  type="submit"
                  class="btn btn-primary"
                  >
                  Отправить
                </button>
            </div>
          </form>
        </div>
      </div>
      <div v-else>
        <span v-if="submit_status">Ваше сообщение успешно отправлено!</span>
        <span v-else>Ошибка отправки сообщения <br> Попробуйте зайти позже </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data(){
    return {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '', 
      file: null,
      submitted: false,
      submit_status: false,
    }     
  },
  validations: {
      name: {
        required,
        alpha: val => /^[а-яё -]*$/i.test(val),
      },
      phone: {
        required,
        minLength: minLength(11),
      },
      email: {
        required,
        email
      },
      subject: {
        required,
      },
      message: {
        required,
        minLength: minLength(10),
      },
      file: {
        required,
      },
    },
  computed: {
      ...mapGetters({
        greetings: 'auth/greetings',
        message_subjects: 'interaction/get_message_subjects',
      }),      
    },
  methods: {
    ...mapActions({
      }),
    preLoadFile(event) {
      this.file = event.target.files[0];
    },
    async formSend(){
          const formData = new FormData(); 
          formData.append("name", this.name); 
          formData.append("phone", this.phone); 
          formData.append("email", this.email); 
          formData.append("subject", this.subject); 
          formData.append("message", this.message); 
          formData.append("user_file", this.file); 
          this.submitted = true;
          this.submit_status = true;

          // throw data to backend. Backend will sent the message to email
          /* await this.$axios.$post("api/post_guest_message", formData)
          .then(response=>{
            if (!response.error){
              this.submitted = true;
              this.submit_status = true;
            } 
          }) 
          .catch(function(err){
            this.submitted = true;
            this.submit_status = false;
        }); */        
      },
  },
  watch: {
    /* save to localstorage entered text
        to be albe to use it in case user reopen the page 
        */
      message(new_message) {
        localStorage.message_guest = new_message;
      },
    },
  mounted(){
    /* restore previously saved user's data*/
    if(localStorage.message_guest){
      this.message = localStorage.message_guest;
    }
  }
}
</script>

<style lang="scss">
  .body{
    color: blue;
  }
  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: $corporate_first;
    letter-spacing: 1px;
  }
</style>

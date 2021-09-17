<template>
  <div class="body text-center">    
    <h1 class="body_title">
      t_nuxt
    </h1>
    <div class="body_wrapper">
      <div v-if="$store.state.auth.token"><span>Athenticated</span></div>
      <div 
        v-else>
        <span class="body_greetings mb-5">{{greetings}}</span>
        <div class="body_form mt-5">
          <div class="body_form__wrapper text-center">
            <div class="form-input mb-4 mx-5">
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

            <div class="form-input mb-4 mx-5">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ваш телефон"
                class="mr-1"
                v-model="phone"
                @blur="$v.phone.$touch()"
                >
              <div v-if="$v.phone.$error" class="error-msg">
                <span>Введите телефон</span> 
                <small><span class="font-weight-light">(11 символов) </span></small>
              </div>
            </div>

            <div class="form-input mb-4 mx-5">
              <input
                class=""
                type="email"
                id="mail"
                name="email"
                v-model="email"
                @blur="$v.email.$touch()"
                placeholder="Электронная почта"
              >
              <div v-if="$v.email.$error" class="error-msg">Введите Email</div>
            </div> 

            <div class="form-input mb-4 mx-5">
              <input
                class=""
                type="text"
                id="subject"
                name="subject"
                v-model="subject"
                placeholder="Тема"
              >
              <div v-if="$v.subject.$invalid && subject.length>0" class="error-msg">Введите тему</div>
            </div>

            <div class="form-input mb-4 mx-5">
              <input
                class=""
                type="text"
                id="message"
                name="message"
                v-model="message"
                placeholder="Ваше сообщение"
              >
              <div v-if="$v.message.$invalid && message.length>0" class="error-msg">Введите сообщение</div>
            </div>
                    
          </div>
        </div>
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
    }     
  },
  validations: {
      name: {
        required,
        alpha: val => /^[а-яё]*$/i.test(val),
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
        minLength: minLength(4),
      },
      message: {
        required,
        minLength: minLength(10),
      },
    },
  computed: {
      ...mapGetters({
        token: 'auth/token',
        greetings: 'auth/greetings',
      }),      
    },
  methods: {
    ...mapActions({
        setToken: 'auth/setToken',
        logout: 'auth/logout',
      }),
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

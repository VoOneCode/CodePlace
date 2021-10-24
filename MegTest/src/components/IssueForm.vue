<template>
  <div class="issue-form flex-column flex-align-start">
    <div class="form-row">
      <label>Координаты</label>
      <div class="field">
        <span>широта: {{issue.latitude}} </span><br>
        <span>долгота: {{issue.longitude}} </span>
      </div>
    </div>
    <div class="form-row">
      <label>Название</label>
      <div class="field">
        <input type="text" v-model="name"/>
      </div>
    </div>
    <div class="form-row">
      <label>Описание</label>
      <div class="field">
        <textarea v-model="description" />
      </div>
    </div>
    <div class="form-row">
      <label>Цена</label>
      <div class="field">
        <input type="text" v-model="price">
      </div>
    </div>
    <div class="form-row">
      <label>Программа</label>
      <div class="field">
        <select>
          <option 
            v-for="opt in programs" :key="'option_program_'+opt.id" 
            :value="opt.name"
            :selected="opt.id == program"
            >
            {{opt.name}}
          </option>
        </select>
      </div>
    </div>
    <div class="submit-row">
      <BtnAccept
        @btn-accept-clicked="onClickSubmit"
        >Сохранить проблему
      </BtnAccept>
    </div>
  </div>
</template>

<script>
import BtnAccept from '@/components/btns/BtnAccept.vue'
const axios = require('axios');
const qs = require('qs');
// todo: Реализовать редактирование данных из объекта
export default {
  name: 'IssueForm',
  components: {
    BtnAccept,
  },
  props: {
    issue: Object
  },
  data() {
    return {
      name: '',
      description: '',
      price: '',
      program: '',
    }
  },
  methods: {
    onClickSubmit() {
      // todo: Реализовать сохранение изменений

      //first way
      /* const formData = new FormData();
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("program", this.program);
      axios.put(`${process.env.VUE_APP_SOURCE}/api/issue/${this.issue.id}`, qs.stringify(formData)) */

      //second way
      /* axios({
        method: 'put',
        url: `${process.env.VUE_APP_SOURCE}/api/issue/${this.issue.id}`, 
        data: { program: `${this.program}` } }) //data accordnigly to backend
        .then(response => (
          console.log('updated successfully')
          //this.$store.dispatch('loadData') //to update data in left(lists) section
        ))
        .catch(error => (
          console.log(error)
        )) */
    }
  },
  computed: {
    programs(){
      return this.$store.state.program
    },
  },
  watch: {
    issue(newVal) {
      newVal.properties.forEach(element => {
        switch(element.name){
          case 'name':
            this.name = element.value
            break
          case 'description':
            this.description = element.value
            break
          case 'price':
            this.price = element.value
            break
          case 'program':
            this.program = element.value
            break
        }
      });
    },
  }
}
</script>


<style scoped lang="scss">
  .issue-form {
    gap: 10px;

    .form-row {
      display: flex;
      flex-direction: column;
      label {
        text-align: left;
      }
    }
  }
</style>

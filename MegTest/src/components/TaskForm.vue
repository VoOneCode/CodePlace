<template>
  <div class="task-form flex-column flex-align-start">
    <div class="form-row">
    </div>
    <div class="form-row">
      <label>Название</label>
      <div class="field">
        <input type="text" v-model="task.name"/>
      </div>
    </div>
    <div class="form-row">
      <label>Потребности</label>
      <div class="field">
        <span class="requirement"> {{task.requirement}} </span>
      </div>
    </div>
    <div class="form-row">
      <label>Описание</label>
      <div class="field">
        <textarea v-model="task.description" />
      </div>
    </div>
    <div class="form-row">
      <label>Цена</label>
      <div class="field">
        <input type="text" v-model="task.price">
      </div>
    </div>
    <div class="form-row">
      <label>Ответственный</label>
      <div class="field">
        <select v-if="task.user"> 
          <option 
            v-for="user in users" :key="'option_user_'+user.id" 
            :value="user.name" 
            :selected="user.id == task.user"
            >
            {{user.first_name}} {{user.last_name}}
          </option>
        </select>
      </div>
    </div>
    <div class="submit-row">
      <BtnAccept
        @btn-accept-clicked="onClickSubmit"
        >Сохранить задачу
      </BtnAccept>
    </div>
  </div>
</template>

<script>
import BtnAccept from '@/components/btns/BtnAccept.vue'
const axios = require('axios');
const qs = require('qs'); 
// todo: Реализовать отображение/редактирование данных из объекта
export default {
  name: 'TaskForm',
  components: {
    BtnAccept,
  },
  props: {
    task: Object
  },
  data() {
    return {
    }
  },
  methods: {
    onClickSubmit() {
      // todo: Реализовать сохранение изменений     
      /* axios.put(`${process.env.VUE_APP_SOURCE}/api/task/${this.task.id}`, qs.stringify(this.task))
        .then(response => (
          console.log('updated successfully')
          //this.$store.dispatch('loadData') //to update data in left(lists) section
        ))
        .catch(error => (
          console.log(error)
        ))  */
    }
  },
  computed: {
    users(){
      return this.$store.state.user
    },
  },
}
</script>


<style scoped lang="scss">
  .task-form {
    gap: 10px;
    .form-row {
      display: flex;
      flex-direction: column;
      label {
        text-align: left;
      }
      .requirement{
        font-style: italic;
        font-size: 0.8rem;
      }
    }
  }
</style>

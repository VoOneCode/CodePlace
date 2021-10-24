<template>
  <div class="flex-row flex-justify-between">
    <div style="flex-grow:2" class="flex-column left-side">
      <h3>Списки</h3>
      <div class="flex-row flex-justify-evenly list-type-selector">
        <a :class="{ 'button': true,'active': isIssuesActive }" @click="toggleIssues">
          <BtnTab>Проблемы</BtnTab>
        </a>
        <a :class="{ 'button': true,'active': isTasksActive }" @click="toggleTasks">
          <BtnTab>Задачи</BtnTab>          
        </a>
      </div>
      <items-list 
        @issue-selected="loadOCurrentIssue" 
        @task-selected="loadOCurrentTask" 
        :issues="issues"
        :tasks="tasks"
        :users="users"
        :issuesActive="isIssuesActive">
      </items-list>
    </div>
    <div style="flex-grow:2" class="flex-column right-side">
      <h3>Формы</h3>
      <div class="card-wrapper">
        <issue-form v-if="activeTab == 'ISSUES'" :issue="active_issue"/>
        <task-form v-if="activeTab == 'TASKS'" :task="active_task"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList'
import IssueForm from '@/components/IssueForm'
import TaskForm from '@/components/TaskForm'

import BtnAccept from '@/components/btns/BtnAccept.vue'
import BtnTab from '@/components/btns/BtnTab.vue'

const ISSUES_TAB = 'ISSUES';
const TASK_TAB = 'TASKS';
const axios = require('axios');
export default {
  name: 'MainLayout',
  components: { 
    IssueForm,
    TaskForm, 
    ItemsList,
    BtnAccept,
    BtnTab,
  },
  data() {
    return {
      activeTab: ISSUES_TAB,
      active_issue: {},
      active_task: {},
      items: [
        {
          id: 1,
          name: 'Test-1',
          solution: 'foo bar',
          longitude: 34.232,
          latitude: 59.1231,
          price: 900000,
          program: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, saepe.'
        },
        {
          id: 2,
          name: 'Test-2',
          solution: 'foo bar',
          longitude: 34.232,
          latitude: 59.1231,
          price: 600000,
          program: 1,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, saepe.'
        },
        {
          id: 3,
          name: 'Test-3',
          solution: 'foo bar',
          longitude: 34.232,
          latitude: 59.1231,
          price: 100000,
          program: 4,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, saepe.'
        }
      ],
      isIssuesActive: true,
      isTasksActive: false,      
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    users(){
      return this.$store.state.user
    },
    programs(){
      return this.$store.state.program
    },
    issues(){
      return this.$store.state.issue
    },
    tasks(){
      return this.$store.state.task
    },
  },
  methods: {
    loadOCurrentIssue(id){

      axios.get(`${this.$store.state.origin}/api/issue/${id}`)
      .then(responce => {
        this.active_issue = responce.data;
      }) 
      //for development usage
      /* let currentIssue = JSON.parse(localStorage.getItem(`issue1`));
      this.active_issue = currentIssue.data; */
    },
    loadOCurrentTask(id){
      this.active_task =this.tasks[id-1]
    },
    loadData() {
      this.$store.dispatch('loadData')
    },
    loadOneIssue() {
      this.$store.dispatch('loadOneIssue')
    },
    loadTasks() {
      this.$store.dispatch('loadTasks')
    },
    toggleIssues() {
      this.activeTab = ISSUES_TAB;
      this.isIssuesActive = true;
      this.isTasksActive = false;
      this.resetActiveItems()
    },
    toggleTasks() {
      this.activeTab = TASK_TAB;
      this.isTasksActive = true;
      this.isIssuesActive = false;
      this.resetActiveItems()
    },
    resetActiveItems(){
      this.active_issue = {}
      this.active_task = {}
    }
  }
}
</script>

<style scoped lang="scss">
  .left-side {
    padding: 0 10px;
    border-right: 1px solid black;
    .list-type-selector {
      .active {
        .btn{
        font-weight: bolder;
        }
      }
    }
  }
  .right-side {
    padding: 0 10px;
  }
</style>

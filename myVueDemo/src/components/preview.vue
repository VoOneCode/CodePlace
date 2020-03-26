
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop"
		@click="close">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
		@click="close"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            picture view

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-picture"
          id="modalDescription"
        >
          <slot name="picture">
            it is the default picture!
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: rgba(255,255,255,0.5);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
	width: 80%;
  }


  .modal-header {
	padding: 15px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-picture {
    position: relative;
    padding: 5px;
	margin: 0 auto;
	width: 90%;
  }
  .modal-picture img{
	  width: 100%;
  }

  .btn-close {
    border: none;
    font-size: 30px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
</style>
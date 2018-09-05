<template>
<div class="columns">
  <div class="column is-one-third">

    <nav class="panel">
      <h3 class="panel-heading">
          Name
          <small> (Price: PRICE) </small>
        </h3>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="form-control" type="number" placeholder="Quantity">
          <span class="icon is-small is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
        </p>
      </div>
      <div class="panel-block">
        <button class="button is-success is-outlined is-fullwidth">
            reset all filters
          </button>
      </div>
    </nav>


  </div>
</div>
</template>

<script>
export default {
  name: 'producto',

}

  </script>

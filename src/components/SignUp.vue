<template>
    <div class="signup-holder">
      <div class="user-card">
        <div class="h1">New user</div>
        <p>{{firstname}} {{lastname}} <span v-if="login.length">/ {{login}}</span></p>
        <a v-bind:href="'mailto:'+email">{{email}}</a>
      </div>
      <form
        class="signup-form"
        @submit="sendForm">
        <h1>Sign up</h1>
        <div class="signup-form__group required">
          <label for="field-login">Login</label>
          <input
            type="text"
            id="field-login"
            class="signup-form__control"
            v-model="login">
        </div>
        <div class="signup-form__group required">
          <label for="field-email">E-mail</label>
          <input
            type="text"
            id="field-email"
            class="signup-form__control"
            v-model="email">
        </div>
        <div class="signup-form__group required">
          <label for="field-password">Password</label>
          <input
            type="text"
            id="field-password"
            class="signup-form__control"
            v-model="password">
        </div>
        <div class="signup-form__group">
          <div class="signup-form__subgroup">
            <label for="field-fname">First Name</label>
            <input
              type="text"
              id="field-fname"
              class="signup-form__control"
              v-model="firstname">
          </div>
          <div class="signup-form__subgroup">
            <label for="field-lname">Last Name</label>
            <input
              type="text"
              id="field-lname"
              class="signup-form__control"
              v-model="lastname">
          </div>
        </div>
        <div class="signup-form__group">
          <div class="signup-form__subgroup select__subgroup">
            <label for="coutry">Coutry</label>
            <v-select
              id="coutry"
              label="name"
              @input="setCountry"
              :options="$store.state.coutry"
              :value="$store.state.activeCountry">
            </v-select>
          </div>
          <div class="signup-form__subgroup select__subgroup">
            <label for="city">City</label>
            <v-select
              id="city"
              v-model="city"
              :options="availableCity">
            </v-select>
          </div>
        </div>
        <div class="signup-form__group">
          <div class="signup-form__subgroup">
            <label for="birth">Date of birth</label>
            <date-picker id="birth" v-model="datebirth" editable lang="en"></date-picker>
          </div>
          <div class="signup-form__subgroup">
            <label for="code">Zip code</label>
            <input
              type="text"
              id="code"
              class="signup-form__control"
              v-model="code">
          </div>
        </div>
        <div class="signup-form__group row-submit">
          <input
            type="submit"
            value="Sign Up"
            class="signup-form__button">
        </div>
        <div
          class="error"
          v-if="errors.length">
            <p>Заполните поля:</p>
            <ul>
              <li
                v-for="error in errors">
                  {{error}}
              </li>
            </ul>
        </div>
        <div
          class="success"
          v-show="success">
          {{success_msg}}
        </div>
      </form>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'SignUp',
  components: {
    DatePicker
  },
  data() {
    return {
      errors: [],
      password: '',
      code: '',
      success_msg: 'Регистрация прошла успешно!',
      success: false,
      city: null,
      datebirth: ''
    }
  },
  computed: {
    login: {
      get: function() {
        return this.$store.state.userInfo.login
      },
      set: function(value) {
        this.$store.dispatch('CHANGE_LOGIN', value)
      }
    },
    firstname: {
      get: function() {
        return this.$store.state.userInfo.firstName
      },
      set: function(value) {
        this.$store.dispatch('CHANGE_FIRSTNAME', value)
      }
    },
    lastname: {
      get: function() {
        return this.$store.state.userInfo.lastName
      },
      set: function(value) {
        this.$store.dispatch('CHANGE_LASTNAME', value)
      }
    },
    email: {
      get: function() {
        return this.$store.state.userInfo.email
      },
      set: function(value) {
        this.$store.dispatch('CHANGE_EMAIL', value)
      }
    },
    availableCity() {
      return this.$store.state.activeCountry ? this.$store.state.activeCountry.cities : []
    }
  },
  methods: {
    sendForm(e) {
      if (this.login &&
          this.email &&
          this.password ) {
            e.preventDefault();
            this.errors = []
            this.success = true
            return true
      }
      this.errors = []
      this.success = false
      if(!this.login) this.errors.push("Login")
      if(!this.email) this.errors.push("E-mail")
      if(!this.password) this.errors.push("Password")
      e.preventDefault();
    },
    setCountry(value) {
      this.$store.commit('SET_ACTIVE_COUNTRY', value)
    },
  }
}
</script>

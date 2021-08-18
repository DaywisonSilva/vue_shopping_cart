declare module '*.vue' {
  import Vue from 'vue'

  // interface Data {
  //   name: string
  // }

  interface Props {
    items: Array
  }

  // interface Computed {
  //   str: string
  // }
  
  export default Vue.extend<Props, Methods, Computed, Data>()
}

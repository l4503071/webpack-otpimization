export default function(flag) {
  if(true) {
    console.log('truetruetruetrue')
  }
  if(false) {
    console.log('falsefalsefalsefalse')
  }
  console.log(isDev)
  console.log(isDev1)
  if(isDev) {
    console.log('isDev********')
  }
  if(!isDev) {
    console.log('isDev--------')
  }
  if(flag) {
    console.log('flag********')
  }
  if(!flag) {
    console.log('flag--------')
  }
}
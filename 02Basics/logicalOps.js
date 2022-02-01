// Logical oprations are AND OR

// && - AND Operater -> Both side need to be true
// || - Or operation -> one side need to be true


// Exapmle for user enter in paid course or not

let isVerified=true
let isLoggedIn=true
let isPaymentToken=true
let isGuest=true

if (isVerified && isLoggedIn && isPaymentToken ){
    console.log('User get the paid cousre')
}else if (isGuest || isVerified) {
    console.log('user get the demo course')
}else{
    console.log('user dont get any cousre ' )
}
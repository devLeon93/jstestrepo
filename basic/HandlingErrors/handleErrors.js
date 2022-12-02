const fnWithError = () => {
    throw new Error('Some Error')
}
try {
    fnWithError()
} catch (error){
    console.error(error)
    console.log(error.message)
}
console.log('Continue...')
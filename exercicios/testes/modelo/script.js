function parimp(n){
    let num = document.getElementById('txtn')
    let resu = document.getElementById('resu')
    let n = Number(num.value)

    if (n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp()
resu.innerHTML = `O número é ${res}`
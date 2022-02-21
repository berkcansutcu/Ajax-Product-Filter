var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if (xhr.status == 200) {
        if (xhr.readyState == 4) {
            let products = document.getElementById('products')

            let xmlProducts = xhr.responseXML.getElementsByTagName("product")
            let codes = "";
            for (i = 0; i < xmlProducts.length; i++) {
                codes += `<div class='col-md-3 my-3 product'>
                <img src='${xmlProducts[i].getElementsByTagName('photo')[0].textContent}' class='productImage w-100'>
                <div class="title">
                <h6 class="productTitle p-2">${xmlProducts[i].getElementsByTagName('name')[0].textContent}</h6>
                </div>
                <span class="align-center p-2">${xmlProducts[i].getElementsByTagName('category')[0].textContent}</span><br>
                <h3 class="price p-2">${xmlProducts[i].getElementsByTagName('price')[0].textContent} ₺</h3>
                <button class="btn btn-warning mb-3 add">Sepete Ekle</button>
            </div>`
            }

            products.innerHTML += codes;
        }

    }
}



document.getElementById("filter").addEventListener("click", (e) => {
    let marka = [];


    if (document.getElementById("iphone").checked) {
        if (marka.indexOf("iPhone") >= 0) {

        } else {

            marka.push("iPhone")
        }


    }


    if (document.getElementById("samsung").checked) {
        if (marka.indexOf("Samsung") >= 0) {

        } else {
            marka.push("Samsung")
        }

    }


    if (document.getElementById("xiaomi").checked) {
        if (marka.indexOf("Xiaomi") >= 0) {

        } else {
            marka.push("Xiaomi")
        }

    }


    if (document.getElementById("huawei").checked) {
        if (marka.indexOf("Huawei") >= 0) {

        } else {
            marka.push("Huawei")
        }

    }


    if (document.getElementById("reeder").checked) {
        if (marka.indexOf("Reeder") >= 0) {

        } else {

            marka.push("Reeder")
        }

    }


    document.getElementById('products').innerHTML = "";
    takeName(marka)
    e.preventDefault();
})

function takeName(arr) {
    if(arr.length<=0){
        xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://alibilg.xyz/berkcan/product.xml", true)
        xhr.send()
    }

    arr.forEach(element => {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.status == 200) {
                if (xhr.readyState == 4) {
                    let products = document.getElementById('products')

                    let xmlProducts = xhr.responseXML.getElementsByTagName("product")
                    let codes = "";
                    for (i = 0; i < xmlProducts.length; i++) {
                        if (element == xmlProducts[i].getElementsByTagName('category')[0].textContent) {

                            codes += `<div class='col-md-3 my-3 product'>
                          <img src='${xmlProducts[i].getElementsByTagName('photo')[0].textContent}' class='productImage w-100'>
                          <div class="title">
                          <h6 class="productTitle p-2">${xmlProducts[i].getElementsByTagName('name')[0].textContent}</h6>
                          </div>
                          <span class="align-center p-2">${xmlProducts[i].getElementsByTagName('category')[0].textContent}</span><br>
                          <h3 class="price p-2">${xmlProducts[i].getElementsByTagName('price')[0].textContent} ₺</h3>
                          <button class="btn btn-warning mb-3 add">Sepete Ekle</button>
                          </div>`



                        }
                        else {

                        }


                    }
                    products.innerHTML += codes;
                }


            }
        }

        xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://alibilg.xyz/berkcan/product.xml", true)
        xhr.send()
    });
}

xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://alibilg.xyz/berkcan/product.xml", true)
xhr.send()


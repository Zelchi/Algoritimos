const ordenar = require('./bubbleSort');

const numbers = [9, 4, 200, 10, 333, 10, 15, 2, 12, 3, 10, 100, 14, 13];
const numbers2 = [76, 57, 78, 83, 53, 70, 63, 87, 81, 87, 50, 89, 81];

const nums1 = ordenar(numbers);
const nums2 = ordenar(numbers2);

function juntarLista(nums1, nums2) {
    const novaLista = [];
    let posiAtualLista1 = 0;
    let posiAtualLista2 = 0;
    let atual = 0;

    while (posiAtualLista1 < nums1.length && posiAtualLista2 < nums2.length) {
        let produtoAtualLista1 = nums1[posiAtualLista1];
        let produtoAtualLista2 = nums2[posiAtualLista2];

        if (produtoAtualLista1 < produtoAtualLista2) {
            novaLista[atual] = produtoAtualLista1;
            posiAtualLista1++
        } else {
            novaLista[atual] = produtoAtualLista2;
            posiAtualLista2++
        };
        atual++;
    };
    while (posiAtualLista1 < nums1.length) {
        novaLista[atual] = nums1[posiAtualLista1];
        posiAtualLista1++
        atual++
    };
    while (posiAtualLista2 < nums2.length) {
        novaLista[atual] = nums2[posiAtualLista2];
        posiAtualLista2++
        atual++
    };

    console.log(novaLista);
    return novaLista;
};

juntarLista(nums1, nums2);
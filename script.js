
        var cevap = document.getElementById('cevap');
        var kelime = document.getElementById('kelime');
        var btn = document.getElementById('btn');
        var durum = document.getElementById('durum');
        var tablo = document.getElementById('tablo');
        var sonuc = document.getElementById('sonuc');
        let sayilar=[];
        let kelimeler=[];
        let cevaplar=[];
        let telaffuz=[];
        let jsonData = fetch("words.json")
        .then(response=>response.json())
        .then(words=>{
            words.verbs.forEach(verb => {
                kelimeler.push(verb.english);
                cevaplar.push(verb.turkish);              
                telaffuz.push(verb.pronunciation);              
            });
            var sayi = randomSayi();
            var toplam = cevaplar.length;
            kelime.innerHTML = kelimeler[sayi];
            btn.onclick = function(){
                let kontrol = false;
                cevaplar[sayi].forEach(gelenCevap=>{
                    if(cevap.value == gelenCevap){
                            durum.classList.add('dogru');
                            durum.classList.remove('yanlis');
                            // var tr = document.createElement('tr');
                            // var td1 = document.createElement('td');
                            // var td2 = document.createElement('td');      
                            var english=kelimeler[sayi];
                            var turkish=cevaplar[sayi];
                            var pronunciation=telaffuz[sayi];
                            // var td1icerik = document.createTextNode(english);
                            // var td2icerik = document.createTextNode(turkish);
                            // td1.appendChild(td1icerik);
                            // td2.appendChild(td2icerik);
                            // tr.appendChild(td1);
                            // tr.appendChild(td2);
                            // tablo.appendChild(tr);
                            tablo.innerHTML += `<tr>
                                                    <td>${english}</td>
                                                    <td>${turkish}</td>
                                                    <td>${pronunciation}</td>
                                               </tr>`
                            sayi = randomSayi();
                            kontrol=true;
                            sonuc.innerHTML = '';
                    }else if(kontrol != true){
                            kontrol = false;
                            durum.classList.add('yanlis');
                            durum.classList.remove('dogru');
                            sonuc.innerHTML = 'Doğru Cevap : ' + cevaplar[sayi];
                    }
                })                    

                cevap.value = '';

                if(sayilar.length>toplam){
                    sayilar = [];
                }
                kelime.innerHTML = kelimeler[sayi];       
            }
                cevap.addEventListener('keyup', function (event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    btn.click();
                }
            });
        })
        
        

        



    let page = document.getElementById("page");

let myRequest = new Request("https://raw.githubusercontent.com/Tzemona/ProjectWork/master/film.json");

        fetch(myRequest)
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            console.log(data);

            data.database.forEach(element => {
                let film_container = document.createElement("div");
                film_container.id = "film_id"+element.id;
                film_container.className = "film";

                let img_container = document.createElement("div");
                img_container.id = "img_left";
                let text_container = document.createElement("div");
                text_container.id = "text_right";

                let copertina = document.createElement("img");
                copertina.srcset = element.copertina;


                let titolo = document.createElement("h2");
                titolo.innerHTML= element.titolo;
                

                let durata = document.createElement("p");
                durata.innerHTML= "Durata: "+element.durata+ "cm";

                let regia = document.createElement("p");
                regia.innerHTML= "Regia di: "+element.regia;
                
                img_container.append(copertina);

                film_container.append(img_container);
                film_container.append(text_container);

                text_container.append(titolo);
                text_container.append(durata);
                text_container.append(regia);

                page.append(film_container);

            });
        });

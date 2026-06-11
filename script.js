// ===============================
// CARDÁPIO DAS SEMANAS 1 E 3
// ===============================

const cardapioSemana13 = {

    segunda: {
        merenda: {
            nome: "Cuscuz com carne moída e café com leite",
            foto: ""
        },

        almoco: {
            nome: "Filé de frango acebolado",
            foto: ""
        },

        lanche: {
            nome: "Pão de massa fina com ovo e vitamina de goiaba",
            foto: ""
        }
    },

    terca: {
        merenda: {
            nome: "Canja de frango e pão",
            foto: ""
        },

        almoco: {
            nome: "1ª Opção: Lombo suíno ao molho | 2ª Opção: Omelete de carne moída",
            foto: ""
        },

        lanche: {
            nome: "Tapioca com frango, café com leite e melão",
            foto: ""
        }
    },

    quarta: {
        merenda: {
            nome: "Bolo fofo e café com leite",
            foto: ""
        },

        almoco: {
            nome: "Picadinho de carne",
            foto: "/img/picadinhocarne.jpg"
        };

        lanche: {
            nome: "Maria Isabel com suco de caju",
            foto: ""
        }
    },

    quinta: {
        merenda: {
            nome: "Pão com patê de frango",
            foto: "img/pate-frango.jpg"
        },

        almoco: {
            nome: "Iscas de frango ao molho",
            foto: ""
        },

        lanche: {
            nome: "Cuscuz com ovo e café com leite",
            foto: ""
        }
    },

    sexta: {
        merenda: {
            nome: "Cuscuz com frango desfiado e café com leite",
            foto: ""
        },

        almoco: {
            nome: "Suino acebolado (2º opção:filé de frango)",
            foto: ""
        },

        lanche: {
            nome: "Macarronada e suco de manga",
            foto: "/img/cuscuzcarne.jpg"     }
    }
};


// ===============================
// DIA DA SEMANA
// ===============================

const diasSemana = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado"
];

const hoje = diasSemana[new Date().getDay()];


// ===============================
// MOSTRAR CARDÁPIO
// ===============================

const refeicoes = cardapioSemana13[hoje];

if (refeicoes) {

    const tituloDia =
        document.querySelector(".diaSemana");

    tituloDia.textContent =
        hoje.charAt(0).toUpperCase() +
        hoje.slice(1);

    const titulos =
        document.querySelectorAll(".js-card-title");

    const imagens =
        document.querySelectorAll(".js-card-img");

    const lista = [
        refeicoes.merenda,
        refeicoes.almoco,
        refeicoes.lanche
    ];

    lista.forEach((item, index) => {

        titulos[index].textContent =
            item.nome;

        imagens[index].src =
            item.foto;

        imagens[index].alt =
            item.nome;
    });
}


// ===============================
// FEEDBACK
// ===============================

function enviarFeedback() {

    const espera =
        document.querySelector(
            'input[name="espera"]:checked'
        )?.value || "Não respondeu";

    const qualidade =
        document.querySelector(
            'input[name="qualidade"]:checked'
        )?.value || "Não respondeu";

    const adicionais =
        [...document.querySelectorAll(
            'input[name="adicionais"]:checked'
        )].map(item => item.value);

    const sugestao =
        document.getElementById("outro").value;

    const feedback = {

        data:
            new Date().toLocaleDateString("pt-BR"),

        espera,

        qualidade,

        adicionais,

        sugestao
    };

    console.log("Feedback recebido:");
    console.log(feedback);

    alert("Obrigado pelo feedback! 💚");
      }

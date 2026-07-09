let currentUser = null;

function normalizarNome(nome) {
    return nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

        
}

const presets = {

    1: {
        nome: "Folga Ruan",

        observacao: "Folga Ruan",

        users: [
            {
                nome: "Daiane",
                escala: [
                    "Nexnett",
                    "Ceraça",
                    "Netup",
                    "Conexão Mais",
                    "Sim Digital",
                    "TCF",
                    "Fibinet",
                    "Nitro abre 17h30"
                ]
            },
            {
                nome: "Ana Paula",
                escala: [
                    "Ceraça",
                    "Click",
                    "Connect Master",
                    "Vilanet",
                    "Space",
                    "Sim Digital",
                    "Nexnett",
                    "Tenet abre 17h30"
                ]
            },
            {
                nome: "Mônica",
                escala: [
                    "PG ON",
                    "Worksat",
                    "Connect Master",
                    "Fibinet",
                    "Impacta",
                    "Sim Digital",
                    "Rede Telecom",
                    "Gospel abre 17h40"
                ]
            }
        ]
    },

    2: {
        nome: "Folga Ana",

        observacao: "Folga Ana",

        users: [
            {
                nome: "Daiane",
                escala: [
                    "Nexnett",
                    "Ceraça",
                    "Netup",
                    "Vilanet",
                    "Sim Digital",
                    "TCF",
                    "Gospel abre 17h40"
                ]
            },
            {
                nome: "Mônica",
                escala: [
                    "PG ON",
                    "Worksat",
                    "Connect Master",
                    "Fibinet",
                    "Impacta",
                    "Sim Digital",
                    "Space",
                    "Tenet abre 17h30"
                ]
            },
            {
                nome: "Ruan",
                escala: [
                    "Ceraça",
                    "Click",
                    "Conexão Mais",
                    "Sim Digital",
                    "Rede Telecom",
                    "Nexnett",
                    "Fibinet",
                    "Nitro abre 17h30"
                ]
            }
        ]
    },

    3: {
        nome: "Folga Mônica",

        observacao: "Folga Mônica",

        users: [
            {
                nome: "Daiane",
                escala: [
                    "Nexnett",
                    "Netup",
                    "Worksat",
                    "Sim Digital",
                    "TCF",
                    "Fibinet",
                    "Tenet abre 17h30"
                ]
            },
            {
                nome: "Ana Paula",
                escala: [
                    "Space",
                    "Ceraça",
                    "Vilanet",
                    "Fibinet",
                    "Click",
                    "Sim Digital",
                    "Connect Master",
                    "Gospel abre 17h40"
                ]
            },
            {
                nome: "Ruan",
                escala: [
                    "Ceraça",
                    "PG ON",
                    "Conexão Mais",
                    "Sim Digital",
                    "Rede Telecom",
                    "Connect Master",
                    "Impacta",
                    "Nitro abre 17h30"
                ]
            }
        ]
    },

    4: {
        nome: "Todos",

        observacao: "Todos",

        users: [
            {
                nome: "Daiane",
                escala: [
                    "Fibinet",
                    "Conexão Mais",
                    "Netup",
                    "Sim Digital",
                    "Tenet abre 17h30"
                ]
            },
            {
                nome: "Ana Paula",
                escala: [
                    "Space",
                    "Ceraça",
                    "Vilanet",
                    "Nexnett",
                    "Sim Digital",
                    "TCF",
                    "Gospel abre 17h40"
                ]
            },
            {
                nome: "Ruan",
                escala: [
                    "Ceraça",
                    "Nexnett",
                    "Conexão Mais",
                    "Sim Digital",
                    "Connect Master",
                    "Click",
                    "Nitro abre 17h30"
                ]
            },
            {
                nome: "Mônica",
                escala: [
                    "PG ON",
                    "Worksat",
                    "Fibinet",
                    "Sim Digital",
                    "Connect Master",
                    "Impacta",
                    "Rede Telecom"

                ]
            }
        ]
    }

};

const coresEmpresas = [
    "rgba(255, 182, 193, 0.25)", // rosa
    "rgba(173, 216, 230, 0.25)", // azul
    "rgba(144, 238, 144, 0.25)", // verde
    "rgba(255, 218, 185, 0.25)", // pêssego
    "rgba(221, 160, 221, 0.25)", // lilás
    "rgba(255, 255, 180, 0.25)", // amarelo
    "rgba(176, 224, 230, 0.25)", // azul claro
    "rgba(240, 230, 140, 0.25)", // khaki
    "rgba(255, 204, 229, 0.25)", // pink claro
    "rgba(204, 255, 229, 0.25)"  // verde água
];

const fotosEspeciais = {
    "ruan": "fotos/ruan.png",
    "daiane": "fotos/daiane.png",
    "monica": "fotos/monica.png",
    "ana paula": "fotos/ana paula.png",
    "rey delas": "fotos/rey delas.gif",
    "reynaldo": "fotos/reynaldo.png",
    "gabrieli": "fotos/gabrieli.png",
    "pedro lucas": "fotos/pedro lucas.png",
    "emerson": "fotos/emerson.png",
    "joao": "fotos/joao.png",
    "pedro henrique": "fotos/pedro henrique.png",
    "evelyn": "fotos/evelyn.png",
    "keren": "fotos/keren.png",
    "maria petriaggi": "fotos/maria petriaggi.png"
};

function obterFoto(nome) {
    return fotosEspeciais[normalizarNome(nome)]
        || "fotos/default.png";
}

function resetarTudo() {

    localStorage.clear();
    location.reload();
}

function gerarMapaDeCores() {

    const contador = {};

    users.forEach(user => {
    (user.escala || []).forEach(item => {
        contador[item] = (contador[item] || 0) + 1;
    });
});
    const empresasDuplicadas =
        Object.keys(contador)
            .filter(item => contador[item] >= 2);

    const mapaCores = {};

    empresasDuplicadas.forEach((empresa, index) => {

        mapaCores[empresa] =
            coresEmpresas[index % coresEmpresas.length];

    });

    return mapaCores;
}



function salvarDados() {
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );
}


const users =
    JSON.parse(localStorage.getItem("users"))
    || [ {
        nome: "Atendente", 
        foto: "fotos/default.png", 
        escala: ["EMPRESA"]
    }

    ];

function renderUsers() {

    const mapaCores = gerarMapaDeCores();

    const container = document.getElementById("users-container");

    container.innerHTML = "";

    users.forEach(user => {

        const userDiv = document.createElement("div");
        userDiv.className = "user";

        userDiv.innerHTML = `
            <div class="profile-card">
                <img src="${obterFoto(user.nome)}">
                <p>${user.nome}</p>

                <div class="button-group">
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">Deletar</button>
                </div>
            </div>

            <div class="list-box"></div>
        `;

        const listBox = userDiv.querySelector(".list-box");

        const editBtn = userDiv.querySelector(".edit-btn");
        const deleteBtn = userDiv.querySelector(".delete-btn");

        editBtn.onclick = () => {

            currentUser = user;

            document
                .getElementById("edit-name")
                .value = user.nome;

            const listContainer =
                document.getElementById("edit-list-container");

            listContainer.innerHTML = "";

            (user.escala || []).forEach(item => {

                const row = document.createElement("div");
                    row.className = "list-item-row";

                    const input = document.createElement("input");

                    input.type = "text";
                    input.value = item;
                    input.className = "list-item-input";

                    const deleteBtn = document.createElement("button");

                    deleteBtn.textContent = "✕";
                    deleteBtn.className = "remove-item-btn";

                    deleteBtn.onclick = () => {
                        row.remove();
                    };

                    row.appendChild(input);
                    row.appendChild(deleteBtn);

                    listContainer.appendChild(row);
            });

            document
                .getElementById("edit-modal")
                .classList.remove("hidden");
        };

        deleteBtn.onclick = () => {

            const confirmar = confirm(
                `Deseja deletar ${user.nome} da escala?`
            );

            if (!confirmar) {
                return;
            }

            const index = users.indexOf(user);

            users.splice(index, 1);

                salvarDados();
                renderUsers();
        };

        (user.escala || []).forEach(item => {

            const row = document.createElement("div");

            row.className = "row";
            row.textContent = item;

            if (mapaCores[item]) {
                row.style.backgroundColor =
                    mapaCores[item];
            }

            listBox.appendChild(row);
        });

        container.appendChild(userDiv);
    });

    const addButton = document.createElement("button");

    addButton.id = "add-user-btn";
    addButton.textContent = "+";

    addButton.onclick = () => {

        users.push({
            nome: "Atendente",
            foto: "fotos/default.png",
            escala: []
        });

        salvarDados();
        renderUsers();
    };

    container.appendChild(addButton);
}

renderUsers();

document.getElementById("save-btn").onclick = () => {

    currentUser.nome =
        document.getElementById("edit-name").value;

    currentUser.escala = Array.from(
        document.querySelectorAll(".list-item-input")
    )
    .map(input => input.value.trim())
    .filter(value => value !== "");

        document
            .getElementById("edit-modal")
            .classList.add("hidden");

        salvarDados();
        renderUsers();
    };

document.getElementById("cancel-btn").onclick = () => {

    document
        .getElementById("edit-modal")
        .classList.add("hidden");
};

document.getElementById("add-item-btn").onclick = () => {

    const row = document.createElement("div");
    row.className = "list-item-row";

    const input = document.createElement("input");

    input.type = "text";
    input.className = "list-item-input";

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "✕";
    deleteBtn.className = "remove-item-btn";

    deleteBtn.onclick = () => {
        row.remove();
    };

    row.appendChild(input);
    row.appendChild(deleteBtn);

    document
        .getElementById("edit-list-container")
        .appendChild(row);

    input.focus();
};

document.getElementById("reset-btn").onclick = () => {

    const confirmar = confirm(
        "Tem certeza que deseja resetar a escala?"
    );

    if (!confirmar) {
        return;
    }

    resetarTudo();
};

const headerNote =
    document.getElementById("header-note");

const savedNote =
    localStorage.getItem("headerNote");

if (savedNote) {

    headerNote.value = savedNote;

    headerNote.classList.add("filled");
}

headerNote.addEventListener("input", () => {

    localStorage.setItem(
        "headerNote",
        headerNote.value
    );

    if (headerNote.value.trim() === "") {
        headerNote.classList.remove("filled");
    } else {
        headerNote.classList.add("filled");
    }
});

const presetBtn =
    document.getElementById("preset-btn");

const presetMenu =
    document.getElementById("preset-menu");

presetBtn.onclick = () => {

    presetMenu.classList.toggle("hidden");

};

document.querySelectorAll(".preset-option")
.forEach(botao => {

    botao.onclick = () => {

        const id = botao.dataset.preset;

        users.length = 0;

        presets[id].users.forEach(user => {

            users.push(
                structuredClone(user)
            );

        });

        headerNote.value =
            presets[id].observacao;

        headerNote.classList.add("filled");

        localStorage.setItem(
            "headerNote",
            presets[id].observacao
        );

        salvarDados();

        renderUsers();

        presetMenu.classList.add("hidden");
    };

});



// ? neck and waist in cm
// ! Body fat percentage calculator (gender,height,weight,neck,waist,hip==>for females)

function percentualGordura() {
    let gender = document.getElementById("gender1").value;
    let weight = parseInt(document.getElementById("peso1").value);
    let height = parseInt(document.getElementById("altura1").value);
    let neck = parseInt(document.getElementById("pescoco").value);
    let waist = parseInt(document.getElementById("cintura").value);
    let hip = parseInt(document.getElementById("quadril").value);

    const percentualGorduraBrasil = (gender, height, weight, neck, waist, hip) => {
        try {
            // Verificar se os parâmetros estão preenchidos corretamente
            if (!gender) throw "Gênero não informado.";
            if (!height || typeof height !== "number") throw "Altura não informada ou não é um número.";
            if (!weight || typeof weight !== "number") throw "Peso não informado ou não é um número.";
            if (!neck || typeof neck !== "number") throw "Circunferência do pescoço não informada ou não é um número.";
            if (!waist || typeof waist !== "number") throw "Cintura não informada ou não é um número.";
            if (gender.toLowerCase() !== "masculino" && gender.toLowerCase() !== "feminino") throw "O gênero deve ser 'masculino' ou 'feminino'.";

            // Cálculo do percentual de gordura
            if (gender.toLowerCase() === "masculino") {
                return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450;
            } else if (gender.toLowerCase() === "feminino") {
                if (!hip || typeof hip !== "number") throw "Quadril não informado ou não é um número.";
                return (495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height))) - 450;
            }
        } catch (error) {
            return error;
        }
    };

    alert("Seu percentual de gordura corporal é de: " + percentualGorduraBrasil(gender, height, weight, neck, waist, hip) + "%");
}

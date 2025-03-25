import React, { useState } from "react";
import Input from "../../components/InputField/InputField";
import Result from "../../components/ResultDisplay/ResultDisplay";
import Button from "../../components/Button/Button";
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay";
import InputField from "../../components/InputField/InputField";

function TipCalculatorPage() {
    const [valorConta, setValorConta] = useState("");
    const [percentualGorjeta, setPercentualGorjeta] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularGorjeta = () => {
        const valor = parseFloat(valorConta);
        const valorGorjeta = (valor * parseFloat(percentualGorjeta)) / 100
        const total = valor + valorGorjeta
        setResultado({ gorjeta: valorGorjeta, total: total })
    }

    return (
        <>
            <h1> Calculadora de gorjeta </h1>

            <InputField
                label="Valor da conta:"
                value={valorConta}
                onChange={(e) => setValorConta(e.target.value)}
            />

            <InputField
                label="Porcentagem da gorjeta (%):"
                value={percentualGorjeta}
                onChange={(e) => setPercentualGorjeta(e.target.value)}
            />

            <Button
                text="Calcular" onClick={calcularGorjeta}
            />

            <ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total} />
        </>
    );
}

export default TipCalculatorPage;
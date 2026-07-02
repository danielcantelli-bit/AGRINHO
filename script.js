function calcular(){

    let area = Number(document.getElementById("area").value);
    
    let irrigacao = Number(document.getElementById("irrigacao").value);
    
    let preservacao = document.getElementById("preservacao").value;
    
    let solar = document.getElementById("solar").value;
    
    let coleta = document.getElementById("coleta").value;
    
    let agua = area * irrigacao * 1000;
    
    let pontos = 0;
    
    if(preservacao=="sim"){
        pontos +=30;
    }
    
    if(solar=="sim"){
        pontos +=35;
    }
    
    if(coleta=="sim"){
        pontos +=35;
    }
    
    let nivel="";
    
    if(pontos>=80){
    
        nivel="🟢 Excelente";
    
    }else if(pontos>=50){
    
        nivel="🟡 Bom";
    
    }else{
    
        nivel="🔴 Precisa Melhorar";
    }
    
    let dicas=[];
    
    if(preservacao=="nao"){
        dicas.push("🌳 Preserve áreas verdes.");
    }
    
    if(solar=="nao"){
        dicas.push("☀️ Considere utilizar energia solar.");
    }
    
    if(coleta=="nao"){
        dicas.push("♻️ Faça coleta seletiva.");
    }
    
    if(irrigacao>6){
        dicas.push("💧 Reduza o tempo de irrigação.");
    }
    
    if(dicas.length==0){
        dicas.push("👏 Parabéns! Sua propriedade apresenta boas práticas sustentáveis.");
    }
    
    let resultado=document.getElementById("resultado");
    
    resultado.style.display="block";
    
    resultado.innerHTML=`
    
    <h2>Resultado</h2>
    
    <p><strong>Consumo estimado de água:</strong> ${agua.toLocaleString()} litros/dia</p>
    
    <p><strong>Índice de Sustentabilidade:</strong> ${pontos}%</p>
    
    <p><strong>Classificação:</strong> ${nivel}</p>
    
    <hr>
    
    <h3>Dicas</h3>
    
    <ul>
    
    ${dicas.map(item=>`<li>${item}</li>`).join("")}
    
    </ul>
    
    `;
    }
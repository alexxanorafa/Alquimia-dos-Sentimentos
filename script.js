// ============================================
// ALQUIMIA DO TEMPO v2.0 - SISTEMA MULTIDIMENSIONAL
// ============================================

class QuantumEngine {
  constructor() {
    // Pesos dimensionais
    this.dimensions = {
      temporal: 0.35,    // Tempo real (35%)
      espacial: 0.20,    // Localização geográfica (20%)
      lunar: 0.15,       // Ciclo lunar (15%)
      pessoal: 0.10,     // Dados do usuário (10%)
      quantica: 0.15,    // Aleatoriedade quântica (15%)
      caos: 0.05         // Elemento caótico (5%)
    };
    
    // Base de dados expandida
    this.data = {
      0: { 
        verso: "No princípio era o vazio, e o vazio era potencial.", 
        autor: "Anónimo", 
        psic: "Inconsciente Coletivo: O útero de todas as ideias.", 
        ciencia: "Singularidade: O ponto anterior ao Big Bang.", 
        pedag: "Ensina a importância da pausa e do silêncio.",
        categoria: "Origem"
      },
      1: { 
        verso: "Sou o capitão da minha alma.", 
        autor: "William Henley", 
        psic: "Arquétipo do Herói: O início da individuação.", 
        ciencia: "O Átomo: A unidade fundamental da matéria.", 
        pedag: "Ensina a autonomia e o valor do ponto de origem.",
        categoria: "Individualidade"
      },
      2: { 
        verso: "A vida é a arte do encontro.", 
        autor: "Vinícius de Moraes", 
        psic: "Anima/Animus: A busca pelo equilíbrio dos opostos.", 
        ciencia: "Binário: A base de toda a lógica computacional.", 
        pedag: "Ensina a diplomacia e a cooperação.",
        categoria: "Dualidade"
      },
      3: { 
        verso: "Tudo vale a pena se a alma não é pequena.", 
        autor: "Fernando Pessoa", 
        psic: "A Trindade: O nascimento da criatividade.", 
        ciencia: "Geometria: O triângulo como a primeira forma estável.", 
        pedag: "Ensina a expressão e a expansão da comunicação.",
        categoria: "Criatividade"
      },
      4: { 
        verso: "A ordem é o prazer da razão.", 
        autor: "Paul Claudel", 
        psic: "A Sombra: A necessidade de estrutura para conter o caos.", 
        ciencia: "Quaternário: Os 4 estados da matéria.", 
        pedag: "Ensina a disciplina, o trabalho e as raízes sólidas.",
        categoria: "Estrutura"
      },
      5: { 
        verso: "Navegar é preciso; viver não é preciso.", 
        autor: "Pessoa", 
        psic: "Puer Aeternus: O espírito livre que busca a mudança.", 
        ciencia: "Entropia: A tendência natural para a desordem.", 
        pedag: "Ensina a adaptação e a liberdade pela experiência.",
        categoria: "Liberdade"
      },
      6: { 
        verso: "A beleza salvará o mundo.", 
        autor: "Dostoievski", 
        psic: "O Amante: A harmonia do lar e a estética.", 
        ciencia: "Carbono: A base da vida orgânica (6 ligações).", 
        pedag: "Ensina o serviço comunitário e o amor.",
        categoria: "Harmonia"
      },
      7: { 
        verso: "Penso, logo existo.", 
        autor: "Descartes", 
        psic: "O Sábio: A introspeção e o mistério do inconsciente.", 
        ciencia: "Espectro: As 7 cores da luz e oitavas musicais.", 
        pedag: "Ensina o estudo profundo e a análise científica.",
        categoria: "Sabedoria"
      },
      8: { 
        verso: "O homem é a medida de todas as coisas.", 
        autor: "Protágoras", 
        psic: "O Governante: O poder material em equilíbrio.", 
        ciencia: "Infinito: O 8 deitado, o ciclo eterno de energia.", 
        pedag: "Ensina a justiça, a colheita e a autoridade ética.",
        categoria: "Poder"
      },
      9: { 
        verso: "O fim de uma viagem é apenas o começo de outra.", 
        autor: "Saramago", 
        psic: "O Velho Sábio: A conclusão de ciclos.", 
        ciencia: "Gestação: O ciclo de 9 meses da criação humana.", 
        pedag: "Ensina o desapego e a fraternidade universal.",
        categoria: "Completude"
      },
      11: { 
        verso: "A intuição é a inteligência que não precisa de palavras.", 
        autor: "Bergson", 
        psic: "Mestre Intuitivo: Ponte entre o visível e invisível.", 
        ciencia: "Dualidade Onda-Partícula: O comportamento quântico.", 
        pedag: "Número Mestre: Ensina a iluminação e o idealismo.",
        categoria: "Intuição"
      },
      22: { 
        verso: "Nada é impossível para uma mente determinada.", 
        autor: "Arquimedes", 
        psic: "O Arquiteto Mundial: Materializar sonhos utópicos.", 
        ciencia: "A Teoria de Tudo: A unificação das leis físicas.", 
        pedag: "Número Mestre: Ensina a construção de legados.",
        categoria: "Manifestação"
      },
      33: { 
        verso: "O amor é a única realidade criadora.", 
        autor: "Pierre Teilhard de Chardin", 
        psic: "Mestre Curador: Cura em todos os níveis.", 
        ciencia: "Consciência Universal: Interconexão de tudo.", 
        pedag: "Número Mestre: Ensina a compaixão universal.",
        categoria: "Amor"
      },
      44: { 
        verso: "A matéria é espírito condensado.", 
        autor: "Vivekananda", 
        psic: "Mestre Construtor: Manifestação espiritual na matéria.", 
        ciencia: "Matéria Escura: A estrutura oculta do universo.", 
        pedag: "Número Mestre: Ensina a disciplina espiritual.",
        categoria: "Manifestação"
      }
    };
    
    // Gramática quântica
    this.gramatica = {
      sujeitos: [
        "A função de onda", "O observador", "A partícula entrelaçada", 
        "O campo quântico", "A superposição", "A consciência", 
        "O vazio quântico", "O emaranhamento", "A probabilidade"
      ],
      verbos: [
        "colapsa", "observa", "entrelaça", "fluctua", "superpõe",
        "ressoa", "manifesta", "transmuta", "sincroniza", "evolui"
      ],
      complementos: [
        "o agora presente.", "a realidade observada.", "o campo unificado.", 
        "o potencial infinito.", "a consciência cósmica.", "o vazio criativo.",
        "a matriz divina.", "a teia da vida.", "o holograma universal."
      ],
      adverbios: [
        "quanticamente", "holisticamente", "sincreticamente", 
        "multidimensionalmente", "entrelaçadamente", "resonantemente"
      ]
    };
    
    // Histórico de estados
    this.history = {
      frequencies: [],
      states: [],
      patterns: [],
      coincidences: []
    };
    
    // Memória quântica
    this.quantumMemory = {
      superposition: [],
      collapsed: [],
      entangled: []
    };
    
    // Sistema de sincronicidade
    this.synchronicity = {
      index: 0,
      meaningfulCoincidences: 0,
      patterns: new Map(),
      lastAnalysis: null
    };
    
    // Configuração física
    this.physics = {
      schumannFrequency: 7.83,
      planckConstant: 6.62607015e-34,
      speedOfLight: 299792458,
      goldenRatio: 1.61803398875
    };
  }
  
  // =========== ALGORITMOS PRINCIPAIS ===========
  
  reduzirAvancado(numero) {
    // Números mestres quânticos
    const quantumMasters = [11, 22, 33, 44];
    if (quantumMasters.includes(numero)) return numero;
    
    // Redução teosófica
    let soma = this.somaDigitos(numero);
    
    // Se ainda maior que 9, reduz novamente
    while (soma > 9 && !quantumMasters.includes(soma)) {
      soma = this.somaDigitos(soma);
    }
    
    // 30% de chance de superposição quântica
    if (Math.random() < 0.3 && soma < 9) {
      const superposicao = Math.random() < 0.5 ? soma : soma + 1;
      return `${soma}│${superposicao}`;
    }
    
    return soma;
  }
  
  somaDigitos(n) {
    return n.toString().split('').reduce((a, b) => +a + +b, 0);
  }
  
  calcularRessonanciaMultidimensional() {
    const agora = new Date();
    
    // 1. DIMENSÃO TEMPORAL (35%)
    const segundosDesdeMeiaNoite = 
      agora.getHours() * 3600 + 
      agora.getMinutes() * 60 + 
      agora.getSeconds() +
      agora.getMilliseconds() / 1000;
    
    const frequenciaBase = this.reduzirAvancado(
      Math.floor(segundosDesdeMeiaNoite * 100)
    );
    
    // 2. DIMENSÃO ESPACIAL (20%)
    const fusoHorario = Math.abs(agora.getTimezoneOffset() / 60);
    const latitudeVirtual = Math.sin(fusoHorario * Math.PI / 12) * 45;
    const frequenciaEspacial = this.reduzirAvancado(
      Math.floor(Math.abs(latitudeVirtual) * 100)
    );
    
    // 3. DIMENSÃO LUNAR (15%)
    const faseLunar = this.calcularFaseLunar(agora);
    const frequenciaLunar = this.reduzirAvancado(
      Math.floor(faseLunar * 100)
    );
    
    // 4. DIMENSÃO PESSOAL (10%)
    const frequenciaPessoal = localStorage.getItem('user_frequency') 
      ? parseInt(localStorage.getItem('user_frequency'))
      : this.reduzirAvancado(agora.getDate() * agora.getMonth() + 1);
    
    // 5. DIMENSÃO QUÂNTICA (15%)
    const frequenciaQuantica = this.gerarFrequenciaQuantica();
    
    // 6. DIMENSÃO CAÓTICA (5%)
    const frequenciaCaotica = this.reduzirAvancado(
      Math.floor(Math.random() * 888)
    );
    
    // FUSÃO DIMENSIONAL
    const componentes = {
      temporal: parseInt(frequenciaBase.toString().replace('│', '0')),
      espacial: parseInt(frequenciaEspacial.toString().replace('│', '0')),
      lunar: parseInt(frequenciaLunar.toString().replace('│', '0')),
      pessoal: parseInt(frequenciaPessoal.toString().replace('│', '0')),
      quantica: parseInt(frequenciaQuantica.toString().replace('│', '0')),
      caotica: parseInt(frequenciaCaotica.toString().replace('│', '0'))
    };
    
    // Cálculo ponderado
    let ressonanciaFinal = 0;
    for (const [dim, peso] of Object.entries(this.dimensions)) {
      ressonanciaFinal += componentes[dim] * peso;
    }
    
    const resultado = Math.round(ressonanciaFinal);
    
    return {
      valor: this.reduzirAvancado(resultado),
      componentes,
      raw: ressonanciaFinal,
      timestamp: agora.getTime(),
      coerencia: this.calcularCoerencia(componentes)
    };
  }
  
  calcularFaseLunar(data) {
    const LUNAR_CYCLE = 29.530588853;
    const luaNovaConhecida = new Date(2000, 0, 6, 18, 14, 0);
    const diferenca = data - luaNovaConhecida;
    const dias = diferenca / (1000 * 60 * 60 * 24);
    const fase = (dias % LUNAR_CYCLE) / LUNAR_CYCLE;
    
    // Retorna valor entre 0 e 100
    return Math.floor(fase * 100);
  }
  
  gerarFrequenciaQuantica() {
    // Simulação de medida quântica
    const estados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const amplitudes = estados.map(() => Math.random());
    const somaAmplitudes = amplitudes.reduce((a, b) => a + b, 0);
    const probabilidades = amplitudes.map(a => a / somaAmplitudes);
    
    // Colapso da função de onda
    let random = Math.random();
    let soma = 0;
    for (let i = 0; i < probabilidades.length; i++) {
      soma += probabilidades[i];
      if (random <= soma) {
        return estados[i];
      }
    }
    
    return 0;
  }
  
  calcularCoerencia(componentes) {
    // Medida de alinhamento entre dimensões (0-100%)
    const valores = Object.values(componentes);
    const media = valores.reduce((a, b) => a + b, 0) / valores.length;
    const variancia = valores.reduce((a, b) => a + Math.pow(b - media, 2), 0) / valores.length;
    const desvioPadrao = Math.sqrt(variancia);
    
    // Coerência é inversamente proporcional ao desvio padrão
    const coerencia = Math.max(0, 100 - (desvioPadrao * 10));
    return Math.round(coerencia);
  }
  
  // =========== FÍSICA QUÂNTICA ===========
  
  calcularFuncaoDeOnda(tempo, frequencia) {
    // Ψ(t) = A * e^(iωt)
    const amplitude = 1;
    const omega = 2 * Math.PI * frequencia / 60; // Normalizado para minutos
    const parteReal = amplitude * Math.cos(omega * tempo);
    const parteImaginaria = amplitude * Math.sin(omega * tempo);
    
    return {
      real: parteReal,
      imag: parteImaginaria,
      magnitude: Math.sqrt(parteReal * parteReal + parteImaginaria * parteImaginaria),
      fase: Math.atan2(parteImaginaria, parteReal)
    };
  }
  
  calcularEntrelacamento(angulo1, angulo2) {
    // Correlação quântica: E = cos²(θ₁ - θ₂)
    const diferenca = Math.abs(angulo1 - angulo2) * Math.PI / 180;
    const correlacao = Math.pow(Math.cos(diferenca), 2);
    
    // Adicionar ruído quântico
    const ruido = (Math.random() - 0.5) * 0.1;
    return Math.max(0, Math.min(1, correlacao + ruido));
  }
  
  calcularIncerteza(frequencia) {
    // ΔE·Δt ≥ ħ/2
    const hbar = this.physics.planckConstant / (2 * Math.PI);
    const deltaT = 1 / (frequencia || 1);
    const deltaE = hbar / (2 * deltaT);
    
    return {
      tempo: deltaT,
      energia: deltaE,
      produto: deltaE * deltaT
    };
  }
  
  gerarEstadoQuantico() {
    // |ψ⟩ = α|0⟩ + β|1⟩
    const alpha = Math.random();
    const beta = Math.sqrt(1 - alpha * alpha);
    
    return {
      alpha: alpha,
      beta: beta,
      probabilidade0: alpha * alpha,
      probabilidade1: beta * beta,
      fase: Math.atan2(beta, alpha)
    };
  }
  
  // =========== SINCRONICIDADE ===========
  
  analisarSincronicidade(eventos) {
    if (eventos.length < 3) return { indice: 0, padroes: [] };
    
    const padroes = this.detectarPadroes(eventos);
    const significado = this.avaliarSignificado(padroes);
    const relevancia = this.calcularRelevancia(eventos);
    
    // Fórmula de sincronicidade: S = (P × M × R) / N
    const indice = (padroes.length * significado * relevancia) / eventos.length;
    
    return {
      indice: Math.min(1, indice),
      padroes: padroes.slice(0, 5), // Top 5 padrões
      significado,
      relevancia
    };
  }
  
  detectarPadroes(eventos) {
    const padroes = [];
    
    // Padrões numéricos
    const numeros = eventos.map(e => e.valor || 0);
    const sequencias = this.detectarSequencias(numeros);
    padroes.push(...sequencias);
    
    // Padrões temporais
    const tempos = eventos.map(e => e.timestamp || 0);
    const ciclos = this.detectarCiclos(tempos);
    padroes.push(...ciclos);
    
    // Padrões de significado
    const significados = eventos.map(e => e.categoria || '');
    const repeticoes = this.detectarRepeticoes(significados);
    padroes.push(...repeticoes);
    
    return padroes.sort((a, b) => b.forca - a.forca);
  }
  
  detectarSequencias(numeros) {
    const padroes = [];
    
    // Verificar sequências consecutivas
    for (let i = 0; i < numeros.length - 2; i++) {
      const diff1 = numeros[i + 1] - numeros[i];
      const diff2 = numeros[i + 2] - numeros[i + 1];
      
      if (diff1 === diff2 && Math.abs(diff1) <= 3) {
        padroes.push({
          tipo: 'sequencia_numerica',
          descricao: `Sequência ${diff1 > 0 ? 'crescente' : 'decrescente'} de ${Math.abs(diff1)}`,
          forca: 0.7 + Math.random() * 0.3,
          inicio: i,
          comprimento: 3
        });
      }
    }
    
    // Verificar números repetidos
    const contagem = {};
    numeros.forEach(n => {
      contagem[n] = (contagem[n] || 0) + 1;
    });
    
    Object.entries(contagem).forEach(([numero, count]) => {
      if (count >= 3) {
        padroes.push({
          tipo: 'repeticao_numerica',
          descricao: `Número ${numero} aparece ${count} vezes`,
          forca: 0.5 + (count / numeros.length),
          numero: parseInt(numero),
          frequencia: count
        });
      }
    });
    
    return padroes;
  }
  
  detectarCiclos(tempos) {
    const padroes = [];
    if (tempos.length < 4) return padroes;
    
    const diferencas = [];
    for (let i = 1; i < tempos.length; i++) {
      diferencas.push(tempos[i] - tempos[i - 1]);
    }
    
    // Agrupar diferenças similares
    const grupos = {};
    diferencas.forEach((diff, idx) => {
      const chave = Math.round(diff / 1000); // Agrupar por segundo
      if (!grupos[chave]) grupos[chave] = [];
      grupos[chave].push(idx);
    });
    
    Object.entries(grupos).forEach(([intervalo, indices]) => {
      if (indices.length >= 2) {
        const segundos = parseInt(intervalo);
        padroes.push({
          tipo: 'ciclo_temporal',
          descricao: `Ciclo de ${segundos} segundos`,
          forca: 0.6 + (indices.length / diferencas.length),
          intervalo: segundos * 1000,
          ocorrencias: indices.length
        });
      }
    });
    
    return padroes;
  }
  
  detectarRepeticoes(significados) {
    const padroes = [];
    const contagem = {};
    
    significados.forEach(sig => {
      if (sig) {
        contagem[sig] = (contagem[sig] || 0) + 1;
      }
    });
    
    Object.entries(contagem).forEach(([categoria, count]) => {
      if (count >= 2) {
        padroes.push({
          tipo: 'repeticao_categoria',
          descricao: `Categoria "${categoria}" recorrente`,
          forca: 0.4 + (count / significados.length),
          categoria,
          frequencia: count
        });
      }
    });
    
    return padroes;
  }
  
  avaliarSignificado(padroes) {
    if (padroes.length === 0) return 0.1;
    
    const forcas = padroes.map(p => p.forca);
    const media = forcas.reduce((a, b) => a + b, 0) / forcas.length;
    
    // Ajustar pela complexidade dos padrões
    const complexidade = padroes.filter(p => 
      p.tipo.includes('sequencia') || p.tipo.includes('ciclo')
    ).length;
    
    return Math.min(1, media * (1 + complexidade * 0.2));
  }
  
  calcularRelevancia(eventos) {
    // Relevância baseada na recência e frequência
    if (eventos.length === 0) return 0.1;
    
    const agora = Date.now();
    const recentes = eventos.filter(e => 
      agora - e.timestamp < 5 * 60 * 1000 // Últimos 5 minutos
    ).length;
    
    return Math.min(1, recentes / eventos.length * 2);
  }
  
  // =========== GRAMÁTICA QUÂNTICA ===========
  
  gerarFraseQuantica(hora, minuto, segundo) {
    const sujeito = this.gramatica.sujeitos[hora % this.gramatica.sujeitos.length];
    const verbo = this.gramatica.verbos[minuto % this.gramatica.verbos.length];
    const complemento = this.gramatica.complementos[segundo % this.gramatica.complementos.length];
    const adverbio = Math.random() > 0.7 
      ? this.gramatica.adverbios[Math.floor(Math.random() * this.gramatica.adverbios.length)]
      : '';
    
    return `${sujeito} ${verbo} ${complemento} ${adverbio}`.trim();
  }
  
  // =========== UTILITÁRIOS ===========
  
  logSistema(mensagem, nivel = 'info') {
    const timestamp = new Date().toLocaleTimeString('pt-PT', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const entrada = {
      timestamp,
      mensagem,
      nivel,
      time: Date.now()
    };
    
    this.history.states.push(entrada);
    
    // Manter apenas os últimos 50 logs
    if (this.history.states.length > 50) {
      this.history.states.shift();
    }
    
    return entrada;
  }
  
  atualizarHistorico(estado) {
    this.history.frequencies.push({
      valor: estado.valor,
      componentes: estado.componentes,
      timestamp: estado.timestamp,
      coerencia: estado.coerencia
    });
    
    // Manter apenas os últimos 100 registros
    if (this.history.frequencies.length > 100) {
      this.history.frequencies.shift();
    }
    
    // Análise periódica de sincronicidade
    if (this.history.frequencies.length % 10 === 0) {
      const analise = this.analisarSincronicidade(this.history.frequencies.slice(-20));
      this.synchronicity.index = analise.indice;
      this.synchronicity.patterns = new Map(
        analise.padroes.map(p => [p.tipo + p.descricao, p])
      );
      this.synchronicity.lastAnalysis = Date.now();
      
      this.logSistema(
        `Análise de sincronicidade: ${(analise.indice * 100).toFixed(1)}%`,
        'quantum'
      );
    }
  }
}

// ============================================
// SISTEMA PRINCIPAL
// ============================================

class AlquimiaDoSistema {
  constructor() {
    this.engine = new QuantumEngine();
    this.estadoAtual = null;
    this.inicio = Date.now();
    this.processamentos = 0;
    this.animacaoAtiva = true;
    
    // Referências DOM
    this.elementos = {};
    this.canvas = {};
    this.ctx = {};
    
    // Configuração
    this.config = {
      atualizacaoMS: 100, // 10 FPS para suavidade
      historicoGrafico: 60,
      mostrarLogs: true
    };
    
    this.inicializar();
  }
  
  inicializar() {
    // Esconder loader
    setTimeout(() => {
      const loader = document.getElementById('quantumLoader');
      if (loader) loader.classList.add('hidden');
      setTimeout(() => loader.style.display = 'none', 1000);
    }, 1500);
    
    // Coletar referências DOM
    this.coletarElementos();
    
    // Inicializar canvas
    this.inicializarCanvas();
    
    // Configurar eventos
    this.configurarEventos();
    
    // Iniciar loop principal
    this.logSistema('Sistema multidimensional inicializado', 'success');
    this.atualizar();
    
    // Iniciar animações secundárias
    this.iniciarAnimacoes();
  }
  
  coletarElementos() {
    // Elementos principais
    this.elementos = {
      // Menu
      menuIcon: document.getElementById('menuIcon'),
      menu: document.getElementById('menu'),
      menuSearch: document.getElementById('menuSearch'),
      menuItems: document.getElementById('menuItems'),
      categoryBtns: document.querySelectorAll('.category-btn'),
      
      // Display temporal
      digitalClock: document.getElementById('digital-clock'),
      vibrationTag: document.getElementById('vibration-tag'),
      primaryFrequency: document.getElementById('primaryFrequency'),
      frequencyType: document.getElementById('frequencyType'),
      
      // Dimensões
      dimTemporal: document.getElementById('dimTemporal'),
      dimSpatial: document.getElementById('dimSpatial'),
      dimLunar: document.getElementById('dimLunar'),
      dimQuantum: document.getElementById('dimQuantum'),
      
      // Insights
      poeticVerse: document.getElementById('poetic-verse'),
      author: document.getElementById('author'),
      interpretationCategory: document.getElementById('interpretationCategory'),
      synchronicityIndex: document.getElementById('synchronicityIndex'),
      refreshInsight: document.getElementById('refreshInsight'),
      
      // Quântico
      stateVector: document.getElementById('stateVector'),
      probBar0: document.getElementById('probBar0'),
      probBar1: document.getElementById('probBar1'),
      superpositionIndicator: document.getElementById('superpositionIndicator'),
      
      // Conhecimento
      scienceText: document.getElementById('science-text'),
      grammarText: document.getElementById('grammar-text'),
      pedagogyText: document.getElementById('pedagogy-text'),
      grammarSubject: document.getElementById('grammarSubject'),
      grammarVerb: document.getElementById('grammarVerb'),
      grammarComplexity: document.getElementById('grammarComplexity'),
      
      // Progresso
      layerCognitive: document.getElementById('layerCognitive'),
      layerEmotional: document.getElementById('layerEmotional'),
      layerSpiritual: document.getElementById('layerSpiritual'),
      retentionRate: document.getElementById('retentionRate'),
      insightRate: document.getElementById('insightRate'),
      integrationRate: document.getElementById('integrationRate'),
      
      // Analytics
      coherenceScore: document.getElementById('coherenceScore'),
      coherenceValue: document.getElementById('coherenceValue'),
      coherenceTrend: document.getElementById('coherenceTrend'),
      entropyTrend: document.getElementById('entropyTrend'),
      resonanceTrend: document.getElementById('resonanceTrend'),
      systemLogs: document.getElementById('systemLogs'),
      clearLogs: document.getElementById('clearLogs'),
      
      // Sincronicidade
      jungIndex: document.getElementById('jungIndex'),
      jungIndexFill: document.getElementById('jungIndexFill'),
      meaningfulCoincidences: document.getElementById('meaningfulCoincidences'),
      logCoincidence: document.getElementById('logCoincidence'),
      patternsList: document.getElementById('patternsList'),
      analyzePatterns: document.getElementById('analyzePatterns'),
      
      // Footer
      uptime: document.getElementById('uptime'),
      processCount: document.getElementById('processCount'),
      quantumMemory: document.getElementById('quantumMemory'),
      showCredits: document.getElementById('showCredits'),
      resetSystem: document.getElementById('resetSystem'),
      closeCredits: document.getElementById('closeCredits'),
      creditsModal: document.getElementById('creditsModal')
    };
  }
  
  inicializarCanvas() {
    // Canvas para gráficos
    const entropyCanvas = document.getElementById('entropyCanvas');
    const waveCanvas = document.getElementById('waveCanvas');
    
    if (entropyCanvas) {
      entropyCanvas.width = entropyCanvas.offsetWidth;
      entropyCanvas.height = entropyCanvas.offsetHeight;
      this.ctx.entropy = entropyCanvas.getContext('2d');
    }
    
    if (waveCanvas) {
      waveCanvas.width = waveCanvas.offsetWidth;
      waveCanvas.height = waveCanvas.offsetHeight;
      this.ctx.wave = waveCanvas.getContext('2d');
    }
  }
  
  configurarEventos() {
    // Menu
    if (this.elementos.menuIcon) {
      this.elementos.menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        this.elementos.menu.classList.toggle('active');
        this.elementos.menuIcon.classList.toggle('active');
        this.elementos.menuIcon.setAttribute('aria-expanded', 
          this.elementos.menu.classList.contains('active')
        );
      });
    }
    
    document.addEventListener('click', (e) => {
      if (this.elementos.menu && this.elementos.menuIcon) {
        if (!this.elementos.menu.contains(e.target) && 
            !this.elementos.menuIcon.contains(e.target)) {
          this.elementos.menu.classList.remove('active');
          this.elementos.menuIcon.classList.remove('active');
          this.elementos.menuIcon.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    // Busca no menu
    if (this.elementos.menuSearch) {
      this.elementos.menuSearch.addEventListener('input', (e) => {
        this.filtrarMenu(e.target.value.toLowerCase());
      });
    }
    
    // Categorias do menu
    if (this.elementos.categoryBtns) {
      this.elementos.categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const categoria = e.target.dataset.category;
          this.filtrarPorCategoria(categoria);
          
          // Atualizar botões ativos
          this.elementos.categoryBtns.forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
        });
      });
    }
    
    // Refresh insight
    if (this.elementos.refreshInsight) {
      this.elementos.refreshInsight.addEventListener('click', () => {
        this.gerarInsightForcado();
      });
    }
    
    // Log de coincidência
    if (this.elementos.logCoincidence) {
      this.elementos.logCoincidence.addEventListener('click', () => {
        this.registrarCoincidencia();
      });
    }
    
    // Análise de padrões
    if (this.elementos.analyzePatterns) {
      this.elementos.analyzePatterns.addEventListener('click', () => {
        this.analisarPadroesDetalhado();
      });
    }
    
    // Limpar logs
    if (this.elementos.clearLogs) {
      this.elementos.clearLogs.addEventListener('click', () => {
        this.limparLogs();
      });
    }
    
    // Créditos
    if (this.elementos.showCredits) {
      this.elementos.showCredits.addEventListener('click', () => {
        this.elementos.creditsModal.classList.add('active');
      });
    }
    
    if (this.elementos.closeCredits) {
      this.elementos.closeCredits.addEventListener('click', () => {
        this.elementos.creditsModal.classList.remove('active');
      });
    }
    
    // Reset sistema
    if (this.elementos.resetSystem) {
      this.elementos.resetSystem.addEventListener('click', () => {
        if (confirm('Reiniciar o sistema quântico? Todo o histórico será perdido.')) {
          this.reiniciarSistema();
        }
      });
    }
    
    // Collapse panels
    const collapseLeft = document.getElementById('collapseLeft');
    const collapseRight = document.getElementById('collapseRight');
    
    if (collapseLeft) {
      collapseLeft.addEventListener('click', () => {
        document.querySelector('.quantum-panel').classList.toggle('collapsed');
      });
    }
    
    if (collapseRight) {
      collapseRight.addEventListener('click', () => {
        document.querySelector('.sync-panel').classList.toggle('collapsed');
      });
    }
    
    // Redimensionamento
    window.addEventListener('resize', () => {
      this.inicializarCanvas();
    });
  }
  
  // =========== LOOP PRINCIPAL ===========
  
  atualizar() {
    if (!this.animacaoAtiva) return;
    
    this.processamentos++;
    
    // Calcular estado atual
    this.estadoAtual = this.engine.calcularRessonanciaMultidimensional();
    this.engine.atualizarHistorico(this.estadoAtual);
    
    // Atualizar UI
    this.atualizarInterface();
    this.atualizarGraficos();
    this.atualizarLogs();
    this.atualizarStatus();
    
    // Agendar próximo frame
    setTimeout(() => this.atualizar(), this.config.atualizacaoMS);
  }
  
  atualizarInterface() {
    const agora = new Date();
    const estado = this.estadoAtual;
    const data = this.engine.data[parseInt(estado.valor.toString().replace('│', '0'))] || this.engine.data[0];
    
    // Relógio digital
    if (this.elementos.digitalClock) {
      const horas = agora.getHours().toString().padStart(2, '0');
      const minutos = agora.getMinutes().toString().padStart(2, '0');
      const segundos = agora.getSeconds().toString().padStart(2, '0');
      const milissegundos = agora.getMilliseconds().toString().padStart(3, '0');
      this.elementos.digitalClock.textContent = `${horas}:${minutos}:${segundos}.${milissegundos}`;
    }
    
    // Frequência primária
    if (this.elementos.primaryFrequency) {
      this.elementos.primaryFrequency.textContent = estado.valor.toString();
    }
    
    if (this.elementos.frequencyType) {
      const tipo = estado.valor.toString().includes('│') ? 'Superposição Quântica' : 'Estado Colapsado';
      this.elementos.frequencyType.textContent = tipo;
    }
    
    // Dimensões
    if (this.elementos.dimTemporal) {
      this.elementos.dimTemporal.textContent = estado.componentes.temporal;
    }
    if (this.elementos.dimSpatial) {
      this.elementos.dimSpatial.textContent = estado.componentes.espacial;
    }
    if (this.elementos.dimLunar) {
      this.elementos.dimLunar.textContent = estado.componentes.lunar;
    }
    if (this.elementos.dimQuantum) {
      this.elementos.dimQuantum.textContent = estado.componentes.quantica;
    }
    
    // Insights poéticos
    if (this.elementos.poeticVerse) {
      this.elementos.poeticVerse.textContent = `"${data.verso}"`;
    }
    if (this.elementos.author) {
      this.elementos.author.textContent = `— ${data.autor}`;
    }
    if (this.elementos.interpretationCategory) {
      this.elementos.interpretationCategory.textContent = data.categoria || 'Universal';
    }
    
    // Sincronicidade
    if (this.elementos.synchronicityIndex) {
      const syncPercent = (this.engine.synchronicity.index * 100).toFixed(1);
      this.elementos.synchronicityIndex.textContent = `Sincronicidade: ${syncPercent}%`;
    }
    
    // Estado quântico
    if (this.elementos.stateVector) {
      const estadoQuantico = this.engine.gerarEstadoQuantico();
      const alpha = estadoQuantico.alpha.toFixed(2);
      const beta = estadoQuantico.beta.toFixed(2);
      this.elementos.stateVector.textContent = `${alpha}|0⟩ + ${beta}|1⟩`;
      
      // Atualizar barras de probabilidade
      if (this.elementos.probBar0) {
        const prob0 = (estadoQuantico.probabilidade0 * 100).toFixed(0);
        this.elementos.probBar0.style.setProperty('--prob-width', `${prob0}%`);
        this.elementos.probBar0.querySelector('.prob-value').textContent = `${prob0}%`;
      }
      
      if (this.elementos.probBar1) {
        const prob1 = (estadoQuantico.probabilidade1 * 100).toFixed(0);
        this.elementos.probBar1.style.setProperty('--prob-width', `${prob1}%`);
        this.elementos.probBar1.querySelector('.prob-value').textContent = `${prob1}%`;
      }
    }
    
    // Conhecimento
    if (this.elementos.scienceText) {
      this.elementos.scienceText.textContent = `${data.psic} | ${data.ciencia}`;
    }
    
    if (this.elementos.pedagogyText) {
      this.elementos.pedagogyText.textContent = data.pedag;
    }
    
    // Gramática quântica
    if (this.elementos.grammarText) {
      const frase = this.engine.gerarFraseQuantica(
        agora.getHours(),
        agora.getMinutes(),
        agora.getSeconds()
      );
      this.elementos.grammarText.textContent = frase;
      
      // Atualizar estatísticas gramaticais
      const palavras = frase.split(' ');
      if (palavras.length >= 3) {
        if (this.elementos.grammarSubject) {
          this.elementos.grammarSubject.textContent = palavras[0];
        }
        if (this.elementos.grammarVerb) {
          this.elementos.grammarVerb.textContent = palavras[1];
        }
        if (this.elementos.grammarComplexity) {
          this.elementos.grammarComplexity.textContent = 
            palavras.length > 5 ? 'Alta' : palavras.length > 3 ? 'Média' : 'Baixa';
        }
      }
    }
    
    // Progresso pedagógico
    if (this.elementos.layerCognitive) {
      const cognitive = 30 + (estado.componentes.temporal * 0.7);
      this.elementos.layerCognitive.style.setProperty('--fill-width', `${cognitive}%`);
    }
    if (this.elementos.layerEmotional) {
      const emotional = 40 + (estado.componentes.lunar * 0.6);
      this.elementos.layerEmotional.style.setProperty('--fill-width', `${emotional}%`);
    }
    if (this.elementos.layerSpiritual) {
      const spiritual = 20 + (estado.componentes.quantica * 0.8);
      this.elementos.layerSpiritual.style.setProperty('--fill-width', `${spiritual}%`);
    }
    
    // Taxas de aprendizagem
    if (this.elementos.retentionRate) {
      const retention = 60 + (estado.coerencia * 0.4);
      this.elementos.retentionRate.textContent = `${retention.toFixed(0)}%`;
    }
    if (this.elementos.insightRate) {
      const insight = 40 + (estado.componentes.quantica * 0.6);
      this.elementos.insightRate.textContent = `${insight.toFixed(0)}%`;
    }
    if (this.elementos.integrationRate) {
      const integration = 50 + (estado.componentes.pessoal * 0.5);
      this.elementos.integrationRate.textContent = `${integration.toFixed(0)}%`;
    }
    
    // Coerência
    if (this.elementos.coherenceScore) {
      const span = this.elementos.coherenceScore.querySelector('span');
      if (span) span.textContent = `${estado.coerencia}%`;
    }
    
    if (this.elementos.coherenceValue) {
      this.elementos.coherenceValue.textContent = `${estado.coerencia}%`;
    }
    
    // Gauge de coerência
    const gauge = document.getElementById('coherenceGauge');
    if (gauge) {
      gauge.style.setProperty('--gauge-value', `${estado.coerencia}%`);
    }
    
    // Sincronicidade
    if (this.elementos.jungIndex) {
      const jungValue = this.engine.synchronicity.index.toFixed(2);
      this.elementos.jungIndex.textContent = jungValue;
    }
    
    if (this.elementos.jungIndexFill) {
      const jungPercent = this.engine.synchronicity.index * 100;
      this.elementos.jungIndexFill.style.setProperty('--sync-value', `${jungPercent}%`);
    }
    
    if (this.elementos.meaningfulCoincidences) {
      this.elementos.meaningfulCoincidences.textContent = 
        this.engine.synchronicity.meaningfulCoincidences;
    }
    
    // Atualizar relógios analógicos
    this.atualizarRelogios(agora);
    
    // Atualizar animações de onda quântica
    this.atualizarOndasQuanticas(estado);
  }
  
  atualizarRelogios(agora) {
    const h = agora.getHours();
    const m = agora.getMinutes();
    const s = agora.getSeconds();
    
    // Ângulos
    const hDeg = (h % 12 * 30) + (m * 0.5);
    const mDeg = (m * 6) + (s * 0.1);
    const sDeg = (s * 6);
    
    // Ponteiros esquerdos (quânticos)
    const hands = {
      'h-left': hDeg,
      'm-left': mDeg,
      's-left': sDeg,
      'h-right': hDeg,
      'm-right': mDeg,
      's-right': sDeg
    };
    
    for (const [id, deg] of Object.entries(hands)) {
      const el = document.getElementById(id);
      if (el) {
        el.style.transform = `rotate(${deg}deg)`;
      }
    }
    
    // Atualizar marcadores de sincronicidade
    if (this.engine.synchronicity.index > 0.5) {
      const markers = document.querySelectorAll('.sync-marker');
      markers.forEach((marker, i) => {
        const phase = (Date.now() / 1000) + (i * 0.5);
        const intensity = 0.5 + 0.5 * Math.sin(phase);
        marker.style.strokeOpacity = intensity.toString();
        marker.style.strokeWidth = (1 + intensity).toString();
      });
    }
    
    // Animar anéis de onda quântica
    const ring1 = document.getElementById('waveRing1');
    const ring2 = document.getElementById('waveRing2');
    
    if (ring1 && ring2) {
      const phase = Date.now() / 1000;
      const scale1 = 1 + 0.2 * Math.sin(phase);
      const scale2 = 1 + 0.2 * Math.sin(phase + Math.PI/2);
      
      ring1.style.transform = `scale(${scale1})`;
      ring2.style.transform = `scale(${scale2})`;
    }
  }
  
  atualizarOndasQuanticas(estado) {
    // Atualizar display de onda
    const waveDisplay = document.getElementById('waveDisplay');
    if (waveDisplay) {
      const phase = Date.now() / 500;
      const opacity = 0.3 + 0.2 * Math.sin(phase);
      waveDisplay.style.opacity = opacity.toString();
    }
    
    // Atualizar valor da função de onda
    const waveValue = document.getElementById('waveValue');
    if (waveValue) {
      const wave = this.engine.calcularFuncaoDeOnda(
        Date.now() / 1000,
        estado.componentes.temporal
      );
      waveValue.textContent = wave.magnitude.toFixed(2);
    }
    
    // Atualizar entrelaçamento
    const entanglementFill = document.getElementById('entanglementFill');
    const entanglementValue = document.getElementById('entanglementValue');
    
    if (entanglementFill && entanglementValue) {
      const entanglement = this.engine.calcularEntrelacamento(
        estado.componentes.temporal,
        estado.componentes.quantica
      );
      const percent = (entanglement * 100).toFixed(0);
      
      entanglementFill.style.setProperty('--entanglement-value', `${percent}%`);
      entanglementValue.textContent = `${percent}%`;
    }
  }
  
  atualizarGraficos() {
    const historico = this.engine.history.frequencies;
    if (historico.length < 2) return;
    
    // Gráfico de entropia
    if (this.ctx.entropy) {
      const canvas = this.ctx.entropy.canvas;
      const ctx = this.ctx.entropy;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar eixo
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      
      // Desenhar linha de entropia
      const pontos = historico.slice(-this.config.historicoGrafico);
      const espacamento = canvas.width / (pontos.length - 1);
      
      ctx.strokeStyle = '#FF006E';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      pontos.forEach((ponto, i) => {
        const x = i * espacamento;
        const y = canvas.height - (ponto.coerencia * canvas.height / 100);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();
      
      // Preenchimento
      ctx.fillStyle = 'rgba(255, 0, 110, 0.1)';
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fill();
    }
    
    // Gráfico de onda quântica
    if (this.ctx.wave) {
      const canvas = this.ctx.wave.canvas;
      const ctx = this.ctx.wave;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar função de onda
      const amplitude = canvas.height / 3;
      const frequencia = 0.05;
      const deslocamento = Date.now() / 1000;
      
      ctx.strokeStyle = '#00B4D8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let x = 0; x < canvas.width; x++) {
        const progresso = x / canvas.width;
        const y = amplitude * Math.sin(progresso * Math.PI * 2 * frequencia + deslocamento) + canvas.height / 2;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
      
      // Adicionar pontos quânticos
      ctx.fillStyle = '#9D4EDD';
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width;
        const y = amplitude * Math.sin(x / canvas.width * Math.PI * 2 * frequencia + deslocamento) + canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  
  atualizarLogs() {
    if (!this.elementos.systemLogs || !this.config.mostrarLogs) return;
    
    const logs = this.engine.history.states.slice(-5);
    this.elementos.systemLogs.innerHTML = '';
    
    logs.forEach(log => {
      const div = document.createElement('div');
      div.className = `log-entry`;
      div.setAttribute('data-level', log.nivel);
      div.textContent = `[${log.timestamp}] ${log.mensagem}`;
      this.elementos.systemLogs.appendChild(div);
    });
  }
  
  atualizarStatus() {
    // Uptime
    if (this.elementos.uptime) {
      const segundos = Math.floor((Date.now() - this.inicio) / 1000);
      const horas = Math.floor(segundos / 3600).toString().padStart(2, '0');
      const minutos = Math.floor((segundos % 3600) / 60).toString().padStart(2, '0');
      const segs = (segundos % 60).toString().padStart(2, '0');
      this.elementos.uptime.textContent = `${horas}:${minutos}:${segs}`;
    }
    
    // Contagem de processamentos
    if (this.elementos.processCount) {
      this.elementos.processCount.textContent = this.processamentos;
    }
    
    // Memória quântica
    if (this.elementos.quantumMemory) {
      const memory = 
        this.engine.history.frequencies.length * 0.1 +
        this.engine.history.states.length * 0.05;
      this.elementos.quantumMemory.textContent = `${memory.toFixed(1)} MB`;
    }
    
    // Tendências
    if (this.elementos.coherenceTrend) {
      const historico = this.engine.history.frequencies;
      if (historico.length >= 2) {
        const atual = historico[historico.length - 1].coerencia;
        const anterior = historico[historico.length - 2].coerencia;
        this.elementos.coherenceTrend.textContent = 
          atual > anterior ? '↗' : atual < anterior ? '↘' : '→';
      }
    }
  }
  
  // =========== FUNÇÕES DE INTERAÇÃO ===========
  
  filtrarMenu(termo) {
    if (!this.elementos.menuItems) return;
    
    const items = this.elementos.menuItems.querySelectorAll('li');
    items.forEach(item => {
      const texto = item.textContent.toLowerCase();
      item.style.display = texto.includes(termo) ? 'block' : 'none';
    });
  }
  
  filtrarPorCategoria(categoria) {
    if (!this.elementos.menuItems || categoria === 'all') {
      const items = this.elementos.menuItems.querySelectorAll('li');
      items.forEach(item => item.style.display = 'block');
      return;
    }
    
    const items = this.elementos.menuItems.querySelectorAll('li');
    items.forEach(item => {
      const itemCategoria = item.dataset.category;
      item.style.display = itemCategoria === categoria ? 'block' : 'none';
    });
  }
  
  gerarInsightForcado() {
    const agora = new Date();
    const segundos = agora.getSeconds();
    const novoNumero = (segundos * 7) % 44;
    const data = this.engine.data[novoNumero] || this.engine.data[0];
    
    if (this.elementos.poeticVerse) {
      this.elementos.poeticVerse.textContent = `"${data.verso}"`;
    }
    if (this.elementos.author) {
      this.elementos.author.textContent = `— ${data.autor}`;
    }
    
    this.logSistema('Insight poético regenerado', 'info');
  }
  
  registrarCoincidencia() {
    this.engine.synchronicity.meaningfulCoincidences++;
    
    // Registrar no histórico
    const agora = new Date();
    const coincidencia = {
      timestamp: agora.getTime(),
      descricao: `Coincidência registrada às ${agora.toLocaleTimeString()}`,
      intensidade: 0.5 + Math.random() * 0.5
    };
    
    this.engine.history.coincidences.push(coincidencia);
    
    // Atualizar UI
    if (this.elementos.meaningfulCoincidences) {
      this.elementos.meaningfulCoincidences.textContent = 
        this.engine.synchronicity.meaningfulCoincidences;
    }
    
    this.logSistema('Coincidência significativa registrada', 'quantum');
    
    // Feedback visual
    const badge = document.querySelector('.dimension-badge[data-dimension="quantum"]');
    if (badge) {
      badge.style.animation = 'none';
      setTimeout(() => {
        badge.style.animation = 'pulse 0.5s';
      }, 10);
    }
  }
  
  analisarPadroesDetalhado() {
    const analise = this.engine.analisarSincronicidade(
      this.engine.history.frequencies.slice(-20)
    );
    
    // Atualizar lista de padrões
    if (this.elementos.patternsList) {
      this.elementos.patternsList.innerHTML = '';
      
      analise.padroes.forEach(padrao => {
        const div = document.createElement('div');
        div.className = 'pattern-item';
        div.innerHTML = `
          <span class="pattern-type">${this.formatarTipoPadrao(padrao.tipo)}</span>
          <span class="pattern-desc">${padrao.descricao}</span>
          <span class="pattern-strength">${(padrao.forca * 100).toFixed(0)}%</span>
        `;
        this.elementos.patternsList.appendChild(div);
      });
      
      if (analise.padroes.length === 0) {
        const div = document.createElement('div');
        div.className = 'pattern-item';
        div.innerHTML = `
          <span class="pattern-type">Nenhum</span>
          <span class="pattern-desc">Sem padrões detectados</span>
          <span class="pattern-strength">0%</span>
        `;
        this.elementos.patternsList.appendChild(div);
      }
    }
    
    this.logSistema(
      `Análise detalhada: ${analise.padroes.length} padrões detectados`,
      'quantum'
    );
  }
  
  formatarTipoPadrao(tipo) {
    const tipos = {
      'sequencia_numerica': 'Numérico',
      'repeticao_numerica': 'Repetição',
      'ciclo_temporal': 'Temporal',
      'repeticao_categoria': 'Categoria'
    };
    
    return tipos[tipo] || tipo;
  }
  
  limparLogs() {
    this.engine.history.states = [];
    this.logSistema('Logs do sistema limpos', 'info');
    
    if (this.elementos.systemLogs) {
      this.elementos.systemLogs.innerHTML = `
        <div class="log-entry" data-level="info">[${new Date().toLocaleTimeString()}] Sistema limpo</div>
      `;
    }
  }
  
  reiniciarSistema() {
    // Recarregar a página (simples)
    window.location.reload();
  }
  
  // =========== ANIMAÇÕES ===========
  
  iniciarAnimacoes() {
    // Animar pontinhos quânticos
    setInterval(() => {
      const dots = document.querySelectorAll('.quantum-dot');
      dots.forEach(dot => {
        const x = 50 + 30 * Math.sin(Date.now() / 1000);
        const y = 50 + 30 * Math.cos(Date.now() / 1000 + Math.PI / 3);
        dot.setAttribute('cx', x);
        dot.setAttribute('cy', y);
      });
    }, 100);
    
    // Animar ondas cerebrais
    setInterval(() => {
      const brainwaves = document.querySelectorAll('.brainwave');
      brainwaves.forEach((wave, i) => {
        const altura = 20 + 60 * Math.sin(Date.now() / 1000 + i * 0.5);
        wave.style.height = `${altura}%`;
      });
    }, 200);
  }
  
  // =========== UTILITÁRIOS ===========
  
  logSistema(mensagem, nivel = 'info') {
    const log = this.engine.logSistema(mensagem, nivel);
    console.log(`[${log.timestamp}] ${mensagem}`);
  }
}

// ============================================
// INICIALIZAÇÃO DO SISTEMA
// ============================================

// Aguardar o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar sistema
  window.sistemaAlquimia = new AlquimiaDoSistema();
  
  // Configurações adicionais
  document.documentElement.style.setProperty('--prob-width', '50%');
  document.documentElement.style.setProperty('--gauge-value', '50%');
  document.documentElement.style.setProperty('--entanglement-value', '50%');
  document.documentElement.style.setProperty('--sync-value', '50%');
  document.documentElement.style.setProperty('--fill-width', '50%');
  
  // Feedback de inicialização
  console.log('🌌 Alquimia do Tempo v2.0 - Sistema Multidimensional');
  console.log('📊 Física Quântica Integrada');
  console.log('🌀 Algoritmo de Sincronicidade Ativo');
  console.log('🧠 Neurociência Aplicada');
  console.log('🚀 Sistema Operacional: OK');
});
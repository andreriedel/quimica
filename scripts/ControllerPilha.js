/**
 * @author André Zambroni Riedel, João Pedro Cunha Guska, Martin Ávila Buitrón, Samuel Damiani Frigotto
 * @RA 2264900, 2264994, 2274183, 2266113
 * @desc código do Controller da página de cálculo de pilha (regras de negócio)
 */

class ControllerPilha {
    constructor() {
        this.formPilhaEl = document.querySelector('#form-pilha'); /* elemento do formulário */

        this.radios1El = document.querySelectorAll('input[type=radio][name=radios1]'); /* elemento do radios button 1 */
        this.radios2El = document.querySelectorAll('input[type=radio][name=radios2]'); /* elemento do radios button 2 */

        this.selectEq1El = document.querySelector('#select-eq-1'); /* elemento do dropdown de seleção 1 */
        this.selectEq2El = document.querySelector('#select-eq-2'); /* elemento do dropdown de seleção 2 */

        this.eqReducao1El = document.querySelector('#eq-reducao-1'); /* elemento da equação de redução 1 */
        this.eqOxidacao1El = document.querySelector('#eq-oxidacao-1'); /* elemento da equação de oxidação 1 */

        this.eqReducao2El = document.querySelector('#eq-reducao-2'); /* elemento da equação de redução 2 */
        this.eqOxidacao2El = document.querySelector('#eq-oxidacao-2'); /* elemento da equação de oxidação 2 */

        this.eqReducoes = ['Li&#8314; (aq) + e&#8315; &#8594; Li (s)', 'K&#8314; (aq) + e&#8315; &#8594; K (s)', 'Ba&#178;&#8314; (aq) + 2e&#8315; &#8594; Ba (s)', 'Sr&#178;&#8314; (aq) + 2e&#8315; &#8594; Sr (s)', 'Ca&#178;&#8314; (aq) + 2e&#8315; &#8594; Ca (s)', 'Na&#8314; (aq) + e&#8315; &#8594; Na (s)', 'Mg&#178;&#8314; (aq) + 2e&#8315; &#8594; Mg (s)', 'Be&#178;&#8314; (aq) + 2e&#8315; &#8594; Be (s)', 'Al&#179;&#8314; (aq) + 3e&#8315; &#8594; Al (s)', 'Mn&#178;&#8314; (aq) + 2e&#8315; &#8594; Mn (s)', '2H&#8322;;O + 2e&#8315; &#8594; H&#8322;; (g) + 2OH&#8315; (aq)', 'Zn&#178;&#8314; (aq) + 2e&#8315; &#8594; Zn (s)', 'Cr&#179;&#8314; (aq) + 3e&#8315; &#8594; Cr (s)', 'Fe&#178;&#8314; (aq) + 2e&#8315; &#8594; Fe (s)', 'Cd&#178;&#8314; (aq) + 2e&#8315; &#8594; Cd (s)', 'PbSO&#8324; (s) + 2e&#8315; &#8594; Pb (s) + SO&#8324;&#178;&#8315; (aq)', 'Co&#178;&#8314; (aq) + 2e&#8315; &#8594; Co (s)', 'Ni&#178;&#8314; (aq) + 2e&#8315; &#8594; Ni (s)', 'Sn&#178;&#8314; (aq) + 2e&#8315; &#8594; Sn (s)', 'Pb&#178;&#8314; (aq) + 2e&#8315; &#8594; Pb (s)', '2H&#8314; (aq) + 2e&#8315; &#8594; H&#8322; (g)', 'Sn&#8308;&#8314; (aq) + 2e&#8315; &#8594; Sn&#178;&#8314; (aq)', 'Cu&#178;&#8314; (aq) + e&#8315; &#8594; Cu&#8314; (aq)', 'SO&#8324;&#178;&#8315; (aq) + 4H&#8314; (aq) + 2e&#8315; &#8594; SO&#178; (g) +2H&#8322;O', 'AgCl (s) + e&#8315; &#8594; Ag (s) + Cl&#8315; (aq)', 'Cu&#178;&#8314; (aq) + 2e&#8315; &#8594; Cu (s)', 'O&#178; (g) + 2H&#8322;O + 4e&#8315; &#8594; 4OH&#8315; (aq)', 'I&#8322; (s) + 2e&#8315; &#8594; 2I&#8315; (aq)', 'MnO&#8324;&#8315; (aq) + 2H&#8322;O + 3e&#8315; &#8594; MnO&#8322; (s) + 4OH&#8315; (aq)', 'O&#8322; (g) + 2H&#8314; (aq) + 2e&#8315; &#8594; H&#8322;O&#8322; (aq)', 'Fe&#179;&#8314; (aq) + e&#8315; &#8594; Fe&#178;&#8314; (aq)', 'Ag&#8314; (aq) + e&#8315; &#8594; Ag (s)', 'Hg&#8322;&#178;&#8314; (aq) + 2e&#8315; &#8594; 2Hg (l)', '2Hg&#178;&#8314; (aq) + 2e&#8315; &#8594; Hg&#8322;&#178;&#8314; (aq)', 'NO&#8323;&#8315; (aq) + 4H&#8314; (aq) + 3e&#8315; &#8594; NO (g) + 2H&#8322;O', 'Br&#8322; (l) + 2e&#8315; &#8594; 2Br&#8315; (aq)', 'O&#8322; (g) + 4H&#8314; (aq) + 4e&#8315; &#8594; 2H&&#8322;O', 'MnO&#8322; (s) + 4H&#8314; (aq) + 2e&#8315; &#8594; Mn&#178;&#8314; (aq) + 2H&#8322;O', 'Cr&#8322;O&#8327;&#178;&#8315; (aq) + 14H&#8314; (aq) + 6e&#8315; &#8594; Cr&#179;&#8314; (aq) + 7H&#8322;O', 'Cl&#8322; (g) + 2e&#8315; &#8594; 2Cl&#8315; (aq)', 'Au&#179;&#8314; (aq) + 3e&#8315; &#8594; Au (s)', 'MnO&#8324;&#8315; (aq) + 8H&#8314; (aq) + 5e&#8315; &#8594; Mn&#178;&#8314; (aq) + H&#8322;O', 'Ce&#8308;&#8314; (aq) + e&#8315; &#8594; Ce&#179;&#8314; (aq) ', 'H&#8322;O&#8322; (aq) + 2H&#8314; (aq) + 2e&#8315; &#8594;2H&#8322;O', 'Co&#179;&#8314; (aq) + e&#8315; &#8594; Co&#178;&#8314; (aq)', 'O&#8323; (g) + 2H&#8314; (aq) + 2e&#8315; &#8594; O&#8322; (g) + H&#8322;O', 'F&#8322; (g) + 2e&#8315; &#8594; 2F&#8315; (aq)'];
        this.eqOxidacoes = ['Li (s) &#8594; Li&#8314; (aq) + e&#8315;', 'K (s) &#8594; K&#8314; (aq) + e&#8315;', 'Ba (s) &#8594; Ba&#178;&#8314; (aq) + 2e&#8315;', 'Sr (s) &#8594; Sr&#178;&#8314; (aq) + 2e&#8315;', 'Ca (s) &#8594; Ca&#178;&#8314; (aq) + 2e&#8315;', 'Na (s) &#8594; Na&#8314; (aq) + e&#8315;', 'Mg (s) &#8594; Mg&#178;&#8314; (aq) + 2e&#8315;', 'Be (s) &#8594; Be&#178;&#8314; (aq) + 2e&#8315;', 'Al (s) &#8594; Al&#179;&#8314; (aq) + 3e&#8315;', 'Mn (s) &#8594; Mn&#178;&#8314; (aq) + 2e&#8315;', 'H&#8322;; (g) + 2OH&#8315; (aq) &#8594; 2H&#8322;;O + 2e&#8315;', 'Zn (s) &#8594; Zn&#178;&#8314; (aq) + 2e&#8315;', 'Cr (s) &#8594; Cr&#179;&#8314; (aq) + 3e&#8315;', 'Fe (s) &#8594; Fe&#178;&#8314; (aq) + 2e&#8315;', 'Cd (s) &#8594; Cd&#178;&#8314; (aq) + 2e&#8315;', 'Pb (s) + SO&#8324;&#178;&#8315; (aq) &#8594; PbSO&#8324; (s) + 2e&#8315;', 'Co (s) &#8594; Co&#178;&#8314; (aq) + 2e&#8315;', 'Ni (s) &#8594; Ni&#178;&#8314; (aq) + 2e&#8315;', 'Sn (s) &#8594; Sn&#178;&#8314; (aq) + 2e&#8315;', 'Pb (s) &#8594; Pb&#178;&#8314; (aq) + 2e&#8315;', 'H&#8322; (g) &#8594; 2H&#8314; (aq) + 2e&#8315;', 'Sn&#178;&#8314; (aq) &#8594; Sn&#8308;&#8314; (aq) + 2e&#8315;', 'Cu&#8314; (aq) &#8594; Cu&#178;&#8314; (aq) + e&#8315;', 'SO&#178; (g) +2H&#8322;O &#8594; SO&#8324;&#178;&#8315; (aq) + 4H&#8314; (aq) + 2e&#8315;', 'Ag (s) + Cl&#8315; (aq) &#8594; AgCl (s) + e&#8315;', 'Cu (s) &#8594; Cu&#178;&#8314; (aq) + 2e&#8315;', '4OH&#8315; (aq) &#8594; O&#178; (g) + 2H&#8322;O + 4e&#8315;', '2I&#8315; (aq) &#8594; I&#8322; (s) + 2e&#8315;', 'MnO&#8322; (s) + 4OH&#8315; (aq) &#8594; MnO&#8324;&#8315; (aq) + 2H&#8322;O + 3e&#8315;', 'H&#8322;O&#8322; (aq) &#8594; O&#8322; (g) + 2H&#8314; (aq) + 2e&#8315;', 'Fe&#178;&#8314; (aq) &#8594; Fe&#179;&#8314; (aq) + e&#8315;', 'Ag (s) &#8594; Ag&#8314; (aq) + e&#8315;', '2Hg (l) &#8594; Hg&#8322;&#178;&#8314; (aq) + 2e&#8315;', 'Hg&#8322;&#178;&#8314; (aq) &#8594; 2Hg&#178;&#8314; (aq) + 2e&#8315;', 'NO (g) + 2H&#8322;O &#8594; NO&#8323;&#8315; (aq) + 4H&#8314; (aq) + 3e&#8315;', '2Br&#8315; (aq) &#8594; Br&#8322; (l) + 2e&#8315;', '2H&&#8322;O &#8594; O&#8322; (g) + 4H&#8314; (aq) + 4e&#8315;', 'Mn&#178;&#8314; (aq) + 2H&#8322;O &#8594; MnO&#8322; (s) + 4H&#8314; (aq) + 2e&#8315;', 'Cr&#179;&#8314; (aq) + 7H&#8322;O &#8594; Cr&#8322;O&#8327;&#178;&#8315; (aq) + 14H&#8314; (aq) + 6e&#8315;', '2Cl&#8315; (aq) &#8594; Cl&#8322; (g) + 2e&#8315;', 'Au (s) &#8594; Au&#179;&#8314; (aq) + 3e&#8315;', 'Mn&#178;&#8314; (aq) + H&#8322;O &#8594; MnO&#8324;&#8315; (aq) + 8H&#8314; (aq) + 5e&#8315;', 'Ce&#179;&#8314; (aq)  &#8594; Ce&#8308;&#8314; (aq) + e&#8315;', 'H&#8322;O &#8594; H&#8322;O&#8322; (aq) + 2H&#8314; (aq) + 2e&#8315;', 'Co&#178;&#8314; (aq) &#8594; Co&#179;&#8314; (aq) + e&#8315;', 'O&#8322; (g) + H&#8322;O &#8594; O&#8323; (g) + 2H&#8314; (aq) + 2e&#8315;', '2F&#8315; (aq) F&#8322; (g) + 2e&#8315;'];
        this.potenciais = ['-3.05', '-2.93', '-2.90', '-2.89', '-2.87', '-2.71', '-2.37', '-1.85', '-1.66', '-1.18', '-0.83', '-0.76', '-0.74', '-0.44', '-0.40', '-0.31', '-0.28', '-0.25', '-0.14', '-0.13', '0', '0.13', '0.15', '0.20', '0.22', '0.34', '0.40', '0.53', '0.59', '0.68', '0.77', '0.80', '0.85', '0.92', '0.96', '1.07', '1.23', '1.23', '1.33', '1.36', '1.50', '1.51', '1.61', '1.77', '1.82', '2.07', '2.87'];

        this.eq1; /* equação 1 formatada de acordo com as informações inseridas pelo usuário */
        this.eq2; /* equação 2 formatada de acordo com as informações inseridas pelo usuário */

        this.pot1;
        this.pot2;

        this.diferencial;

        this.dados = {}; /* objeto contendo os dados do formulário */

        this.diferencialEl = document.querySelector('#diferencial');
        this.catodoEl = document.querySelector('#catodo');
        this.anodoEl = document.querySelector('#anodo');

        this.initialize();
    }

    /* -------------------------------------------------------------------------- */

    changeEq(eqNumber, eqType, eq, pot) {
        if (eqNumber == 1) {
            /* bloco caso a alteração tenha sido na equação 1 */
            if (eqType == 'reducao') {
                /* bloco caso tenha sido selecionado equacao de reducao */
                this.eqReducao1El.children[0].children[0].innerHTML = eq;
                this.eqReducao1El.children[1].children[0].children[1].innerHTML = pot;
                this.eqReducao1El.style.display = 'flex';
                this.eqOxidacao1El.style.display = 'none';
            } else if (eqType == 'oxidacao') {
                /* bloco caso tenha sido selecionado equacao de oxidacao */
                this.eqOxidacao1El.children[0].children[0].innerHTML = eq;
                this.eqOxidacao1El.children[1].children[0].children[1].innerHTML = pot;
                this.eqOxidacao1El.style.display = 'flex';
                this.eqReducao1El.style.display = 'none';
            }
        } else if (eqNumber == 2) {
            /* bloco caso a alteração tenha sido na equação 2 */
            if (eqType == 'reducao') {
                /* bloco caso tenha sido selecionado equacao de reducao */
                this.eqReducao2El.children[0].children[0].innerHTML = eq;
                this.eqReducao2El.children[1].children[0].children[1].innerHTML = pot;
                this.eqReducao2El.style.display = 'flex';
                this.eqOxidacao2El.style.display = 'none';
            } else if (eqType == 'oxidacao') {
                /* bloco caso tenha sido selecionado equacao de oxidacao */
                this.eqOxidacao2El.children[0].children[0].innerHTML = eq;
                this.eqOxidacao2El.children[1].children[0].children[1].innerHTML = pot;
                this.eqOxidacao2El.style.display = 'flex';
                this.eqReducao2El.style.display = 'none';
            }
        }
    }

    /* -------------------------------------------------------------------------- */

    getValues() {
        [...this.formPilhaEl.elements].forEach((field) => {
            /* percorre todos os elementos do formulário */
            if (field.name == 'radios1' || field.name == 'radios2') {
                /* bloco especial para os elementos do tipo radio */
                if (field.checked) {
                    this.dados[field.name] = field.value;
                }
            } else if (field.name !== 'submit') {
                /* adiciona ao objeto os valores inseridos no formulário (menos os valores do botão submit) */
                this.dados[field.name] = field.value;
            }
        });

        this.pot1 = Math.round(eval(this.potenciais[this.dados.selectEq1 - 1]) * 100) / 100;

        if (this.dados.radios1 == 'reducao') {
            this.eq1 = this.eqReducoes[this.dados.selectEq1 - 1];
            this.changeEq(1, 'reducao', this.eq1, this.pot1);
        } else if (this.dados.radios1 == 'oxidacao') {
            this.eq1 = this.eqOxidacoes[this.dados.selectEq1 - 1];
            this.changeEq(1, 'oxidacao', this.eq1, this.pot1 * -1);
        }

        this.pot2 = Math.round(eval(this.potenciais[this.dados.selectEq2 - 1]) * 100) / 100;

        if (this.dados.radios2 == 'reducao') {
            this.eq2 = this.eqReducoes[this.dados.selectEq2 - 1];
            this.changeEq(2, 'reducao', this.eq2, this.pot2);
        } else if (this.dados.radios2 == 'oxidacao') {
            this.eq2 = this.eqOxidacoes[this.dados.selectEq2 - 1];
            this.changeEq(2, 'oxidacao', this.eq2, this.pot2 * -1);
        }
    }

    /* -------------------------------------------------------------------------- */

    calc() {
        console.log(this.pot1);
        console.log(this.pot2);
        if (eval(this.pot1) > eval(this.pot2)) {
            this.diferencial = Math.round((eval(this.pot1) - eval(this.pot2)) * 100) / 100;
            this.diferencialEl.innerHTML = this.diferencial + ' v';
            this.anodoEl.innerHTML = this.eqOxidacoes[eval(this.dados.selectEq2 - 1)];
            this.catodoEl.innerHTML = this.eqReducoes[eval(this.dados.selectEq1 - 1)];
        } else {
            this.diferencial = Math.round((eval(this.pot2) - eval(this.pot1)) * 100) / 100;
            this.diferencialEl.innerHTML = this.diferencial + ' v';
            this.anodoEl.innerHTML = this.eqOxidacoes[eval(this.dados.selectEq1 - 1)];
            this.catodoEl.innerHTML = this.eqReducoes[eval(this.dados.selectEq2 - 1)];
        }
    }

    /* -------------------------------------------------------------------------- */

    initialize() {
        this.formPilhaEl.reset();
        this.formPilhaEl.addEventListener('submit', (event) => {
            /* bloco de ação do evento submit */
            event.preventDefault(); /* reseta as configurações padrão de submit */
            this.getValues(); /* chama método que obtém os dados do formulário */
            this.calc(); /* chama método que faz a conversão mássica */
        });

        /* -------------------------------------------------------------------------- */

        this.radios1El.forEach((radio) => {
            radio.addEventListener('change', () => {
                this.getValues(); /* chama método que obtém os dados do formulário */
            });
        });

        this.selectEq1El.addEventListener('change', () => {
            this.getValues();
        });
        /* -------------------------------------------------------------------------- */

        this.radios2El.forEach((radio) => {
            radio.addEventListener('change', () => {
                this.getValues(); /* chama método que obtém os dados do formulário */
            });
        });

        this.selectEq2El.addEventListener('change', () => {
            this.getValues();
        });
    }
}

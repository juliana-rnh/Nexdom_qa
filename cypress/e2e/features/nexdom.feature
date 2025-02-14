Feature: Explorar o site da Nexdom
    Como um usuário
    Quero acessar o site da Nexdom
    Para encontrar o botão Trabalhe conosco

    Scenario: Validar acesso à página inicial do site
        Given que acesso o site da Nexdom
        Then devo ver o logo da Nexdom
        And devo ver o menu de navegação

    Scenario: Validar acesso ao Trabalhe conosco
        Given que acesso o site da Nexdom
        When desço até o final da tela
        Then devo ver o botão Trabalhe conosco!
        And ele deve possuir o link para o site da Gupy